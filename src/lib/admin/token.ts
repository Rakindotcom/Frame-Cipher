import { ADMIN_FIREBASE_UID } from "./identity";

export const SESSION_COOKIE = "fc_admin_session";
export const SESSION_TTL_SECONDS = 60 * 60;

const CERTS_URL =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

export interface AdminIdentity {
  uid: string;
  email: string;
  name: string;
  role: string;
  exp: number;
}

export interface IdTokenResult {
  success: boolean;
  identity?: AdminIdentity;
  error?: string;
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const withPadding = padded + "=".repeat((4 - (padded.length % 4)) % 4);
  const binary = atob(withPadding);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeSegment(segment: string): any {
  return JSON.parse(new TextDecoder().decode(base64UrlDecode(segment)));
}

export function getFirebaseProjectId(): string {
  return (
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    (process.env.FIREBASE_PROJECT_ID as string) ||
    "framecipherweb"
  );
}

export function getAdminFirebaseUid(): string | null {
  return ADMIN_FIREBASE_UID;
}

function pemToBytes(pem: string): Uint8Array {
  const body = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function readTlv(bytes: Uint8Array, offset: number) {
  if (offset + 2 > bytes.length) return null;
  const tag = bytes[offset];
  let cursor = offset + 1;
  let length = bytes[cursor];
  cursor += 1;

  if (length & 0x80) {
    const lengthByteCount = length & 0x7f;
    if (lengthByteCount === 0 || lengthByteCount > 4) return null;
    if (cursor + lengthByteCount > bytes.length) return null;
    length = 0;
    for (let i = 0; i < lengthByteCount; i += 1) {
      length = (length << 8) | bytes[cursor + i];
    }
    cursor += lengthByteCount;
  }

  const contentStart = cursor;
  const contentEnd = contentStart + length;
  if (contentEnd > bytes.length) return null;

  return { start: offset, tag, contentStart, contentEnd, next: contentEnd };
}

/**
 * Google publishes signing certificates as PEM `CERTIFICATE` blocks, but WebCrypto
 * `importKey("spki", ...)` only accepts a `SubjectPublicKeyInfo` structure. Handing it
 * the whole certificate makes every signature check fail, so the SPKI is extracted from
 * the TBSCertificate first.
 *
 *   Certificate      ::= SEQUENCE { tbsCertificate, signatureAlgorithm, signatureValue }
 *   TBSCertificate   ::= SEQUENCE {
 *     version         [0] EXPLICIT INTEGER OPTIONAL,
 *     serialNumber        INTEGER,
 *     signature           SEQUENCE,
 *     issuer              SEQUENCE,
 *     validity            SEQUENCE,
 *     subject             SEQUENCE,
 *     subjectPublicKeyInfo SEQUENCE,   <-- extracted
 *     ... }
 */
function extractSubjectPublicKeyInfo(certificateDer: Uint8Array): Uint8Array<ArrayBuffer> | null {
  const certificate = readTlv(certificateDer, 0);
  if (!certificate || certificate.tag !== 0x30) return null;

  const tbs = readTlv(certificateDer, certificate.contentStart);
  if (!tbs || tbs.tag !== 0x30) return null;

  let cursor = tbs.contentStart;
  const version = readTlv(certificateDer, cursor);
  if (!version) return null;
  // The version field is `[0] EXPLICIT` and only present on v3 certificates.
  if (version.tag === 0xa0) cursor = version.next;

  // serialNumber, signature, issuer, validity, subject
  for (let field = 0; field < 5; field += 1) {
    const tlv = readTlv(certificateDer, cursor);
    if (!tlv) return null;
    cursor = tlv.next;
  }

  const spki = readTlv(certificateDer, cursor);
  if (!spki || spki.tag !== 0x30) return null;

  // The full TLV (tag + length + content) is returned because that is what
  // WebCrypto expects, not the bare content octets. A copy is made so the result
  // is backed by a plain ArrayBuffer and shares no memory with the certificate.
  return certificateDer.slice(spki.start, spki.contentEnd);
}

let certCache: { fetchedAt: number; certs: Record<string, string> } | null = null;

async function getGoogleCerts(): Promise<Record<string, string>> {
  const now = Date.now();
  if (certCache && now - certCache.fetchedAt < 60 * 60 * 1000) return certCache.certs;

  const res = await fetch(CERTS_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch Google signing certs (${res.status}).`);
  const certs = (await res.json()) as Record<string, string>;
  certCache = { fetchedAt: now, certs };
  return certs;
}

export async function verifyFirebaseIdToken(idToken: string): Promise<IdTokenResult> {
  const projectId = getFirebaseProjectId();
  const parts = idToken.split(".");
  if (parts.length !== 3) return { success: false, error: "Malformed ID token." };

  let header: { alg?: string; kid?: string };
  let claims: Record<string, any>;
  try {
    header = decodeSegment(parts[0]);
    claims = decodeSegment(parts[1]);
  } catch {
    return { success: false, error: "Malformed ID token segments." };
  }

  if (header.alg !== "RS256" || !header.kid) {
    return { success: false, error: "Unsupported ID token signing algorithm." };
  }

  let certs: Record<string, string>;
  try {
    certs = await getGoogleCerts();
  } catch (error: any) {
    return { success: false, error: error?.message || "Could not verify ID token signature." };
  }

  const cert = certs[header.kid];
  if (!cert) {
    certCache = null;
    return { success: false, error: "Unknown ID token signing key." };
  }

  const signedBytes = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
  let valid = false;
  try {
    const spki = extractSubjectPublicKeyInfo(pemToBytes(cert));
    if (!spki) return { success: false, error: "Could not read the ID token signing key." };

    const key = await crypto.subtle.importKey(
      "spki",
      spki,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );
    valid = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      key,
      base64UrlDecode(parts[2]) as unknown as ArrayBuffer,
      signedBytes
    );
  } catch {
    return { success: false, error: "Could not verify ID token signature." };
  }

  if (!valid) return { success: false, error: "Invalid ID token signature." };

  const nowSeconds = Math.floor(Date.now() / 1000);
  if (typeof claims.exp !== "number" || claims.exp <= nowSeconds) {
    return { success: false, error: "ID token has expired." };
  }
  if (claims.aud !== projectId) {
    return { success: false, error: "ID token was issued for a different project." };
  }
  if (claims.iss !== `https://securetoken.google.com/${projectId}`) {
    return { success: false, error: "ID token issuer is not valid." };
  }
  if (!claims.sub) return { success: false, error: "ID token has no subject." };

  const adminUid = getAdminFirebaseUid();
  if (!adminUid || claims.sub !== adminUid) {
    return { success: false, error: "This Firebase account is not authorized for the dashboard." };
  }

  const email = typeof claims.email === "string" ? claims.email.toLowerCase() : "";
  if (!email) {
    return { success: false, error: "ID token has no email address." };
  }
  if (claims.firebase?.sign_in_provider !== "password") {
    return { success: false, error: "Only Firebase email and password sign-in is allowed." };
  }
  return {
    success: true,
    identity: {
      uid: String(claims.sub),
      email,
      name: typeof claims.name === "string" ? claims.name : email,
      role: "admin",
      exp: claims.exp,
    },
  };
}

export async function readSessionValue(
  value: string | undefined | null
): Promise<AdminIdentity | null> {
  if (!value) return null;
  const verified = await verifyFirebaseIdToken(value);
  return verified.identity || null;
}
