import test from "node:test";
import assert from "node:assert/strict";
import { X509Certificate } from "node:crypto";

// The DER helpers below mirror src/lib/admin/token.ts. They are duplicated rather
// than imported because token.ts reads process.env and performs network calls, and
// this suite must stay offline. The certificate is a real Firebase Auth signing
// certificate captured from
// https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com
// and is kept as a static test vector so the suite never depends on the network.

function readTlv(bytes, offset) {
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

function extractSubjectPublicKeyInfo(certificateDer) {
  const certificate = readTlv(certificateDer, 0);
  if (!certificate || certificate.tag !== 0x30) return null;

  const tbs = readTlv(certificateDer, certificate.contentStart);
  if (!tbs || tbs.tag !== 0x30) return null;

  let cursor = tbs.contentStart;
  const version = readTlv(certificateDer, cursor);
  if (!version) return null;
  if (version.tag === 0xa0) cursor = version.next;

  for (let field = 0; field < 5; field += 1) {
    const tlv = readTlv(certificateDer, cursor);
    if (!tlv) return null;
    cursor = tlv.next;
  }

  const spki = readTlv(certificateDer, cursor);
  if (!spki || spki.tag !== 0x30) return null;

  return certificateDer.subarray(spki.start, spki.contentEnd);
}

function pemToBytes(pem) {
  const body = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  return new Uint8Array(Buffer.from(body, "base64"));
}

const FIREBASE_CERT = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJAPQVm4IqLvDqMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV
BAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTI2
MDUwNDE3NDcyN1oXDTI3MDUwNDE3NDcyN1owMTEvMC0GA1UEAwwmc2VjdXJldG9r
ZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA
A4IBDwAwggEKAoIBAQDbarTg+wH+qOjVtOp2l9eZ/dQ44/QYWK9jw1NfcHxxMzWB
XEcvhuknDbQuuXZrl8m147XNsozHdQpKFgpCUHmWAiBK0OH1BK4u23m9UJYUUgh0
dbWyybvrbYXmpFP3vf4kbFUss8+QmU6OipuBrBDtDQwolkzwIHCh6nCgK/iWgwGe
VCGtCobowe/kvWLUPn/LWd44guhtsU8J+jF07ReDW8Yqp5TSiF1xTtXchPU5njle
TOewIR99UKb3VbCaNa5GtmHXEndmzLl64efQQ8Hrw+xR7XVKlmw0yzN8HVYJvuW4
Np17eL+7wrZrNrF/CcRSqbV5LTut70JBA6cpjvDHAgMBAAGjODA2MAwGA1UdEwEB
/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G
CSqGSIb3DQEBBQUAA4IBAQA8NOsYc/660OW3xD6OtitVuJFAMzH2s0v+NBQtTDJR
kCo6b5k8KcmTYlg5bAL633rHEa9a/H/IhCqPqcv/sGItxerKLFlj6L+snVO7KEPl
WEf/uue+VCrdnoMJVxMBaWwq+vNYKxStmfz7shCVYHMdCzJe1qaQZg30k4jzlQsZ
sUNb/wTL8QX6x3BrtOGcIuOS9HktjH2DRAVj6rGdppsMjLlm7OSj4TgDOa6CTDFf
hkk19L0pJisQ7CNr08Uln/REr4o2BQyivMFMtn3ILdIo7+XglfCYU+3XkiwfxHAC
WBhhKkORTkkH0OooaINjnBhGmDEJXGFIhNuuFmm+VbQ3
-----END CERTIFICATE-----`;

test("extracts the exact SubjectPublicKeyInfo that Node derives from the certificate", () => {
  const spki = extractSubjectPublicKeyInfo(pemToBytes(FIREBASE_CERT));
  assert.ok(spki, "SPKI must be extracted from a real certificate");

  const expected = new Uint8Array(
    new X509Certificate(FIREBASE_CERT).publicKey.export({ type: "spki", format: "der" })
  );

  assert.equal(spki.length, expected.length, "SPKI length must match Node's export");
  assert.deepEqual(
    Array.from(spki),
    Array.from(expected),
    "Extracted SPKI bytes must be byte-identical to Node's SPKI export"
  );
});

test("the extracted SPKI is importable by WebCrypto for RS256 verification", async () => {
  const spki = extractSubjectPublicKeyInfo(pemToBytes(FIREBASE_CERT));
  assert.ok(spki);

  const key = await crypto.subtle.importKey(
    "spki",
    spki,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );
  assert.equal(key.type, "public");
  assert.equal(key.algorithm.name, "RSASSA-PKCS1-v1_5");
  assert.equal(key.usages.includes("verify"), true);
});

test("WebCrypto rejects a whole certificate where an SPKI is required", async () => {
  // This is the regression guard: passing the full X.509 certificate to
  // importKey("spki") throws, which previously made every admin login fail.
  let imported = true;
  try {
    await crypto.subtle.importKey(
      "spki",
      pemToBytes(FIREBASE_CERT),
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );
  } catch {
    imported = false;
  }
  assert.equal(imported, false, "A certificate must not be usable as SPKI input");
});

test("the extracted key rejects a signature it did not produce", async () => {
  const spki = extractSubjectPublicKeyInfo(pemToBytes(FIREBASE_CERT));
  assert.ok(spki);
  const key = await crypto.subtle.importKey(
    "spki",
    spki,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );

  const message = new TextEncoder().encode("header.payload");
  const bogusSignature = new Uint8Array(256);
  const result = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    bogusSignature,
    message
  );
  assert.equal(result, false, "A bogus signature must not verify");
});

test("readTlv walks multi-byte DER lengths", () => {
  const bytes = new Uint8Array(4 + 256);
  bytes[0] = 0x30;
  bytes[1] = 0x82;
  bytes[2] = 0x01;
  bytes[3] = 0x00;

  const tlv = readTlv(bytes, 0);
  assert.ok(tlv);
  assert.equal(tlv.contentStart, 4);
  assert.equal(tlv.contentEnd, 260);
  assert.equal(tlv.next, 260);
});

test("readTlv rejects truncated input instead of throwing", () => {
  assert.equal(readTlv(new Uint8Array([0x30]), 0), null);
  assert.equal(readTlv(new Uint8Array([0x30, 0x05, 0x01]), 0), null);
  assert.equal(readTlv(new Uint8Array([0x30, 0x84, 0x01]), 0), null);
});
