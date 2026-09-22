const { createClient } = require('@supabase/supabase-js');

const DEPOSIT_RANGES = [
  '$10,000 - $50,000',
  '$50,000 - $150,000',
  '$150,000 - $500,000',
  '$500,000+',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let supabase;
function getSupabase() {
  if (!supabase) {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not configured');
    }
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });
  }
  return supabase;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const hasAccount = body.hasAccount === 'yes';
  const accountNumber = typeof body.accountNumber === 'string' ? body.accountNumber.trim() : '';
  const depositAmountRange = typeof body.depositAmount === 'string' ? body.depositAmount.trim() : '';
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';

  if (body.hasAccount !== 'yes' && body.hasAccount !== 'no') {
    return res.status(400).json({ error: 'hasAccount must be "yes" or "no"' });
  }
  if (hasAccount && !accountNumber) {
    return res.status(400).json({ error: 'accountNumber is required when hasAccount is "yes"' });
  }
  if (!DEPOSIT_RANGES.includes(depositAmountRange)) {
    return res.status(400).json({ error: 'Invalid depositAmount' });
  }
  if (!fullName) {
    return res.status(400).json({ error: 'fullName is required' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  if (!phone) {
    return res.status(400).json({ error: 'phone is required' });
  }

  try {
    const db = getSupabase();
    const { data, error } = await db
      .from('vip_applications')
      .insert({
        has_account: hasAccount,
        account_number: hasAccount ? accountNumber : null,
        deposit_amount_range: depositAmountRange,
        full_name: fullName,
        email,
        phone,
      })
      .select('id, created_at')
      .single();

    if (error) throw error;
    return res.status(201).json({ id: data.id, createdAt: data.created_at });
  } catch (err) {
    console.error('vip-application insert failed', err);
    return res.status(500).json({ error: 'Failed to store application' });
  }
};
