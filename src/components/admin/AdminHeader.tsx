"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Bell,
  Settings,
  Calendar,
  ChevronDown,
  LayoutDashboard,
  FileText,
  ImageIcon,
  BarChart3,
  DollarSign,
  LogOut,
  ExternalLink,
  Radio,
} from "lucide-react";
import { logoutAdmin } from "@/lib/admin/auth";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

const navModules = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, section: "MAIN" },
  { href: "/admin/cms", label: "Blog CMS", icon: FileText, section: "MAIN" },
  { href: "/admin/media", label: "Media Library", icon: ImageIcon, section: "MAIN" },
  { href: "/admin/tools-analytics", label: "Analytics", icon: BarChart3, section: "AGENCY INTELLIGENCE" },
  { href: "/admin/search-console", label: "Search Console", icon: Search, section: "AGENCY INTELLIGENCE" },
  { href: "/admin/settings", label: "Settings", icon: Settings, section: "SYSTEM" },
];

export function AdminHeader({ title, subtitle }: AdminHeaderProps) {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [dateRange] = useState("09/14/2026");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutAdmin();
    window.location.href = "/admin/login";
  };

  return (
    <>
      <header className="h-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-30 font-sans shadow-xs">
        {/* Left: Hamburger Button (Mobile/Tablet) & Brand + Title */}
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] transition-colors shrink-0 shadow-xs"
            aria-label="Open Navigation Menu"
            title="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* FrameCipher Logo */}
          <Link href="/admin" className="shrink-0 flex items-center" title="FrameCipher Admin">
            <img
              src="/logo.webp"
              alt="FrameCipher"
              className="h-9 w-auto max-w-[92px] object-contain"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </Link>

          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-heading font-bold uppercase text-[#0F172A] tracking-tight truncate">{title}</h1>
            {subtitle && <p className="text-xs text-[#64748B] hidden md:block mt-0.5 truncate">{subtitle}</p>}
          </div>

          {/* Date Filter Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] shadow-xs">
            <Calendar className="h-3 w-3 text-[#1D4ED8]" />
            <span className="font-semibold text-[11px] text-[#0F172A]">{dateRange}</span>
            <ChevronDown className="h-3 w-3 text-[#64748B]" />
          </div>
        </div>

        {/* Right: Actions (Search, Bell, Settings, Avatar) */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0 min-w-0">
          {/* Search Bar / Icon */}
          <div className="relative">
            {showSearch ? (
              <div className="flex items-center">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search admin..."
                  onBlur={() => setShowSearch(false)}
                  className="w-36 sm:w-64 pl-8 pr-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] shadow-xs"
                />
                <Search className="h-3.5 w-3.5 text-[#64748B] absolute left-2.5" />
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="h-9 w-9 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] flex items-center justify-center transition-colors"
                title="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              className="h-9 w-9 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] flex items-center justify-center transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
            </button>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#1D4ED8] ring-2 ring-white" />
          </div>

          {/* Settings Gear (Hidden on smallest screens; available in nav drawer) */}
          <Link
            href="/admin/settings"
            className="hidden sm:flex h-9 w-9 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] items-center justify-center transition-colors"
            title="Platform Settings"
          >
            <Settings className="h-4 w-4" />
          </Link>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-2 pl-1 border-l border-[#E2E8F0]">
            <div className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] p-0.5 shadow-xs flex items-center justify-center">
              <span className="text-[#1D4ED8] font-heading font-bold text-xs">M</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Slide-Over Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-300/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Canvas */}
          <div className="relative w-72 max-w-[85vw] bg-white border-r border-[#E2E8F0] p-5 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Drawer Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-frame-accent border border-purple-400 flex items-center justify-center text-white font-heading font-bold text-xs">
                    FC
                  </div>
                  <div>
                    <span className="text-[#0F172A] text-sm font-heading font-bold uppercase tracking-tight">FrameCipher</span>
                    <span className="text-[#8B5CF6] text-sm font-heading font-bold uppercase tracking-tight ml-1">Admin</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-xl bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-4 space-y-4">
                {["MAIN", "AGENCY INTELLIGENCE", "SYSTEM"].map((sec) => (
                  <div key={sec} className="space-y-1">
                    <span className="px-3 text-[10px] font-heading font-bold tracking-wider text-[#64748B] uppercase block mb-1.5">
                      {sec}
                    </span>
                    {navModules
                      .filter((m) => m.section === sec)
                      .map((item) => {
                        const Icon = item.icon;
                        const isActive =
                          item.href === "/admin"
                            ? pathname === "/admin"
                            : pathname.startsWith(item.href);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
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
            <div className="pt-4 border-t border-[#E2E8F0] space-y-2.5">
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold text-[#334155] hover:text-[#1D4ED8] bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5 text-[#1D4ED8]" />
                  <span>View Public Site</span>
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
