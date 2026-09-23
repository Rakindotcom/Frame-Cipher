"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Radio, Lock, Mail, ArrowRight, ShieldCheck, Eye, EyeOff, AlertTriangle, Sparkles } from "lucide-react";
import { loginAdmin, checkLockoutStatus, setAdminSession } from "@/lib/admin/auth";
import { loginWithEmail, loginWithGoogle } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [lockout, setLockout] = useState<{ isLocked: boolean; remainingMinutes?: number }>({ isLocked: false });

  useEffect(() => {
    setLockout(checkLockoutStatus());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // 1. Try Firebase Authentication first
    const fbRes = await loginWithEmail(email, password);
    if (fbRes.success && fbRes.user) {
      setAdminSession(fbRes.user.email || email, fbRes.user.displayName || undefined);
      window.location.href = "/admin";
      return;
    }

    // 2. Fallback to Local Administrative Credentials Verification
    const res = loginAdmin(email, password);
    if (res.success) {
      window.location.href = "/admin";
    } else {
      setError(res.error || fbRes.error || "Authentication failed. Access denied.");
      setLockout(checkLockoutStatus());
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError(null);

    const res = await loginWithGoogle();
    if (res.success && res.user) {
      setAdminSession(res.user.email || "admin", res.user.displayName || undefined);
      window.location.href = "/admin";
    } else {
      setError(res.error || "Google authentication was cancelled or failed.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F8FAFC] relative overflow-hidden font-body">
      <div className="w-full max-w-md relative z-10">
        {/* Clean Light Card */}
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xl">
          {/* Brand Header with Purple Icon Box */}
          <div className="text-center mb-8">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-frame-accent flex items-center justify-center text-white mb-4 shadow-md shadow-purple-500/25 font-heading font-black text-xl">
              FC
            </div>
            <h1 className="text-2xl font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              FrameCipher
            </h1>
            <p className="text-xs text-[#64748B] mt-1 font-semibold">
              Administrative Operations &amp; Intelligence Portal
            </p>
          </div>

          {/* Lockout Notice */}
          {lockout.isLocked && (
            <div className="mb-5 p-3.5 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#DC2626] flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 shrink-0 text-[#DC2626] mt-0.5" />
              <div>
                <strong className="block font-bold">Account Protection Activated</strong>
                Too many failed attempts. Login is locked for {lockout.remainingMinutes} minutes.
              </div>
            </div>
          )}

          {/* Error Notice */}
          {error && !lockout.isLocked && (
            <div className="mb-5 p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#DC2626] font-semibold flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign-in Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading || lockout.isLocked}
            className="w-full py-2.5 px-4 mb-4 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{isGoogleLoading ? "Connecting to Google Auth..." : "Sign in with Google Account"}</span>
          </button>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-[#E2E8F0] w-full"></div>
            <span className="bg-white px-3 text-[10px] uppercase font-bold text-[#64748B] tracking-wider whitespace-nowrap">
              Or Administrator Credentials
            </span>
            <div className="border-t border-[#E2E8F0] w-full"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#475569] block mb-1.5 uppercase tracking-wider">
                Administrator Email
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pervesmahedi@gmail.com"
                  disabled={lockout.isLocked}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:bg-white focus:ring-1 focus:ring-[#1D4ED8] transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#475569] block mb-1.5 uppercase tracking-wider">
                Security Password
              </label>
              <div className="relative">
                <Lock className="h-4 w-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  disabled={lockout.isLocked}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:bg-white focus:ring-1 focus:ring-[#1D4ED8] transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || lockout.isLocked}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{isLoading ? "Authenticating with Firebase..." : "Authenticate Session"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Security Guarantee Footer */}
          <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex items-center justify-center gap-2 text-[#64748B] text-xs font-medium text-center">
            <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
            <span>Firebase Auth • 256-Bit Encrypted Session</span>
          </div>
        </div>

        {/* Back to Public Link */}
        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-xs font-semibold text-[#64748B] hover:text-[#A855F7] transition-colors"
          >
            ← Return to FrameCipher Agency Website
          </Link>
        </div>
      </div>
    </div>
  );
}
