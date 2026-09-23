import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Prevent search engines from ever indexing the admin panel or API responses,
// even if a specific URL was indexed before robots.txt started blocking it.
function applyNoIndex(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nocache");
  return response;
}

export function proxy(request: NextRequest) {
  return applyNoIndex(request);
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};