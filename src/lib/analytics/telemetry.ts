"use client";

export interface TelemetryHit {
  id: string;
  timestamp: number;
  browser: string;
  country: string;
  countryCode: string;
  flag: string;
  device: string;
  os: string;
  path: string;
  referrer: string;
  isCalculation: boolean;
}

export const UNKNOWN = "Unknown";

export function detectBrowser(): string {
  if (typeof window === "undefined") return UNKNOWN;
  const ua = navigator.userAgent;
  if (ua.includes("Edg/")) return "Microsoft Edge";
  if (ua.includes("OPR/") || ua.includes("Opera/")) return "Opera";
  if (ua.includes("Firefox/") || ua.includes("FxiOS")) return "Mozilla Firefox";
  if (ua.includes("Chrome/") && !ua.includes("Chromium/")) return "Google Chrome";
  if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Apple Safari";
  return UNKNOWN;
}

export function detectDevice(): string {
  if (typeof window === "undefined") return UNKNOWN;
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth || 0;
  if (/ipad|tablet|(android(?!.*mobile))/.test(ua) || (width >= 640 && width < 1024)) {
    return "Tablet";
  }
  if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/.test(ua) || width < 640) {
    return "Mobile";
  }
  return "Desktop";
}

export function detectOS(): string {
  if (typeof window === "undefined") return UNKNOWN;
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("CrOS")) return "ChromeOS";
  return UNKNOWN;
}

/**
 * Client-side geolocation is not possible without a geo-IP lookup, and inferring
 * a country from the browser timezone or locale produces wrong data (it reports the
 * visitor's network timezone, not their location). Reporting "Unknown" is the only
 * truthful option until the server supplies a real country from its geo headers.
 */
export function detectCountry(): { country: string; code: string; flag: string } {
  return { country: UNKNOWN, code: "", flag: "" };
}
