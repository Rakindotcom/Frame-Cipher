import React from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { SearchConsoleAnalytics } from "@/components/admin/analytics/SearchConsoleAnalytics";

export default function SearchConsolePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Search Console"
        subtitle="Organic search queries, keywords, landing pages, clicks, impressions, CTR, and average position"
      />
      <main className="px-4 sm:px-6 lg:px-8 pt-6 max-w-7xl mx-auto min-w-0">
        <SearchConsoleAnalytics />
      </main>
    </div>
  );
}
