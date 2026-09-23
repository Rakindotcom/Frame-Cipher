"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { RealAnalyticsDashboard } from "@/components/admin/analytics/RealAnalyticsDashboard";
import {
  MoreVertical,
  Download,
  CheckCircle2,
  ExternalLink,
  Layers,
  Activity,
  TrendingUp,
  Zap,
} from "lucide-react";

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
  const [inquiryCount, setInquiryCount] = useState<number>(0);

  useEffect(() => {
    try {
      const history = localStorage.getItem("framecipher_inquiry_history");
      if (history) {
        const parsed = JSON.parse(history);
        if (Array.isArray(parsed)) {
          setInquiryCount(parsed.length);
        }
      }
    } catch {}
  }, []);

  const totalInquiries = inquiryCount;

  const metrics = [
    {
      label: "Active Service Hubs",
      value: "74+",
      icon: Layers,
      topBarClass: "bg-[#1D4ED8]",
      iconClass: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]",
      pills: [
        { text: "100% Active", className: pillStyles.green },
        { text: "7 Growth Pillars", className: pillStyles.slate },
      ],
    },
    {
      label: "Static Landing Pages",
      value: "120+",
      icon: Zap,
      topBarClass: "bg-[#0284C7]",
      iconClass: "bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7]",
      pills: [
        { text: "Next.js 16 SSG", className: pillStyles.sky },
        { text: "Zero TTFB", className: pillStyles.slate },
      ],
    },
    {
      label: "Client Inquiries & Leads",
      value: totalInquiries.toLocaleString(),
      icon: TrendingUp,
      topBarClass: "bg-[#16A34A]",
      iconClass: "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]",
      pills: [
        { text: "Live Inquiries", className: pillStyles.green },
        { text: "Audit Runs", className: pillStyles.slate },
      ],
    },
    {
      label: "Platform Performance",
      value: "99.8%",
      icon: Activity,
      topBarClass: "bg-[#8B5CF6]",
      iconClass: "bg-[#F5F3FF] border-[#DDD6FE] text-[#8B5CF6]",
      pills: [
        { text: "Kinetic ISR", className: pillStyles.purple },
        { text: "Enterprise CDN", className: pillStyles.slate },
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
        <RealAnalyticsDashboard />

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

          {/* Bottom Right: Pillar Distribution Donut Chart */}
          <div className="lg:col-span-4 rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs flex flex-col justify-between min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#F1F5F9]">
              <div className="min-w-0">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] truncate">
                  Pillar Distribution
                </h3>
                <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                  74 services across 5 disciplines
                </p>
              </div>
              <button className="text-[#94A3B8] p-1.5 rounded-lg shrink-0" title="Options">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            {/* SVG Donut Chart with Center Pill */}
            <div className="my-6 flex items-center justify-center">
              <div className="w-44 sm:w-48 h-44 sm:h-48 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  {/* Segment 1: Webflow & Dev (24/74 = 32.4%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#1D4ED8"
                    strokeWidth="16"
                    strokeDasharray="73.3 153"
                    strokeDashoffset="0"
                  />
                  {/* Segment 2: Growth & Paid Ads (16/74 = 21.6%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#8B5CF6"
                    strokeWidth="16"
                    strokeDasharray="48.9 177"
                    strokeDashoffset="-73.3"
                  />
                  {/* Segment 3: UI/UX & Design Systems (14/74 = 18.9%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#10B981"
                    strokeWidth="16"
                    strokeDasharray="42.8 183"
                    strokeDashoffset="-122.2"
                  />
                  {/* Segment 4: Enterprise SEO (12/74 = 16.2%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#F59E0B"
                    strokeWidth="16"
                    strokeDasharray="36.6 189"
                    strokeDashoffset="-165"
                  />
                  {/* Segment 5: Brand Strategy (8/74 = 10.8%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#EC4899"
                    strokeWidth="16"
                    strokeDasharray="24.4 202"
                    strokeDashoffset="-201.6"
                  />
                </svg>

                {/* Center Badge: 74 Services */}
                <div className="absolute inset-0 m-auto w-24 h-16 rounded-xl bg-white border border-[#CBD5E1] flex flex-col items-center justify-center shadow-md pointer-events-none">
                  <span className="text-lg font-heading font-bold text-[#0F172A]">74</span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#64748B]">
                    Services
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Strategic Pillar Breakdown */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#F1F5F9] text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1D4ED8] shrink-0" />
                <span className="text-[#334155] font-semibold truncate">Webflow (24)</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6] shrink-0" />
                <span className="text-[#334155] font-semibold truncate">Growth Ads (16)</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] shrink-0" />
                <span className="text-[#334155] font-semibold truncate">UI/UX (14)</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B] shrink-0" />
                <span className="text-[#334155] font-semibold truncate">B2B SEO (12)</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EC4899] shrink-0" />
                <span className="text-[#334155] font-semibold truncate">Brand (8)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}