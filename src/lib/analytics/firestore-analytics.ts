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
    sourceError: "Could not reach the analytics endpoint.",
    collectedFrom: null,
    lastUpdated: new Date().toISOString(),
  };

  if (typeof window === "undefined") return fallback;

  try {
    const res = await fetch(`/api/analytics?days=${days}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Analytics request failed with status ${res.status}`);
    const data = await res.json();
    if (!data || data.success !== true) throw new Error(data?.error || "Analytics request failed.");

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
  } catch (error: any) {
    return {
      ...fallback,
      sourceError: error?.message || "Could not reach the analytics endpoint.",
    };
  }
}
