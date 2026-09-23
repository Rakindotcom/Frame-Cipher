"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  getAllCanonicalPosts,
  getMergedPostsFromStorage,
  BLOG_CATEGORIES,
} from "@/lib/blog/getBlogPosts";
import { DetailedBlogPost } from "@/lib/blog/canonicalPosts";
import { WordPressSidebar } from "@/components/blog/WordPressSidebar";
import { PageHero, CTASection } from "@/components/Kinetic";
import {
  Search,
  BookOpen,
  Clock,
  Eye,
  Calendar,
  ArrowRight,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState<DetailedBlogPost[]>(getAllCanonicalPosts());
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync with CMS posts in localStorage on mount with real view telemetry
  useEffect(() => {
    try {
      const stored = localStorage.getItem("framecipher_admin_blog_posts");
      const merged = getMergedPostsFromStorage(stored);
      const withRealViews = merged.map((p) => {
        const v = parseInt(localStorage.getItem(`framecipher_views_${p.slug}`) || "0", 10);
        return { ...p, views: v };
      });
      setPosts(withRealViews);
    } catch {
      setPosts(getAllCanonicalPosts());
    }
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
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

  // Featured post: first matching post
  const featuredPost = filteredPosts[0] || posts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-frame-bg text-frame-fg font-body relative overflow-x-hidden">
      {/* 1. Kinetic Hero Header */}
      <PageHero
        number="03"
        eyebrow="FrameCipher Blog"
        meta="Strategic Dispatches & Playbooks"
        title="FRAME CIPHER BLOG & GROWTH PLAYBOOKS"
      >
        Proprietary frameworks, front-end architecture benchmarks, and conversion engineering from our senior strategy team.
      </PageHero>

      {/* 2. Kinetic Category Ticker / Marquee */}
      <div className="border-b-2 border-frame-border bg-frame-muted/30 py-3 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee font-heading text-xs font-bold uppercase tracking-[0.25em] text-frame-muted-fg">
          <span>// WEBFLOW ENTERPRISE ARCHITECTURE</span>
          <span className="text-frame-accent">★</span>
          <span>FULL-FUNNEL GROWTH SYSTEMS</span>
          <span className="text-frame-accent">★</span>
          <span>KINETIC UI/UX DESIGN LANGUAGE</span>
          <span className="text-frame-accent">★</span>
          <span>PROGRAMMATIC B2B SEO</span>
          <span className="text-frame-accent">★</span>
          <span>CONVERSION RATE VELOCITY</span>
          <span className="text-frame-accent">★</span>
          <span>MULTI-LOCALE CMS SCHEMAS</span>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
        {/* Search & Category Filter Toolbar */}
        <div className="rounded-2xl border-2 border-frame-border bg-[#121216]/90 backdrop-blur-md p-5 sm:p-6 shadow-xl space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-frame-muted-fg" />
              <input
                type="text"
                placeholder="Search blog articles, playbooks, Webflow..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#18181B] border border-frame-border text-sm text-frame-fg placeholder:text-frame-muted-fg focus:outline-hidden focus:border-frame-accent focus:ring-1 focus:ring-frame-accent transition-all font-body"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-frame-muted-fg hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-frame-muted-fg self-end md:self-auto">
              <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
              <span>{filteredPosts.length} Articles Published</span>
            </div>
          </div>

          {/* Category Filter Pills (Horizontal Top Quick Filter) */}
          <div className="pt-3 border-t border-frame-border flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <SlidersHorizontal className="h-4 w-4 text-frame-muted-fg shrink-0 mr-1 hidden sm:block" />
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-frame-accent text-white border-frame-accent shadow-md shadow-purple-500/25"
                      : "bg-[#18181B] text-frame-muted-fg border-frame-border hover:border-frame-accent hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Two-Column Layout (8 Col Articles + 4 Col WordPress Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10 min-w-0">
            {filteredPosts.length === 0 ? (
              <div className="rounded-2xl border-2 border-frame-border bg-[#121216] p-12 text-center space-y-4">
                <BookOpen className="h-10 w-10 text-frame-muted-fg mx-auto opacity-50" />
                <h3 className="font-heading text-xl font-bold uppercase text-white">No Articles Found</h3>
                <p className="text-sm text-frame-muted-fg max-w-md mx-auto">
                  No published articles match &quot;{searchQuery}&quot;. Try selecting another strategic category or clearing your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All Articles");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-frame-accent text-white font-heading text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Featured Post Spotlight Card with Prominent Featured Image */}
                {featuredPost && (
                  <article className="relative overflow-hidden rounded-3xl border-2 border-frame-border bg-linear-to-b from-[#18181B] via-[#121216] to-[#09090B] p-6 sm:p-8 hover:border-frame-accent transition-all duration-300 group shadow-2xl space-y-6">
                    {/* Top ambient glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-frame-accent/15 blur-3xl group-hover:bg-frame-accent/25 transition-all duration-500"
                    />

                    {/* FEATURED IMAGE DISPLAY */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-frame-border bg-[#09090B]">
                      <img
                        src={featuredPost.featuredImage?.url || "/logo.png"}
                        alt={featuredPost.featuredImage?.alt || featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/logo.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#09090B] via-transparent to-transparent opacity-80" />

                      {/* Spotlight Badge Overlay */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-xl bg-frame-accent/90 backdrop-blur-md text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                          <span>Featured Blueprint</span>
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                        <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                          {featuredPost.category}
                        </span>
                        <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 space-y-5">
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="px-3 py-1 rounded-full bg-frame-accent/20 text-frame-accent border border-frame-accent/40 font-heading font-bold uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-frame-muted-fg font-body">
                          <Clock className="h-3.5 w-3.5 text-frame-accent" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-frame-muted-fg font-body">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{featuredPost.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-frame-muted-fg font-body">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{featuredPost.views > 0 ? `${featuredPost.views.toLocaleString()} reads` : "Live Blueprint"}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${featuredPost.slug}`} className="block">
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-frame-accent transition-colors leading-[1.08]">
                          {featuredPost.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="font-body text-sm sm:text-base text-frame-muted-fg leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      {/* Author & CTA Button */}
                      <div className="pt-6 border-t border-frame-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-frame-accent text-white flex items-center justify-center font-heading font-bold text-sm shadow-sm border border-purple-400">
                            FC
                          </div>
                          <div>
                            <div className="font-heading font-bold text-xs uppercase text-white">
                              {featuredPost.author}
                            </div>
                            <div className="text-[11px] text-frame-muted-fg font-body">
                              {featuredPost.authorRole}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-frame-accent hover:bg-purple-600 text-white font-heading text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-all self-start sm:self-auto"
                        >
                          <span>Read Strategic Blueprint</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )}

                {/* Regular Posts Grid with Featured Images */}
                {regularPosts.length > 0 && (
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="h-0.5 w-8 bg-frame-accent" />
                      <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-frame-accent">
                        Archived Strategic Dispatches
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularPosts.map((post) => (
                        <article
                          key={post.id}
                          className="rounded-2xl border-2 border-frame-border bg-[#121216]/80 backdrop-blur-xs p-5 flex flex-col justify-between hover:border-frame-accent hover:-translate-y-1 transition-all duration-300 group shadow-md space-y-4"
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
                              onError={(e) => {
                                e.currentTarget.src = "/logo.png";
                              }}
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

                            {/* Title */}
                            <Link href={`/blog/${post.slug}`}>
                              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-white group-hover:text-frame-accent transition-colors line-clamp-2 leading-snug">
                                {post.title}
                              </h4>
                            </Link>

                            {/* Excerpt */}
                            <p className="font-body text-xs sm:text-sm text-frame-muted-fg leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="pt-3 border-t border-frame-border flex items-center justify-between text-xs">
                            <span className="text-[11px] text-frame-muted-fg font-body">
                              By {post.author.split(" ")[0]}
                            </span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="font-heading font-bold uppercase tracking-wider text-xs text-frame-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                            >
                              <span>Read Dispatch</span>
                              <ChevronRight className="h-3.5 w-3.5" />
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
              categories={BLOG_CATEGORIES as any}
              activeCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              recentPosts={posts}
            />
          </div>
        </div>
      </main>

      {/* 5. Bottom Kinetic CTA Section */}
      <CTASection />
    </div>
  );
}
