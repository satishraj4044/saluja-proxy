export default async function handler(req, res) {
  const allowed = 'https://satishraj4044.github.io';
  const origin = req.headers.origin || '';
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', allowed);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  if (origin !== allowed) return res.status(403).json({ error: 'Access denied' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  res.setHeader('Access-Control-Allow-Origin', allowed);
  const { mobile, otp } = req.body;
  if (!mobile || !otp) return res.status(400).json({ error: 'mobile aur otp required' });
  try {
    const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.FAST2SMS_KEY}&variables_values=${otp}&route=otp&numbers=${mobile}`;
    const response = await fetch(url);
    const data = await response.json();
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: 'OTP send error' });
  }
}
