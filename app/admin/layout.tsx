import React from "react";
import { AdminLayoutClient } from "@/components/admin/AdminLayoutClient";

export const metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}