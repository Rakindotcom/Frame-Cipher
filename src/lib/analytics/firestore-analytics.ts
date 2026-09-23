import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp,
  getCountFromServer,
} from "firebase/firestore";
import { detectBrowser, detectDevice, detectOS, detectCountry } from "@/lib/analytics/telemetry";

// ============================================================
// TYPES
// ============================================================

export interface PageHit {
  id?: string;
  path: string;
  browser: string;
  device: "Desktop" | "Mobile" | "Tablet";
  os: string;
  country: string;
  countryCode: string;
  flag: string;
  referrer: string;
  isCalculation: boolean;
  sessionId: string;
  timestamp: any; // Firestore serverTimestamp
}

export interface AnalyticsSummary {
  totalVisitors: number;
  totalCalculations: number;
  browsers: { name: string; count: number; percentage: number; color: string }[];
  countries: { country: string; flag: string; visitors: number; percentage: number }[];
  devices: { name: string; percentage: number; count: number; color: string }[];
  operatingSystems: { name: string; count: number; percentage: number }[];
  recentHits: PageHit[];
  topPages: { path: string; count: number }[];
  dailyCounts: { date: string; dayLabel: string; visitors: number; calculations: number }[];
  source?: "cloud" | "local" | "hybrid";
  cloudNotice?: string;
}

// ============================================================
// SESSION ID — ensures we don't double-count same tab
// ============================================================

function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  let sid = sessionStorage.getItem("framecipher_session_id");
  if (!sid) {
    sid = `sess-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    sessionStorage.setItem("framecipher_session_id", sid);
  }
  return sid;
}

// Rate-limit: only 1 page-hit per path per 30s within a session
const recentlyTracked = new Map<string, number>();

// ============================================================
// RECORD HIT TO FIRESTORE
// ============================================================

export async function recordFirestoreHit(isCalculation: boolean = false): Promise<void> {
  if (typeof window === "undefined") return;

  const path = window.location.pathname;
  const key = `${path}:${isCalculation}`;
  const now = Date.now();

  // Deduplicate: don't track same path within 30s
  const last = recentlyTracked.get(key);
  if (last && now - last < 30_000) return;
  recentlyTracked.set(key, now);

  const countryInfo = detectCountry();
  const hit: PageHit = {
    path,
    browser: detectBrowser(),
    device: detectDevice(),
    os: detectOS(),
    country: countryInfo.country,
    countryCode: countryInfo.code,
    flag: countryInfo.flag,
    referrer: document.referrer || "direct",
    isCalculation,
    sessionId: getSessionId(),
    timestamp: serverTimestamp(),
  };

  // 1. Immediately ensure local telemetry hit is saved
  try {
    const existing = localStorage.getItem("framecipher_live_telemetry");
    let localHits: any[] = [];
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (Array.isArray(parsed)) localHits = parsed;
      } catch {}
    }
    localHits.unshift({
      ...hit,
      id: `hit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
    });
    if (localHits.length > 300) localHits = localHits.slice(0, 300);
    localStorage.setItem("framecipher_live_telemetry", JSON.stringify(localHits));
  } catch {}

  // 2. Try Firestore with a 2-second timeout
  try {
    const firestorePromise = addDoc(collection(db, "analytics_hits"), hit);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000));
    await Promise.race([firestorePromise, timeoutPromise]);
  } catch (err: any) {
    // Silently fall back to local storage
  }
}

// ============================================================
// FETCH SUMMARY FOR DASHBOARD (HYBRID: LOCAL + FIRESTORE)
// ============================================================

export async function getFirestoreAnalyticsSummary(days: number = 28): Promise<AnalyticsSummary> {
  // 1. Instantly read local client telemetry
  let localHits: PageHit[] = [];
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("framecipher_live_telemetry");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          localHits = parsed.map((item: any) => ({
            ...item,
            timestamp: item.timestamp ? new Date(item.timestamp) : new Date(),
          }));
        }
      }
    } catch {}
  }

  // 2. Query Firestore with 2.5s strict timeout
  let firestoreHits: PageHit[] = [];
  let source: "cloud" | "local" | "hybrid" = "local";
  let cloudNotice: string | undefined = undefined;

  try {
    const hitsRef = collection(db, "analytics_hits");
    const recentQuery = query(hitsRef, orderBy("timestamp", "desc"), limit(500));

    const firestorePromise = getDocs(recentQuery);
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 2200));

    const snap = await Promise.race([firestorePromise, timeoutPromise]);
    if (snap && "forEach" in snap) {
      snap.forEach((doc) => {
        const data = doc.data();
        firestoreHits.push({
          ...(data as PageHit),
          timestamp: data.timestamp?.toDate ? data.timestamp.toDate() : new Date(),
        });
      });
      if (firestoreHits.length > 0) {
        source = localHits.length > 0 ? "hybrid" : "cloud";
      }
    } else {
      cloudNotice = "Cloud Firestore timed out. Operating in real-time local telemetry mode.";
    }
  } catch (err: any) {
    cloudNotice = err?.message?.includes("PERMISSION_DENIED")
      ? "Cloud Firestore API not enabled yet in Firebase Console. Live telemetry running locally."
      : "Operating in real-time local telemetry mode.";
  }

  // 3. Merge hits and deduplicate
  const allHitsMap = new Map<string, PageHit>();
  
  // Add firestore hits first
  firestoreHits.forEach((h, idx) => {
    const key = `fs-${idx}-${h.path}-${h.sessionId || ""}`;
    allHitsMap.set(key, h);
  });

  // Add local hits
  localHits.forEach((h, idx) => {
    const key = `loc-${h.id || idx}-${h.path}`;
    allHitsMap.set(key, h);
  });

  let hits = Array.from(allHitsMap.values());

  // If no hits exist yet (e.g. brand new browser directly entering admin),
  // record the current session immediately so admin sees real stats right away!
  if (hits.length === 0 && typeof window !== "undefined") {
    const countryInfo = detectCountry();
    const initialHit: PageHit = {
      path: window.location.pathname,
      browser: detectBrowser(),
      device: detectDevice(),
      os: detectOS(),
      country: countryInfo.country,
      countryCode: countryInfo.code,
      flag: countryInfo.flag,
      referrer: document.referrer || "direct",
      isCalculation: false,
      sessionId: getSessionId(),
      timestamp: new Date(),
    };
    hits.push(initialHit);
    try {
      localStorage.setItem("framecipher_live_telemetry", JSON.stringify([initialHit]));
    } catch {}
  }

  // ---- Aggregation ----
  const realCalculations = hits.filter((h) => h.isCalculation).length;
  // Get inquiry history count from localStorage if available
  let calcHistoryCount = 0;
  if (typeof window !== "undefined") {
    try {
      const calcHistory = localStorage.getItem("framecipher_inquiry_history");
      if (calcHistory) {
        const parsed = JSON.parse(calcHistory);
        if (Array.isArray(parsed)) calcHistoryCount = parsed.length;
      }
    } catch {}
  }

  const totalCalculations = realCalculations + calcHistoryCount;
  const totalVisitors = hits.length;

  // Browsers
  const browserMap: Record<string, number> = {};
  hits.forEach((h) => {
    browserMap[h.browser] = (browserMap[h.browser] || 0) + 1;
  });
  const browserColors: Record<string, string> = {
    "Google Chrome": "#1D4ED8",
    "Apple Safari": "#0284C7",
    "Microsoft Edge": "#0EA5E9",
    "Mozilla Firefox": "#F97316",
    "Opera": "#8B5CF6",
    "Brave": "#FB923C",
  };
  const browsers = Object.entries(browserMap)
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalVisitors ? Math.round((count / totalVisitors) * 100) : 0,
      color: browserColors[name] || "#94A3B8",
    }))
    .sort((a, b) => b.count - a.count);

  // Countries
  const countryMap: Record<string, { flag: string; count: number }> = {};
  hits.forEach((h) => {
    if (!countryMap[h.country]) countryMap[h.country] = { flag: h.flag || "🌍", count: 0 };
    countryMap[h.country].count++;
  });
  const countries = Object.entries(countryMap)
    .map(([country, d]) => ({
      country,
      flag: d.flag,
      visitors: d.count,
      percentage: totalVisitors ? Number(((d.count / totalVisitors) * 100).toFixed(1)) : 0,
    }))
    .sort((a, b) => b.visitors - a.visitors);

  // Devices
  const deviceMap: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0 };
  hits.forEach((h) => {
    if (h.device in deviceMap) deviceMap[h.device]++;
  });
  const deviceColors: Record<string, string> = { Desktop: "#1D4ED8", Mobile: "#10B981", Tablet: "#F59E0B" };
  const devices = Object.entries(deviceMap)
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalVisitors ? Math.round((count / totalVisitors) * 100) : 0,
      color: deviceColors[name] || "#94A3B8",
    }))
    .sort((a, b) => b.count - a.count);

  // OS
  const osMap: Record<string, number> = {};
  hits.forEach((h) => {
    osMap[h.os] = (osMap[h.os] || 0) + 1;
  });
  const operatingSystems = Object.entries(osMap)
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalVisitors ? Math.round((count / totalVisitors) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  // Top Pages
  const pageMap: Record<string, number> = {};
  hits.forEach((h) => {
    pageMap[h.path] = (pageMap[h.path] || 0) + 1;
  });
  const topPages = Object.entries(pageMap)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  // Daily counts (last N days)
  const today = new Date();
  const dailyCounts: AnalyticsSummary["dailyCounts"] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const dayLabel = d.toLocaleDateString("en-US", { weekday: "short" });
    const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

    const dayHits = hits.filter((h) => {
      const t = h.timestamp instanceof Date ? h.timestamp : new Date(h.timestamp);
      return t >= dayStart && t < dayEnd;
    });

    dailyCounts.push({
      date: dateStr,
      dayLabel,
      visitors: dayHits.length,
      calculations: dayHits.filter((h) => h.isCalculation).length,
    });
  }

  return {
    totalVisitors,
    totalCalculations,
    browsers,
    countries,
    devices,
    operatingSystems,
    recentHits: hits.slice(0, 50),
    topPages,
    dailyCounts,
    source,
    cloudNotice,
  };
}
