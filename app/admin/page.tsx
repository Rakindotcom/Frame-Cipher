"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { RealAnalyticsDashboard } from "@/components/admin/analytics/RealAnalyticsDashboard";
import { FRAMECIPHER_REGISTRY } from "@/lib/registry/servicesRegistry";
import {
  Download,
  CheckCircle2,
  ExternalLink,
  Activity,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";

const PIAR_COLORS = ["#1D4ED8", "#8B5CF6", "#10B981", "#F59E0B", "#EC4899", "#0D9488"];

interface AgencyServiceRow {
  name: string;
  discipline: string;
  href: string;
  keyDeliverable: string;
  status: string;
}

const FRAMECIPHER_SERVICES: AgencyServiceRow[] = [
  {
    name: "Webflow Enterprise Architecture",
    discipline: "Webflow & Development",
    href: "/services/webflow-development",
    keyDeliverable: "Tokenized CSS, Multi-Locale, Sub-100ms LCP",
    status: "Active",
  },
  {
    name: "360° Full-Funnel Growth Marketing",
    discipline: "Growth & Acquisition",
    href: "/services/performance-marketing",
    keyDeliverable: "Paid Acquisition, CAC Optimization, 4.8x ROAS",
    status: "Active",
  },
  {
    name: "Kinetic UI/UX Design System",
    discipline: "UI/UX & Branding",
    href: "/services/branding-design",
    keyDeliverable: "Figma Tokens, Motion Choreography, Design System",
    status: "Active",
  },
  {
    name: "Technical & Programmatic B2B SEO",
    discipline: "Search Architecture",
    href: "/services/b2b-seo-agency",
    keyDeliverable: "Relational Schema, Topic Clusters, Link Velocity",
    status: "Active",
  },
  {
    name: "Brand Identity & Positioning System",
    discipline: "Brand Strategy",
    href: "/services/brand-positioning",
    keyDeliverable: "Category Narrative, Executive Positioning, Identity",
    status: "Active",
  },
];

interface MetricPill {
  text: string;
  className: string;
}

const pillStyles = {
  green: "bg-[#DCFCE7] text-[#16A34A]",
  sky: "bg-[#E0F2FE] text-[#0284C7]",
  purple: "bg-[#F5F3FF] text-[#8B5CF6] font-mono",
  slate: "bg-[#F1F5F9] text-[#64748B]",
};

function DashboardMetric({
  label,
  value,
  icon: Icon,
  topBarClass,
  iconClass,
  pills,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  topBarClass: string;
  iconClass: string;
  pills: MetricPill[];
}) {
  return (
    <div className="relative rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col justify-between min-w-0">
      <div className={`h-1 w-full ${topBarClass}`} />
      <div className="p-5 pt-4 flex flex-col justify-between flex-1 min-w-0 gap-4">
        <div className="flex items-start justify-between gap-3 min-w-0">
          <span
            title={label}
            className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] truncate"
          >
            {label}
          </span>
          <div
            className={`h-9 w-9 shrink-0 rounded-xl border flex items-center justify-center shadow-xs ${iconClass}`}
          >
            <Icon className="h-4 w-4" />
          </div>
        </div>

        <div className="min-w-0">
          <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight truncate" title={value}>
            {value}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          {pills.map((pill, i) => (
            <span
              key={i}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${pill.className}`}
            >
              {pill.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [inquiryCount, setInquiryCount] = useState<number | null>(null);
  const [liveVisitors, setLiveVisitors] = useState<number>(0);
  const [lifetimeVisitors, setLifetimeVisitors] = useState<number>(0);
  const [gsc, setGsc] = useState<{ clicks: number; impressions: number; ctr: number } | null>(null);

  useEffect(() => {
    const loadLiveStats = () => {
      fetch("/api/analytics?days=28", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data && data.success) {
            if (typeof data.liveVisitors === "number") setLiveVisitors(data.liveVisitors);
            if (typeof data.lifetimeVisitors === "number") setLifetimeVisitors(data.lifetimeVisitors);
            if (typeof data.totalCalculations === "number") setInquiryCount(data.totalCalculations);
          }
        })
        .catch(() => {});

      fetch("/api/search-console", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data && data.totals) {
            setGsc({
              clicks: data.totals.clicks ?? 0,
              impressions: data.totals.impressions ?? 0,
              ctr: data.totals.ctr ?? 0,
            });
          } else {
            setGsc(null);
          }
        })
        .catch(() => setGsc(null));
    };

    loadLiveStats();
    const interval = setInterval(loadLiveStats, 30_000);
    return () => clearInterval(interval);
  }, []);

  const totalInquiries = inquiryCount ?? 0;

  const pillarSegments = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of FRAMECIPHER_REGISTRY) {
      if (item.type !== "Service") continue;
      counts.set(item.category, (counts.get(item.category) || 0) + 1);
    }
    const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
    return { total, rows: [...counts.entries()].sort((a, b) => b[1] - a[1]) };
  }, []);

  const metrics = [
    {
      label: "Live Tracing (Active Now)",
      value: `${liveVisitors} Active`,
      icon: Activity,
      topBarClass: "bg-[#16A34A]",
      iconClass: "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]",
      pills: [
        { text: "🟢 Live Tracing", className: pillStyles.green },
        { text: "Active in last 5m", className: pillStyles.slate },
      ],
    },
    {
      label: "Lifetime Unique Visitors",
      value: `${lifetimeVisitors.toLocaleString()} Sessions`,
      icon: Users,
      topBarClass: "bg-[#1D4ED8]",
      iconClass: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]",
      pills: [
        { text: "Firestore Telemetry", className: pillStyles.sky },
        { text: "Unique session IDs", className: pillStyles.slate },
      ],
    },
    {
      label: "Google Search Console",
      value: gsc ? `${gsc.clicks.toLocaleString()} Clicks` : "Not Connected",
      icon: TrendingUp,
      topBarClass: "bg-[#7C3AED]",
      iconClass: "bg-[#F5F3FF] border-[#DDD6FE] text-[#7C3AED]",
      pills: gsc
        ? [
            { text: `${gsc.impressions.toLocaleString()} Imp`, className: pillStyles.purple },
            { text: `${gsc.ctr}% CTR`, className: pillStyles.green },
          ]
        : [
            { text: "No GSC data", className: pillStyles.slate },
            { text: "Check service account", className: pillStyles.slate },
          ],
    },
    {
      label: "Client Inquiries & Leads",
      value: inquiryCount === null ? "N/A" : `${totalInquiries} Leads`,
      icon: Zap,
      topBarClass: "bg-[#0D9488]",
      iconClass: "bg-[#CCFBF1] border-[#99F6E4] text-[#0D9488]",
      pills: [
        { text: "100% Inbound", className: pillStyles.green },
        { text: "Lead Velocity", className: pillStyles.slate },
      ],
    },
  ];

  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Service Name,Strategic Pillar,Route,Key Deliverable,Status"]
        .concat(
          FRAMECIPHER_SERVICES.map(
            (s) => `"${s.name}","${s.discipline}","${s.href}","${s.keyDeliverable}","${s.status}"`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "framecipher_services_registry.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      {/* Header */}
      <AdminHeader
        title="Executive Dashboard"
        subtitle="FrameCipher growth telemetry, agency services engine, and client conversion analytics"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* TOP ROW: 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <DashboardMetric key={m.label} {...m} />
          ))}
        </div>

        {/* REAL FIRESTORE & TELEMETRY SECTION */}
        <RealAnalyticsDashboard liveCount={liveVisitors} lifetimeCount={lifetimeVisitors} />

        {/* SEARCH CONSOLE TELEMETRY BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#064E3B] p-5 sm:p-6 text-white shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 border border-neutral-800">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 uppercase tracking-wider">
                Google Search Console
              </span>
              <span className="text-xs text-slate-300 font-mono truncate">framecipher.info</span>
            </div>
            <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider truncate">
              Organic Search Queries &amp; Keyword Velocity
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              {gsc
                ? `Real organic impressions, clicks (${gsc.clicks.toLocaleString()}), CTR (${gsc.ctr}%), and keyword ranking positions across all FrameCipher service hubs and blog articles.`
                : "Search Console is not connected. Add GSC_SERVICE_ACCOUNT_EMAIL and GSC_PRIVATE_KEY to the deployment environment to load real organic search data."}
            </p>
          </div>
          <Link
            href="/admin/search-console"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F172A] text-xs font-heading font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0 shadow-sm"
          >
            <span>Inspect Search Console</span>
            <ExternalLink className="h-3.5 w-3.5 text-[#0F172A]" />
          </Link>
        </div>

        {/* BOTTOM ROW: Top Agency Services (Left) + Discipline Distribution Donut (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bottom Left: FrameCipher Core Services Table */}
          <div className="lg:col-span-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 border-b border-[#F1F5F9]">
              <div className="min-w-0">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] truncate">
                  Core Agency Services &amp; Growth Engines
                </h3>
                <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                  High-velocity service hubs for enterprise conversion
                </p>
              </div>
              <button
                onClick={handleExportCSV}
                className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-[#1D4ED8] px-3.5 py-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#DBEAFE] transition-colors self-start sm:self-auto"
              >
                <span>Export Registry</span>
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[700px]">
                <thead className="bg-[#F8FAFC] text-[11px] text-[#475569] uppercase font-heading font-bold tracking-wider border-b border-[#E2E8F0]">
                  <tr>
                    <th className="py-3 px-6 min-w-[220px]">Service Engine</th>
                    <th className="py-3 pr-3 min-w-[160px]">Strategic Pillar</th>
                    <th className="py-3 px-3 min-w-[230px]">Key Architecture / Deliverable</th>
                    <th className="py-3 pl-3 pr-6 text-right min-w-[90px]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] text-[#334155]">
                  {FRAMECIPHER_SERVICES.map((item) => (
                    <tr key={item.name} className="transition-colors hover:bg-[#F8FAFC]">
                      <td className="py-3.5 pl-6 pr-4 whitespace-nowrap">
                        <Link
                          href={item.href}
                          target="_blank"
                          className="font-semibold text-[#0F172A] flex items-center gap-1.5 group"
                        >
                          <span className="truncate max-w-[230px]">{item.name}</span>
                          <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-[#1D4ED8] transition-colors shrink-0" />
                        </Link>
                      </td>
                      <td className="py-3.5 pr-3 whitespace-nowrap">
                        <span className="text-[11px] font-bold text-[#8B5CF6] bg-[#F5F3FF] px-2.5 py-0.5 rounded-full border border-[#DDD6FE]">
                          {item.discipline}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-[#64748B] text-[11px] font-medium whitespace-nowrap">
                        {item.keyDeliverable}
                      </td>
                      <td className="py-3.5 pl-3 pr-6 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Right: Pillar Distribution, computed from the real service registry */}
          <div className="lg:col-span-4 rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs flex flex-col justify-between min-w-0">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#F1F5F9]">
              <div className="min-w-0">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] truncate">
                  Pillar Distribution
                </h3>
                <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                  {pillarSegments.total} services across {pillarSegments.rows.length} disciplines
                </p>
              </div>
            </div>

            <div className="my-6 flex items-center justify-center">
              <div className="w-44 sm:w-48 h-44 sm:h-48 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  {(() => {
                    const circumference = 2 * Math.PI * 36;
                    let offset = 0;
                    return pillarSegments.rows.map(([pillar, count], index) => {
                      const share = pillarSegments.total > 0 ? count / pillarSegments.total : 0;
                      const dash = share * circumference;
                      const circle = (
                        <circle
                          key={pillar}
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke={PIAR_COLORS[index % PIAR_COLORS.length]}
                          strokeWidth="16"
                          strokeDasharray={`${dash} ${circumference - dash}`}
                          strokeDashoffset={-offset}
                        />
                      );
                      offset += dash;
                      return circle;
                    });
                  })()}
                </svg>

                <div className="absolute inset-0 m-auto w-24 h-16 rounded-xl bg-white border border-[#CBD5E1] flex flex-col items-center justify-center shadow-md pointer-events-none">
                  <span className="text-lg font-heading font-bold text-[#0F172A]">
                    {pillarSegments.total}
                  </span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#64748B]">
                    Services
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#F1F5F9] text-xs">
              {pillarSegments.rows.map(([pillar, count], index) => (
                <div key={pillar} className="flex items-center gap-2 min-w-0">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: PIAR_COLORS[index % PIAR_COLORS.length] }}
                  />
                  <span className="text-[#334155] font-semibold truncate">
                    {pillar} ({count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}