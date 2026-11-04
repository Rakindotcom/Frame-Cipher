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
    <div className="min-h-screen bg-[#09090B] text-white font-sans relative overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: categoryName, url: `/blog/category/${catSlug}` },
        ]}
      />

      {/* Header Banner */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-32 pb-16 text-white sm:px-6 md:px-8 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav aria-label="Breadcrumb" className="sr-only">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <span>{categoryName}</span>
          </nav>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                FrameCipher Archive
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                {categoryName}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              {categoryName}{' '}
              <span className="italic text-frame-accent">
                Playbooks.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-normal text-zinc-300 max-w-2xl leading-relaxed">
              Strategic articles, operational playbooks, and architecture breakdowns for {categoryName.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <main className="lg:col-span-8 space-y-8 min-w-0">
            {categoryPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categoryPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] space-y-4"
                  >
                    {/* Card Featured Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block w-full h-48 rounded-lg overflow-hidden bg-[#09090B] border border-white/[0.08] relative aspect-video"
                    >
                      <img
                        src={post.featuredImage?.url || "/logo.png"}
                        alt={post.featuredImage?.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/[0.08]">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    <div className="space-y-2.5 flex-1">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="text-[11px]">
                          {post.publishDate}
                        </span>
                        <div className="flex items-center gap-1 text-[11px]">
                          <Clock className="h-3 w-3 text-frame-accent" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-sm font-normal text-zinc-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-zinc-400 font-mono">
                        By {post.author.split(" ")[0]}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-frame-accent"
                      >
                        <span>Read Blueprint</span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-14 text-center space-y-5">
                <BookOpen className="h-10 w-10 text-zinc-500 mx-auto opacity-50" />
                <h3 className="font-heading text-xl font-medium text-white">No articles published yet</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  Dispatches under {categoryName} are currently being prepared by our strategy team.
                </p>
                <Link
                  href="/blog"
                  className="sw-btn sw-btn-primary"
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