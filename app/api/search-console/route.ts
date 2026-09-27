import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GSC_API = "https://searchconsole.googleapis.com/webmasters/v3";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const ROW_LIMIT = 25;
const CHART_MAX_DAYS = 90;
const TOKEN_TTL_MS = 50 * 60 * 1000;
const CACHE_TTL_MS = 5 * 60 * 1000;

const RANGE_DAYS: Record<string, number> = {
  "24hours": 1,
  "7days": 7,
  "28days": 28,
  "3months": 90,
};

interface GscRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

class GscError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "GscError";
    this.status = status;
  }
}

let cachedToken: { token: string; expiresAt: number } | null = null;
const responseCache = new Map<string, { expiresAt: number; payload: unknown }>();

// ─── JWT / token helpers (no external package needed) ──────────────────────
function base64url(input: ArrayBuffer | string): string {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.token;

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({ iss: clientEmail, scope: SCOPE, aud: TOKEN_URL, exp: now + 3600, iat: now })
  );

  const der = Uint8Array.from(
    atob(privateKey.replace(/-----BEGIN PRIVATE KEY-----/, "").replace(/-----END PRIVATE KEY-----/, "").replace(/\s/g, "")),
    (c) => c.charCodeAt(0)
  );

  let signature: string;
  try {
    const cryptoKey = await crypto.subtle.importKey(
      "pkcs8",
      der.buffer,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["sign"]
    );
    signature = base64url(
      await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, new TextEncoder().encode(`${header}.${payload}`))
    );
  } catch {
    throw new GscError("GSC_PRIVATE_KEY is malformed. It must be the full PEM on one line with \\n escapes.", 500);
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${header}.${payload}.${signature}`,
  });
  const json = (await res.json()) as { access_token?: string; error?: string; error_description?: string };
  if (!json.access_token) {
    throw new GscError(`Google rejected the service account: ${json.error_description || json.error}`, 502);
  }

  cachedToken = { token: json.access_token, expiresAt: Date.now() + TOKEN_TTL_MS };
  return json.access_token;
}

// ─── Search Console query helper ───────────────────────────────────────────
async function gscQuery(
  token: string,
  siteUrl: string,
  body: Record<string, unknown>
): Promise<GscRow[]> {
  const res = await fetch(
    `${GSC_API}/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ searchType: "web", ...body }),
    }
  );

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 300);
    if (res.status === 403) {
      throw new GscError(
        `Search Console rejected "${siteUrl}" (403). The service account must be added as a user on that exact property. ${detail}`,
        502
      );
    }
    if (res.status === 429) throw new GscError("Search Console API quota exceeded. Try again shortly.", 429);
    throw new GscError(`Search Console API error ${res.status}: ${detail}`, 502);
  }

  const json = (await res.json()) as { rows?: GscRow[] };
  return json.rows ?? [];
}

const toRows = (rows: GscRow[]) =>
  rows.map((r) => ({
    key: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: Number((r.ctr * 100).toFixed(2)),
    position: Number(r.position.toFixed(1)),
  }));

// Search Console returns the country dimension as lowercase ISO-3166 alpha-3
// codes ("bgd"), which are unreadable in a report. Resolve them to a name + flag.
const COUNTRY_CODES: Record<string, string> = {
  abw: "AW", afg: "AF", ago: "AO", alb: "AL", alg: "DZ", and: "AD", are: "AE", arg: "AR",
  arm: "AM", aus: "AU", aut: "AT", aze: "AZ", bam: "BA", bdi: "BI", bel: "BE", ben: "BJ",
  bfa: "BF", bgd: "BD", bgr: "BG", bhr: "BH", bih: "BA", blm: "BL", blr: "BY", bol: "BO",
  bra: "BR", brb: "BB", bwa: "BW", can: "CA", che: "CH", chl: "CL", chn: "CN", civ: "CI",
  col: "CO", cri: "CR", cub: "CU", cyp: "CY", cze: "CZ", deu: "DE", dji: "DJ", dnk: "DK",
  dom: "DO", dza: "DZ", ecu: "EC", egy: "EG", era: "ER", esp: "ES", est: "EE", eth: "ET",
  fin: "FI", fra: "FR", fji: "FJ", gbr: "GB", geo: "GE", gha: "GH", grc: "GR", grd: "GD",
  gtm: "GT", gnb: "GN", guy: "GY", hkg: "HK", hnd: "HN", hrv: "HR", hti: "HT", hun: "HU",
  idn: "ID", ind: "IN", iql: "IQ", irl: "IE", isr: "IL", ise: "IS", ita: "IT", jam: "JM",
  jpn: "JP", jor: "JO", kas: "KZ", ken: "KE", kgz: "KG", khm: "KH", kor: "KR", kwt: "KW",
  lao: "LA", lbn: "LB", lbr: "LR", lby: "LY", lka: "LK", lto: "LT", lun: "LU", lva: "LV",
  mar: "MA", mco: "MC", mdg: "MG", mdv: "MV", mex: "MX", mli: "ML", mmr: "MM", mng: "MN",
  moz: "MZ", mrt: "MR", mus: "MU", mwi: "MW", mys: "MY", nam: "NA", nep: "NP", nga: "NG",
  nic: "NI", nld: "NL", npl: "NP", nzl: "NZ", omn: "OM", pak: "PK", pan: "PA", per: "PE",
  phl: "PH", plw: "PW", png: "PG", pol: "PL", prt: "PT", pry: "PY", qat: "QA", rou: "RO",
  rus: "RU", rwa: "RW", sau: "SA", sdn: "SD", sen: "SN", sgp: "SG", slb: "SB", slv: "SV",
  som: "SO", srb: "RS", stp: "ST", sur: "SR", svk: "SK", svn: "SI", swz: "SZ", tcd: "TD",
  tha: "TH", tjk: "TJ", tml: "TL", tgo: "TG", tun: "TN", tur: "TR", tza: "TZ", uga: "UG",
  ukr: "UA", usa: "US", ury: "UY", uzb: "UZ", ven: "VE", vnm: "VN", zaf: "ZA", zmb: "ZM",
  zwe: "ZW",
};


const REGIONAL_INDICATOR_OFFSET = 0x1f1e6 - 65;

function toFlag(alpha2: string): string {
  if (alpha2.length !== 2) return "";
  return String.fromCodePoint(
    ...alpha2.toUpperCase().split("").map((c) => c.charCodeAt(0) + REGIONAL_INDICATOR_OFFSET)
  );
}

const COUNTRY_NAMES: Record<string, string> = {
  AE: "United Arab Emirates", AR: "Argentina", AT: "Austria", AU: "Australia", AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina", BD: "Bangladesh", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria",
  BH: "Bahrain", BI: "Burundi", BO: "Bolivia", BR: "Brazil", BY: "Belarus", CA: "Canada",
  CH: "Switzerland", CL: "Chile", CN: "China", CO: "Colombia", CR: "Costa Rica", CU: "Cuba",
  CY: "Cyprus", CZ: "Czechia", DE: "Germany", DK: "Denmark", DO: "Dominican Republic",
  DZ: "Algeria", EC: "Ecuador", EE: "Estonia", EG: "Egypt", ES: "Spain", ET: "Ethiopia",
  FI: "Finland", FR: "France", GB: "United Kingdom", GE: "Georgia", GH: "Ghana", GN: "Guinea",
  GR: "Greece", GT: "Guatemala", HK: "Hong Kong", HN: "Honduras", HR: "Croatia", HT: "Haiti",
  HU: "Hungary", ID: "Indonesia", IE: "Ireland", IL: "Israel", IN: "India", IQ: "Iraq",
  IS: "Iceland", IT: "Italy", JM: "Jamaica", JO: "Jordan", JP: "Japan", KE: "Kenya",
  KG: "Kyrgyzstan", KH: "Cambodia", KR: "South Korea", KW: "Kuwait", KZ: "Kazakhstan",
  LA: "Laos", LB: "Lebanon", LK: "Sri Lanka", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia",
  MA: "Morocco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "North Macedonia",
  ML: "Mali", MM: "Myanmar", MN: "Mongolia", MO: "Macao", MT: "Malta", MU: "Mauritius",
  MV: "Maldives", MW: "Malawi", MX: "Mexico", MY: "Malaysia", MZ: "Mozambique", NA: "Namibia",
  NG: "Nigeria", NI: "Nicaragua", NL: "Netherlands", NO: "Norway", NP: "Nepal", NZ: "New Zealand",
  OM: "Oman", PA: "Panama", PE: "Peru", PH: "Philippines", PK: "Pakistan", PL: "Poland",
  PR: "Puerto Rico", PT: "Portugal", PY: "Paraguay", QA: "Qatar", RO: "Romania", RS: "Serbia",
  RU: "Russia", RW: "Rwanda", SA: "Saudi Arabia", SD: "Sudan", SE: "Sweden", SG: "Singapore",
  SI: "Slovenia", SK: "Slovakia", SN: "Senegal", SO: "Somalia", SV: "El Salvador", SY: "Syria",
  TH: "Thailand", TJ: "Tajikistan", TM: "Turkmenistan", TN: "Tunisia", TR: "Türkiye",
  TW: "Taiwan", TZ: "Tanzania", UA: "Ukraine", UG: "Uganda", US: "United States",
  UY: "Uruguay", UZ: "Uzbekistan", VE: "Venezuela", VN: "Vietnam", ZA: "South Africa",
  ZM: "Zambia", ZW: "Zimbabwe",
};

const toCountryRows = (rows: GscRow[]) =>
  rows.map((r) => {
    const code = (r.keys[0] || "").toLowerCase();
    const alpha2 = COUNTRY_CODES[code];
    const name = alpha2 ? COUNTRY_NAMES[alpha2] : undefined;
    return {
      key: alpha2 ? `${COUNTRY_NAMES[alpha2] ?? code.toUpperCase()} ${toFlag(alpha2)}`.trim() : code.toUpperCase(),
      code: alpha2 ?? code.toUpperCase(),
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Number((r.ctr * 100).toFixed(2)),
      position: Number(r.position.toFixed(1)),
    };
  });


// ─── Date range helper ─────────────────────────────────────────────────────
// Search Console data lags by ~1 day, so the range always ends yesterday.
// Dates are built in the property timezone (default Asia/Dhaka, UTC+6) to
// avoid silently losing a day when the server runs in UTC.
function getDateRange(range: string) {
  const offsetMinutes = Number(process.env.GSC_TZ_OFFSET_MINUTES ?? 360);
  const now = new Date(Date.now() + offsetMinutes * 60_000);
  const end = new Date(now);
  end.setUTCDate(now.getUTCDate() - 1);

  const days = RANGE_DAYS[range] ?? RANGE_DAYS["3months"];
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - (days - 1));

  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end), days };
}

// ─── Main handler ───────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const guard = await requireAdmin(req);
  if (!guard.ok) {
    return NextResponse.json({ connected: false, error: "Unauthorized" }, { status: 401 });
  }

  const range = new URL(req.url).searchParams.get("range") ?? "3months";
  if (!RANGE_DAYS[range]) {
    return NextResponse.json({ connected: false, error: `Unknown range "${range}"` }, { status: 400 });
  }

  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GSC_PRIVATE_KEY;
  const siteUrl = process.env.GSC_SITE_URL || "sc-domain:framecipher.info";

  if (!clientEmail || !privateKeyRaw) {
    return NextResponse.json(
      { connected: false, error: "GSC_CLIENT_EMAIL / GSC_PRIVATE_KEY are not configured on the server." },
      { status: 503 }
    );
  }

  const forceRefresh = new URL(req.url).searchParams.get("refresh") === "true";
  const { startDate, endDate, days } = getDateRange(range);
  const cacheKey = `${siteUrl}|${range}|${startDate}|${endDate}`;

  const hit = responseCache.get(cacheKey);
  if (!forceRefresh && hit && hit.expiresAt > Date.now()) {
    return NextResponse.json({ ...(hit.payload as object), cached: true });
  }

  try {
    const token = await getAccessToken(clientEmail, privateKeyRaw.replace(/\\n/g, "\n"));
    const endpoint = { token, siteUrl, startDate, endDate };

    // Totals come from a dimension-less aggregate query. Summing the top-25
    // query rows undercounts, so the two must never be conflated.
    // dataState: "all" is essential to include fresh data from the last 24-48 hours.
    const [totals, queries, pages, countries, devices, byDate] = await Promise.all([
      gscQuery(endpoint.token, endpoint.siteUrl, { startDate, endDate, dataState: "all" }),
      gscQuery(endpoint.token, endpoint.siteUrl, {
        startDate,
        endDate,
        dataState: "all",
        dimensions: ["query"],
        rowLimit: ROW_LIMIT,
      }),
      gscQuery(endpoint.token, endpoint.siteUrl, {
        startDate,
        endDate,
        dataState: "all",
        dimensions: ["page"],
        rowLimit: ROW_LIMIT,
      }),
      gscQuery(endpoint.token, endpoint.siteUrl, {
        startDate,
        endDate,
        dataState: "all",
        dimensions: ["country"],
        rowLimit: ROW_LIMIT,
      }),
      gscQuery(endpoint.token, endpoint.siteUrl, {
        startDate,
        endDate,
        dataState: "all",
        dimensions: ["device"],
        rowLimit: ROW_LIMIT,
      }),
      gscQuery(endpoint.token, endpoint.siteUrl, {
        startDate,
        endDate,
        dataState: "all",
        dimensions: ["date"],
        rowLimit: Math.min(days, CHART_MAX_DAYS),
      }),
    ]);

    let total = totals[0];
    if (!total && byDate.length > 0) {
      const totalClicks = byDate.reduce((s, r) => s + r.clicks, 0);
      const totalImp = byDate.reduce((s, r) => s + r.impressions, 0);
      const avgCtr = totalImp > 0 ? totalClicks / totalImp : 0;
      const avgPos = byDate.length > 0 ? byDate.reduce((s, r) => s + r.position, 0) / byDate.length : 0;
      total = { keys: [], clicks: totalClicks, impressions: totalImp, ctr: avgCtr, position: avgPos };
    }
    const payload = {
      connected: true,
      isLive: true,
      cached: false,
      siteUrl,
      startDate,
      endDate,
      dateRange: range,
      message: `Live data from Google Search Console · ${siteUrl}`,
      totals: {
        clicks: total?.clicks ?? 0,
        impressions: total?.impressions ?? 0,
        ctr: Number(((total?.ctr ?? 0) * 100).toFixed(2)),
        position: Number((total?.position ?? 0).toFixed(1)),
      },
      queries: toRows(queries),
      pages: toRows(pages),
      countries: toCountryRows(countries),
      devices: toRows(devices),
      chartData: byDate.map((r) => ({
        date: new Date(`${r.keys[0]}T00:00:00Z`).toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "2-digit",
          timeZone: "UTC",
        }),
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(1)),
      })),
    };

    responseCache.set(cacheKey, { expiresAt: Date.now() + CACHE_TTL_MS, payload });
    return NextResponse.json(payload);
  } catch (err) {
    const status = err instanceof GscError ? err.status : 500;
    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error("[search-console]", message);
    return NextResponse.json({ connected: false, isLive: false, error: message }, { status });
  }
}
