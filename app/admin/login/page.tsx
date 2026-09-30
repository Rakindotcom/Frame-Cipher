"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, Eye, EyeOff, AlertTriangle } from "lucide-react";
import { loginWithEmail, logoutUser, isAuthorizedAdmin } from "@/lib/firebase";
import { exchangeIdTokenForSession } from "@/lib/admin/auth";

function AdminLoginForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const nextPath = searchParams.get("next") || "/admin";

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("session=expired")) {
      setError("Your administrator session expired. Please sign in again.");
    }
  }, []);

  const completeLogin = async (user: NonNullable<Awaited<ReturnType<typeof loginWithEmail>>["user"]>) => {
    if (!await isAuthorizedAdmin(user)) {
      throw new Error("This Firebase account is not authorized for the dashboard.");
    }
    const idToken = await user.getIdToken();
    await exchangeIdTokenForSession(idToken);
    window.location.href = nextPath.startsWith("/admin") ? nextPath : "/admin";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const res = await loginWithEmail(email, password);
    if (res.success && res.user) {
      try {
        await completeLogin(res.user);
        return;
      } catch (sessionError: any) {
        await logoutUser();
        setError(sessionError?.message || "Could not establish an administrator session.");
        setIsLoading(false);
        return;
      }
    }

    setError(res.error || "Authentication failed. Access denied.");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F8FAFC] relative overflow-hidden font-body">
      <div className="w-full max-w-md relative z-10">
        {/* Clean Light Card */}
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xl">
          {/* Brand Header with Black Box Logo */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-black border border-neutral-800 flex items-center justify-center p-3 mb-4 shadow-xl shadow-black/20">
              <img
                src="/logo.webp"
                alt="FrameCipher Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
            </div>
            <h1 className="text-2xl font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              FrameCipher
            </h1>
            <p className="text-xs text-[#64748B] mt-1 font-semibold">
              Administrative Operations &amp; Intelligence Portal
            </p>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#DC2626] font-semibold flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

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
                  placeholder="you@framecipher.com"
                  disabled={isLoading}
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
                  disabled={isLoading}
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
              disabled={isLoading}
              className="w-full mt-3 py-3 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{isLoading ? "Logging in..." : "Login"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

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

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] font-body">
          <div className="w-8 h-8 border-2 border-[#1D4ED8] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
