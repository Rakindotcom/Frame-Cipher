"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminMobileNav } from "@/components/admin/AdminMobileNav";
import { isSessionActive } from "@/lib/admin/auth";

const ADMIN_LIGHT_THEME = `
  html, body {
    background-color: #F8FAFC !important;
    color-scheme: light !important;
  }
  body {
    color: #0F172A !important;
  }
`;

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const active = isSessionActive();
    setIsAuthenticated(active);

    if (!isLoginPage && !active) {
      window.location.href = "/admin/login";
    }
  }, [pathname, isLoginPage]);

  if (isLoginPage) {
    return (
      <>
        <style>{ADMIN_LIGHT_THEME}</style>
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body">{children}</div>
      </>
    );
  }

  // During initial auth verification
  if (isAuthenticated === null || !isAuthenticated) {
    return (
      <>
        <style>{ADMIN_LIGHT_THEME}</style>
        <div className="min-h-screen bg-[#F8FAFC] font-body flex items-center justify-center text-[#64748B] text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1D4ED8] animate-ping" />
            <span>Verifying Admin Session...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{ADMIN_LIGHT_THEME}</style>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body flex flex-col lg:flex-row overflow-x-hidden">
        {/* Desktop Sidebar (Hidden on Mobile) */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] overflow-y-auto min-h-screen pb-20 lg:pb-0">
          {children}
        </div>

        {/* Native App-Style Mobile Bottom Bar & Slide-Over Drawer */}
        <AdminMobileNav />
      </div>
    </>
  );
}