// Vercel serverless function: receives VIP applications and inserts them into
// Supabase. Env vars (set in Vercel project settings):
//   SUPABASE_URL_VIP              e.g. https://<ref>.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY_VIP server-side only, never exposed to the browser

const DEPOSIT_OPTIONS = [
  '$10,000 - $50,000',
  '$50,000 - $150,000',
  '$150,000 - $500,000',
  '$500,000+'
];

const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { SUPABASE_URL_VIP, SUPABASE_SERVICE_ROLE_KEY_VIP } = process.env;
  if (!SUPABASE_URL_VIP || !SUPABASE_SERVICE_ROLE_KEY_VIP) {
    console.error('Missing SUPABASE_URL_VIP or SUPABASE_SERVICE_ROLE_KEY_VIP');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const hasAccount = body.hasAccount === true;
  const row = {
    has_account: hasAccount,
    account_number: hasAccount ? str(body.accountNumber, 64) : null,
    deposit_amount: str(body.depositAmount, 64),
    full_name: str(body.fullName, 200),
    email: str(body.email, 254),
    phone: str(body.phone, 40)
  };

  const valid =
    row.full_name &&
    row.phone &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email) &&
    DEPOSIT_OPTIONS.includes(row.deposit_amount) &&
    (!hasAccount || row.account_number);
  if (!valid) return res.status(400).json({ error: 'Invalid application' });

  try {
    const r = await fetch(SUPABASE_URL_VIP.replace(/\/$/, '') + '/rest/v1/vip_applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_SERVICE_ROLE_KEY_VIP,
        Authorization: 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY_VIP,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(row)
    });
    if (!r.ok) {
      console.error('Supabase insert failed', r.status, await r.text());
      return res.status(502).json({ error: 'Could not save application' });
    }
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Supabase request error', err);
    return res.status(502).json({ error: 'Could not save application' });
  }
};

function safeParse(s) {
  try { return JSON.parse(s); } catch (e) { return {}; }
}
