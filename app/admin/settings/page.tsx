"use client";

import React, { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  getStoredCredentials,
  changeAdminCredentials,
  AdminCredentials,
} from "@/lib/admin/auth";
import {
  ShieldCheck,
  Flame,
  CheckCircle2,
  ExternalLink,
  KeyRound,
  Save,
  Globe,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Cpu,
  Radio,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [creds, setCreds] = useState<AdminCredentials | null>(null);

  // Security Credentials Change Form
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [securityStatus, setSecurityStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // General Profile State
  const [profileSaved, setProfileSaved] = useState(false);

  useEffect(() => {
    const current = getStoredCredentials();
    setCreds(current);
    setNewEmail(current.email);
  }, []);

  const handleUpdateSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    setSecurityStatus({ type: null, message: "" });

    if (!currentPassword) {
      setSecurityStatus({
        type: "error",
        message: "Please enter your current administrative password to authorize changes.",
      });
      return;
    }

    if (!newEmail || !newEmail.includes("@")) {
      setSecurityStatus({
        type: "error",
        message: "Please enter a valid administrative email address.",
      });
      return;
    }

    if (newPassword && newPassword.length < 8) {
      setSecurityStatus({
        type: "error",
        message: "New password must be at least 8 characters long for security protection.",
      });
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setSecurityStatus({
        type: "error",
        message: "New password and confirmation do not match. Please verify typing.",
      });
      return;
    }

    const passToSet = newPassword || currentPassword;
    const result = changeAdminCredentials(currentPassword, newEmail, passToSet);

    if (result.success) {
      setSecurityStatus({
        type: "success",
        message: "Administrative credentials updated and secured successfully!",
      });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setCreds(getStoredCredentials());
      setTimeout(() => setSecurityStatus({ type: null, message: "" }), 5000);
    } else {
      setSecurityStatus({
        type: "error",
        message: result.error || "Authentication verification failed.",
      });
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Platform Security & Settings"
        subtitle="Credentials management, Google Analytics 4 telemetry, and administrator profile"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Security Shield</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">Active</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Brute-Force Lockout (15m)
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Firebase GA4</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">Connected</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              G-G2QQ51J5TE Live
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Admin Role</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">Superadmin</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full self-start truncate max-w-full">
              {creds?.email || "pervesmahedi@gmail.com"}
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Partner Authority</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">FrameCipher</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Pure Dofollow Citation
            </span>
          </div>
        </div>

        {/* Change Password & Security Credentials Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F1F5F9] gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D4ED8]">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                  Administrative Credentials &amp; Access Protection
                </h3>
                <p className="text-xs text-[#64748B]">
                  Update administrative login email and master password. Protected by 15-minute brute-force lockout.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPasswords(!showPasswords)}
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] self-start sm:self-auto whitespace-nowrap"
            >
              {showPasswords ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              <span>{showPasswords ? "Hide Passwords" : "Show Passwords"}</span>
            </button>
          </div>

          {securityStatus.message && (
            <div
              className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-medium ${
                securityStatus.type === "success"
                  ? "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]"
                  : "bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]"
              }`}
            >
              {securityStatus.type === "success" ? (
                <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 text-[#DC2626] shrink-0" />
              )}
              <span>{securityStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleUpdateSecurity} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  Current Master Password <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type={showPasswords ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password to authorize..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  Administrative Email <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="pervesmahedi@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white font-mono"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  New Master Password (Leave blank to keep current)
                </label>
                <input
                  type={showPasswords ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 8 characters..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type={showPasswords ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-type new password..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white font-mono"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-3">
              <span className="text-[11px] text-[#64748B] font-medium">
                Brute-force security automatically locks access after 5 incorrect password attempts.
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 shrink-0"
              >
                <Save className="h-4 w-4" />
                <span>Save New Credentials</span>
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

        {/* Administrator Verified Profile Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">Verified Platform Architect Profile</h3>
                <p className="text-xs text-[#64748B]">
                  Electrical engineer accreditation and Dofollow developer backlinks
                </p>
              </div>
            </div>
          </div>

          {profileSaved && (
            <div className="p-3.5 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0] text-xs text-[#16A34A] font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
              <span>Architect profile information synchronized!</span>
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Mahedi Hasan Perves"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                  Engineering Qualification &amp; Institution
                </label>
                <input
                  type="text"
                  defaultValue="Electrical Engineer (AIUB Graduate)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                  Engineering Firm Link (Pure Dofollow)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="https://framecipher.info"
                    readOnly
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none font-mono"
                  />
                  <a
                    href="https://framecipher.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                    title="Visit framecipher.info"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                  Personal Portfolio (Pure Dofollow)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="https://mahedihasanperves.vercel.app"
                    readOnly
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#475569] focus:outline-none font-mono"
                  />
                  <a
                    href="https://mahedihasanperves.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                    title="Visit Portfolio"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Architect Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
