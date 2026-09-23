export interface AdminUser {
  email: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface AdminCredentials {
  email: string;
  passwordHash: string; // Plain or hashed string
  name: string;
  role: string;
  updatedAt: string;
}

export const DEFAULT_CREDENTIALS = {
  email: "pervesmahedi@gmail.com",
  password: "Mahedi.16832",
  name: "Mahedi Hasan Perves",
  role: "Founder & Lead Strategist, FrameCipher",
};

const AUTH_KEY = "framecipher_admin_session";
const CREDENTIALS_KEY = "framecipher_admin_credentials";
const ATTEMPTS_KEY = "framecipher_login_attempts";
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes lockout

export function getStoredCredentials(): AdminCredentials {
  if (typeof window === "undefined") {
    return {
      email: DEFAULT_CREDENTIALS.email,
      passwordHash: DEFAULT_CREDENTIALS.password,
      name: DEFAULT_CREDENTIALS.name,
      role: DEFAULT_CREDENTIALS.role,
      updatedAt: "2026-09-14",
    };
  }

  try {
    const raw = localStorage.getItem(CREDENTIALS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.email && parsed.passwordHash) {
        return parsed;
      }
    }
  } catch {}

  return {
    email: DEFAULT_CREDENTIALS.email,
    passwordHash: DEFAULT_CREDENTIALS.password,
    name: DEFAULT_CREDENTIALS.name,
    role: DEFAULT_CREDENTIALS.role,
    updatedAt: "2026-09-14",
  };
}

export function checkLockoutStatus(): { isLocked: boolean; remainingMinutes?: number } {
  if (typeof window === "undefined") return { isLocked: false };

  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) return { isLocked: false };

    const data = JSON.parse(raw);
    if (data.count >= MAX_ATTEMPTS) {
      const elapsed = Date.now() - data.lastAttempt;
      if (elapsed < LOCKOUT_DURATION_MS) {
        const remaining = Math.ceil((LOCKOUT_DURATION_MS - elapsed) / 60000);
        return { isLocked: true, remainingMinutes: remaining };
      } else {
        // Lockout expired, reset attempts
        localStorage.removeItem(ATTEMPTS_KEY);
      }
    }
  } catch {}

  return { isLocked: false };
}

function recordFailedAttempt(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    const data = raw ? JSON.parse(raw) : { count: 0, lastAttempt: 0 };
    data.count = (data.count || 0) + 1;
    data.lastAttempt = Date.now();
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(data));
  } catch {}
}

function resetFailedAttempts(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(ATTEMPTS_KEY);
  } catch {}
}

export function setAdminSession(email: string, name?: string, role?: string): void {
  resetFailedAttempts();
  if (typeof window === "undefined") return;
  const sessionData = {
    email,
    name: name || "Mahedi Hasan Perves",
    role: role || "Lead RF Engineer & Platform Administrator",
    timestamp: Date.now(),
  };
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(sessionData));
    document.cookie = `${AUTH_KEY}=true; path=/; max-age=604800; SameSite=Lax`;
  } catch (e) {
    console.warn("Storage write error", e);
  }
}

export function loginAdmin(email: string, pass: string): { success: boolean; error?: string } {
  // Check brute force lockout
  const lockout = checkLockoutStatus();
  if (lockout.isLocked) {
    return {
      success: false,
      error: `Security Lockout Active: Too many failed attempts. Try again in ${lockout.remainingMinutes} minutes.`,
    };
  }

  const cleanEmail = email.trim().toLowerCase();
  const creds = getStoredCredentials();

  const isEmailMatch = cleanEmail === creds.email.toLowerCase();
  const isPassMatch = pass === creds.passwordHash;

  if (isEmailMatch && isPassMatch) {
    setAdminSession(creds.email, creds.name, creds.role);
    return { success: true };
  }

  recordFailedAttempt();
  return {
    success: false,
    error: "Invalid email address or password. Access denied.",
  };
}

export function changeAdminCredentials(
  currentPass: string,
  newEmail: string,
  newPass: string
): { success: boolean; error?: string } {
  const creds = getStoredCredentials();

  if (currentPass !== creds.passwordHash) {
    return { success: false, error: "Current password does not match. Please verify your identity." };
  }

  if (!newEmail || !newEmail.includes("@")) {
    return { success: false, error: "Please provide a valid administrative email address." };
  }

  if (!newPass || newPass.length < 8) {
    return { success: false, error: "New password must contain at least 8 characters for security." };
  }

  const updated: AdminCredentials = {
    email: newEmail.trim().toLowerCase(),
    passwordHash: newPass,
    name: creds.name,
    role: creds.role,
    updatedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(updated));

    // Update active session with new email
    const sessionData = {
      email: updated.email,
      name: updated.name,
      role: updated.role,
      timestamp: Date.now(),
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(sessionData));

    return { success: true };
  } catch {
    return { success: false, error: "Failed to persist new credentials to local storage." };
  }
}

export function logoutAdmin(): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(AUTH_KEY);
      document.cookie = `${AUTH_KEY}=; path=/; max-age=0; SameSite=Lax`;
    } catch {}
  }
}

export function getAdminSession(): AdminUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isSessionActive(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const hasLocal = localStorage.getItem(AUTH_KEY) !== null;
    const hasCookie = typeof document !== "undefined" && document.cookie.includes(`${AUTH_KEY}=true`);
    return hasLocal || hasCookie;
  } catch {
    return false;
  }
}
