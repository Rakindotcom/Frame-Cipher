import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, Firestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, where, orderBy, deleteDoc, serverTimestamp, setLogLevel } from "firebase/firestore";
import { getStorage, FirebaseStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "framecipherweb.firebasestorage.app",
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
let storage: FirebaseStorage | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch {
    app = null;
    auth = null;
    db = null;
    storage = null;
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

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// ============================================================================
// AUTHENTICATION HELPERS
// ============================================================================

export async function loginWithGoogle(): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!auth) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Google Auth Error:", error);
    return { success: false, error: error?.message || "Google sign-in failed." };
  }
}

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

export async function registerWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!auth) {
    return { success: false, error: "Firebase is not configured." };
  }
  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error("Firebase Registration Error:", error);
    return { success: false, error: error?.message || "User registration failed." };
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

export async function getAuthorProfilesFromFirestore(): Promise<any[]> {
  if (!db || typeof window === "undefined") {
    return [];
  }
  try {
    const colRef = collection(db, "author_profiles");
    const snapshot = await getDocs(colRef);
    const authors: any[] = [];
    snapshot.forEach((d) => {
      authors.push({ id: d.id, ...d.data() });
    });
    return authors;
  } catch (error) {
    return [];
  }
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

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Uploads the binary to Cloud Storage for Firebase and keeps only the metadata
 * document in Firestore. Previously images were stored as base64 data URLs in
 * browser localStorage, which meant media existed only on the machine that
 * uploaded it and never reached the published site.
 */
export async function uploadMediaFile(
  file: File,
  dimensions: string,
  title: string
): Promise<{ success: boolean; item?: MediaRecord; error?: string }> {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("dimensions", dimensions);
    formData.append("title", title);

    const res = await fetch("/api/media", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok && data?.success && data?.item) {
      // Also optionally backup metadata to Firestore if configured
      if (db) {
        try {
          await setDoc(doc(db, "media", data.item.id), {
            ...sanitizeForFirestore(data.item),
            createdAt: serverTimestamp(),
          });
        } catch {}
      }
      return { success: true, item: data.item };
    }

    // Fallback to Firebase Storage if /api/media returned error and storage is configured
    if (storage && db) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
      const path = `media/${Date.now()}-${safeName}`;
      const objectRef = storageRef(storage, path);
      await uploadBytes(objectRef, file, { contentType: file.type || "image/jpeg" });
      const url = await getDownloadURL(objectRef);

      const item: MediaRecord = {
        id: `media-${Date.now()}`,
        title,
        filename: file.name,
        url,
        storagePath: path,
        alt: title,
        caption: "",
        description: "",
        uploadedAt: new Date().toISOString(),
        fileSize: formatFileSize(file.size),
        dimensions,
        type: file.type || "image/jpeg",
      };

      await setDoc(doc(db, "media", item.id), {
        ...sanitizeForFirestore(item),
        createdAt: serverTimestamp(),
      });

      return { success: true, item };
    }

    return { success: false, error: data?.error || "Upload failed." };
  } catch (error: any) {
    console.warn("Media upload failed:", error?.message);
    return { success: false, error: error?.message || "Upload failed." };
  }
}

export async function listMediaFromFirestore(): Promise<MediaRecord[]> {
  try {
    const res = await fetch("/api/media", { cache: "no-store" });
    if (res.ok) {
      const items = await res.json();
      if (Array.isArray(items) && items.length > 0) {
        return items as MediaRecord[];
      }
    }
  } catch (error) {
    console.warn("Could not list local media:", error);
  }

  if (!db) return [];
  try {
    const snapshot = await getDocs(query(collection(db, "media"), orderBy("createdAt", "desc")));
    const items: MediaRecord[] = [];
    snapshot.forEach((d) => {
      items.push({ id: d.id, ...d.data() } as MediaRecord);
    });
    return items;
  } catch (error) {
    console.warn("Could not list media from Firestore:", error);
    return [];
  }
}

export async function saveMediaMetadata(item: MediaRecord): Promise<{ success: boolean; error?: string }> {
  if (db) {
    try {
      await setDoc(doc(db, "media", item.id), sanitizeForFirestore(item), { merge: true });
    } catch {}
  }
  return { success: true };
}

export async function deleteMediaItem(item: MediaRecord): Promise<{ success: boolean; error?: string }> {
  try {
    await fetch("/api/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, filename: item.filename }),
    });
  } catch (err) {
    console.warn("Failed to delete local media file:", err);
  }

  if (db) {
    try {
      if (storage && item.storagePath && item.storagePath.startsWith("media/")) {
        await deleteObject(storageRef(storage, item.storagePath)).catch(() => {});
      }
      await deleteDoc(doc(db, "media", item.id));
    } catch {}
  }
  return { success: true };
}

export { app, auth, db, storage, analytics };
