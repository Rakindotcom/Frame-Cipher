import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, Firestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, where, orderBy, deleteDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";

// Fallback configuration if env vars are not set
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCWldbjbDKKVW7RCEuQhLbOCVgkSR9RN3I",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "frame-cipher.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "frame-cipher",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "frame-cipher.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1035920780528",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1035920780528:web:34d5430e5efbf0ced62635",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-G2QQ51J5TE",
};

// Singleton Firebase initialization (prevents re-initialization during hot reloads)
const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Analytics initializes only on client-side
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// ============================================================================
// AUTHENTICATION HELPERS
// ============================================================================

export async function loginWithGoogle(): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Google Auth Error:", error);
    return { success: false, error: error?.message || "Google sign-in failed." };
  }
}

export async function loginWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Email Auth Error:", error);
    return { success: false, error: error?.message || "Email authentication failed." };
  }
}

export async function registerWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Registration Error:", error);
    return { success: false, error: error?.message || "User registration failed." };
  }
}

export async function logoutUser(): Promise<{ success: boolean; error?: string }> {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error("Firebase SignOut Error:", error);
    return { success: false, error: error?.message || "Logout failed." };
  }
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// ============================================================================
// FIRESTORE DATABASE HELPERS
// ============================================================================

export interface SavedInquiryItem {
  id?: string;
  userId?: string;
  userEmail?: string;
  serviceSlug?: string;
  serviceTitle?: string;
  category?: string;
  inputs?: Record<string, any>;
  primaryResult?: {
    label: string;
    value: string | number;
    unit?: string;
  };
  notes?: string;
  createdAt?: any;
}

export type SavedCalculationItem = SavedInquiryItem;

export async function saveInquiryRecord(item: SavedInquiryItem): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const colRef = collection(db, "saved_inquiries");
    const docRef = await addDoc(colRef, {
      ...item,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Firestore Save Inquiry Error:", error);
    return { success: false, error: error?.message || "Failed to save inquiry to cloud." };
  }
}

export const saveCalculationRecord = saveInquiryRecord;

export async function getUserInquiryHistory(userId: string): Promise<SavedInquiryItem[]> {
  try {
    const colRef = collection(db, "saved_inquiries");
    const q = query(colRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const items: SavedInquiryItem[] = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...(doc.data() as any) });
    });
    return items;
  } catch (error) {
    console.error("Firestore Fetch Inquiry Error:", error);
    return [];
  }
}

export const getUserCalculationHistory = getUserInquiryHistory;

export interface ContactInquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: any;
}

export async function saveContactInquiry(inquiry: ContactInquiry): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const colRef = collection(db, "contact_messages");
    const docRef = await addDoc(colRef, {
      ...inquiry,
      createdAt: serverTimestamp(),
      status: "unread",
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Firestore Contact Inquiry Error:", error);
    return { success: false, error: error?.message || "Failed to dispatch message to Firestore." };
  }
}

// Firestore rejects undefined values (e.g. optional fields on canonical posts).
export function sanitizeForFirestore<T>(value: T): T {
  if (value === undefined || value === null) return value;
  if (Array.isArray(value)) {
    return value
      .filter((item) => item !== undefined && item !== null)
      .map((item) => sanitizeForFirestore(item)) as unknown as T;
  }
  if (typeof value === "object") {
    const clean: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
      if (entry !== undefined) {
        clean[key] = sanitizeForFirestore(entry);
      }
    }
    return clean as T;
  }
  return value;
}

export async function saveBlogPostToFirestore(post: any): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, "blog_posts", post.id || post.slug);
    await setDoc(docRef, {
      ...sanitizeForFirestore(post),
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.error("Firestore Save Blog Post Error:", error);
    return { success: false, error: error?.message || "Failed to save blog post." };
  }
}

export async function getBlogPostsFromFirestore(): Promise<any[]> {
  try {
    const colRef = collection(db, "blog_posts");
    const snapshot = await getDocs(colRef);
    const posts: any[] = [];
    snapshot.forEach((d) => {
      posts.push({ id: d.id, ...d.data() });
    });
    return posts;
  } catch (error) {
    console.error("Firestore Fetch Blog Posts Error:", error);
    return [];
  }
}

export async function getAuthorProfilesFromFirestore(): Promise<any[]> {
  try {
    const colRef = collection(db, "author_profiles");
    const snapshot = await getDocs(colRef);
    const authors: any[] = [];
    snapshot.forEach((d) => {
      authors.push({ id: d.id, ...d.data() });
    });
    return authors;
  } catch (error) {
    console.error("Firestore Fetch Author Profiles Error:", error);
    return [];
  }
}

export async function saveAuthorProfileToFirestore(author: any): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, "author_profiles", author.id || author.slug);
    await setDoc(docRef, {
      ...sanitizeForFirestore(author),
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.error("Firestore Save Author Profile Error:", error);
    return { success: false, error: error?.message || "Failed to save author profile." };
  }
}

export async function deleteAuthorProfileFromFirestore(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await deleteDoc(doc(db, "author_profiles", id));
    return { success: true };
  } catch (error: any) {
    console.error("Firestore Delete Author Profile Error:", error);
    return { success: false, error: error?.message || "Failed to delete author profile." };
  }
}

export { app, auth, db, analytics };
