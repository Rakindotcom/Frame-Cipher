import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
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
  try {
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
    if (!verified.success || !verified.identity) {
      return NextResponse.json(
        { success: false, error: verified.error || "Authentication failed." },
        { status: 403, headers: { "Cache-Control": "no-store" } }
      );
    }

    const response = NextResponse.json(
      { success: true, uid: verified.identity.uid, email: verified.identity.email, name: verified.identity.name, role: verified.identity.role },
      { headers: { "Cache-Control": "no-store" } }
    );
    // Firebase signs this short-lived token. The proxy verifies it on every
    // protected request, so no custom session secret or Admin SDK is needed.
    const secondsLeft = Math.max(0, verified.identity.exp - Math.floor(Date.now() / 1000));
    response.cookies.set(SESSION_COOKIE, idToken, cookieOptions(secondsLeft));
    return response;
  } catch (error: any) {
    console.error("Admin session POST error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function GET(req: Request) {
  try {
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
  } catch (error: any) {
    console.error("Admin session GET error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function DELETE() {
  try {
    const response = NextResponse.json(
      { success: true },
      { headers: { "Cache-Control": "no-store" } }
    );
    response.cookies.set(SESSION_COOKIE, "", cookieOptions(0));
    return response;
  } catch (error: any) {
    console.error("Admin session DELETE error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
