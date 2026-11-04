"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  getMergedPostsFromStorage,
  BLOG_CATEGORIES,
  isLegacyDemoPost,
} from "@/lib/blog/getBlogPosts";
import { DetailedBlogPost } from "@/lib/blog/canonicalPosts";
import { WordPressSidebar } from "@/components/blog/WordPressSidebar";
import {
  Search,
  BookOpen,
  Clock,
  Eye,
  Calendar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { resolveAuthorImage } from "@/lib/authors/getAuthors";
import { getAdminCategoriesFromFirestore } from "@/lib/firebase";

interface BlogPageClientProps {
  initialPosts?: DetailedBlogPost[];
  initialCategories?: string[];
}

/** Strip markdown / HTML noise down to plain readable text. */
function stripMarkup(raw: string): string {
  return raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, " ")
    .replace(/[*_~`>]+/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Grid card excerpt: prefer the post's real first paragraph (~`wordLimit` words)
 * instead of a title/summary echo. Falls back to excerpt, then a generic line.
 */
function getCardExcerpt(post: DetailedBlogPost, wordLimit = 20): string {
  let firstParagraph = "";

  const raw = (post.content || "").trim();
  if (raw) {
    const paragraphs = raw
      .split(/\n{2,}/)
      .map((p) => stripMarkup(p))
      .filter((p) => p.split(/\s+/).length >= 6); // skip headings / one-liners
    firstParagraph = paragraphs[0] || stripMarkup(raw);
  } else if (Array.isArray(post.blocks) && post.blocks.length > 0) {
    for (const block of post.blocks) {
      const text = typeof block === "string" ? block : typeof block?.content === "string" ? block.content : "";
      const type = typeof block === "object" ? block?.type : undefined;
      if (!text || /^https?:\/\//i.test(text.trim())) continue;
      if (type && type !== "paragraph" && type !== "text") continue;
      firstParagraph = stripMarkup(text);
      break;
    }
  }

  const words = firstParagraph.split(/\s+/).filter(Boolean);
  if (words.length > 0) {
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "…" : "");
  }

  const fallback = (post.excerpt || "").trim();
  return fallback || "Strategic playbooks and dispatches authored by the FrameCipher growth team.";
}

export function BlogPageClient({ initialPosts = [], initialCategories = [] }: BlogPageClientProps) {
  const [posts, setPosts] = useState<DetailedBlogPost[]>(() =>
    initialPosts.filter((p) => !isLegacyDemoPost(p))
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  // Categories list combining static defaults, Firestore categories, and categories from posts
  const [categoriesList, setCategoriesList] = useState<string[]>(() => {
    const base = Array.from(BLOG_CATEGORIES);
    const fromPosts = initialPosts.flatMap((p) => [p.category, ...(p.categories || [])]).filter(Boolean);
    return Array.from(new Set([...base, ...initialCategories, ...fromPosts]));
  });

  // Client-side category cache & Firestore sync
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem("fc_blog_categories");
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCategoriesList((prev) => Array.from(new Set([...prev, ...parsed])));
          }
        }
      } catch {}
    }

    fetch("/api/categories", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : []))
      .then((remoteCats) => {
        if (Array.isArray(remoteCats) && remoteCats.length > 0) {
          setCategoriesList((prev) => Array.from(new Set([...prev, ...remoteCats])));
        }
      })
      .catch(() => {});

    getAdminCategoriesFromFirestore()
      .then((remoteCats) => {
        if (Array.isArray(remoteCats) && remoteCats.length > 0) {
          setCategoriesList((prev) => Array.from(new Set([...prev, ...remoteCats])));
        }
      })
      .catch(() => {});
  }, []);

  // Update categories whenever posts change
  useEffect(() => {
    if (posts.length > 0) {
      const postCats = posts.flatMap((p) => [p.category, ...(p.categories || [])]).filter(Boolean);
      if (postCats.length > 0) {
        setCategoriesList((prev) => Array.from(new Set([...prev, ...postCats])));
      }
    }
  }, [posts]);

  // Refresh public posts from the rule-limited API; browser-local CMS drafts
  // are deliberately not a source of published content.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let apiPosts: DetailedBlogPost[] = [];

        try {
          const res = await fetch("/api/blog", { cache: "no-store" });
          if (res.ok) {
            const remote: unknown = await res.json();
            apiPosts = getMergedPostsFromStorage(JSON.stringify(remote));
          }
        } catch (err) {
          console.warn("Failed to fetch /api/blog:", err);
        }

        const cleanPosts = apiPosts.filter((p) => !isLegacyDemoPost(p));

        const withRealViews = cleanPosts.map((p) => {
          const v = parseInt(localStorage.getItem(`framecipher_views_${p.slug}`) || "0", 10);
          return { ...p, views: v };
        });

        if (!cancelled) {
          if (withRealViews.length > 0) {
            setPosts(withRealViews);
          } else if (initialPosts && initialPosts.length > 0) {
            setPosts(initialPosts.filter((p) => !isLegacyDemoPost(p)));
          }
        }
      } catch {
        // preserve current initialPosts if network fails
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (isLegacyDemoPost(post)) return false;
      if (post.status && post.status !== "published") return false;

      const matchesCat =
        selectedCategory === "All Articles" ||
        post.category === selectedCategory ||
        (post.categories && post.categories.includes(selectedCategory));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        (post.excerpt || "").toLowerCase().includes(q) ||
        (post.focusKeyword || "").toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCat && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Featured post: explicitly marked featured post, or fallback to first post
  const featuredPost = filteredPosts.find((p) => p.isFeatured) || filteredPosts[0] || null;
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="blog-page min-h-screen bg-[#09090B] text-white font-sans relative overflow-x-hidden">
      {/* 1. Master Editorial Blog Hero */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-32 pb-16 text-white sm:px-6 md:px-8 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
              Strategic Dispatches &amp; Playbooks
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-[-0.03em] text-white">
            Blog &amp; Growth{' '}
            <span className="italic text-frame-accent">
              Playbooks.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Proprietary frameworks, front-end architecture benchmarks, and conversion engineering from our senior strategy team.
          </p>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
        {/* Search Toolbar */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-4 sm:p-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search blog articles, playbooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-lg bg-[#18181B] border border-white/[0.08] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400 font-mono transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-end md:self-auto">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              <span>{filteredPosts.length} Articles Published</span>
            </div>
          </div>
        </div>

        {/* 3. Two-Column Layout (8 Col Articles + 4 Col WordPress Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10 min-w-0">
            {filteredPosts.length === 0 ? (
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-12 text-center space-y-4">
                <BookOpen className="h-10 w-10 text-zinc-500 mx-auto opacity-50" />
                <h3 className="font-heading text-xl font-medium text-white">
                  {searchQuery ? "No Articles Found" : "No Articles Published Yet"}
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  {searchQuery
                    ? `No published articles match "${searchQuery}". Try selecting another strategic category or clearing your search.`
                    : "Strategic playbooks and dispatches created in the FrameCipher Admin Portal will be published here automatically."}
                </p>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All Articles");
                      setSearchQuery("");
                    }}
                    className="sw-btn sw-btn-primary"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Featured Post Spotlight Card with Prominent Featured Image */}
                {featuredPost && (
                  <article className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors duration-200 hover:border-white/[0.14] space-y-6">
                    {/* FEATURED IMAGE DISPLAY */}
                    <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden border border-white/[0.08] bg-[#09090B]">
                      <img
                        src={featuredPost.featuredImage?.url || "/logo.png"}
                        alt={featuredPost.featuredImage?.alt || featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/logo.png";
                        }}
                      />
                    </div>

                    <div className="relative z-10 space-y-5">
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono text-[11px] uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                          <Clock className="h-3.5 w-3.5 text-frame-accent" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{featuredPost.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{featuredPost.views > 0 ? `${featuredPost.views.toLocaleString()} reads` : "Live Blueprint"}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${featuredPost.slug}`} className="block">
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.06] tracking-tight text-white group-hover:text-purple-300 transition-colors">
                          {featuredPost.title}
                        </h2>
                      </Link>

                      {/* Excerpt: first paragraph of the post */}
                      <p className="text-base sm:text-lg font-normal text-zinc-300 leading-relaxed line-clamp-3">
                        {getCardExcerpt(featuredPost, 28)}
                      </p>

                      {/* Author & CTA Button */}
                      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#18181B] border border-white/[0.08] shrink-0">
                            <img
                              src={resolveAuthorImage(featuredPost.author, featuredPost.authorImage)}
                              alt={featuredPost.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback") as HTMLElement;
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                            <div
                              style={{ display: "none" }}
                              className="avatar-fallback w-full h-full bg-frame-accent text-white items-center justify-center font-mono font-medium text-xs"
                            >
                              {featuredPost.author.slice(0, 2).toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-xs uppercase text-white">
                              {featuredPost.author}
                            </div>
                            <div className="text-[11px] text-zinc-400 font-mono">
                              {featuredPost.authorRole}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="sw-btn sw-btn-primary self-start sm:self-auto"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )}

                {/* Regular Posts Grid with Featured Images */}
                {regularPosts.length > 0 && (
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
                      <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                        Archived Strategic Dispatches
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularPosts.map((post) => (
                        <article
                          key={post.id}
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
                              onError={(e) => {
                                e.currentTarget.src = "/logo.png";
                              }}
                            />
                          </Link>

                          <div className="space-y-2.5 flex-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                                {post.category}
                              </span>
                              <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                                <Clock className="h-3 w-3 text-frame-accent" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Title */}
                            <Link href={`/blog/${post.slug}`}>
                              <h4 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                            </Link>

                            {/* Excerpt */}
                            <p className="text-sm font-normal text-zinc-400 leading-relaxed line-clamp-3">
                              {getCardExcerpt(post)}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 min-w-0">
                              <img
                                src={resolveAuthorImage(post.author, post.authorImage)}
                                alt={post.author}
                                className="w-5 h-5 rounded-full object-cover border border-white/[0.08] shrink-0"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                              <span className="text-[11px] text-zinc-400 font-mono truncate">
                                By {post.author.split(" ")[0]}
                              </span>
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-frame-accent shrink-0"
                            >
                              <span>Read Article</span>
                              <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column: WordPress-Style Sidebar with Side Categories & 3 Latest Posts */}
          <div className="lg:col-span-4 sticky top-24">
            <WordPressSidebar
              categories={categoriesList as any}
              activeCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              recentPosts={filteredPosts}
            />
          </div>
        </div>
      </main>

      {/* 4. Bottom Master CTA Section */}
      <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                Bring us the brief.
                <br />
                <span className="italic text-frame-accent">
                  We will bring the system.
                </span>
              </h2>
              <span
                aria-hidden="true"
                className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0"
              >
                &rarr;
              </span>
            </div>

            <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
              <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                Tell us what you are building, selling, launching, or fixing. We will shape the
                strategy, content, technology, and marketing path around it.
              </p>
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <Link href="/contact" className="sw-btn sw-btn-primary justify-center">
                  Book a strategy call
                </Link>
                <Link href="/contact" className="sw-btn sw-btn-outline justify-center">
                  Send a brief
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}