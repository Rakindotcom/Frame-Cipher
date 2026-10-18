import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, BookOpen } from "lucide-react";
import {
  BLOG_CATEGORIES,
  blogCategorySlug,
  blogCategoryFromSlug,
  getAllCanonicalPosts,
  getMergedPostsFromStorage,
} from "@/lib/blog/getBlogPosts";
import { buildCategoryMetadata } from "@/lib/seo/metadata";
import { WordPressSidebar } from "@/components/blog/WordPressSidebar";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getPublicBlogPosts, getPublicCategories } from "@/lib/blog/serverBlogStorage";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  const dbCategories = await getPublicCategories().catch(() => []);
  const combined = Array.from(new Set([...BLOG_CATEGORIES, ...dbCategories]));
  return combined
    .filter((c) => c !== "All Articles")
    .map((cat) => ({
      category: blogCategorySlug(cat),
    }));
}

// Resolves everything both generateMetadata and the page body need, so the
// <title> and the on-page <h1> can never disagree about a category's casing
// (previously the metadata fell back to the raw slug: "app development").
async function resolveCategoryContext(catSlug) {
  let allPosts = getAllCanonicalPosts();
  let dbCategories = [];
  try {
    const [remotePosts, categories] = await Promise.all([
      getPublicBlogPosts().catch(() => []),
      getPublicCategories().catch(() => []),
    ]);
    allPosts = getMergedPostsFromStorage(JSON.stringify(remotePosts));
    dbCategories = categories || [];
  } catch (error) {
    console.error("Category page could not load server blog posts:", error);
  }

  const postCategories = allPosts
    .flatMap((p) => [p.category, ...(p.categories || [])])
    .filter(Boolean);

  const dynamicCategories = Array.from(
    new Set([
      "All Articles",
      ...BLOG_CATEGORIES.filter((c) => c !== "All Articles"),
      ...dbCategories,
      ...postCategories,
    ])
  );

  const categoryName =
    dynamicCategories.find((c) => blogCategorySlug(c) === catSlug && c !== "All Articles") ||
    blogCategoryFromSlug(catSlug, dynamicCategories) ||
    catSlug.replace(/-/g, " ");

  return { allPosts, dynamicCategories, categoryName };
}

export async function generateMetadata({ params }) {
  const { category: catSlug } = await params;
  const { categoryName } = await resolveCategoryContext(catSlug);
  return buildCategoryMetadata(
    categoryName,
    `Strategic articles, operational playbooks, and technical breakdowns for ${categoryName}, published by the Frame Cipher growth team in Dhaka.`,
    `/blog/category/${catSlug}`
  );
}

export default async function CategoryPage({ params }) {
  const { category: catSlug } = await params;

  const { allPosts, dynamicCategories, categoryName } = await resolveCategoryContext(catSlug);

  const categoryPosts = allPosts.filter(
    (p) =>
      p.status === "published" &&
      (blogCategorySlug(p.category) === catSlug ||
        (Array.isArray(p.categories) &&
          p.categories.some((c) => blogCategorySlug(c) === catSlug)))
  );

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: categoryName, url: `/blog/category/${catSlug}` },
        ]}
      />
      <div className="pt-24 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-linear-to-b from-[#130E1C] to-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.2em] text-[#A1A1AA]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-[#71717A]" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-[#71717A]" />
            <span className="text-frame-accent font-bold">{categoryName}</span>
          </nav>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
              Strategic Discipline Archive
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold uppercase text-white tracking-tight">
              {categoryName}
            </h1>
            <p className="text-sm font-body text-[#A1A1AA] max-w-2xl leading-relaxed">
              Strategic articles, operational playbooks, and architecture breakdowns for {categoryName.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <main className="lg:col-span-8 space-y-8 min-w-0">
            {categoryPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categoryPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-2xl bg-[#121216]/80 border-2 border-frame-border hover:border-frame-accent p-5 flex flex-col justify-between transition-all duration-300 shadow-md space-y-4"
                  >
                    {/* Card Featured Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block w-full h-48 rounded-xl overflow-hidden bg-[#09090B] border border-frame-border relative"
                    >
                      <img
                        src={post.featuredImage?.url || "/logo.png"}
                        alt={post.featuredImage?.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-heading font-bold text-[10px] uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    <div className="space-y-2.5 flex-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] text-frame-muted-fg font-body">
                          {post.publishDate}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-frame-muted-fg">
                          <Clock className="h-3 w-3 text-frame-accent" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-white group-hover:text-frame-accent transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="font-body text-xs sm:text-sm text-frame-muted-fg leading-relaxed line-clamp-3 wide:text-lg">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-frame-border flex items-center justify-between text-xs">
                      <span className="text-[11px] text-frame-muted-fg font-body">
                        By {post.author.split(" ")[0]}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-heading font-bold uppercase tracking-wider text-xs text-frame-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Blueprint</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-[#121216] border-2 border-frame-border p-6 text-center space-y-4 sm:p-12">
                <BookOpen className="h-10 w-10 text-frame-muted-fg mx-auto opacity-50" />
                <h3 className="font-heading text-xl font-bold uppercase text-white">No articles published yet</h3>
                <p className="text-sm text-frame-muted-fg max-w-md mx-auto wide:text-lg">
                  Dispatches under {categoryName} are currently being prepared by our strategy team.
                </p>
                <Link
                  href="/blog"
                  className="inline-block px-5 py-2.5 rounded-xl bg-frame-accent hover:bg-purple-600 text-white font-heading text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View All Blog Articles
                </Link>
              </div>
            )}
          </main>

          <div className="lg:col-span-4 sticky top-24">
            <WordPressSidebar
              categories={dynamicCategories}
              activeCategory={categoryName}
              recentPosts={allPosts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

