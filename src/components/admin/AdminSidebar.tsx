"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ImageIcon,
  BarChart3,
  Search,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Network,
  GitBranch,
  Briefcase,
  UserRound,
} from "lucide-react";
import { logoutAdmin } from "@/lib/admin/auth";

const navGroups = [
  {
    label: "MAIN",
    items: [
      {
        href: "/admin",
        label: "Dashboard",
        icon: LayoutDashboard,
        badge: null,
      },
      {
        href: "/admin/cms",
        label: "Blog CMS",
        icon: FileText,
        badge: "WordPress",
      },
      {
        href: "/admin/authors",
        label: "Author Profiles",
        icon: UserRound,
        badge: "Schema",
      },
      {
        href: "/admin/media",
        label: "Media Library",
        icon: ImageIcon,
        badge: null,
      },
    ],
  },
  {
    label: "AGENCY INTELLIGENCE & SEO",
    items: [
      {
        href: "/admin/tools-analytics",
        label: "Services Analytics",
        icon: BarChart3,
        badge: "74+",
      },
      {
        href: "/admin/search-console",
        label: "Search Console",
        icon: Search,
        badge: null,
      },
      {
        href: "/admin/seo-health",
        label: "Internal Link Health",
        icon: Network,
        badge: null,
      },
      {
        href: "/admin/technical-seo",
        label: "Technical SEO & 301",
        icon: GitBranch,
        badge: null,
      },
    ],
  },
  {
    label: "SYSTEM",
    items: [
      {
        href: "/admin/settings",
        label: "Settings",
        icon: Settings,
        badge: null,
      },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    logoutAdmin();
    window.location.href = "/admin/login";
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E2E8F0] shrink-0 min-h-screen sticky top-0 h-screen select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-frame-accent text-white flex items-center justify-center font-heading font-bold text-sm shadow-xs border border-purple-400">
            FC
          </div>
          <div>
            <div className="text-sm font-heading font-bold uppercase tracking-tight text-[#0F172A]">Frame Cipher</div>
            <div className="text-[11px] text-[#8B5CF6] font-semibold">Admin CMS &amp; Intelligence</div>
          </div>
        </Link>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label} className="space-y-1">
            <div className="px-3 text-[10px] font-heading font-bold text-[#64748B] uppercase tracking-wider">
              {group.label}
            </div>
            <div className="space-y-0.5 pt-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${
                      isActive
                        ? "bg-[#EFF6FF] text-[#1D4ED8] font-bold border border-[#BFDBFE]"
                        : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`h-4 w-4 ${isActive ? "text-[#1D4ED8]" : "text-[#64748B]"}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                          isActive
                            ? "bg-[#1D4ED8] text-white"
                            : "bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-[#E2E8F0] space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-[#94A3B8]" />
            <span>Live Site</span>
          </span>
          <span className="text-[10px] text-[#94A3B8]">framecipher.info</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-[#EF4444] hover:bg-[#FEF2F2] transition-colors"
        >
          <LogOut className="h-4 w-4 text-[#EF4444]" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
