import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged, onIdTokenChanged, User } from "firebase/auth";
import { getFirestore, Firestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, where, deleteDoc, serverTimestamp, setLogLevel } from "firebase/firestore";
import { ADMIN_FIREBASE_UID } from "@/lib/admin/identity";

try {
  setLogLevel("silent");
} catch {}
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";

// Public web config for the canonical `framecipherweb` project, embedded as
// build-safe fallback defaults. Firebase web keys ship in the client bundle by
// design (not secrets); env vars still take precedence when set.
// NOTE: module import must never throw during `next build` page-data
// collection, so init below stays guarded with try/catch.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB0X9PQ7vrw8KxBT23rgKOrB4mOzgkD0_4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "framecipherweb.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "framecipherweb",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "634798847672",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:634798847672:web:4056e5bf82bca0215fa64d",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-VCCWEYVH74",
};

const isFirebaseConfigured = Boolean(firebaseConfig.apiKey);

// Singleton Firebase initialization (prevents re-initialization during hot reloads).
// Guarded so importing this module on the server during build never throws.
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().find((candidate) => candidate.name === "[DEFAULT]") || initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch {
    app = null;
    auth = null;
    db = null;
  }
}

// Analytics initializes only on client-side, and only when configured.
let analytics: Analytics | null = null;
if (typeof window !== "undefined" && app) {
  isSupported().then((supported) => {
    if (supported && app) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

// ============================================================================
// AUTHENTICATION HELPERS
// ============================================================================

export async function loginWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!auth) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Email Auth Error:", error);
    return { success: false, error: error?.message || "Email authentication failed." };
  }
}

export async function logoutUser(): Promise<{ success: boolean; error?: string }> {
  if (!auth) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error("Firebase SignOut Error:", error);
    return { success: false, error: error?.message || "Logout failed." };
  }
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) {
  if (!auth) {
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export function subscribeToIdTokenChanges(callback: (user: User | null) => void) {
  if (!auth) return () => {};
  return onIdTokenChanged(auth, callback);
}

export async function isAuthorizedAdmin(user: User | null): Promise<boolean> {
  if (!user || user.uid !== ADMIN_FIREBASE_UID) return false;
  const token = await user.getIdTokenResult();
  return token.signInProvider === "password";
}

export async function adminFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const user = auth?.currentUser;
  if (!await isAuthorizedAdmin(user || null)) {
    throw new Error("Administrator authentication required.");
  }
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${await user!.getIdToken()}`);
  return fetch(input, { ...init, headers, cache: init.cache || "no-store" });
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
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const colRef = collection(db, "saved_inquiries");
    const docRef = await addDoc(colRef, {
      ...item,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.warn("Firestore Save Inquiry Note:", error?.message);
    return { success: false, error: error?.message || "Failed to save inquiry to cloud." };
  }
}

export const saveCalculationRecord = saveInquiryRecord;

export async function getUserInquiryHistory(userId: string): Promise<SavedInquiryItem[]> {
  if (!db) {
    return [];
  }
  try {
    const colRef = collection(db, "saved_inquiries");
    const q = query(colRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const items: SavedInquiryItem[] = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...(doc.data() as any) });
    });
    return items;
  } catch (error: any) {
    console.warn("Firestore Fetch Inquiry Note:", error?.message);
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
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const colRef = collection(db, "contact_messages");
    const docRef = await addDoc(colRef, {
      ...inquiry,
      createdAt: serverTimestamp(),
      status: "unread",
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.warn("Firestore Contact Inquiry Note:", error?.message);
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

export async function saveAdminProfileToFirestore(
  profile: { uid: string; email: string; name: string; role: string }
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const docRef = doc(db, "admin_profiles", profile.uid);
    await setDoc(
      docRef,
      { ...sanitizeForFirestore(profile), updatedAt: serverTimestamp() },
      { merge: true }
    );
    return { success: true };
  } catch (error: any) {
    console.warn("Firestore Admin Profile Note:", error?.message);
    return { success: false, error: error?.message || "Failed to save administrator profile." };
  }
}

export async function getAdminProfileFromFirestore(
  uid: string
): Promise<{ success: boolean; profile?: any; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const snap = await getDoc(doc(db, "admin_profiles", uid));
    if (!snap.exists()) return { success: true };
    return { success: true, profile: snap.data() };
  } catch (error: any) {
    console.warn("Firestore Admin Profile Read Note:", error?.message);
    return { success: false, error: error?.message || "Failed to read administrator profile." };
  }
}

export async function saveBlogPostToFirestore(post: any): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const docRef = doc(db, "blog_posts", post.id || post.slug);
    await setDoc(docRef, {
      ...sanitizeForFirestore(post),
      // Always written so the public read filter can rely on the field existing.
      // Legacy documents without it are treated as public by the rules.
      status: post.status || "draft",
      visibility: post.visibility || "public",
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.warn("Firestore Save Blog Post Note:", error?.message);
    return { success: false, error: error?.message || "Failed to save blog post." };
  }
}

export async function deleteBlogPostFromFirestore(id: string): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const docRef = doc(db, "blog_posts", id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error: any) {
    console.warn("Firestore Delete Blog Post Note:", error?.message);
    return { success: false, error: error?.message || "Failed to delete blog post." };
  }
}

export async function getBlogPostsFromFirestore(): Promise<any[]> {
  if (!db || typeof window === "undefined") {
    return [];
  }
  try {
    // Both filters are required: the security rules only grant public reads for
    // documents where status == 'published' and visibility == 'public', and
    // Firestore rejects any query that could return a document failing that test.
    const colRef = collection(db, "blog_posts");
    const q = query(
      colRef,
      where("status", "==", "published"),
      where("visibility", "==", "public")
    );
    const snapshot = await getDocs(q);
    const posts: any[] = [];
    snapshot.forEach((d) => {
      posts.push({ id: d.id, ...d.data() });
    });
    return posts;
  } catch (error) {
    return [];
  }
}

export async function getAdminBlogPostsFromFirestore(): Promise<any[]> {
  if (!db || !await isAuthorizedAdmin(auth?.currentUser || null)) {
    throw new Error("Administrator authentication required.");
  }
  const snapshot = await getDocs(collection(db, "blog_posts"));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
}

export async function getAuthorProfilesFromFirestore(): Promise<any[]> {
  if (!db || typeof window === "undefined") {
    return [];
  }
  try {
    const colRef = collection(db, "author_profiles");
    const snapshot = await getDocs(query(colRef, where("status", "==", "published")));
    const authors: any[] = [];
    snapshot.forEach((d) => {
      authors.push({ id: d.id, ...d.data() });
    });
    return authors;
  } catch (error) {
    return [];
  }
}

export async function getAdminAuthorsFromFirestore(): Promise<any[]> {
  if (!db || !await isAuthorizedAdmin(auth?.currentUser || null)) {
    throw new Error("Administrator authentication required.");
  }
  const snapshot = await getDocs(collection(db, "author_profiles"));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
}

export async function saveAuthorProfileToFirestore(author: any): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const docRef = doc(db, "author_profiles", author.id || author.slug);
    await setDoc(docRef, {
      ...sanitizeForFirestore(author),
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.warn("Firestore Save Author Profile Note:", error?.message);
    return { success: false, error: error?.message || "Failed to save author profile." };
  }
}

export async function deleteAuthorProfileFromFirestore(id: string): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    await deleteDoc(doc(db, "author_profiles", id));
    return { success: true };
  } catch (error: any) {
    console.warn("Firestore Delete Author Profile Note:", error?.message);
    return { success: false, error: error?.message || "Failed to delete author profile." };
  }
}

export interface MediaRecord {
  id: string;
  title: string;
  filename: string;
  url: string;
  storagePath: string;
  alt: string;
  caption: string;
  description: string;
  uploadedAt: string;
  fileSize: string;
  dimensions: string;
  type: string;
}

export const MAX_MEDIA_IMAGE_BYTES = 100 * 1024;

/** Upload to ImageKit through the admin API, then register the result in Firestore. */
export async function uploadMediaImage(
  file: File | null,
  rawTitle: string
): Promise<{ success: boolean; item?: MediaRecord; error?: string }> {
  if (!db || !await isAuthorizedAdmin(auth?.currentUser || null)) {
    return { success: false, error: "Administrator authentication or Firestore is unavailable." };
  }
  if (!file) return { success: false, error: "Choose an image to upload." };
  if (file.size === 0 || file.size > MAX_MEDIA_IMAGE_BYTES) {
    return { success: false, error: "Images must be 100 KB or smaller." };
  }

  const body = new FormData();
  body.set("file", file);
  body.set("title", rawTitle.trim());
  try {
    const response = await adminFetch("/api/media", { method: "POST", body });
    const result = await response.json();
    if (!response.ok || !result.success || !result.item) {
      return { success: false, error: result.error || "Could not upload image." };
    }
    const item = result.item as MediaRecord;
    await setDoc(doc(db, "media", item.id), {
      ...sanitizeForFirestore(item),
      createdAt: serverTimestamp(),
    });
    return { success: true, item };
  } catch (error: any) {
    return { success: false, error: error?.message || "Could not upload image or save it to the media library." };
  }
}

export async function listMediaFromFirestore(): Promise<MediaRecord[]> {
  if (!db) throw new Error("Firebase is not configured.");
  const snapshot = await getDocs(collection(db, "media"));
  return snapshot.docs
    .map((entry) => ({ id: entry.id, ...entry.data() } as MediaRecord))
    .sort((a, b) => (b.uploadedAt || "").localeCompare(a.uploadedAt || ""));
}

export async function saveMediaMetadata(item: MediaRecord): Promise<{ success: boolean; error?: string }> {
  if (!db) return { success: false, error: "Firebase is not configured." };
  try {
    await setDoc(doc(db, "media", item.id), sanitizeForFirestore(item), { merge: true });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error?.message || "Could not save media metadata." };
  }
}

export async function deleteMediaItem(item: MediaRecord): Promise<{ success: boolean; error?: string }> {
  if (!db) return { success: false, error: "Firebase is not configured." };
  try {
    // The library owns only the Firestore reference, never the hosted image.
    await deleteDoc(doc(db, "media", item.id));
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error?.message || "Could not delete media." };
  }
}

export { app, auth, db, analytics };
