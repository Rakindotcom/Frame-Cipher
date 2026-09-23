"use client";

import React, { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Eye, MousePointerClick, Search, Target, TrendingUp } from "lucide-react";

type Row = { key: string; clicks: number; impressions: number; ctr: number; position: number };
type Data = { connected: boolean; siteUrl?: string; startDate?: string; endDate?: string; message?: string; totals: { clicks: number; impressions: number; ctr: number; position: number }; queries: Row[]; pages: Row[] };
const empty: Data = { connected: false, totals: { clicks: 0, impressions: 0, ctr: 0, position: 0 }, queries: [], pages: [] };
const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });

export function SearchConsoleAnalytics() {
  const [data, setData] = useState<Data | null>(null);
  const [tab, setTab] = useState<"queries" | "pages">("queries");
  useEffect(() => { fetch("/api/search-console", { cache: "no-store" }).then((r) => r.json()).then(setData).catch(() => setData({ ...empty, message: "Unable to reach Search Console API." })); }, []);
  if (!data) return <div className="rounded-2xl border border-[#E2E8F0] bg-white p-10 text-center text-sm text-[#64748B]">Loading real Search Console data…</div>;
  const rows = tab === "queries" ? data.queries : data.pages;
  const cards = [
    ["Clicks", fmt(data.totals.clicks), MousePointerClick, "#1D4ED8"],
    ["Impressions", fmt(data.totals.impressions), Eye, "#7C3AED"],
    ["Average CTR", `${data.totals.ctr.toFixed(2)}%`, TrendingUp, "#0D9488"],
    ["Average position", data.totals.position ? data.totals.position.toFixed(1) : "—", Target, "#D97706"],
  ] as const;
  return (
    <div className="min-w-0 space-y-6 font-body">
      <div className={`rounded-2xl border p-4 sm:p-5 ${data.connected ? "border-[#BBF7D0] bg-[#F0FDF4]" : "border-[#FDE68A] bg-[#FFFBEB]"}`}>
        <div className="flex items-start gap-3">
          {data.connected ? <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16A34A]" /> : <AlertCircle className="h-5 w-5 shrink-0 text-[#B45309]" />}
          <div>
            <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              {data.connected ? "Search Console connected" : "Search Console not connected"}
            </h2>
            <p className="mt-1 break-words text-xs text-[#64748B]">
              {data.connected ? `${data.siteUrl} · ${data.startDate} to ${data.endDate}` : data.message}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map(([label, value, Icon, color]) => (
          <div key={label} className="min-w-0 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xs">
            <Icon className="mb-3 h-4 w-4" style={{ color }} />
            <div className="truncate text-2xl font-heading font-bold text-[#0F172A] tracking-tight">{value}</div>
            <div className="mt-1 text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">{label}</div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex flex-col gap-3 border-b border-[#F1F5F9] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h2 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">Search performance</h2>
            <p className="mt-1 text-xs text-[#64748B]">Only real telemetry returned by Google Search Console is shown.</p>
          </div>
          <div className="flex rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-1">
            <button
              onClick={() => setTab("queries")}
              className={`rounded-lg px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${tab === "queries" ? "bg-white text-[#1D4ED8] shadow-xs" : "text-[#64748B]"}`}
            >
              <Search className="mr-1 inline h-3.5 w-3.5" />Queries
            </button>
            <button
              onClick={() => setTab("pages")}
              className={`rounded-lg px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${tab === "pages" ? "bg-white text-[#1D4ED8] shadow-xs" : "text-[#64748B]"}`}
            >
              Pages
            </button>
          </div>
        </div>
        {rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-[#64748B]">
            {data.connected ? "No Search Console rows returned for this period." : "Connect Search Console to load queries and pages."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-xs">
              <thead className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569]">
                <tr>
                  <th className="px-4 py-3 min-w-[260px]">{tab === "queries" ? "Query" : "Page"}</th>
                  <th className="px-4 py-3 text-right min-w-[90px]">Clicks</th>
                  <th className="px-4 py-3 text-right min-w-[110px]">Impressions</th>
                  <th className="px-4 py-3 text-right min-w-[90px]">CTR</th>
                  <th className="px-4 py-3 text-right min-w-[90px]">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {rows.map((row) => (
                  <tr key={row.key}>
                    <td className="max-w-[420px] truncate px-4 py-3 font-semibold text-[#0F172A]">{row.key}</td>
                    <td className="px-4 py-3 text-right font-bold text-[#1D4ED8] font-mono">{fmt(row.clicks)}</td>
                    <td className="px-4 py-3 text-right text-[#64748B] font-mono">{fmt(row.impressions)}</td>
                    <td className="px-4 py-3 text-right font-semibold text-[#16A34A] font-mono">{row.ctr.toFixed(2)}%</td>
                    <td className="px-4 py-3 text-right font-semibold text-[#D97706] font-mono">{row.position.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
