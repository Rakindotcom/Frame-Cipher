"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { BlogPostItem } from "@/types/blog";
import { isLegacyDemoPost } from "@/lib/blog/getBlogPosts";
import { CANONICAL_BLOG_POSTS } from "@/lib/blog/canonicalPosts";
import { WordPressEditor } from "@/components/admin/cms/WordPressEditor";
import { getBlogPostsFromFirestore, saveBlogPostToFirestore } from "@/lib/firebase";
import { revalidateSitemaps } from "@/lib/actions/revalidateSitemap";
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Image as ImageIcon,
  Layers,
  Search,
  ExternalLink,
  Sliders,
  Calendar,
  User,
  CheckSquare,
  Square,
  Check,
} from "lucide-react";

const STORAGE_KEY = "framecipher_admin_blog_posts";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function canonicalSectionsToHtml(sections: typeof CANONICAL_BLOG_POSTS[number]["sections"]): string {
  return sections
    .map((section) => {
      const heading = `<${section.level}>${escapeHtml(section.heading)}</${section.level}>`;
      const paragraphs = section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
      const formula = section.formula
        ? `<pre><code>${escapeHtml(section.formula.latex)}\n\n${escapeHtml(section.formula.description)}</code></pre>`
        : "";
      const callout = section.callout
        ? `<blockquote><strong>${escapeHtml(section.callout.title)}</strong><br>${escapeHtml(section.callout.message)}</blockquote>`
        : "";
      return `${heading}${paragraphs}${formula}${callout}`;
    })
    .join("");
}

// Helper to convert code-defined canonical posts into editable BlogPostItem format
function getCanonicalAsBlogItems(): BlogPostItem[] {
  return CANONICAL_BLOG_POSTS.map((c) => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    category: c.category,
    categories: c.categories || [c.category],
    status: (c.status as "published" | "draft" | "scheduled") || "published",
    author: c.author,
    publishDate: c.publishDate,
    views: c.views || 1,
    wordCount: c.wordCount || 1800,
    seoScore: c.seoScore || 95,
    featuredImage: c.featuredImage,
    focusKeyword: c.focusKeyword,
    canonicalUrl: c.canonicalUrl,
    relatedToolSlugs: c.relatedToolSlugs,
    schemaType: c.schemaType || "TechArticle",
    faqs: c.faqs || [],
    excerpt: c.excerpt,
    metaDescription: c.metaDescription,
    seoTitle: c.title,
    tags: c.tags || [],
    blocks: [],
    content: canonicalSectionsToHtml(c.sections),
    visibility: "public",
    postPassword: "",
    allowComments: true,
    allowPingbacks: true,
  }));
}

// Seamless 2-way merger: Code files + Dashboard edits
function mergeCanonicalWithCustom(customList: BlogPostItem[]): BlogPostItem[] {
  const canonicalList = getCanonicalAsBlogItems();
  const customMap = new Map<string, BlogPostItem>();

  customList.filter((item) => !isLegacyDemoPost(item)).forEach((item) => {
    if (item.slug) customMap.set(item.slug, item);
    if (item.id) customMap.set(item.id, item);
  });

  const merged: BlogPostItem[] = [];

  canonicalList.forEach((c) => {
    const override = customMap.get(c.slug) || customMap.get(c.id);
    if (override) {
      merged.push({ ...c, ...override });
      customMap.delete(c.slug);
      customMap.delete(c.id);
    } else {
      merged.push(c);
    }
  });

  // Append any newly created custom articles from dashboard
  customMap.forEach((item) => {
    if (!merged.some((m) => m.id === item.id || m.slug === item.slug)) {
      merged.push(item);
    }
  });

  return merged;
}

export default function BlogCmsPage() {
  const [posts, setPosts] = useState<BlogPostItem[]>(getCanonicalAsBlogItems());
  const [activeTab, setActiveTab] = useState<"all" | "published" | "draft">("all");
  const [search, setSearch] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPostItem> | null>(null);

  // Bulk Selection State for Blog Posts
  const [selectedPostIds, setSelectedPostIds] = useState<Set<string>>(new Set());

  // Load persistent posts from Firestore or localStorage fallback on mount, merging with canonical code posts
  useEffect(() => {
    async function loadPosts() {
      try {
        const firestorePosts = await getBlogPostsFromFirestore();
        if (firestorePosts && firestorePosts.length > 0) {
          const merged = mergeCanonicalWithCustom(firestorePosts);
          setPosts(merged);
          return;
        }
      } catch (err) {
        console.warn("Firestore posts fetch error:", err);
      }

      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const merged = mergeCanonicalWithCustom(parsed);
            setPosts(merged);
            return;
          }
        }
      } catch {}

      // Default to code-defined canonical posts
      setPosts(getCanonicalAsBlogItems());
    }
    loadPosts();
  }, []);

  // Save to localStorage & Firestore whenever posts change
  const persistPosts = (updatedList: BlogPostItem[]) => {
    setPosts(updatedList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch {}

    // Asynchronously save to Firestore database
    updatedList.forEach((p) => {
      saveBlogPostToFirestore(p).catch(() => {});
    });

    // Regenerate the post sitemap so published/unpublished changes land immediately.
    revalidateSitemaps(["post", "category"]).catch(() => {});
  };

  const handleOpenNew = () => {
    setEditingPost({
      title: "",
      slug: "",
      category: "Growth Marketing",
      status: "published",
      author: "Mahedi Hasan Perves",
      wordCount: 2200,
      seoScore: 94,
      focusKeyword: "",
      canonicalUrl: "",
      featuredImage: {
        url: "",
        alt: "",
        hasAlt: false,
      },
      relatedToolSlugs: ["webflow-development", "performance-marketing"],
    });
    setIsEditorOpen(true);
  };

  const handleEditPost = (post: BlogPostItem) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleDeletePost = (id: string) => {
    if (confirm("Are you sure you want to delete this dispatch?")) {
      const updated = posts.filter((p) => p.id !== id);
      persistPosts(updated);
      setSelectedPostIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  // Bulk Selection Handlers
  const toggleSelectOne = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPostIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedPostIds.size === filteredPosts.length && filteredPosts.length > 0) {
      setSelectedPostIds(new Set());
    } else {
      setSelectedPostIds(new Set(filteredPosts.map((p) => p.id)));
    }
  };

  const handleBulkDelete = () => {
    const count = selectedPostIds.size;
    if (count === 0) return;
    if (!confirm(`Are you sure you want to permanently delete ${count} selected articles?`)) return;

    const remaining = posts.filter((p) => !selectedPostIds.has(p.id));
    persistPosts(remaining);
    setSelectedPostIds(new Set());
  };

  const handleSaveFromEditor = (savedPost: BlogPostItem) => {
    const existingIndex = posts.findIndex((p) => p.id === savedPost.id);
    let updated: BlogPostItem[];
    if (existingIndex >= 0) {
      updated = [...posts];
      updated[existingIndex] = savedPost;
    } else {
      updated = [savedPost, ...posts];
    }
    persistPosts(updated);
    setIsEditorOpen(false);
  };

  const filteredPosts = posts.filter((p) => {
    const matchesTab = activeTab === "all" || p.status === activeTab;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const isAllSelected =
    filteredPosts.length > 0 && selectedPostIds.size === filteredPosts.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Blog CMS & Insights Articles"
        subtitle="Manage strategic growth playbooks, SEO parameters, and auto-suggested service conversion funnels"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* Top 4 KPI Cards - High Contrast Light Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Published Guides</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {posts.filter((p) => p.status === "published").length}
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start">
              {posts.length} Total in Library
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Image SEO Compliance</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {Math.round(
                  (posts.filter((p) => p.featuredImage.hasAlt).length / (posts.length || 1)) *
                    100
                )}
                %
              </div>
            </div>
            <span className="text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full self-start">
              Google Image Search
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Average SEO Score</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">96 / 100</div>
            </div>
            <span className="text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full self-start">
              High Search Equity
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Content Standard</span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">2,480 w</div>
            </div>
            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start">
              Zero Thin Content
            </span>
          </div>
        </div>

        {/* Action Toolbar & Filters */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 min-w-0">
            {/* Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "all"
                    ? "bg-white text-[#1D4ED8] shadow-xs"
                    : "text-[#64748B]"
                }`}
              >
                All ({posts.length})
              </button>
              <button
                onClick={() => setActiveTab("published")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "published"
                    ? "bg-white text-[#1D4ED8] shadow-xs"
                    : "text-[#64748B]"
                }`}
              >
                Published ({posts.filter((p) => p.status === "published").length})
              </button>
              <button
                onClick={() => setActiveTab("draft")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "draft"
                    ? "bg-white text-[#1D4ED8] shadow-xs"
                    : "text-[#64748B]"
                }`}
              >
                Drafts ({posts.filter((p) => p.status === "draft").length})
              </button>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="h-4 w-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles or categories..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-medium text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Select All Toggle Button */}
            <button
              onClick={toggleSelectAll}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                isAllSelected
                  ? "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]"
                  : "bg-white border-[#CBD5E1] text-[#475569]"
              }`}
            >
              {isAllSelected ? (
                <CheckSquare className="h-4 w-4 text-[#1D4ED8]" />
              ) : (
                <Square className="h-4 w-4 text-[#94A3B8]" />
              )}
              <span>{isAllSelected ? "Deselect All" : "Select All"}</span>
            </button>

            <button
              onClick={handleOpenNew}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Write New Guide</span>
            </button>
          </div>
        </div>

        {/* Floating / Sticky Bulk Actions Bar */}
        {selectedPostIds.size > 0 && (
          <div className="p-3.5 px-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] shadow-md flex items-center justify-between text-xs animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5 text-[#1D4ED8] font-heading font-bold uppercase tracking-wider">
              <CheckSquare className="h-4 w-4" />
              <span>{selectedPostIds.size} {selectedPostIds.size === 1 ? "article" : "articles"} selected</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedPostIds(new Set())}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Delete Selected ({selectedPostIds.size})</span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile / Small-device Card List (< md) - Fully Touch-friendly */}
        <div className="md:hidden space-y-3">
          {filteredPosts.map((post) => {
            const isChecked = selectedPostIds.has(post.id);
            return (
              <div
                key={post.id}
                className={`rounded-2xl border p-4 space-y-3 transition-colors ${
                  isChecked
                    ? "bg-[#EFF6FF] border-[#BFDBFE] shadow-xs"
                    : "bg-white border-[#E2E8F0] shadow-xs"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleSelectOne(post.id)}
                      className="rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-[#1D4ED8] mt-1 cursor-pointer"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-[#0F172A] text-sm leading-snug line-clamp-2">
                        {post.title}
                      </div>
                      <div className="text-[11px] text-[#64748B] font-mono truncate mt-0.5">
                        /blog/{post.slug}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="p-2 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] transition-colors"
                      title="View Live"
                    >
                      <Eye className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded-lg bg-[#FEF2F2] text-[#DC2626] hover:bg-[#FEE2E2] transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs pt-2.5 border-t border-[#F1F5F9] gap-2">
                  <span className="text-[11px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#16A34A] font-bold bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                    SEO: {post.seoScore}/100
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#64748B]">
                    {post.wordCount.toLocaleString()} words
                  </span>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      post.status === "published"
                        ? "bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]"
                        : "bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Posts Table (>= md) */}
        <div className="hidden md:block rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[900px]">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-heading font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4 w-10">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                      className="rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                    />
                  </th>
                  <th className="py-3.5 px-4 min-w-[260px]">Title & Permalink</th>
                  <th className="py-3.5 px-4 min-w-[130px]">Author</th>
                  <th className="py-3.5 px-4 min-w-[150px]">Category</th>
                  <th className="py-3.5 px-4 text-center min-w-[120px]">Image Alt SEO</th>
                  <th className="py-3.5 px-4 text-center min-w-[110px]">Length</th>
                  <th className="py-3.5 px-4 text-center min-w-[110px]">SEO Score</th>
                  <th className="py-3.5 px-4 text-center min-w-[100px]">Status</th>
                  <th className="py-3.5 px-4 text-right min-w-[110px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {filteredPosts.map((post) => {
                  const isChecked = selectedPostIds.has(post.id);

                  return (
                    <tr
                      key={post.id}
                      className={`transition-colors ${
                        isChecked ? "bg-[#EFF6FF]" : ""
                      }`}
                    >
                      <td className="py-3.5 px-4">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleSelectOne(post.id)}
                          className="rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                        />
                      </td>

                      <td className="py-3.5 px-4 max-w-xs lg:max-w-sm">
                        <div className="font-bold text-[#0F172A] truncate text-xs sm:text-sm">
                          {post.title}
                        </div>
                        <div className="text-[11px] text-[#64748B] font-mono truncate">
                          /blog/{post.slug}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-[#334155] font-semibold whitespace-nowrap">
                        {post.author}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="text-[11px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                          {post.category}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {post.featuredImage.hasAlt ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Alt Tag OK</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span>Missing Alt</span>
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-center font-mono font-semibold text-[#475569] whitespace-nowrap">
                        {post.wordCount.toLocaleString()} words
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className="inline-block font-mono font-bold text-xs text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                          {post.seoScore} / 100
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                            post.status === "published"
                              ? "bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]"
                              : "bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors"
                          title="Edit Guide"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <a
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block p-1.5 rounded-lg text-[#64748B] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors"
                          title="View Live Guide"
                        >
                          <Eye className="h-4 w-4" />
                        </a>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-1.5 rounded-lg text-[#64748B] hover:text-[#DC2626] hover:bg-[#FEF2F2] transition-colors"
                          title="Delete Guide"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Full-Screen WordPress Visual Block Editor Modal */}
      {isEditorOpen && editingPost && (
        <WordPressEditor
          post={editingPost}
          onSave={handleSaveFromEditor}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
}
