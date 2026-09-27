import { detectBrowser, detectDevice, detectOS, detectCountry } from "@/lib/analytics/telemetry";

export interface PageHit {
  id?: string;
  path: string;
  browser: string;
  device: string;
  os: string;
  country: string;
  countryCode: string;
  flag: string;
  referrer: string;
  isCalculation: boolean;
  sessionId: string;
  timestamp: number;
}

export interface AnalyticsSummary {
  hasData: boolean;
  liveVisitors: number;
  todayVisitors: number;
  lifetimeVisitors: number;
  totalVisitors: number;
  totalHits: number;
  totalCalculations: number;
  browsers: { name: string; count: number; percentage: number; color: string }[];
  countries: { country: string; flag: string; visitors: number; percentage: number }[];
  devices: { name: string; percentage: number; count: number; color: string }[];
  operatingSystems: { name: string; count: number; percentage: number }[];
  recentHits: PageHit[];
  topPages: { path: string; count: number }[];
  dailyCounts: { date: string; dayLabel: string; visitors: number; calculations: number }[];
  source: "firestore" | "unavailable";
  sourceError: string | null;
  collectedFrom: string | null;
  lastUpdated: string;
}

const DEVICE_COLORS: Record<string, string> = {
  Desktop: "#1D4ED8",
  Mobile: "#10B981",
  Tablet: "#F59E0B",
};

const BROWSER_COLORS: Record<string, string> = {
  "Google Chrome": "#1D4ED8",
  "Apple Safari": "#0284C7",
  "Microsoft Edge": "#0EA5E9",
  "Mozilla Firefox": "#F97316",
  Opera: "#8B5CF6",
  Brave: "#FB923C",
};

function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  const key = "framecipher_session_id";
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = `sess-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

const recentlyTracked = new Map<string, number>();

/**
 * Sends a single page hit through the server endpoint. Firestore is the only
 * store — there is no localStorage shadow copy, so a hit is never counted twice.
 */
export async function recordFirestoreHit(isCalculation: boolean = false): Promise<void> {
  if (typeof window === "undefined") return;

  const path = window.location.pathname;
  if (path.startsWith("/admin") || path.startsWith("/api")) return;

  const key = `${path}:${isCalculation}`;
  const now = Date.now();
  const last = recentlyTracked.get(key);
  if (last && now - last < 30_000) return;
  recentlyTracked.set(key, now);

  const countryInfo = detectCountry();

  try {
    await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        sessionId: getSessionId(),
        path,
        browser: detectBrowser(),
        device: detectDevice(),
        os: detectOS(),
        country: countryInfo.country,
        countryCode: countryInfo.code,
        flag: countryInfo.flag,
        referrer: document.referrer || "direct",
        isCalculation,
      }),
    });
  } catch {}
}

function emptyDailyCounts(days: number): AnalyticsSummary["dailyCounts"] {
  const counts: AnalyticsSummary["dailyCounts"] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    counts.push({
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      dayLabel: d.toLocaleDateString("en-US", { weekday: "short" }),
      visitors: 0,
      calculations: 0,
    });
  }
  return counts;
}

function countryCodeToFlag(isoCode: string): string {
  if (!isoCode || isoCode.length !== 2) return "🌍";
  const codePoints = isoCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const COMMON_FLAGS: Record<string, string> = {
  Bangladesh: "🇧🇩",
  "United States": "🇺🇸",
  USA: "🇺🇸",
  "United Kingdom": "🇬🇧",
  UK: "🇬🇧",
  India: "🇮🇳",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  France: "🇫🇷",
  UAE: "🇦🇪",
  "United Arab Emirates": "🇦🇪",
  Singapore: "🇸🇬",
  Pakistan: "🇵🇰",
  Malaysia: "🇲🇾",
};

function resolveClientFlag(countryOrCode: string): string {
  if (!countryOrCode) return "🌍";
  if (countryOrCode.length === 2) return countryCodeToFlag(countryOrCode);
  return COMMON_FLAGS[countryOrCode] || "🌍";
}

async function queryClientFirestoreAnalytics(days: number): Promise<AnalyticsSummary | null> {
  try {
    const { db } = await import("@/lib/firebase");
    if (!db) return null;
    const { collection, getDocs, query, orderBy, limit } = await import("firebase/firestore");
    const snap = await getDocs(
      query(collection(db, "analytics_hits"), orderBy("timestamp", "desc"), limit(2000))
    );
    if (!snap || snap.empty) {
      return {
        hasData: false,
        liveVisitors: 0,
        todayVisitors: 0,
        lifetimeVisitors: 0,
        totalVisitors: 0,
        totalHits: 0,
        totalCalculations: 0,
        browsers: [],
        countries: [],
        devices: [],
        operatingSystems: [],
        recentHits: [],
        topPages: [],
        dailyCounts: emptyDailyCounts(days),
        source: "firestore",
        sourceError: null,
        collectedFrom: null,
        lastUpdated: new Date().toISOString(),
      };
    }

    const allHits: PageHit[] = [];
    snap.forEach((doc) => {
      const data = doc.data() as any;
      const ts = data.timestamp?.toMillis ? data.timestamp.toMillis() : (data.timestamp || 0);
      allHits.push({
        id: doc.id,
        sessionId: data.sessionId || `anon-${doc.id}`,
        path: data.path || "/",
        timestamp: ts,
        device: data.device || "Unknown",
        browser: data.browser || "Unknown",
        os: data.os || "Unknown",
        country: data.country || "Unknown",
        countryCode: data.countryCode || "",
        flag: data.flag || resolveClientFlag(data.country || ""),
        referrer: data.referrer || "direct",
        isCalculation: Boolean(data.isCalculation),
      });
    });

    const now = Date.now();
    const LIVE_WINDOW_MS = 5 * 60 * 1000;
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    const todayStart = d.getTime();

    const liveVisitors = new Set(
      allHits.filter((h) => h.timestamp >= now - LIVE_WINDOW_MS).map((h) => h.sessionId)
    ).size;
    const todayVisitors = new Set(
      allHits.filter((h) => h.timestamp >= todayStart).map((h) => h.sessionId)
    ).size;
    const lifetimeVisitors = new Set(allHits.map((h) => h.sessionId)).size;
    const totalCalculations = allHits.filter((h) => h.isCalculation).length;

    const countBy = (key: keyof PageHit) => {
      const map = new Map<string, number>();
      for (const h of allHits) {
        const val = String(h[key] || "Unknown");
        map.set(val, (map.get(val) || 0) + 1);
      }
      return map;
    };

    const toMap = (entries: [string, number][]) =>
      entries
        .map(([name, count]) => ({ name, count }))
        .filter((e) => e.count > 0)
        .sort((a, b) => b.count - a.count);

    const totalHits = allHits.length;
    const devices = (["Desktop", "Mobile", "Tablet"] as const).map((name) => ({
      name,
      count: allHits.filter((h) => h.device === name).length,
      percentage: totalHits
        ? Math.round((allHits.filter((h) => h.device === name).length / totalHits) * 100)
        : 0,
      color: DEVICE_COLORS[name] || "#1D4ED8",
    }));

    const browsers = toMap([...countBy("browser").entries()]).map((e) => ({
      ...e,
      percentage: totalHits ? Math.round((e.count / totalHits) * 100) : 0,
      color: BROWSER_COLORS[e.name] || "#1D4ED8",
    }));

    const operatingSystems = toMap([...countBy("os").entries()]).map((e) => ({
      ...e,
      percentage: totalHits ? Math.round((e.count / totalHits) * 100) : 0,
    }));

    const countries = toMap([...countBy("country").entries()]).map((e) => ({
      country: e.name,
      flag: resolveClientFlag(e.name),
      visitors: e.count,
      percentage: totalHits ? Number(((e.count / totalHits) * 100).toFixed(1)) : 0,
    }));

    const pageMap = new Map<string, number>();
    for (const hit of allHits) pageMap.set(hit.path, (pageMap.get(hit.path) || 0) + 1);
    const topPages = [...pageMap.entries()]
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);

    const dailyCounts: { date: string; dayLabel: string; visitors: number; calculations: number }[] = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i -= 1) {
      const cd = new Date(today);
      cd.setDate(cd.getDate() - i);
      const dateStr = cd.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const dayLabel = cd.toLocaleDateString("en-US", { weekday: "short" });
      const dayStart = new Date(cd.getFullYear(), cd.getMonth(), cd.getDate()).getTime();
      const dayEnd = new Date(cd.getFullYear(), cd.getMonth(), cd.getDate() + 1).getTime();
      const dayHits = allHits.filter((h) => h.timestamp >= dayStart && h.timestamp < dayEnd);
      dailyCounts.push({
        date: dateStr,
        dayLabel,
        visitors: new Set(dayHits.map((h) => h.sessionId)).size,
        calculations: dayHits.filter((h) => h.isCalculation).length,
      });
    }

    return {
      hasData: totalHits > 0,
      liveVisitors,
      todayVisitors,
      lifetimeVisitors,
      totalVisitors: lifetimeVisitors,
      totalHits,
      totalCalculations,
      browsers,
      countries,
      devices,
      operatingSystems,
      recentHits: allHits.slice(0, 50),
      topPages,
      dailyCounts,
      source: "firestore",
      sourceError: null,
      collectedFrom: new Date(allHits[allHits.length - 1].timestamp).toISOString(),
      lastUpdated: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/**
 * Reads the server-side analytics summary. When the endpoint is unreachable the
 * dashboard shows a genuine "no data / not connected" state instead of invented
 * numbers, so zeros here are real zeros and not placeholders.
 */
export async function getFirestoreAnalyticsSummary(days: number = 28): Promise<AnalyticsSummary> {
  const fallback: AnalyticsSummary = {
    hasData: false,
    liveVisitors: 0,
    todayVisitors: 0,
    lifetimeVisitors: 0,
    totalVisitors: 0,
    totalHits: 0,
    totalCalculations: 0,
    browsers: [],
    countries: [],
    devices: [],
    operatingSystems: [],
    recentHits: [],
    topPages: [],
    dailyCounts: emptyDailyCounts(days),
    source: "unavailable",
    sourceError: null,
    collectedFrom: null,
    lastUpdated: new Date().toISOString(),
  };

  if (typeof window === "undefined") return fallback;

  try {
    const headers: Record<string, string> = {};
    try {
      const { auth } = await import("@/lib/firebase");
      if (auth?.currentUser) {
        const idToken = await auth.currentUser.getIdToken();
        if (idToken) headers["Authorization"] = `Bearer ${idToken}`;
      }
    } catch {}

    const res = await fetch(`/api/analytics?days=${days}`, {
      cache: "no-store",
      credentials: "include",
      headers,
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.success === true) {
        return {
          hasData: Boolean(data.hasData),
          liveVisitors: data.liveVisitors ?? 0,
          todayVisitors: data.todayVisitors ?? 0,
          lifetimeVisitors: data.lifetimeVisitors ?? 0,
          totalVisitors: data.totalVisitors ?? 0,
          totalHits: data.totalHits ?? 0,
          totalCalculations: data.totalCalculations ?? 0,
          browsers: (data.browsers ?? []).map((b: any) => ({
            ...b,
            color: b.color || BROWSER_COLORS[b.name] || "#94A3B8",
          })),
          countries: data.countries ?? [],
          devices: (data.devices ?? []).map((d: any) => ({
            ...d,
            color: d.color || DEVICE_COLORS[d.name] || "#94A3B8",
          })),
          operatingSystems: data.operatingSystems ?? [],
          recentHits: data.recentHits ?? [],
          topPages: data.topPages ?? [],
          dailyCounts: data.dailyCounts ?? emptyDailyCounts(days),
          source: data.source === "firestore" ? "firestore" : "unavailable",
          sourceError: data.sourceError ?? null,
          collectedFrom: data.collectedFrom ?? null,
          lastUpdated: data.lastUpdated ?? new Date().toISOString(),
        };
      }
    }

    // Direct client-side Firestore query fallback (authenticated browser session)
    const clientSummary = await queryClientFirestoreAnalytics(days);
    if (clientSummary) {
      return clientSummary;
    }

    return fallback;
  } catch (error: any) {
    const clientSummary = await queryClientFirestoreAnalytics(days);
    if (clientSummary) {
      return clientSummary;
    }
    return {
      ...fallback,
      sourceError: error?.message || null,
    };
  }
}
