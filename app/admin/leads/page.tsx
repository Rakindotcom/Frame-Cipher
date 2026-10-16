"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  getAdminInquiriesFromFirestore,
  updateInquiryStatusInFirestore,
  deleteInquiryFromFirestore,
} from "@/lib/firebase";
import {
  Inbox,
  Search,
  Filter,
  Download,
  RefreshCw,
  Phone,
  Mail,
  MessageSquare,
  Trash2,
  CheckCircle2,
  Clock,
  Calendar,
  AlertCircle,
  ExternalLink,
  Building,
  User,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export interface InquiryLead {
  id: string;
  collection: "studio_bookings" | "contact_leads" | "contacts" | "contact_messages";
  type: "studio_booking" | "contact";
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  date?: string;
  duration?: string;
  brief?: string;
  details?: string;
  status: "new" | "contacted" | "booked" | "archived";
  createdAt: string;
  adminNotes?: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<InquiryLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "studio_booking" | "contact">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "booked" | "archived">("all");
  const [selectedLead, setSelectedLead] = useState<InquiryLead | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchLeads = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const leadsMap = new Map<string, InquiryLead>();

      // 1. Authenticated Firestore fetch using logged-in Admin credentials
      try {
        const rawDocs = await getAdminInquiriesFromFirestore();
        rawDocs.forEach((d) => {
          if (d.collection === "contact_messages") {
            const msg = d.message || "";
            const isStudio = msg.includes("[STUDIO BOOKING]");

            let service = isStudio ? "Studio Production" : "Agency Contact";
            let phone = "";
            let date = "";
            let duration = "";
            let brief = msg;
            let company = "";
            let budget = "";
            let timeline = "";

            msg.split("\n").forEach((line: string) => {
              if (line.startsWith("Service:")) service = line.replace("Service:", "").trim();
              if (line.startsWith("Phone:")) phone = line.replace("Phone:", "").trim();
              if (line.startsWith("Target Date:")) date = line.replace("Target Date:", "").trim();
              if (line.startsWith("Date:")) date = line.replace("Date:", "").trim();
              if (line.startsWith("Duration:")) duration = line.replace("Duration:", "").trim();
              if (line.startsWith("Brief:")) brief = line.replace("Brief:", "").trim();
              if (line.startsWith("Details:")) brief = line.replace("Details:", "").trim();
              if (line.startsWith("Company:")) company = line.replace("Company:", "").trim();
              if (line.startsWith("Budget:")) budget = line.replace("Budget:", "").trim();
              if (line.startsWith("Timeline:")) timeline = line.replace("Timeline:", "").trim();
            });

            leadsMap.set(d.id, {
              id: d.id,
              collection: "contact_messages",
              type: isStudio ? "studio_booking" : "contact",
              name: d.name || "Client",
              email: d.email || "",
              phone: phone,
              company: company,
              service: service,
              date: date,
              duration: duration,
              budget: budget,
              timeline: timeline,
              brief: brief,
              status: d.status || "new",
              createdAt: d.createdAt || new Date().toISOString(),
              adminNotes: d.adminNotes || "",
            });
          } else if (d.collection === "studio_bookings") {
            leadsMap.set(d.id, {
              id: d.id,
              collection: "studio_bookings",
              type: "studio_booking",
              name: d.name || "Client",
              email: d.email || "",
              phone: d.phone || "",
              service: d.service || "Studio Session",
              date: d.date || "",
              duration: d.duration || "",
              brief: d.brief || d.details || "",
              status: d.status || "new",
              createdAt: d.createdAt || new Date().toISOString(),
              adminNotes: d.adminNotes || "",
            });
          } else {
            leadsMap.set(d.id, {
              id: d.id,
              collection: d.collection,
              type: "contact",
              name: d.name || "Client",
              company: d.company || "",
              email: d.email || "",
              phone: d.phone || "",
              service: d.serviceNeeded || d.service || "Agency Service",
              budget: d.budgetRange || d.budget || "",
              timeline: d.timeline || "",
              details: d.details || d.brief || "",
              status: d.status || "new",
              createdAt: d.createdAt || (d.timestamp?.toDate ? d.timestamp.toDate().toISOString() : new Date().toISOString()),
              adminNotes: d.adminNotes || "",
            });
          }
        });
      } catch (err) {
        console.warn("Direct Firestore fetch error:", err);
      }

      // 2. Fetch from server API endpoint as supplement
      try {
        const res = await fetch("/api/inquiries", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json.leads)) {
            json.leads.forEach((l: InquiryLead) => {
              if (l.id && !leadsMap.has(l.id)) leadsMap.set(l.id, l);
            });
          }
        }
      } catch (apiErr) {
        console.warn("API inquiries fetch error:", apiErr);
      }

      // Deduplicate leads across collections (e.g. contact_leads vs contact_messages duplicates)
      const collectionPriority: Record<string, number> = {
        studio_bookings: 1,
        contact_leads: 2,
        contacts: 3,
        contact_messages: 4,
      };

      const sortedRaw = Array.from(leadsMap.values()).sort((a, b) => {
        const timeA = new Date(a.createdAt || 0).getTime();
        const timeB = new Date(b.createdAt || 0).getTime();
        const timeDiff = timeB - timeA;
        if (Math.abs(timeDiff) > 5 * 60 * 1000) return timeDiff;
        return (collectionPriority[a.collection] || 99) - (collectionPriority[b.collection] || 99);
      });

      const deduplicated: InquiryLead[] = [];
      const seenSignatures = new Set<string>();

      for (const item of sortedRaw) {
        const cleanName = (item.name || "").trim().toLowerCase();
        const cleanEmail = (item.email || "").trim().toLowerCase();
        const cleanPhone = (item.phone || "").replace(/\D/g, "");
        const timeBucket = Math.floor(new Date(item.createdAt || 0).getTime() / (5 * 60 * 1000));

        const contactIdentifier = cleanEmail && !cleanEmail.includes("framecipher.com")
          ? cleanEmail
          : cleanPhone || cleanName;

        const signature = `${cleanName}|${contactIdentifier}|${timeBucket}`;
        if (contactIdentifier && seenSignatures.has(signature)) {
          continue; // skip duplicate entry
        }
        if (contactIdentifier) {
          seenSignatures.add(signature);
        }
        deduplicated.push(item);
      }

      setLeads(deduplicated);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleStatusChange = async (lead: InquiryLead, newStatus: InquiryLead["status"]) => {
    setUpdatingId(lead.id);
    try {
      await updateInquiryStatusInFirestore(lead.id, lead.collection, newStatus);
      await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: lead.id,
          collection: lead.collection,
          status: newStatus,
        }),
      }).catch(() => {});

      setLeads((prev) =>
        prev.map((item) => (item.id === lead.id ? { ...item, status: newStatus } : item))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (lead: InquiryLead) => {
    if (!confirm(`Are you sure you want to permanently delete inquiry from "${lead.name}"?`)) return;

    setUpdatingId(lead.id);
    try {
      await deleteInquiryFromFirestore(lead.id, lead.collection);
      await fetch(`/api/inquiries?id=${lead.id}&collection=${lead.collection}`, {
        method: "DELETE",
      }).catch(() => {});

      setLeads((prev) => prev.filter((item) => item.id !== lead.id));
      if (selectedLead?.id === lead.id) setSelectedLead(null);
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
      alert("Could not delete inquiry. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return alert("No inquiries to export.");

    const headers = [
      "ID",
      "Type",
      "Name",
      "Company",
      "Email",
      "Phone",
      "Service",
      "Budget / Duration",
      "Date / Timeline",
      "Brief / Details",
      "Status",
      "Created At",
    ];

    const rows = leads.map((l) => [
      l.id,
      l.type === "studio_booking" ? "Studio Booking" : "Contact Brief",
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.company || "").replace(/"/g, '""')}"`,
      `"${(l.email || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.service || "").replace(/"/g, '""')}"`,
      `"${(l.type === "studio_booking" ? l.duration : l.budget || "").replace(/"/g, '""')}"`,
      `"${(l.type === "studio_booking" ? l.date : l.timeline || "").replace(/"/g, '""')}"`,
      `"${(l.brief || l.details || "").replace(/"/g, '""')}"`,
      l.status,
      l.createdAt || "",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `framecipher_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cleanPhoneForWhatsApp = (phoneStr?: string) => {
    if (!phoneStr) return "";
    let cleaned = phoneStr.replace(/[^0-9]/g, "");
    if (cleaned.startsWith("01")) cleaned = "88" + cleaned;
    return cleaned;
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Type filter
      if (typeFilter !== "all" && lead.type !== typeFilter) return false;
      // Status filter
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      // Search filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchName = lead.name?.toLowerCase().includes(q);
        const matchEmail = lead.email?.toLowerCase().includes(q);
        const matchPhone = lead.phone?.toLowerCase().includes(q);
        const matchCompany = lead.company?.toLowerCase().includes(q);
        const matchService = lead.service?.toLowerCase().includes(q);
        const matchDetails = (lead.brief || lead.details || "").toLowerCase().includes(q);
        if (!matchName && !matchEmail && !matchPhone && !matchCompany && !matchService && !matchDetails) {
          return false;
        }
      }
      return true;
    });
  }, [leads, typeFilter, statusFilter, searchQuery]);

  // Metrics
  const totalCount = leads.length;
  const newCount = leads.filter((l) => l.status === "new").length;
  const studioCount = leads.filter((l) => l.type === "studio_booking").length;
  const contactCount = leads.filter((l) => l.type === "contact").length;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AdminHeader
        title="Leads & Bookings"
        subtitle="Manage client brief submissions and FrameCipher Studio session requests"
      />

      <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Total Inquiries</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] mt-1">{totalCount}</h3>
            </div>
            <div className="h-11 w-11 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center">
              <Inbox className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">New / Unread</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#DC2626] mt-1">{newCount}</h3>
            </div>
            <div className="h-11 w-11 rounded-lg bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Studio Bookings</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#7C3AED] mt-1">{studioCount}</h3>
            </div>
            <div className="h-11 w-11 rounded-lg bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Contact Briefs</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0284C7] mt-1">{contactCount}</h3>
            </div>
            <div className="h-11 w-11 rounded-lg bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search by client name, email, phone, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-[#CBD5E1] rounded-lg bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:border-[#1D4ED8] focus:outline-none"
            />
          </div>

          {/* Filters & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Type selector */}
            <div className="inline-flex rounded-lg border border-[#CBD5E1] p-0.5 bg-[#F8FAFC]">
              <button
                onClick={() => setTypeFilter("all")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  typeFilter === "all" ? "bg-white text-[#0F172A] shadow-xs" : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                All ({leads.length})
              </button>
              <button
                onClick={() => setTypeFilter("studio_booking")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  typeFilter === "studio_booking" ? "bg-white text-[#7C3AED] shadow-xs font-semibold" : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                Studio ({studioCount})
              </button>
              <button
                onClick={() => setTypeFilter("contact")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  typeFilter === "contact" ? "bg-white text-[#0284C7] shadow-xs font-semibold" : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                Contact ({contactCount})
              </button>
            </div>

            {/* Status dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="text-xs border border-[#CBD5E1] rounded-lg px-3 py-2 bg-[#F8FAFC] text-[#0F172A] font-medium focus:bg-white focus:border-[#1D4ED8] focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">🔴 New / Unread</option>
              <option value="contacted">🟡 In Discussion / Contacted</option>
              <option value="booked">🟢 Booked / Won</option>
              <option value="archived">⚪ Archived</option>
            </select>

            {/* Refresh */}
            <button
              onClick={() => fetchLeads(true)}
              disabled={refreshing}
              title="Refresh Inquiries"
              className="p-2 border border-[#CBD5E1] rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin text-[#1D4ED8]" : ""}`} />
            </button>

            {/* Export CSV */}
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#0F172A] text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-[#1D4ED8]" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Inquiries Content Table */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-[#64748B] space-y-3">
              <RefreshCw className="h-8 w-8 animate-spin text-[#1D4ED8] mx-auto" />
              <p className="text-sm font-medium">Loading inquiries from database...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-16 text-center text-[#64748B] space-y-3">
              <Inbox className="h-10 w-10 text-[#94A3B8] mx-auto" />
              <h4 className="text-base font-semibold text-[#0F172A]">No Inquiries Found</h4>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                {searchQuery || typeFilter !== "all" || statusFilter !== "all"
                  ? "Try clearing your filters or search keywords to see all recorded submissions."
                  : "New inquiries submitted from the website Contact Form or Studio Booking Form will automatically appear here."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <style>{`
                .admin-leads-table tr,
                .admin-leads-table tr:hover,
                .admin-leads-table tr td,
                .admin-leads-table tr:hover td {
                  background-color: #FFFFFF !important;
                }
              `}</style>
              <table className="admin-leads-table w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    <th className="py-3 px-4">Type & Status</th>
                    <th className="py-3 px-4">Client Details</th>
                    <th className="py-3 px-4">Service & Requirement</th>
                    <th className="py-3 px-4">Project Brief / Details</th>
                    <th className="py-3 px-4">Date Submitted</th>
                    <th className="py-3 px-4 text-right">Quick Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-xs bg-white">
                  {filteredLeads.map((lead) => {
                    const waPhone = cleanPhoneForWhatsApp(lead.phone);
                    const waGreeting = `Hi ${lead.name || "there"}, this is FrameCipher! We received your inquiry regarding "${lead.service || "your project"}".`;
                    const waUrl = waPhone
                      ? `https://wa.me/${waPhone}?text=${encodeURIComponent(waGreeting)}`
                      : "";

                    return (
                      <tr
                        key={`${lead.collection}-${lead.id}`}
                        className="bg-white hover:bg-white"
                      >
                        {/* Type & Status */}
                        <td className="py-4 px-4 align-top space-y-2 min-w-[140px]">
                          <div>
                            {lead.type === "studio_booking" ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                                <Sparkles className="h-2.5 w-2.5" />
                                STUDIO
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD]">
                                <Building className="h-2.5 w-2.5" />
                                CONTACT BRIEF
                              </span>
                            )}
                          </div>

                          {/* Status Dropdown */}
                          <div>
                            <select
                              value={lead.status}
                              disabled={updatingId === lead.id}
                              onChange={(e) => handleStatusChange(lead, e.target.value as any)}
                              className={`text-[11px] font-semibold rounded-md px-2 py-1 border transition-colors outline-none cursor-pointer ${
                                lead.status === "new"
                                  ? "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]"
                                  : lead.status === "contacted"
                                  ? "bg-[#FEFCE8] text-[#CA8A04] border-[#FEF08A]"
                                  : lead.status === "booked"
                                  ? "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]"
                                  : "bg-[#F1F5F9] text-[#64748B] border-[#CBD5E1]"
                              }`}
                            >
                              <option value="new">🔴 New</option>
                              <option value="contacted">🟡 In Discussion</option>
                              <option value="booked">🟢 Booked / Won</option>
                              <option value="archived">⚪ Archived</option>
                            </select>
                          </div>
                        </td>

                        {/* Client Details */}
                        <td className="py-4 px-4 align-top min-w-[200px]">
                          <div className="font-bold text-[#0F172A] text-sm">{lead.name}</div>
                          {lead.company && (
                            <div className="text-[11px] text-[#64748B] flex items-center gap-1 mt-0.5">
                              <Building className="h-3 w-3 shrink-0" />
                              <span className="truncate">{lead.company}</span>
                            </div>
                          )}
                          {lead.email && (
                            <div className="text-[11px] text-[#64748B] flex items-center gap-1 mt-1 truncate">
                              <Mail className="h-3 w-3 shrink-0 text-[#94A3B8]" />
                              <a href={`mailto:${lead.email}`} className="hover:text-[#1D4ED8] hover:underline">
                                {lead.email}
                              </a>
                            </div>
                          )}
                          {lead.phone && (
                            <div className="text-[11px] text-[#64748B] flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3 shrink-0 text-[#94A3B8]" />
                              <a href={`tel:${lead.phone}`} className="hover:text-[#1D4ED8] font-mono font-medium">
                                {lead.phone}
                              </a>
                            </div>
                          )}
                        </td>

                        {/* Service & Scope */}
                        <td className="py-4 px-4 align-top min-w-[180px]">
                          <div className="font-semibold text-[#0F172A]">{lead.service || "Unspecified"}</div>
                          {lead.type === "studio_booking" ? (
                            <div className="mt-1 space-y-0.5 text-[11px] text-[#64748B]">
                              {lead.duration && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3 text-[#94A3B8]" />
                                  <span>{lead.duration}</span>
                                </div>
                              )}
                              {lead.date && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3 text-[#94A3B8]" />
                                  <span>Date: {lead.date}</span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="mt-1 space-y-0.5 text-[11px] text-[#64748B]">
                              {lead.budget && (
                                <div>
                                  <span className="font-medium text-[#0F172A]">Budget:</span> {lead.budget}
                                </div>
                              )}
                              {lead.timeline && (
                                <div>
                                  <span className="font-medium text-[#0F172A]">Timeline:</span> {lead.timeline}
                                </div>
                              )}
                            </div>
                          )}
                        </td>

                        {/* Brief / Details */}
                        <td className="py-4 px-4 align-top max-w-sm">
                          <p className="text-[#334155] text-xs leading-relaxed">
                            {lead.brief || lead.details || "No written brief provided."}
                          </p>
                        </td>

                        {/* Created At */}
                        <td className="py-4 px-4 align-top text-[11px] text-[#64748B] whitespace-nowrap">
                          {lead.createdAt ? (
                            <>
                              <div className="font-medium text-[#0F172A]">
                                {new Date(lead.createdAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </div>
                              <div>
                                {new Date(lead.createdAt).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                            </>
                          ) : (
                            "—"
                          )}
                        </td>

                        {/* Quick Actions */}
                        <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1">
                            {/* WhatsApp Button */}
                            {waUrl && (
                              <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat on WhatsApp"
                                className="p-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                              >
                                <MessageSquare className="h-4 w-4" />
                              </a>
                            )}

                            {/* Direct Call */}
                            {lead.phone && (
                              <a
                                href={`tel:${lead.phone}`}
                                title="Call Client"
                                className="p-2 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors"
                              >
                                <Phone className="h-4 w-4" />
                              </a>
                            )}

                            {/* Email */}
                            {lead.email && (
                              <a
                                href={`mailto:${lead.email}?subject=FrameCipher Inquiry - ${lead.service || "Your Project"}`}
                                title="Email Client"
                                className="p-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                              >
                                <Mail className="h-4 w-4" />
                              </a>
                            )}

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(lead)}
                              disabled={updatingId === lead.id}
                              title="Delete Inquiry"
                              className="p-2 rounded-lg text-[#94A3B8] hover:text-[#DC2626] hover:bg-[#FEF2F2] transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
