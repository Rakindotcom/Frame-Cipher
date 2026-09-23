"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTopButton from "../ScrollToTop";

export function ConditionalLayout({ children, pillarNavServices }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  // In the admin dashboard, completely suppress public header, footer, and kinetic scroll button
  if (isAdmin) {
    return <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">{children}</main>;
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-frame-bg text-frame-fg">
      <div className="kinetic-noise" aria-hidden="true" />
      <Navbar pillarNavServices={pillarNavServices} />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
