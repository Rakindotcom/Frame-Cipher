"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { DetailedBlogPost } from "@/lib/blog/canonicalPosts";
import { BLOG_CATEGORIES, blogCategorySlug, getMergedPostsFromStorage } from "@/lib/blog/getBlogPosts";
import { getAuthorBySlug } from "@/lib/authors/getAuthors";
import { AuthorProfile } from "@/types/author";
import { WordPressSidebar } from "./WordPressSidebar";
import { BASE_URL } from "@/lib/seo/site";
import { sanitizeBlogHtml } from "@/lib/blog/sanitizeHtml";
import { SOCIAL_LABELS, SocialIcon } from "@/components/icons/SocialIcon";
import {
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Share2,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface BlogPostClientViewProps {
  initialPost: DetailedBlogPost;
  allPosts: DetailedBlogPost[];
  authorProfile?: AuthorProfile;
  initialCategories?: string[];
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function authorSlugOf(profile: AuthorProfile | undefined, fallbackName: string): string {
  if (profile?.slug) return profile.slug;
  return fallbackName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function blocksToHtml(blocks: any[]): string {
  if (!Array.isArray(blocks) || blocks.length === 0) return "";
  return blocks
    .map((b) => {
      const text = typeof b === "string" ? b : b?.content || "";
      const type = b?.type || "paragraph";
      if (type.startsWith("heading_h") || type.startsWith("h")) {
        const level = type.slice(-1);
        return `<h${level}>${text}</h${level}>`;
      }
      if (type === "blockquote" || type === "callout") return `<blockquote>${text}</blockquote>`;
      if (type === "code" || type === "formula") return `<pre><code>${text}</code></pre>`;
      if (type === "image" && (b?.meta?.url || text)) {
        const url = b?.meta?.url || text;
        const caption = b?.meta?.caption ? `<figcaption>${b.meta.caption}</figcaption>` : "";
        return `<figure><img src="${url}" alt="${b?.meta?.alt || ""}" />${caption}</figure>`;
      }
      if (type === "youtube" && (b?.meta?.youtubeId || b?.meta?.url || text)) {
        const id = b.meta?.youtubeId || b.meta?.url || text;
        const caption = b.meta?.caption ? `<figcaption>${b.meta.caption}</figcaption>` : "";
        return `<figure class="wp-block-embed-youtube" data-block-type="youtube" data-youtube-id="${id}"><div class="video-container"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>${caption}</figure>`;
      }
      if (type === "button") {
        const label = b.content || b.meta?.label || "Learn More";
        const url = b.meta?.url || "#";
        const align = b.meta?.align || "center";
        const style = b.meta?.style || "primary";
        const size = b.meta?.size || "md";
        const radius = b.meta?.radius || "rounded-lg";
        const target = b.meta?.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
        const customBg = b.meta?.bgColor ? `background-color: ${b.meta.bgColor};` : "";
        const customColor = b.meta?.textColor ? `color: ${b.meta.textColor};` : "";
        const styleAttr = (customBg || customColor) ? ` style="${customBg} ${customColor}"` : "";
        return `<div class="wp-block-button-wrapper my-6" data-block-type="button" data-align="${align}" style="text-align: ${align};"><a href="${url}"${target} class="wp-block-button wp-block-button--${style} wp-block-button--size-${size} ${radius}" data-style="${style}" data-size="${size}" data-radius="${radius}"${styleAttr}>${label}</a></div>`;
      }
      if (type === "divider" || type === "hr") return `<hr />`;
      if (type === "bulleted_list" || type === "ul") return `<ul>${text}</ul>`;
      if (type === "numbered_list" || type === "ol") return `<ol>${text}</ol>`;
      if (type === "table") return text;
      return text ? `<p>${text}</p>` : "";
    })
    .join("");
}

export function BlogPostClientView({
  initialPost,
  allPosts: initialAllPosts,
  authorProfile,
  initialCategories = [],
}: BlogPostClientViewProps) {
  const [post, setPost] = useState<DetailedBlogPost>(initialPost);
  const [allPosts, setAllPosts] = useState<DetailedBlogPost[]>(initialAllPosts);
  const [profile, setProfile] = useState<AuthorProfile | undefined>(authorProfile);
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set([initialPost.faqs?.[0]?.id || "faq-1"]));
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Dynamic categories state merging base categories, server categories, and post categories
  const [categoriesList, setCategoriesList] = useState<string[]>(() => {
    const base = Array.from(BLOG_CATEGORIES);
    const fromPosts = initialAllPosts.flatMap((p) => [p.category, ...(p.categories || [])]).filter(Boolean);
    const fromCurrent = [initialPost.category, ...(initialPost.categories || [])].filter(Boolean);
    return Array.from(new Set([...base, ...initialCategories, ...fromCurrent, ...fromPosts]));
  });

  // Client-side category cache & API sync
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
  }, []);

  // Keep categories updated if allPosts updates
  useEffect(() => {
    if (allPosts.length > 0) {
      const postCats = allPosts.flatMap((p) => [p.category, ...(p.categories || [])]).filter(Boolean);
      if (postCats.length > 0) {
        setCategoriesList((prev) => Array.from(new Set([...prev, ...postCats])));
      }
    }
  }, [allPosts]);

  // Pull the latest matching author profile (canonical seed + admin/Firestore edits)
  useEffect(() => {
    if (!authorProfile) return;
    getAuthorBySlug(authorProfile.slug)
      .then((latest) => {
        if (latest) setProfile(latest);
      })
      .catch(() => {});
  }, [authorProfile?.slug]);

  // Sync client-side with CMS posts from unified server API
  useEffect(() => {
    fetch("/api/blog")
      .then((res) => (res.ok ? res.json() : []))
      .then((remotePosts) => {
        if (Array.isArray(remotePosts) && remotePosts.length > 0) {
          const merged = getMergedPostsFromStorage(remotePosts);
          setAllPosts(merged);
          const current = merged.find((p) => p.slug === initialPost.slug || p.id === initialPost.id);
          if (current) {
            // Only update if current has content/blocks, never erase server-rendered content
            setPost((prev) => ({
              ...prev,
              ...current,
              content: current.content?.trim() ? current.content : prev.content,
              blocks: current.blocks && current.blocks.length > 0 ? current.blocks : prev.blocks,
            }));
          }
        }
      })
      .catch(() => {});

    // Track real reads
    try {
      const viewsKey = `framecipher_views_${initialPost.slug}`;
      const currentViews = parseInt(localStorage.getItem(viewsKey) || "0", 10) + 1;
      localStorage.setItem(viewsKey, currentViews.toString());
      setPost((prev) => ({ ...prev, views: currentViews }));
    } catch {}
  }, [initialPost.slug, initialPost.id]);

  // Reading progress scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure all tables in blog content are wrapped in a responsive scroll container
  useEffect(() => {
    const contentEl = document.querySelector(".blog-article-content");
    if (!contentEl) return;

    const tables = contentEl.querySelectorAll("table");
    tables.forEach((table) => {
      if (!table.parentElement?.classList.contains("blog-table-scroll")) {
        const wrapper = document.createElement("div");
        wrapper.className = "blog-table-wrapper";
        const scroll = document.createElement("div");
        scroll.className = "blog-table-scroll";
        const hint = document.createElement("div");
        hint.className = "blog-table-hint";
        hint.innerHTML = "<span>↔ Scroll horizontally to view full table</span>";

        table.parentNode?.insertBefore(wrapper, table);
        scroll.appendChild(table);
        wrapper.appendChild(scroll);
        wrapper.appendChild(hint);
      }
    });
  }, [post.content, post.blocks]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  // Schema.org Graph injection adhering to Specification
  const articleUrl = (post.canonicalUrl || `${BASE_URL}/blog/${post.slug}`).replace(/\/$/, "");
  const authorSlug = authorSlugOf(authorProfile, post.author);
  const authorId = `${BASE_URL}/authors/${authorSlug}#person`;

  const cleanTitle = String(post.title ?? "").replace(/\s+/g, " ").trim();

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": post.schemaType || "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: cleanTitle,
        description: post.metaDescription || post.excerpt,
        image: post.featuredImage?.url
          ? (post.featuredImage.url.startsWith("http") ? post.featuredImage.url : `${BASE_URL}${post.featuredImage.url}`)
          : `${BASE_URL}/og-image.png`,
        author: {
          "@id": authorId,
        },
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        mainEntityOfPage: {
          "@id": `${articleUrl}#webpage`,
        },
        datePublished: post.publishDate ? `${post.publishDate}T00:00:00.000Z` : undefined,
      },
      {
        "@type": "Person",
        "@id": authorId,
        name: post.author,
        url: `${BASE_URL}/authors/${authorSlug}/`,
        jobTitle: post.authorRole || "Founder & Lead Strategist",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "American International University-Bangladesh (AIUB)",
          url: "https://aiub.edu",
        },
        worksFor: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${articleUrl}#webpage`,
        url: `${articleUrl}/`,
        name: `${cleanTitle} | Frame Cipher`,
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${articleUrl}#article`,
        },
        breadcrumb: {
          "@id": `${articleUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE_URL}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: cleanTitle,
            item: `${articleUrl}/`,
          },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${articleUrl}#faq`,
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  // Curate related articles
  const relatedPosts = useMemo(() => {
    const sameCat = allPosts.filter(
      (p) => p.slug !== post.slug && p.category?.toLowerCase() === post.category?.toLowerCase()
    );
    if (sameCat.length >= 2) return sameCat.slice(0, 2);
    const others = allPosts.filter(
      (p) => p.slug !== post.slug && !sameCat.some((sc) => sc.slug === p.slug)
    );
    return [...sameCat, ...others].slice(0, 2);
  }, [allPosts, post.slug, post.category]);

  return (
    <article className="min-h-screen bg-[#09090B] text-[#FAFAFA] relative overflow-x-hidden">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaJson).replace(/</g, "\\u003c"),
        }}
      />

      {/* Reading Progress Bar (Fixed Top) */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-frame-accent z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />

      {/* ARTICLE EDITORIAL HEADER */}
      <header className="relative border-b border-white/[0.08] bg-[#09090B] pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <Link
              href={`/blog/category/${blogCategorySlug(post.category)}`}
              className="text-frame-accent hover:underline"
            >
              {post.category}
            </Link>
          </nav>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Executive Strategy Perspective</span>
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Author Metadata Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/authors/${authorSlugOf(profile, post.author)}`}
              className="flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
            >
              {profile?.image?.url ? (
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#18181B] border border-white/[0.08] shrink-0">
                  <img
                    src={profile.image.url}
                    alt={profile.image.alt || profile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-xl bg-[#18181B] text-frame-accent flex items-center justify-center font-mono font-medium text-sm border border-white/[0.08] shrink-0">
                  {initialsOf(profile?.name || post.author)}
                </div>
              )}
              <div>
                <div className="text-xs font-mono font-medium uppercase tracking-[1px] text-white flex items-center gap-2">
                  <span>{profile?.name || post.author}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
                    {profile?.worksFor || "FrameCipher"}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                  {profile?.jobTitle || post.authorRole || "Founder & Lead Strategist"} &bull; {post.publishDate}
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-zinc-500" />
                <span>{post.readTime}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-zinc-500" />
                <span>
                  {post.views > 0
                    ? `${post.views.toLocaleString()} ${post.views === 1 ? "read" : "reads"}`
                    : "Verified"}
                </span>
              </span>
              <button
                onClick={handleShare}
                className="ml-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] hover:border-white/[0.2] text-white text-xs font-mono uppercase tracking-[1px] flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy link to clipboard"
              >
                {copiedUrl ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5 text-zinc-400" />}
                <span>{copiedUrl ? "Copied" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY & SIDEBAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 Cols) */}
          <main className="lg:col-span-8 space-y-10 min-w-0 max-w-full overflow-hidden">
            {/* Prominent Featured Image */}
            {post.featuredImage?.url && (
              <figure className="space-y-2.5">
                <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-white/[0.08] bg-[#121214] group">
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/logo.png";
                    }}
                  />
                </div>
                {post.featuredImage.caption && (
                  <figcaption className="flex items-center justify-between px-1 text-xs text-zinc-400">
                    <span>{post.featuredImage.caption}</span>
                    <span className="font-mono text-[10px] text-frame-accent uppercase">FrameCipher Media</span>
                  </figcaption>
                )}
              </figure>
            )}

            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-white/[0.14]">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
                    <FileText className="h-3.5 w-3.5 text-frame-accent" />
                    <span>Executive Table of Contents</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">{post.tableOfContents.length} Sections</span>
                </div>
                <ol className="space-y-2.5 pt-1">
                  {post.tableOfContents.map((item, idx) => (
                    <li key={item.id} className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs text-frame-accent/80 shrink-0">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <a
                        href={`#${item.id}`}
                        className="text-xs sm:text-sm font-normal text-zinc-300 hover:text-white transition-colors leading-snug"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Structured Sections */}
            {post.sections && post.sections.length > 0 ? (
              <div className="space-y-10">
                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
                    <h2 className="font-heading text-2xl sm:text-3xl font-medium leading-tight tracking-[-0.02em] text-white">
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((p, idx) => (
                      <p key={idx} className="text-base sm:text-lg text-zinc-300 leading-relaxed break-words max-w-full font-normal">
                        {p}
                      </p>
                    ))}

                    {section.callout && (
                      <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2 border-l-2 border-l-purple-500 transition-colors duration-200 hover:border-white/[0.14]">
                        <div className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                          {section.callout.title}
                        </div>
                        <p className="text-base sm:text-lg text-white font-normal leading-relaxed break-words max-w-full">
                          {section.callout.message}
                        </p>
                      </div>
                    )}

                    {section.formula && (
                      <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3 max-w-full transition-colors duration-200 hover:border-white/[0.14]">
                        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                          <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                            Mathematical Formulation
                          </span>
                          <span className="font-mono text-[10px] text-zinc-500 uppercase">LaTeX Spec</span>
                        </div>
                        <div className="font-mono text-sm sm:text-base text-purple-300 bg-[#09090B] p-4 rounded-lg border border-white/[0.08] overflow-x-auto max-w-full">
                          {section.formula.latex}
                        </div>
                        {section.formula.description && (
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed break-words">
                            {section.formula.description}
                          </p>
                        )}
                        {section.formula.variables && (
                          <div className="pt-3 border-t border-white/[0.08] grid grid-cols-1 gap-2 text-xs">
                            {section.formula.variables.map((v, i) => (
                              <div key={i} className="flex items-baseline gap-2">
                                <span className="font-mono font-medium text-purple-400">{v.symbol}:</span>
                                <span className="text-zinc-400 break-words">{v.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            ) : (post.content || (post.blocks && post.blocks.length > 0)) ? (
              <div
                className="blog-article-content text-base leading-relaxed space-y-4 prose prose-invert max-w-full break-words text-[#D4D4D8] overflow-hidden"
                dangerouslySetInnerHTML={{
                  __html: sanitizeBlogHtml(post.content || blocksToHtml(post.blocks || [])),
                }}
              />
            ) : null}

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-10 border-t border-white/[0.08] space-y-6">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-white">
                    Common Strategic Inquiries
                  </h3>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq) => {
                    const isOpen = openFaqIds.has(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-colors duration-200 hover:border-white/[0.14]"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer"
                        >
                          <span className="font-medium text-sm sm:text-base text-white">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-frame-accent shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-zinc-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/[0.08]">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-8 border-t border-white/[0.08] flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#18181B] border border-white/[0.08] text-zinc-400 hover:border-white/[0.2] hover:text-white transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom Author Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-colors duration-200 hover:border-white/[0.14]">
              <Link
                href={`/authors/${authorSlugOf(profile, post.author)}`}
                className="shrink-0 block group"
              >
                {profile?.image?.url ? (
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#18181B] border border-white/[0.08] shrink-0">
                    <img
                      src={profile.image.url}
                      alt={profile.image.alt || profile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-[#18181B] text-frame-accent flex items-center justify-center font-mono font-bold text-2xl shrink-0 border border-white/[0.08]">
                    {initialsOf(profile?.name || post.author)}
                  </div>
                )}
              </Link>
              <div className="space-y-2.5 text-center sm:text-left flex-1 min-w-0">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500">
                    Author / Strategist
                  </p>
                  <Link
                    href={`/authors/${authorSlugOf(profile, post.author)}`}
                    className="font-heading font-medium text-lg sm:text-xl text-white tracking-[-0.02em] hover:text-frame-accent transition-colors block"
                  >
                    {profile?.name || post.author}
                  </Link>
                  <div className="font-mono text-xs text-frame-accent">
                    {profile?.jobTitle || post.authorRole || "Founder & Lead Strategist"}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {profile?.bio || profile?.shortBio ||
                    "Strategist and contributor at FrameCipher, architecting high-converting digital systems, growth funnels, and technical marketing infrastructure."}
                </p>

                {(profile?.socialLinks && Object.values(profile.socialLinks).some((v) => v && v.trim())) ? (
                  <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                    {Object.entries(profile.socialLinks)
                      .filter(([, value]) => value && value.trim())
                      .map(([key, value]) => (
                        <a
                          key={key}
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/[0.08] bg-[#18181B] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors inline-flex items-center gap-1.5"
                          aria-label={key}
                        >
                          <SocialIcon name={key} className="h-3.5 w-3.5" />
                          <span>{SOCIAL_LABELS[key] || key}</span>
                        </a>
                      ))}
                  </div>
                ) : null}

                <div className="pt-2">
                  <Link
                    href={`/authors/${authorSlugOf(profile, post.author)}`}
                    className="sw-btn sw-btn-outline text-xs inline-flex"
                  >
                    <span>View Full Profile</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Strategic Articles */}
            {relatedPosts.length > 0 && (
              <section className="pt-12 border-t border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-[-0.03em] text-white">
                      Related Intelligence
                    </h3>
                  </div>
                  <Link
                    href="/blog"
                    className="font-mono text-xs uppercase tracking-[1px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View all</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group rounded-xl border border-white/[0.08] bg-[#121214] p-5 transition-colors duration-200 hover:border-white/[0.14] flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase text-zinc-400">
                          <span className="text-frame-accent">{rel.category}</span>
                          <span>{rel.readTime}</span>
                        </div>
                        <h4 className="font-heading text-base font-medium leading-snug tracking-[-0.02em] text-white group-hover:text-purple-300 transition-colors">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {rel.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-zinc-500 group-hover:text-white transition-colors">
                        <span>Read dispatch</span>
                        <ArrowRight className="h-3.5 w-3.5 text-frame-accent group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 min-w-0 sticky top-24 self-start">
            <WordPressSidebar
              categories={categoriesList}
              activeCategory={post.category}
              recentPosts={allPosts}
              currentPostSlug={post.slug}
            />
          </div>
        </div>
      </div>

      {/* Signature Bottom Master CTA */}
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
    </article>
  );
}
