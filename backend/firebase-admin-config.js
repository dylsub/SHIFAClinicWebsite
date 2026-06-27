const admin = require("firebase-admin");

function normalizePrivateKey(key) {
  if (!key) return undefined;

  let normalized = key.trim();

  // Strip wrapping quotes from dashboard paste mistakes.
  while (
    (normalized.startsWith('"') && normalized.endsWith('"')) ||
    (normalized.startsWith("'") && normalized.endsWith("'"))
  ) {
    normalized = normalized.slice(1, -1).trim();
  }

  // Convert escaped newlines (common when storing PEM keys in env vars).
  normalized = normalized.replace(/\\n/g, "\n").replace(/\r/g, "");

  return normalized;
}

function getServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    const parsed = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

    if (parsed.private_key) {
      parsed.private_key = normalizePrivateKey(parsed.private_key);
    }

    return parsed;
  }

  return {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  };
}

const serviceAccount = getServiceAccount();

if (!serviceAccount.private_key?.includes("BEGIN PRIVATE KEY")) {
  throw new Error(
    "Firebase private key is missing or malformed. On Render, set FIREBASE_PRIVATE_KEY with literal \\n line breaks, or set FIREBASE_SERVICE_ACCOUNT_JSON to the full service account JSON."
  );
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
