"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { detectBrowser, detectDevice, detectOS, detectCountry } from "@/lib/analytics/telemetry";

function getSessionId(): string {
  if (typeof window === "undefined") return "sess-init";
  try {
    let sid = sessionStorage.getItem("framecipher_session_id");
    if (!sid) {
      sid = `sess-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
      sessionStorage.setItem("framecipher_session_id", sid);
    }
    return sid;
  } catch {
    return `sess-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const heartbeatTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Never track admin panel views or API routes as public visitor hits
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    const sessionId = getSessionId();
    const countryInfo = detectCountry();
    const browser = detectBrowser();
    const device = detectDevice();
    const os = detectOS();

    // 1. Send the page hit to the server telemetry endpoint (single source of truth)
    const payload = {
      path: pathname,
      referrer: typeof document !== "undefined" ? document.referrer || "direct" : "direct",
      sessionId,
      browser,
      device,
      os,
      country: countryInfo.country,
      countryCode: countryInfo.code,
      flag: countryInfo.flag,
    };

    const sendHit = (isHeartbeat: boolean) => {
      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, isHeartbeat }),
        keepalive: true,
      }).then((response) => {
        if (!response.ok) console.warn("Visitor analytics could not be recorded:", response.status);
      }).catch((error) => {
        console.warn("Visitor analytics request failed:", error);
      });
    };

    sendHit(false);

    // 2. Dispatch Google Analytics pageview if gtag is loaded
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      try {
        (window as any).gtag("event", "page_view", {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      } catch {}
    }

    // 3. Keep visible tabs in the live-visitor window without counting another page view.
    if (heartbeatTimer.current) {
      clearInterval(heartbeatTimer.current);
    }
    heartbeatTimer.current = setInterval(() => {
      if (document.visibilityState === "visible") sendHit(true);
    }, 120_000);

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") sendHit(true);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (heartbeatTimer.current) {
        clearInterval(heartbeatTimer.current);
      }
    };
  }, [pathname]);

  return null;
}
