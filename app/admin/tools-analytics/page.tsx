"use client";

import React, { useState, useMemo, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MetricCard } from "@/components/admin/MetricCard";
import { RealAnalyticsDashboard } from "@/components/admin/analytics/RealAnalyticsDashboard";
import { FRAMECIPHER_REGISTRY } from "@/lib/registry/servicesRegistry";
import { getFirestoreAnalyticsSummary, AnalyticsSummary } from "@/lib/analytics/firestore-analytics";
import {
  Activity,
  Briefcase,
  Layers,
  Search,
  ExternalLink,
  Users,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function ServicesAnalyticsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    getFirestoreAnalyticsSummary(28).then(setAnalytics).catch(() => {});
  }, []);

  const totalServices = useMemo(
    () => FRAMECIPHER_REGISTRY.filter((item) => item.type === "Service").length,
    []
  );
  const totalCaseStudies = useMemo(
    () => FRAMECIPHER_REGISTRY.filter((item) => item.type === "Case Study").length,
    []
  );

  const filteredItems = useMemo(() => {
    return FRAMECIPHER_REGISTRY.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType === "all" || item.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [search, selectedType]);

  const totalInquiries = analytics?.totalCalculations || 0;
  const totalVisitors = analytics?.totalVisitors || 0;
  const conversionRate = totalVisitors > 0
    ? `${((totalInquiries / totalVisitors) * 100).toFixed(1)}%`
    : "0.0%";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Services &amp; Case Studies Analytics"
        subtitle={`Real-time traffic, engagement duration, and audit lead conversions across all ${totalServices} service hubs and ${totalCaseStudies} case studies`}
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Total Active Services"
            value={totalServices}
            icon={Briefcase}
          />
          <MetricCard
            label="Client Inquiries (28D)"
            value={totalInquiries}
            icon={Users}
          />
          <MetricCard
            label="Active Case Studies"
            value={totalCaseStudies}
            icon={Activity}
          />
          <MetricCard
            label="Inquiry Conversion Rate"
            value={conversionRate}
            icon={TrendingUp}
          />
        </div>

        {/* Real-time telemetry overview */}
        <RealAnalyticsDashboard />

        {/* Filter and Table of Services */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-[#0F172A]">Service Hub Performance Matrix</h3>
              <p className="text-xs text-[#64748B]">Traffic, conversion rates, and client interest by discipline</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="h-4 w-4 absolute left-3 top-3 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search service..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-[#CBD5E1] focus:ring-2 focus:ring-[#A855F7]"
                />
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs border border-[#CBD5E1] bg-white text-[#0F172A]"
              >
                <option value="all">All Types</option>
                <option value="Service">Services (74)</option>
                <option value="Case Study">Case Studies (13)</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] font-bold">
                <tr>
                  <th className="py-3 px-4">Title &amp; Route</th>
                  <th className="py-3 px-4">Discipline</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {filteredItems.slice(0, 40).map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC]">
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#0F172A]">{item.title}</div>
                      <div className="font-mono text-[10px] text-[#64748B]">{item.href}</div>
                    </td>
                    <td className="py-3 px-4 text-[#475569]">{item.category}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-[#F3E8FF] text-[#A855F7] font-bold text-[10px]">
                        {item.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A] font-bold text-[10px]">
                        Indexed
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-[#1D4ED8] hover:underline font-bold text-xs inline-flex items-center gap-1"
                      >
                        <span>View</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
