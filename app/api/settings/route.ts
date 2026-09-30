import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  let body: any = null;
  try {
    body = await req.json();
  } catch {}

  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 120) : "";
  const identity = guard.identity!;

  return NextResponse.json(
    {
      success: true,
      profile: {
        uid: identity.uid,
        email: identity.email,
        name: name || identity.name,
        role: "admin",
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
