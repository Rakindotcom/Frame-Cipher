"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { detectBrowser, detectDevice, detectOS, detectCountry } from "@/lib/analytics/telemetry";

function getSessionId(): string {
  if (typeof window === "undefined") return "sess-init";
  let sid = sessionStorage.getItem("framecipher_session_id");
  if (!sid) {
    sid = `sess-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    sessionStorage.setItem("framecipher_session_id", sid);
  }
  return sid;
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
      isHeartbeat: false,
    };

    try {
      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch {}

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

    // 3. Periodic heartbeat so a long-lived tab stays in the live-visitor window
    if (heartbeatTimer.current) {
      clearInterval(heartbeatTimer.current);
    }
    heartbeatTimer.current = setInterval(() => {
      try {
        fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            path: pathname,
            isHeartbeat: true,
          }),
          keepalive: true,
        }).catch(() => {});
      } catch {}
    }, 35_000);

    return () => {
      if (heartbeatTimer.current) {
        clearInterval(heartbeatTimer.current);
      }
    };
  }, [pathname]);

  return null;
}
