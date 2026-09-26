import { NextResponse } from "next/server";
import { SESSION_COOKIE, readSessionValue, type AdminIdentity } from "@/lib/admin/token";

export interface AdminGuardResult {
  ok: boolean;
  identity?: AdminIdentity;
  response?: NextResponse;
}

function readCookieHeader(request: Request): string {
  const headers: any = request.headers;
  if (typeof headers?.get === "function") {
    const direct = headers.get("cookie");
    if (direct) return direct;
  }
  const raw = headers?.cookies;
  if (raw && typeof raw.get === "function") {
    const entry = raw.get(SESSION_COOKIE);
    if (entry && typeof entry.value === "string") return `${SESSION_COOKIE}=${entry.value}`;
  }
  return "";
}

export async function requireAdmin(request: Request): Promise<AdminGuardResult> {
  const cookieHeader = readCookieHeader(request);
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));

  const identity = await readSessionValue(match ? match.slice(SESSION_COOKIE.length + 1) : null);

  if (!identity) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: "Administrator authentication required." },
        { status: 401, headers: { "Cache-Control": "no-store" } }
      ),
    };
  }

  return { ok: true, identity };
}

export function hasRole(identity: AdminIdentity | undefined, ...roles: string[]): boolean {
  if (!identity) return false;
  if (identity.role === "owner") return true;
  return roles.includes(identity.role);
}
