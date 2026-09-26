import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";

export const dynamic = "force-dynamic";

const ALLOWED_ROLES = ["owner", "editor", "author"];

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  let body: any = null;
  try {
    body = await req.json();
  } catch {}

  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 120) : "";
  const requestedRole = typeof body?.role === "string" ? body.role.trim() : "";

  if (requestedRole && !ALLOWED_ROLES.includes(requestedRole)) {
    return NextResponse.json(
      { success: false, error: `Role must be one of: ${ALLOWED_ROLES.join(", ")}.` },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const identity = guard.identity!;
  if (identity.role !== "owner" && requestedRole && requestedRole !== identity.role) {
    return NextResponse.json(
      { success: false, error: "Only an owner can change an administrator role." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(
    {
      success: true,
      profile: {
        uid: identity.uid,
        email: identity.email,
        name: name || identity.name,
        role: requestedRole || identity.role,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}

