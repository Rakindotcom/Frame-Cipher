import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const MAX_FIRESTORE_HITS = 2000;
const LIVE_WINDOW_MS = 5 * 60 * 1000;

export interface AnalyticsHit {
  id: string;
  sessionId: string;
  path: string;
  timestamp: number;
  device: string;
  browser: string;
  os: string;
  country: string;
  countryCode: string;
  flag: string;
  referrer: string;
  isCalculation: boolean;
  isHeartbeat: boolean;
}

function startOfTodayMs(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function toCountMap(entries: [string, number][]): { name: string; count: number }[] {
  return entries
    .map(([name, count]) => ({ name, count }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count);
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

function resolveFlag(countryOrCode: string, existingFlag?: string): string {
  if (existingFlag && existingFlag !== "🌍" && existingFlag !== "") return existingFlag;
  if (!countryOrCode) return "🌍";
  if (countryOrCode.length === 2) return countryCodeToFlag(countryOrCode);
  return COMMON_FLAGS[countryOrCode] || "🌍";
}

export async function GET(req: NextRequest) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    const { searchParams } = new URL(req.url);
    const daysParam = parseInt(searchParams.get("days") || "28", 10);
    const days = isNaN(daysParam) ? 28 : Math.min(Math.max(daysParam, 7), 90);
    const now = Date.now();

    let firestoreHits: AnalyticsHit[] = [];
    let firestoreConnected = false;
    let firestoreError: string | null = null;

    if (db) {
      try {
        const snap = await getDocs(
          query(collection(db, "analytics_hits"), orderBy("timestamp", "desc"), limit(MAX_FIRESTORE_HITS))
        );
        firestoreConnected = true;
        snap.forEach((doc) => {
          const data = doc.data() as any;
          const ts = data.timestamp?.toMillis ? data.timestamp.toMillis() : data.timestamp || 0;
          firestoreHits.push({
            id: doc.id,
            sessionId: data.sessionId || `anon-${doc.id}`,
            path: data.path || "/",
            timestamp: ts,
            device: data.device || "Unknown",
            browser: data.browser || "Unknown",
            os: data.os || "Unknown",
            country: data.country || "Unknown",
            countryCode: data.countryCode || "",
            flag: data.flag || "🌍",
            referrer: data.referrer || "direct",
            isCalculation: Boolean(data.isCalculation),
            isHeartbeat: Boolean(data.isHeartbeat),
          });
        });
      } catch (error: any) {
        firestoreError = error?.message || "Firestore query failed.";
      }
    } else {
      firestoreError = "Firebase is not configured on the server.";
    }

    const allHits = firestoreHits.sort((a, b) => b.timestamp - a.timestamp);
    const pageHits = allHits.filter((hit) => !hit.isHeartbeat);
    const totalHits = pageHits.length;

    const liveVisitors = new Set(
      allHits.filter((h) => h.timestamp >= now - LIVE_WINDOW_MS).map((h) => h.sessionId)
    ).size;

    const todayStart = startOfTodayMs();
    const todayVisitors = new Set(
      pageHits.filter((h) => h.timestamp >= todayStart).map((h) => h.sessionId)
    ).size;

    const lifetimeVisitors = new Set(pageHits.map((h) => h.sessionId)).size;
    const totalCalculations = pageHits.filter((h) => h.isCalculation).length;

    const devices = toCountMap(
      (["Desktop", "Mobile", "Tablet"] as const).map((name) => [
        name,
        pageHits.filter((h) => h.device === name).length,
      ])
    ).map((entry) => ({ ...entry, percentage: 0, color: "#1D4ED8" }));
    const totalDeviceCount = devices.reduce((sum, entry) => sum + entry.count, 0);
    for (const entry of devices) {
      entry.percentage = totalDeviceCount
        ? Math.round((entry.count / totalDeviceCount) * 100)
        : 0;
    }

    const countBy = (key: "browser" | "os" | "country") => {
      const map = new Map<string, number>();
      for (const hit of pageHits) map.set(hit[key], (map.get(hit[key]) || 0) + 1);
      return map;
    };

    const browserTotal = pageHits.length;
    const browsers = toCountMap([...countBy("browser").entries()]).map((entry) => ({
      ...entry,
      percentage: browserTotal ? Math.round((entry.count / browserTotal) * 100) : 0,
      color: "#1D4ED8",
    }));

    const osTotal = pageHits.length;
    const operatingSystems = toCountMap([...countBy("os").entries()]).map((entry) => ({
      ...entry,
      percentage: osTotal ? Math.round((entry.count / osTotal) * 100) : 0,
    }));

    const countryTotal = pageHits.length;
    const flagByCountry = new Map(pageHits.map((h) => [h.country, h.flag]));
    const countries = toCountMap([...countBy("country").entries()]).map((entry) => ({
      country: entry.name,
      flag: resolveFlag(entry.name, flagByCountry.get(entry.name)),
      visitors: entry.count,
      percentage: countryTotal ? Number(((entry.count / countryTotal) * 100).toFixed(1)) : 0,
    }));

    const pageMap = new Map<string, number>();
    for (const hit of pageHits) pageMap.set(hit.path, (pageMap.get(hit.path) || 0) + 1);
    const topPages = [...pageMap.entries()]
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);

    const dailyCounts: { date: string; dayLabel: string; visitors: number; pageViews: number; calculations: number }[] = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i -= 1) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const dayLabel = d.toLocaleDateString("en-US", { weekday: "short" });
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime();

      const dayHits = pageHits.filter((h) => h.timestamp >= dayStart && h.timestamp < dayEnd);

      dailyCounts.push({
        date: dateStr,
        dayLabel,
        visitors: new Set(dayHits.map((h) => h.sessionId)).size,
        pageViews: dayHits.length,
        calculations: dayHits.filter((h) => h.isCalculation).length,
      });
    }

    return NextResponse.json(
      {
        success: true,
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
        recentHits: pageHits.slice(0, 50),
        topPages,
        dailyCounts,
        source: firestoreConnected ? "firestore" : "unavailable",
        sourceError: firestoreError,
        collectedFrom: new Date(
          pageHits.length > 0 ? pageHits[pageHits.length - 1].timestamp : now
        ).toISOString(),
        lastUpdated: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error: any) {
    console.error("Analytics GET API error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to read analytics." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
