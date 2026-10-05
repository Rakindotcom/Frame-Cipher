"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  getFirestoreAnalyticsSummary,
  AnalyticsSummary,
} from "@/lib/analytics/firestore-analytics";
import {
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Users,
  RefreshCw,
  TrendingUp,
  Activity,
} from "lucide-react";

const BROWSER_ICONS: Record<string, string> = {
  "Google Chrome": "🌐",
  "Apple Safari": "🧭",
  "Microsoft Edge": "🔵",
  "Mozilla Firefox": "🦊",
  "Opera": "⭕",
  "Brave": "🦁",
};

const DEVICE_ICONS: Record<string, React.ReactNode> = {
  Desktop: <Monitor className="h-4 w-4" />,
  Mobile: <Smartphone className="h-4 w-4" />,
  Tablet: <Tablet className="h-4 w-4" />,
};

type Range = "7d" | "28d" | "3m";

function MiniBarChart({
  data,
  maxVal,
  color,
}: {
  data: number[];
  maxVal: number;
  color: string;
}) {
  const w = 600;
  const h = 120;
  const pad = 8;
  const barW = (w - pad * 2) / Math.max(data.length, 1);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-24">
      {data.map((val, i) => {
        const barH = maxVal > 0 ? ((val / maxVal) * (h - pad * 2)) : 0;
        const x = pad + i * barW;
        const y = h - pad - barH;
        return (
          <rect
            key={i}
            x={x + 2}
            y={y}
            width={Math.max(barW - 4, 2)}
            height={barH}
            rx="3"
            fill={color}
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}

export function RealAnalyticsDashboard({
  onSummary,
}: {
  onSummary?: (summary: AnalyticsSummary) => void;
} = {}) {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<Range>("28d");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "countries" | "browsers" | "pages">("overview");

  const fetchData = useCallback(async () => {
    setLoading(true);
    const days = range === "7d" ? 7 : range === "3m" ? 90 : 28;
    const data = await getFirestoreAnalyticsSummary(days);
    setSummary(data);
    onSummary?.(data);
    setLastUpdated(new Date());
    setLoading(false);
  }, [range, onSummary]);

  useEffect(() => {
    fetchData();
    // Auto-refresh every 10s for real-time live tracing
    const interval = setInterval(fetchData, 10_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Loading skeleton (only when initial load has no data)
  if (loading && !summary) {
    return (
      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 flex flex-col items-center gap-3 shadow-sm">
        <div className="h-8 w-8 border-2 border-[#1D4ED8] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-[#64748B]">Connecting to Real Telemetry Engine…</p>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 flex flex-col items-center gap-3 shadow-sm text-center">
        <Activity className="h-8 w-8 text-[#1D4ED8] animate-pulse" />
        <p className="text-sm font-semibold text-[#64748B]">Initializing Real Analytics Engine...</p>
      </div>
    );
  }

  const displayDays = summary.dailyCounts;
  const maxVisitors = Math.max(...displayDays.map((d) => d.visitors), 1);
  const maxPageViews = Math.max(...displayDays.map((d) => d.pageViews ?? 0), 1);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
              <h2 className="text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#0F172A] truncate">
                Live Visitor Tracing &amp; Analytics
              </h2>
              <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0] whitespace-nowrap shrink-0 flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-ping" />
                <span>{summary.liveVisitors} Active Now</span>
              </span>
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap shrink-0 ${
                  summary.source === "firestore"
                    ? "text-[#1D4ED8] bg-[#EFF6FF] border-[#BFDBFE]"
                    : "text-[#B45309] bg-[#FFFBEB] border-[#FDE68A]"
                }`}
              >
                {summary.source === "firestore" ? "Firestore read OK" : "Firestore read unavailable"}
              </span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 truncate">
              Recorded page views and visitor sessions by browser, device, and country
              {lastUpdated && (
                <span className="ml-2 text-[#94A3B8]">
                  · Refreshed {lastUpdated.toLocaleTimeString()}
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Range Selector */}
            <div className="flex rounded-xl border border-[#E2E8F0] overflow-hidden text-xs font-heading font-bold uppercase tracking-wider">
              {(["7d", "28d", "3m"] as Range[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-3 py-1.5 transition-colors ${
                    range === r
                      ? "bg-[#1D4ED8] text-white"
                      : "bg-white text-[#64748B]"
                  }`}
                >
                  {r === "7d" ? "7 Days" : r === "28d" ? "28 Days" : "3 Months"}
                </button>
              ))}
            </div>

            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 rounded-xl border border-[#E2E8F0] bg-white text-[#64748B]"
              title="Refresh"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Honest empty / error state instead of a reassuring fake banner */}
        {(!summary.hasData || summary.source !== "firestore") && (
          <div className="mt-3 p-3 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2">
            <span className="text-sm">!</span>
            <div>
              <span className="font-bold">{summary.source === "firestore" ? "No visits recorded yet. " : "Analytics data is unavailable. "}</span>
              {summary.sourceError
                ? `Reason: ${summary.sourceError} `
                : summary.source === "firestore"
                  ? "Open a public page, then refresh. If this stays empty, check that analytics writes are allowed by the deployed Firestore rules. "
                  : "Check administrator sign-in and Firestore read permissions. "}
              The connection badge confirms reading; it does not confirm that visit writes succeed.
            </div>
          </div>
        )}

        {summary.source === "firestore" && summary.hasData && (
          <p className="mt-3 text-[11px] text-[#64748B]">
            Tracking since {new Date(summary.collectedFrom || Date.now()).toLocaleString()} ·{" "}
            {summary.totalHits.toLocaleString()} recorded hits
          </p>
        )}

        {/* Top KPIs: Live visitors, lifetime visitors, today, page views, countries, pages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
          <div className="rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#16A34A] uppercase tracking-wider min-w-0">
              <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A] animate-pulse shrink-0" />
              <span className="truncate">Live Active</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#15803D] mt-1 truncate">
              {summary.liveVisitors}
            </div>
            <span className="text-[10px] text-[#16A34A] block truncate font-medium">Right Now</span>
          </div>

          <div className="rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#1D4ED8] uppercase tracking-wider min-w-0">
              <Users className="h-3.5 w-3.5 text-[#1D4ED8] shrink-0" />
              <span className="truncate">Lifetime Visits</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#1E40AF] mt-1 truncate">
              {summary.lifetimeVisitors.toLocaleString()}
            </div>
            <span className="text-[10px] text-[#1D4ED8] block truncate font-medium">Unique Sessions</span>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#64748B] uppercase tracking-wider min-w-0">
              <Activity className="h-3.5 w-3.5 text-[#0284C7] shrink-0" />
              <span className="truncate">Today Visits</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] mt-1 truncate">
              {summary.todayVisitors.toLocaleString()}
            </div>
            <span className="text-[10px] text-[#64748B] block truncate font-medium">Unique Today</span>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#64748B] uppercase tracking-wider min-w-0">
              <Activity className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
              <span className="truncate">Page Views</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] mt-1 truncate">
              {summary.totalHits.toLocaleString()}
            </div>
            <span className="text-[10px] text-[#64748B] block truncate font-medium">Recorded Hits</span>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#64748B] uppercase tracking-wider min-w-0">
              <Globe className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0" />
              <span className="truncate">Countries</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] mt-1 truncate">
              {summary.countries.length}
            </div>
            <span className="text-[10px] text-[#64748B] block truncate font-medium">Global Reach</span>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#64748B] uppercase tracking-wider min-w-0">
              <TrendingUp className="h-3.5 w-3.5 text-[#D97706] shrink-0" />
              <span className="truncate">Pages Tracked</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] mt-1 truncate">
              {summary.topPages.length}
            </div>
            <span className="text-[10px] text-[#64748B] block truncate font-medium">Paths With Hits</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Visitors Chart */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs">
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1 truncate">Daily Visitors</h3>
          <p className="text-xs text-[#64748B] mb-3 truncate">Unique visitor sessions each day</p>
          <MiniBarChart
            data={displayDays.map((d) => d.visitors)}
            maxVal={maxVisitors}
            color="#1D4ED8"
          />
          <div className="flex justify-between text-[10px] text-[#94A3B8] mt-1 font-semibold">
            <span>{displayDays[0]?.date}</span>
            <span>{displayDays[Math.floor(displayDays.length / 2)]?.date}</span>
            <span>{displayDays[displayDays.length - 1]?.date}</span>
          </div>
        </div>

        {/* Page Views Chart */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs">
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1 truncate">Daily Page Views</h3>
          <p className="text-xs text-[#64748B] mb-3 truncate">Recorded public page visits each day</p>
          <MiniBarChart
            data={displayDays.map((d) => d.pageViews ?? 0)}
            maxVal={maxPageViews}
            color="#10B981"
          />
          <div className="flex justify-between text-[10px] text-[#94A3B8] mt-1 font-semibold">
            <span>{displayDays[0]?.date}</span>
            <span>{displayDays[Math.floor(displayDays.length / 2)]?.date}</span>
            <span>{displayDays[displayDays.length - 1]?.date}</span>
          </div>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-[#E2E8F0] text-xs font-heading font-bold uppercase tracking-wider overflow-x-auto whitespace-nowrap">
          {(["overview", "countries", "browsers", "pages"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 capitalize transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-[#1D4ED8] text-[#1D4ED8] bg-[#EFF6FF]"
                  : "border-transparent text-[#64748B]"
              }`}
            >
              {tab === "overview" ? "Devices & OS" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-5">
          {/* Overview Tab: Devices + OS */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Devices */}
              <div>
                <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Device Types</h4>
                <div className="space-y-3">
                  {summary.devices.map((d) => (
                    <div key={d.name}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-2 font-semibold text-[#334155]">
                          <span className="text-[#1D4ED8]">{DEVICE_ICONS[d.name]}</span>
                          {d.name}
                        </div>
                        <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap shrink-0">{d.count} ({d.percentage}%)</span>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${d.percentage}%`, backgroundColor: d.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OS */}
              <div>
                <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Operating Systems</h4>
                <div className="space-y-3">
                  {summary.operatingSystems.slice(0, 5).map((os) => (
                    <div key={os.name}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-semibold text-[#334155]">{os.name}</span>
                        <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap shrink-0">{os.count} ({os.percentage}%)</span>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#8B5CF6] transition-all duration-500"
                          style={{ width: `${os.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Countries Tab */}
          {activeTab === "countries" && (
            <div>
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
                Visitor Countries ({summary.countries.length} total)
              </h4>
              {summary.countries.length === 0 ? (
                <p className="text-sm text-[#94A3B8] text-center py-4">No country data yet</p>
              ) : (
                <div className="space-y-2">
                  {summary.countries.slice(0, 10).map((c) => (
                    <div key={c.country} className="flex items-center gap-3">
                      <span className="text-xl w-8 text-center">{c.flag}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-0.5">
                          <span className="font-semibold text-[#334155]">{c.country}</span>
                          <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap shrink-0">{c.visitors} ({c.percentage}%)</span>
                        </div>
                        <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#1D4ED8] transition-all duration-500"
                            style={{ width: `${c.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Browsers Tab */}
          {activeTab === "browsers" && (
            <div>
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Browser Usage</h4>
              {summary.browsers.length === 0 ? (
                <p className="text-sm text-[#94A3B8] text-center py-4">No browser data yet</p>
              ) : (
                <div className="space-y-3">
                  {summary.browsers.map((b) => (
                    <div key={b.name}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-2 font-semibold text-[#334155]">
                          <span>{BROWSER_ICONS[b.name] || "🌐"}</span>
                          {b.name}
                        </div>
                        <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap shrink-0">{b.count} ({b.percentage}%)</span>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${b.percentage}%`, backgroundColor: b.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Pages Tab */}
          {activeTab === "pages" && (
            <div>
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Top Pages by Visits</h4>
              {summary.topPages.length === 0 ? (
                <p className="text-sm text-[#94A3B8] text-center py-4">No page data yet</p>
              ) : (
                <div className="space-y-2">
                  {summary.topPages.map((p, idx) => (
                    <div key={p.path} className="flex items-center gap-3 py-1.5 border-b border-[#F1F5F9] last:border-0">
                      <span className="text-[11px] font-black text-[#94A3B8] w-5 text-right">{idx + 1}</span>
                      <a
                        href={p.path}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-xs font-semibold text-[#1D4ED8] hover:underline font-mono truncate"
                      >
                        {p.path}
                      </a>
                      <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap">{p.count} visits</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Recent Hits Live Feed */}
      {summary.recentHits.length > 0 && (
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
              <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">Live Visitor Feed</h3>
            </div>
            <span className="text-xs text-[#64748B] font-semibold">Last {Math.min(summary.recentHits.length, 10)} hits</span>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {summary.recentHits.slice(0, 10).map((hit, i) => (
              <div key={i} className="px-5 py-2.5 flex items-center gap-3 text-xs transition-colors">
                <span className="text-base">{hit.flag || "🌍"}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[#0F172A] font-mono truncate block">{hit.path}</span>
                  <span className="text-[#64748B] block truncate">{hit.country} · {hit.browser} · {hit.device} · {hit.os}</span>
                </div>
                {hit.isCalculation && (
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    Inquiry / Lead
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
