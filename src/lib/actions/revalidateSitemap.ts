"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { SESSION_COOKIE, readSessionValue } from "@/lib/admin/token";

export async function revalidateSitemaps(
  kinds: Array<"post" | "author" | "category">
): Promise<void> {
  const headerList = await headers();
  const cookieHeader = headerList.get("cookie") || "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));

  const identity = await readSessionValue(match ? match.slice(SESSION_COOKIE.length + 1) : null);
  if (!identity) {
    throw new Error("Administrator authentication required.");
  }

  if (kinds.includes("post")) {
    revalidatePath("/post-sitemap.xml");
  }
  if (kinds.includes("author")) {
    revalidatePath("/author-sitemap.xml");
    revalidatePath("/authors");
    revalidatePath("/authors/[slug]", "page");
  }
  if (kinds.includes("category")) {
    revalidatePath("/category-sitemap.xml");
  }
}
