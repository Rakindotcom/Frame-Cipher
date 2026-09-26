import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  createSessionValue,
  getSessionSecret,
  readSessionValue,
  verifyFirebaseIdToken,
} from "@/lib/admin/token";

export const dynamic = "force-dynamic";

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function POST(req: Request) {
  if (!getSessionSecret()) {
    return NextResponse.json(
      {
        success: false,
        error:
          "ADMIN_SESSION_SECRET is not configured on the server. Generate one with: openssl rand -hex 32",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  let idToken = "";
  try {
    const body = await req.json();
    idToken = typeof body?.idToken === "string" ? body.idToken : "";
  } catch {}

  if (!idToken) {
    return NextResponse.json(
      { success: false, error: "An ID token is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const verified = await verifyFirebaseIdToken(idToken);
  if (!verified.success) {
    return NextResponse.json(
      { success: false, error: verified.error },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  const sessionValue = await createSessionValue(verified.identity);
  const response = NextResponse.json(
    { success: true, email: verified.identity.email, role: verified.identity.role },
    { headers: { "Cache-Control": "no-store" } }
  );
  response.cookies.set(SESSION_COOKIE, sessionValue, cookieOptions(SESSION_TTL_SECONDS));
  return response;
}

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));

  const identity = await readSessionValue(match ? match.slice(SESSION_COOKIE.length + 1) : null);
  if (!identity) {
    return NextResponse.json(
      { success: false, error: "No active administrator session." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(
    { success: true, uid: identity.uid, email: identity.email, name: identity.name, role: identity.role },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function DELETE() {
  const response = NextResponse.json(
    { success: true },
    { headers: { "Cache-Control": "no-store" } }
  );
  response.cookies.set(SESSION_COOKIE, "", cookieOptions(0));
  return response;
}
