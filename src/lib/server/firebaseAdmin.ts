import "server-only";

import { cert, getApps, initializeApp, applicationDefault, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage, type Storage } from "firebase-admin/storage";

/**
 * Server-only Firebase Admin SDK access.
 *
 * Every CMS write used to go through `fs.writeFileSync` into `src/data/*.json`
 * and `public/blog-images/`. That works under `next dev` but silently fails in
 * production: Netlify Functions run on a read-only, per-invocation filesystem,
 * so the write throws, the error is swallowed by a `try/catch`, and the route
 * still answers `{ success: true }`. The saved post then 404s because the next
 * request reads the JSON that was baked into the deploy, not the new one.
 *
 * Firestore + Cloud Storage are the durable store. The JSON files survive only
 * as a development fallback for when no service account is configured, so
 * `next dev` keeps working with zero setup.
 *
 * Credentials come from (in order):
 *   1. FIREBASE_SERVICE_ACCOUNT_JSON  - whole service account JSON, newlines allowed
 *   2. FIREBASE_SERVICE_ACCOUNT_EMAIL + FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY
 *   3. Application Default Credentials - set on the host, no env vars needed
 */

const PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
  process.env.FIREBASE_PROJECT_ID ||
  "framecipherweb";

const STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`;

let cachedApp: App | null = null;
let cachedFirestore: Firestore | null = null;
let cachedStorage: Storage | null = null;

function parseServiceAccountJson(): Record<string, unknown> | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    // A single-line env var cannot carry real newlines in a PEM key, so retry
    // with escaped newlines expanded before giving up.
    try {
      return JSON.parse(raw.replace(/\\n/g, "\n"));
    } catch {
      console.warn("FIREBASE_SERVICE_ACCOUNT_JSON is set but is not valid JSON.");
      return null;
    }
  }
}

function buildCredential(): ReturnType<typeof cert> | null {
  const serviceAccount = parseServiceAccountJson();
  if (serviceAccount) {
    return cert({
      projectId: (serviceAccount.project_id as string) || PROJECT_ID,
      clientEmail: serviceAccount.client_email as string,
      privateKey: String(serviceAccount.private_key || "").replace(/\\n/g, "\n"),
    });
  }

  const email = process.env.FIREBASE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (email && privateKey) {
    return cert({
      projectId: PROJECT_ID,
      clientEmail: email,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    });
  }

  return null;
}

/**
 * Application Default Credentials are only worth trying on a Google Cloud
 * runtime. Attempting them during `next build` or on a non-GCP host makes the
 * metadata server probe the network and log a credentials error, so the
 * presence of one of these markers is checked first.
 */
function isGoogleCloudRuntime(): boolean {
  return Boolean(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      process.env.GCLOUD_PROJECT ||
      process.env.GOOGLE_CLOUD_PROJECT ||
      process.env.K_SERVICE ||
      process.env.FUNCTION_TARGET
  );
}

function getAdminApp(): App | null {
  if (cachedApp) return cachedApp;

  // Reuse an app initialised by another module in the same process.
  const existing = getApps();
  if (existing.length > 0) {
    cachedApp = existing[0];
    return cachedApp;
  }

  try {
    const credential = buildCredential();
    if (credential) {
      cachedApp = initializeApp({
        credential,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
      });
    } else if (isGoogleCloudRuntime()) {
      cachedApp = initializeApp({
        credential: applicationDefault(),
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
      });
    } else {
      return null;
    }
  } catch (error: any) {
    console.warn(
      "Firebase Admin SDK is not configured on the server:",
      error?.message || error
    );
    return null;
  }

  return cachedApp;
}

/**
 * Firestore handle, or `null` when no service account is available. Callers must
 * treat `null` as "no durable store" and fall back rather than throwing, so a
 * misconfigured deploy degrades instead of taking the whole site down.
 */
export function getAdminFirestore(): Firestore | null {
  if (cachedFirestore) return cachedFirestore;
  const app = getAdminApp();
  if (!app) return null;
  try {
    cachedFirestore = getFirestore(app);
    return cachedFirestore;
  } catch (error: any) {
    console.warn("Could not initialise Admin Firestore:", error?.message || error);
    return null;
  }
}

export function getAdminStorage(): Storage | null {
  if (cachedStorage) return cachedStorage;
  const app = getAdminApp();
  if (!app) return null;
  try {
    cachedStorage = getStorage(app);
    return cachedStorage;
  } catch (error: any) {
    console.warn("Could not initialise Admin Storage:", error?.message || error);
    return null;
  }
}

/**
 * Guards against a read-only deploy. Called from the write paths so a failed
 * persist surfaces as an error to the admin instead of a silent success.
 */
export function describeMissingAdminConfig(): string {
  return (
    "Server-side Firebase Admin credentials are not configured. Set " +
    "FIREBASE_SERVICE_ACCOUNT_JSON (or FIREBASE_SERVICE_ACCOUNT_EMAIL + " +
    "FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY) as environment variables."
  );
}

/**
 * Firestore rejects `undefined`, and the CMS forms submit optional fields that
 * are left blank. Recursively strip them before writing.
 */
export function stripUndefined<T>(value: T): T {
  if (value === undefined || value === null) return value;
  if (Array.isArray(value)) {
    return value
      .filter((item) => item !== undefined && item !== null)
      .map((item) => stripUndefined(item)) as unknown as T;
  }
  if (typeof value === "object") {
    const clean: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
      if (entry !== undefined) clean[key] = stripUndefined(entry);
    }
    return clean as T;
  }
  return value;
}
