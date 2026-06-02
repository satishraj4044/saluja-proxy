export default function handler(req, res) {
  // Sirf tumhara GitHub Pages domain allow karo
  const allowed = 'https://satishraj4044.github.io';
  const origin = req.headers.origin || '';

  if (origin !== allowed) {
    return res.status(403).json({ error: 'Access denied' });
  }

  res.setHeader('Access-Control-Allow-Origin', allowed);
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.json({
    apiKey:            process.env.FIREBASE_API_KEY,
    authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:       process.env.FIREBASE_DB_URL,
    projectId:         process.env.FIREBASE_PROJECT_ID,
    storageBucket:     process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId:             process.env.FIREBASE_APP_ID
  });
}
