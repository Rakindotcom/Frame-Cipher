"use client";

import React, { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { getAdminProfile, setAdminProfile, type AdminUser } from "@/lib/admin/auth";
import { auth, saveAdminProfileToFirestore, isAuthorizedAdmin } from "@/lib/firebase";
import {
  ShieldCheck,
  Flame,
  CheckCircle2,
  ExternalLink,
  KeyRound,
  Save,
  Globe,
  Lock,
  AlertCircle,
  Cpu,
  Radio,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [profile, setProfile] = useState<AdminUser | null>(null);

  // Profile State
  const [profileName, setProfileName] = useState("");
  const [profileStatus, setProfileStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  useEffect(() => {
    const current = getAdminProfile();
    setProfile(current);
    if (current) {
      setProfileName(current.name || "");
    }
  }, []);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingProfile(true);
    setProfileStatus({ type: null, message: "" });

    try {
      const user = auth?.currentUser;
      if (!await isAuthorizedAdmin(user || null)) throw new Error("Administrator authentication required.");
      const updatedProfile: AdminUser = {
        uid: user!.uid,
        email: user!.email || "",
        name: profileName.trim().slice(0, 120) || user!.email || "Admin",
        role: "admin",
      };
      const persisted = await saveAdminProfileToFirestore(updatedProfile);
      if (!persisted.success) {
        setProfileStatus({
          type: "error",
          message: persisted.error || "The profile was authorized but could not be written to Firestore.",
        });
        return;
      }

      setAdminProfile(updatedProfile);
      setProfileStatus({ type: "success", message: "Administrator profile saved." });
      setProfile(updatedProfile);
    } catch (error: any) {
      setProfileStatus({
        type: "error",
        message: error?.message || "Could not save the administrator profile.",
      });
    } finally {
      setIsSavingProfile(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Platform Security & Settings"
        subtitle="Firebase Authentication, Google Analytics 4 telemetry, and administrator profile"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Session Security</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {profile?.email ? "Signed in" : "Unknown"}
              </div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Firebase-signed session
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Firebase GA4</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">Receiving</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              {process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "Not configured"}
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Admin Role</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight capitalize">
                {profile?.role || "admin"}
              </div>
            </div>
            <span className="text-xs font-heading font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full self-start truncate max-w-full">
              {profile?.email || "Not signed in"}
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Password Source</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">Firebase Auth</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              No Passwords In Code
            </span>
          </div>
        </div>

        {/* Administrator Profile Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F1F5F9] gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D4ED8]">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                  Administrator Profile
                </h3>
                <p className="text-xs text-[#64748B]">
                  Displayed in the admin panel. Authentication is managed entirely by Firebase Auth.
                </p>
              </div>
            </div>
          </div>

          {profileStatus.message && (
            <div
              className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-medium ${
                profileStatus.type === "success"
                  ? "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]"
                  : "bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]"
              }`}
            >
              {profileStatus.type === "success" ? (
                <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 text-[#DC2626] shrink-0" />
              )}
              <span>{profileStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  Display Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  Role
                </label>
                <input
                  type="text"
                  value="admin"
                  readOnly
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] font-mono"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-3">
              <span className="text-[11px] text-[#64748B] font-medium">
                Dashboard access is restricted to the configured Firebase Authentication UID.
              </span>
              <button
                type="submit"
                disabled={isSavingProfile}
                className="px-5 py-2.5 rounded-xl bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{isSavingProfile ? "Saving..." : "Save Profile"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Firebase Config Inspector */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D4ED8]">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                  Firebase Web SDK &amp; Google Analytics 4 Connection
                </h3>
                <p className="text-xs text-[#64748B]">
                  Real client-side telemetry configured in FirebaseAnalytics component
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0] flex items-center gap-1.5 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>Live Streaming</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Measurement ID</span>
              <span className="text-[#0F172A] font-bold text-sm whitespace-nowrap">G-G2QQ51J5TE</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Firebase Project ID</span>
              <span className="text-[#0F172A] font-bold text-sm whitespace-nowrap">frame-cipher</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Auth Domain</span>
              <span className="text-[#334155] truncate block">frame-cipher.firebaseapp.com</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Storage Bucket</span>
              <span className="text-[#334155] truncate block">frame-cipher.firebasestorage.app</span>
            </div>
          </div>
        </div>

        {/* Signed-in Identity Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">Signed-in Identity</h3>
                <p className="text-xs text-[#64748B]">
                  Read from the verified Firebase ID token on the server. Not editable from the browser.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Email</span>
              <span className="text-[#334155] truncate block font-mono text-xs">{profile?.email || "-"}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">User ID</span>
              <span className="text-[#334155] truncate block font-mono text-xs">{profile?.uid || "-"}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="text-[#64748B] block text-[10px] font-heading font-bold uppercase tracking-wider">Role</span>
              <span className="text-[#334155] block font-mono text-xs capitalize">{profile?.role || "-"}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Change the email or password in Firebase Authentication. To replace the administrator,
              update the UID in the app and both Firebase rules files, then redeploy.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
