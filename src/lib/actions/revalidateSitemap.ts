"use server";

import { revalidatePath } from "next/cache";

export async function revalidateSitemaps(
  kinds: Array<"post" | "author" | "category">
): Promise<void> {
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