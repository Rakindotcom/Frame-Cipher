import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import { getAdminFirestore } from "@/lib/server/firebaseAdmin";
import { publicFirestore } from "@/lib/server/publicFirestore";
import { collection, addDoc } from "firebase/firestore/lite";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, company, service, budget, timeline, details, brief, date, duration } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const now = new Date();
    const isStudio = type === "studio_booking";
    const cleanName = name.trim();
    const cleanEmail = email ? String(email).trim() : (isStudio ? "studio-booking@framecipher.com" : "contact-lead@framecipher.com");
    const cleanPhone = phone ? String(phone).trim() : "";

    // Build structured message body for Firestore contact_messages
    let formattedMessage = "";
    if (isStudio) {
      formattedMessage = [
        "[STUDIO BOOKING]",
        `Service: ${service || "Studio Session"}`,
        `Phone: ${cleanPhone || "Not provided"}`,
        `Target Date: ${date || "Flexible"}`,
        `Duration: ${duration || "Half-Day (4 Hours)"}`,
        `Brief: ${brief || details || "No written brief"}`,
      ].join("\n");
    } else {
      formattedMessage = [
        "[CONTACT BRIEF]",
        `Company: ${company || "N/A"}`,
        `Phone: ${cleanPhone || "Not provided"}`,
        `Service: ${service || "360 Marketing"}`,
        `Budget: ${budget || "Not sure yet"}`,
        `Timeline: ${timeline || "Not sure yet"}`,
        `Details: ${details || brief || "No written details"}`,
      ].join("\n");
    }

    let savedId: string | null = null;

    // 1. Direct write to Firebase Cloud Firestore contact_messages (strictly compliant with Firestore Security Rules)
    try {
      const docRef = await addDoc(collection(publicFirestore, "contact_messages"), {
        name: cleanName,
        email: cleanEmail,
        message: formattedMessage,
        createdAt: now.toISOString(),
        status: "new",
        read: false,
      });
      savedId = docRef.id;
    } catch (fsErr) {
      console.warn("Firestore public write error:", fsErr);
    }

    // 2. Also write to Admin Firestore if Admin SDK credentials exist in environment
    const adminFs = getAdminFirestore();
    if (adminFs) {
      try {
        const collectionName = isStudio ? "studio_bookings" : "contact_leads";
        const adminDoc = await adminFs.collection(collectionName).add({
          type: type || "contact",
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          company: company || "",
          service: service || (isStudio ? "Studio Session" : "360 Marketing"),
          budget: budget || "",
          timeline: timeline || "",
          date: date || "",
          duration: duration || "",
          brief: brief || details || "",
          status: "new",
          createdAt: now.toISOString(),
          timestamp: now.getTime(),
        });
        if (!savedId) savedId = adminDoc.id;
      } catch (adminErr) {
        console.warn("Admin Firestore write error:", adminErr);
      }
    }

    return NextResponse.json({
      success: true,
      id: savedId || "inq_" + now.getTime(),
      database: "firebase_firestore",
    }, { status: 201 });
  } catch (error: any) {
    console.error("API POST /api/inquiries error:", error);
    return NextResponse.json({ error: error.message || "Failed to process inquiry" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    const firestore = getAdminFirestore();
    if (!firestore) {
      // In browser client, leads are read directly via Client SDK using Admin Auth UID
      return NextResponse.json({ leads: [], note: "Client SDK reads Firestore directly" }, { status: 200 });
    }

    const [bookingsSnap, contactLeadsSnap, contactsSnap, messagesSnap] = await Promise.all([
      firestore.collection("studio_bookings").get().catch(() => ({ docs: [] })),
      firestore.collection("contact_leads").get().catch(() => ({ docs: [] })),
      firestore.collection("contacts").get().catch(() => ({ docs: [] })),
      firestore.collection("contact_messages").get().catch(() => ({ docs: [] })),
    ]);

    const leadsMap = new Map<string, any>();

    bookingsSnap.docs.forEach((doc: any) => {
      leadsMap.set(doc.id, { id: doc.id, collection: "studio_bookings", ...doc.data() });
    });

    contactLeadsSnap.docs.forEach((doc: any) => {
      leadsMap.set(doc.id, { id: doc.id, collection: "contact_leads", ...doc.data() });
    });

    contactsSnap.docs.forEach((doc: any) => {
      const d = doc.data();
      leadsMap.set(doc.id, {
        id: doc.id,
        collection: "contacts",
        type: "contact",
        name: d.name || "Client",
        email: d.email || "",
        phone: d.phone || "",
        company: d.company || "",
        service: d.serviceNeeded || d.service || "360 Marketing",
        budget: d.budgetRange || d.budget || "",
        timeline: d.timeline || "",
        details: d.details || "",
        status: d.status || "new",
        createdAt: d.timestamp ? new Date(d.timestamp.toMillis ? d.timestamp.toMillis() : d.timestamp).toISOString() : new Date().toISOString(),
      });
    });

    messagesSnap.docs.forEach((doc: any) => {
      const d = doc.data();
      const msg = d.message || "";
      const isStudio = msg.includes("[STUDIO BOOKING]");

      let service = isStudio ? "Studio Production" : "Agency Contact";
      let phone = "";
      let date = "";
      let duration = "";
      let brief = msg;
      let company = "";
      let budget = "";
      let timeline = "";

      msg.split("\n").forEach((line: string) => {
        if (line.startsWith("Service:")) service = line.replace("Service:", "").trim();
        if (line.startsWith("Phone:")) phone = line.replace("Phone:", "").trim();
        if (line.startsWith("Target Date:")) date = line.replace("Target Date:", "").trim();
        if (line.startsWith("Date:")) date = line.replace("Date:", "").trim();
        if (line.startsWith("Duration:")) duration = line.replace("Duration:", "").trim();
        if (line.startsWith("Brief:")) brief = line.replace("Brief:", "").trim();
        if (line.startsWith("Details:")) brief = line.replace("Details:", "").trim();
        if (line.startsWith("Company:")) company = line.replace("Company:", "").trim();
        if (line.startsWith("Budget:")) budget = line.replace("Budget:", "").trim();
        if (line.startsWith("Timeline:")) timeline = line.replace("Timeline:", "").trim();
      });

      leadsMap.set(doc.id, {
        id: doc.id,
        collection: "contact_messages",
        type: isStudio ? "studio_booking" : "contact",
        name: d.name || "Client",
        email: d.email || "",
        phone,
        company,
        service,
        date,
        duration,
        budget,
        timeline,
        brief,
        status: d.status || "new",
        createdAt: d.createdAt || new Date().toISOString(),
        adminNotes: d.adminNotes || "",
      });
    });

    const leads = Array.from(leadsMap.values());
    leads.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

    return NextResponse.json({ leads }, { headers: { "Cache-Control": "no-store" } });
  } catch (error: any) {
    console.error("API GET /api/inquiries error:", error);
    return NextResponse.json({ leads: [], error: error.message }, { status: 200 });
  }
}

export async function PATCH(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    const body = await req.json();
    const { id, collection: colName, status, notes } = body;

    const firestore = getAdminFirestore();
    if (firestore && id && colName) {
      const updateData: Record<string, any> = {};
      if (status) updateData.status = status;
      if (notes !== undefined) updateData.adminNotes = notes;
      updateData.updatedAt = new Date().toISOString();
      await firestore.collection(colName).doc(id).update(updateData);
    }

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error("API PATCH /api/inquiries error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const colName = searchParams.get("collection");

    const firestore = getAdminFirestore();
    if (firestore && id && colName) {
      await firestore.collection(colName).doc(id).delete();
    }

    return NextResponse.json({ success: true, deletedId: id });
  } catch (error: any) {
    console.error("API DELETE /api/inquiries error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
