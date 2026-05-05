// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0X9PQ7vrw8KxBT23rgKOrB4mOzgkD0_4",
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
