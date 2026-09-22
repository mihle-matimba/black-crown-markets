const { Pool } = require('pg');

const DEPOSIT_RANGES = [
  '$10,000 - $50,000',
  '$50,000 - $150,000',
  '$150,000 - $500,000',
  '$500,000+',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let pool;
function getPool() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured');
    }
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
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
    const db = getPool();
    const result = await db.query(
      `INSERT INTO vip_applications
         (has_account, account_number, deposit_amount_range, full_name, email, phone)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, created_at`,
      [hasAccount, hasAccount ? accountNumber : null, depositAmountRange, fullName, email, phone]
    );
    return res.status(201).json({ id: result.rows[0].id, createdAt: result.rows[0].created_at });
  } catch (err) {
    console.error('vip-application insert failed', err);
    return res.status(500).json({ error: 'Failed to store application' });
  }
};
