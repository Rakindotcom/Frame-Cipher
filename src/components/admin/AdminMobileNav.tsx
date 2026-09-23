"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ImageIcon,
  BarChart3,
  Search,
  DollarSign,
  Settings,
  Menu,
  X,
  LogOut,
  ExternalLink,
  Radio,
  UserRound,
} from "lucide-react";
import { logoutAdmin } from "@/lib/admin/auth";

export function AdminMobileNav() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logoutAdmin();
    window.location.href = "/admin/login";
  };

  const primaryTabs = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/cms", label: "Blog CMS", icon: FileText },
    { href: "/admin/media", label: "Media", icon: ImageIcon },
    { href: "/admin/tools-analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/search-console", label: "Search", icon: Search },
  ];

  const allModules = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, section: "MAIN" },
    { href: "/admin/cms", label: "Blog CMS", icon: FileText, section: "MAIN" },
    { href: "/admin/authors", label: "Author Profiles", icon: UserRound, section: "MAIN" },
    { href: "/admin/media", label: "Media Library", icon: ImageIcon, section: "MAIN" },
    { href: "/admin/tools-analytics", label: "Services Analytics", icon: BarChart3, section: "AGENCY INTELLIGENCE" },
    { href: "/admin/search-console", label: "Search Console", icon: Search, section: "AGENCY INTELLIGENCE" },
    { href: "/admin/seo-health", label: "Link Health", icon: Search, section: "AGENCY INTELLIGENCE" },
    { href: "/admin/settings", label: "Settings", icon: Settings, section: "SYSTEM" },
  ];

  return (
    <>
      {/* 1. Mobile App Bottom Navigation Bar (Sticky Bottom for phone screens) */}
      <nav
        aria-label="Mobile Admin Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] flex items-center justify-around py-2 px-1 shadow-lg"
      >
        {primaryTabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 min-w-0 flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
                isActive ? "text-[#1D4ED8] font-bold" : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-[#EFF6FF] text-[#1D4ED8]" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 truncate max-w-full">{tab.label}</span>
            </Link>
          );
        })}

        {/* Menu Drawer Toggle Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={`flex min-w-0 flex-1 flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
            isDrawerOpen ? "text-[#1D4ED8]" : "text-[#64748B] hover:text-[#0F172A]"
          }`}
          aria-label="Open More Admin Menu"
        >
          <div className="p-1.5 rounded-lg">
            <Menu className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5 truncate max-w-full">More</span>
        </button>
      </nav>

      {/* 2. Slide-Over Mobile & Tablet Drawer */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-300/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Body */}
          <div className="relative w-80 max-w-[85vw] bg-white border-r border-[#E2E8F0] p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2.5 font-bold text-[#0F172A] text-sm">
                  <div className="h-8 w-8 rounded-xl bg-frame-accent border border-purple-400 flex items-center justify-center text-white font-heading font-bold text-xs">
                    FC
                  </div>
                  <div>
                    <span className="text-[#0F172A] font-heading font-bold uppercase tracking-tight">FrameCipher</span>
                    <span className="text-[#8B5CF6] font-heading font-bold ml-1">Admin</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-xl bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-4 space-y-4">
                {["MAIN", "AGENCY INTELLIGENCE", "SYSTEM"].map((sec) => (
                  <div key={sec} className="space-y-1">
                    <span className="px-3 text-[10px] font-heading font-bold tracking-wider text-[#64748B] uppercase block mb-1.5">
                      {sec}
                    </span>
                    {allModules
                      .filter((m) => m.section === sec)
                      .map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsDrawerOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold ${
                              isActive
                                ? "bg-[#EFF6FF] text-[#1D4ED8] font-bold border border-[#BFDBFE]"
                                : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                            }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${
                                isActive ? "text-[#1D4ED8]" : "text-[#64748B]"
                              }`}
                            />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0]">
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold text-[#334155] hover:text-[#1D4ED8] bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5 text-[#1D4ED8]" />
                  <span>Open Public Site</span>
                </span>
                <span className="text-[10px] font-mono text-[#64748B]">Live Site</span>
              </Link>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#F8FAFC] hover:bg-rose-50 border border-[#E2E8F0] hover:border-rose-200 text-xs font-semibold text-[#64748B] hover:text-rose-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
