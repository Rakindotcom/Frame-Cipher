"use client";

import { logoutUser } from "@/lib/firebase";

export interface AdminUser {
  uid: string;
  email: string;
  name: string;
  role: string;
}

export const AUTH_KEY = "framecipher_admin_session";
export const SESSION_ENDPOINT = "/api/auth/admin-session";

const PROFILE_KEY = "framecipher_admin_profile";

export function getAdminProfile(): AdminUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.email) return null;
    return parsed as AdminUser;
  } catch {
    return null;
  }
}

export function setAdminProfile(profile: AdminUser): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {}
}

export function clearAdminProfile(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(AUTH_KEY);
  } catch {}
}

export async function exchangeIdTokenForSession(idToken: string): Promise<AdminUser> {
  const res = await fetch(SESSION_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });

  let payload: any = null;
  try {
    payload = await res.json();
  } catch {}

  if (!res.ok || !payload?.success) {
    throw new Error(payload?.error || "Could not establish an administrator session.");
  }

  const profile: AdminUser = {
    uid: payload.uid || "",
    email: payload.email || "",
    name: payload.email || "",
    role: payload.role || "admin",
  };
  try {
    const claims = JSON.parse(atob(idToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    profile.uid = claims.sub || profile.uid;
    profile.name = claims.name || payload.email || "";
  } catch {}

  setAdminProfile(profile);
  return profile;
}

export async function destroyAdminSession(): Promise<void> {
  try {
    await fetch(SESSION_ENDPOINT, { method: "DELETE" });
  } catch {}
  await logoutUser();
  clearAdminProfile();
}

export async function isSessionActive(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    const res = await fetch(SESSION_ENDPOINT, { cache: "no-store" });
    if (!res.ok) return false;
    const payload = await res.json();
    if (!payload?.success) return false;
    setAdminProfile({
      uid: payload.uid || "",
      email: payload.email || "",
      name: payload.name || payload.email || "",
      role: payload.role || "admin",
    });
    return true;
  } catch {
    return false;
  }
}
