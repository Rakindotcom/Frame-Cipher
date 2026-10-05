import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
import { publicFirestore } from "@/lib/server/publicFirestore";

const MAX_PATH_LENGTH = 512;
const MAX_REFERRER_LENGTH = 512;

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const now = Date.now();

    const sessionId =
      cleanString(body.sessionId, 128) || `sess-${now}-${Math.random().toString(36).substring(2, 8)}`;
    const pathName = cleanString(body.path, MAX_PATH_LENGTH) || "/";
    const isHeartbeat = Boolean(body.isHeartbeat);
    const isCalculation = Boolean(body.isCalculation);

    const device = cleanString(body.device, 32);
    const browser = cleanString(body.browser, 64);
    const os = cleanString(body.os, 64);
    const country = cleanString(body.country, 64);
    const countryCode = cleanString(body.countryCode, 8);
    const flag = cleanString(body.flag, 16);
    const referrer = cleanString(body.referrer, MAX_REFERRER_LENGTH);

    // Only include keys permitted by Firestore rules:
    // sessionId, path, device, browser, os, country, referrer,
    // isCalculation, isHeartbeat, timestamp
    const hit = {
      sessionId,
      path: pathName,
      device,
      browser,
      os,
      country,
      countryCode,
      flag,
      referrer,
      isCalculation,
      ...(isHeartbeat ? { isHeartbeat: true } : {}),
    };

    try {
      await addDoc(collection(publicFirestore, "analytics_hits"), {
        ...hit,
        timestamp: serverTimestamp(),
      });
    } catch (error: any) {
      console.error("Analytics hit write failed:", error?.code || error?.message);
      return NextResponse.json(
        {
          success: false,
          error: error?.code === "permission-denied"
            ? "Firestore rules rejected the analytics write."
            : "Could not save the analytics visit.",
        },
        { status: 503, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { success: true, sessionId, lastActive: now },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error: any) {
    console.error("Analytics track API error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to record the hit." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
