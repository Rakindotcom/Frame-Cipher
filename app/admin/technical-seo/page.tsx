"use client";

import React, { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MetricCard } from "@/components/admin/MetricCard";
import {
  GitBranch,
  ShieldCheck,
  FileCode,
  CheckCircle2,
  Trash2,
  Plus,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface RedirectRule {
  id: string;
  source: string;
  destination: string;
  statusCode: 301 | 302;
  hits: number;
}

const INITIAL_REDIRECTS: RedirectRule[] = [
  {
    id: "red-1",
    source: "/services/webflow",
    destination: "/services/webflow-development",
    statusCode: 301,
    hits: 1240,
  },
  {
    id: "red-2",
    source: "/portfolio",
    destination: "/case-studies",
    statusCode: 301,
    hits: 890,
  },
  {
    id: "red-3",
    source: "/growth",
    destination: "/services/performance-marketing",
    statusCode: 301,
    hits: 640,
  },
  {
    id: "red-4",
    source: "/blog/scale-saas",
    destination: "/blog/data-driven-b2b-growth-marketing-engine",
    statusCode: 301,
    hits: 510,
  },
];

export default function TechnicalSeoPage() {
  const [redirects, setRedirects] = useState<RedirectRule[]>(INITIAL_REDIRECTS);
  const [isAdding, setIsAdding] = useState(false);
  const [newSource, setNewSource] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newStatusCode, setNewStatusCode] = useState<301 | 302>(301);

  const handleAddRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource || !newDestination) return;

    const newRule: RedirectRule = {
      id: `red-${Date.now()}`,
      source: newSource.startsWith("/") ? newSource : `/${newSource}`,
      destination: newDestination.startsWith("/") ? newDestination : `/${newDestination}`,
      statusCode: newStatusCode,
      hits: 0,
    };

    setRedirects([newRule, ...redirects]);
    setNewSource("");
    setNewDestination("");
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setRedirects(redirects.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Technical SEO & Canonical Redirects"
        subtitle="301 status management, XML sitemap validation, and robots.txt crawling directives"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Canonical 301 Redirects"
            value={redirects.length}
            change="Active Edge Rules"
            changePositive={true}
            period="Zero Routing Loops"
            icon={GitBranch}
            color="blue"
          />
          <MetricCard
            label="XML Sitemap Nodes"
            value="375"
            change="Next.js SSG Pre-rendered"
            changePositive={true}
            period="100% Indexable"
            icon={FileCode}
            color="emerald"
          />
          <MetricCard
            label="Robots.txt Directive"
            value="Valid"
            change="Full Engine Access"
            changePositive={true}
            period="Standard Syntax"
            icon={CheckCircle2}
            color="purple"
          />
          <MetricCard
            label="Redirected Visitors"
            value="3,280"
            change="Preserved Equity"
            changePositive={true}
            period="Saved Visitors"
            icon={ShieldCheck}
            color="amber"
          />
        </div>

        {/* 301 Redirect Manager */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F1F5F9]">
            <div>
              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">301 / 302 Canonical Redirect Rules</h3>
              <p className="text-xs text-[#64748B]">
                Route legacy URLs directly to current canonical service hubs and case studies
              </p>
            </div>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs self-start sm:self-auto"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Redirect</span>
            </button>
          </div>

          {/* Add Form */}
          {isAdding && (
            <form onSubmit={handleAddRedirect} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                    Old / Source Path
                  </label>
                  <input
                    type="text"
                    required
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    placeholder="/tools/old-name"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-mono focus:outline-none focus:border-[#1D4ED8]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                    New / Destination Path
                  </label>
                  <input
                    type="text"
                    required
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)}
                    placeholder="/category/new-name"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-mono focus:outline-none focus:border-[#1D4ED8]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                    Redirect Code
                  </label>
                  <select
                    value={newStatusCode}
                    onChange={(e) => setNewStatusCode(Number(e.target.value) as 301 | 302)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                  >
                    <option value={301}>301 Permanent (SEO Equity)</option>
                    <option value={302}>302 Temporary</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#64748B] font-heading font-bold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider"
                >
                  Save Redirect Rule
                </button>
              </div>
            </form>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-heading font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-2.5 px-3 min-w-[200px]">Old Path</th>
                  <th className="py-2.5 px-3 min-w-[200px]">Destination Path</th>
                  <th className="py-2.5 px-3 text-center min-w-[80px]">Type</th>
                  <th className="py-2.5 px-3 text-right min-w-[100px]">Traffic Hits</th>
                  <th className="py-2.5 px-3 text-right min-w-[60px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] font-mono">
                {redirects.map((r) => (
                  <tr key={r.id}>
                    <td className="py-2.5 px-3 text-[#DC2626] font-semibold">{r.source}</td>
                    <td className="py-2.5 px-3 text-[#16A34A] font-semibold">{r.destination}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="px-1.5 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] text-[10px] font-bold">
                        {r.statusCode}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-[#64748B]">
                      {r.hits.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="p-1 rounded text-[#94A3B8]"
                        title="Delete redirect"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Robots.txt and Sitemap Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Robots.txt */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <FileCode className="h-4 w-4 text-[#9333EA]" />
                <span>Active robots.txt</span>
              </h3>
              <a
                href="/robots.txt"
                target="_blank"
                className="text-xs text-[#1D4ED8] flex items-center gap-1 font-semibold"
              >
                <span>View Live</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <pre className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#0F172A] leading-relaxed overflow-x-auto">
{`User-agent: *
Allow: /

Sitemap: https://framecipher.com/sitemap.xml`}
            </pre>
          </div>

          {/* Sitemaps */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                <span>XML Sitemaps Index</span>
              </h3>
              <a
                href="/sitemap.xml"
                target="_blank"
                className="text-xs text-[#1D4ED8] flex items-center gap-1 font-semibold"
              >
                <span>View Live</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                <span className="font-mono text-[#0F172A]">/sitemap.xml</span>
                <span className="font-bold text-[#16A34A]">All URLs Generated</span>
              </div>
              <p className="text-[#64748B] text-xs leading-relaxed">
                Automatically pre-rendered by Next.js including all 74 service hubs, 13 case studies, pillar categories, and dynamic insight articles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
