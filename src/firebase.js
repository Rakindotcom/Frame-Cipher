// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (canonical `framecipherweb` project).
// Web keys are public by design; env vars take precedence when set.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB0X9PQ7vrw8KxBT23rgKOrB4mOzgkD0_4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "framecipherweb.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "framecipherweb",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "framecipherweb.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "634798847672",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:634798847672:web:4056e5bf82bca0215fa64d",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-VCCWEYVH74"
};

// Initialize Firebase lazily so `next build` page-data collection never throws.
const isConfigured = Boolean(firebaseConfig.apiKey);

let app = null;
let db = null;
let analytics = null;
if (isConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    analytics = typeof window !== 'undefined'
      ? isSupported().then((supported) => (supported && app ? getAnalytics(app) : null)).catch(() => null)
      : null;
  } catch {
    app = null;
    db = null;
    analytics = null;
  }
}

export { app, analytics, db };
