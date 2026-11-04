import "server-only";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, setLogLevel } from "firebase/firestore/lite";

// Silence internal Firestore SDK RPC logs in server runtime so application-level
// try/catch and graceful local cache fallbacks handle errors cleanly.
try {
  setLogLevel("silent");
} catch {}

// Public web configuration is not a credential. These server reads use the
// same Firestore Security Rules as an anonymous visitor, not the Admin SDK.
const app = getApps().find((candidate) => candidate.name === "public-content") ||
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB0X9PQ7vrw8KxBT23rgKOrB4mOzgkD0_4",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "framecipherweb.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "framecipherweb",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:634798847672:web:4056e5bf82bca0215fa64d",
  }, "public-content");

export const publicFirestore = getFirestore(app);
