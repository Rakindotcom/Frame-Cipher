import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, readSessionValue } from "@/lib/admin/token";

const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

// GET on these two is deliberately reachable without a session: the public blog
// and author components read them. Both routes therefore return published
// content only. A full read (drafts included) requires `?scope=all`, which each
// route re-checks against the admin session cookie — being public here does not
// grant the wider scope.
const PUBLIC_API_READS = new Set(["/api/blog", "/api/authors"]);
const PUBLIC_API_ALL_METHODS = new Set(["/api/auth/admin-session", "/api/analytics/track"]);

function withNoIndex(response: NextResponse): NextResponse {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nocache");
  return response;
}

function unauthorized() {
  return NextResponse.json(
    { success: false, error: "Administrator authentication required." },
    { status: 401, headers: { "Cache-Control": "no-store" } }
  );
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApi = pathname.startsWith("/api");

  if (isApi) {
    const isFullyPublic = PUBLIC_API_ALL_METHODS.has(pathname);
    const isPublicRead = PUBLIC_API_READS.has(pathname) && !MUTATING_METHODS.has(request.method);
    if (isFullyPublic || isPublicRead) {
      return withNoIndex(NextResponse.next());
    }
  }

  const identity = await readSessionValue(request.cookies.get(SESSION_COOKIE)?.value);
  if (identity) return withNoIndex(NextResponse.next());

  if (isApi) {
    return withNoIndex(unauthorized());
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.search = "";
    if (pathname !== "/admin") loginUrl.searchParams.set("next", pathname);
    return withNoIndex(NextResponse.redirect(loginUrl));
  }

  return withNoIndex(NextResponse.next());
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
