// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "framecipherweb.firebaseapp.com",
  projectId: "framecipherweb",
  storageBucket: "framecipherweb.firebasestorage.app",
  messagingSenderId: "634798847672",
  appId: "1:634798847672:web:4056e5bf82bca0215fa64d",
  measurementId: "G-VCCWEYVH74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined'
  ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
  : null;
const db = getFirestore(app);

export { app, analytics, db };
