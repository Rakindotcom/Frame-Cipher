"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DetailedBlogPost } from "@/lib/blog/canonicalPosts";
import { BLOG_CATEGORIES, getMergedPostsFromStorage } from "@/lib/blog/getBlogPosts";
import { getAuthorBySlug } from "@/lib/authors/getAuthors";
import { AuthorProfile } from "@/types/author";
import { WordPressSidebar } from "./WordPressSidebar";
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
  ExternalLink,
} from "lucide-react";

interface BlogPostClientViewProps {
  initialPost: DetailedBlogPost;
  allPosts: DetailedBlogPost[];
  authorProfile?: AuthorProfile;
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

export function BlogPostClientView({ initialPost, allPosts: initialAllPosts, authorProfile }: BlogPostClientViewProps) {
  const [post, setPost] = useState<DetailedBlogPost>(initialPost);
  const [allPosts, setAllPosts] = useState<DetailedBlogPost[]>(initialAllPosts);
  const [profile, setProfile] = useState<AuthorProfile | undefined>(authorProfile);
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set([initialPost.faqs?.[0]?.id || "faq-1"]));
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Pull the latest matching author profile (canonical seed + admin/Firestore edits)
  useEffect(() => {
    if (!authorProfile) return;
    getAuthorBySlug(authorProfile.slug)
      .then((latest) => {
        if (latest) setProfile(latest);
      })
      .catch(() => {});
  }, [authorProfile.slug]);

  // Sync client-side with CMS posts in localStorage or Firestore
  useEffect(() => {
    try {
      const stored = localStorage.getItem("framecipher_admin_blog_posts");
      if (stored) {
        const merged = getMergedPostsFromStorage(stored);
        setAllPosts(merged);
        const current = merged.find((p) => p.slug === initialPost.slug);
        if (current) setPost(current);
      }
    } catch {}

    fetch("/api/blog")
      .then((res) => (res.ok ? res.json() : []))
      .then((remotePosts) => {
        if (Array.isArray(remotePosts) && remotePosts.length > 0) {
          const merged = getMergedPostsFromStorage(JSON.stringify(remotePosts));
          setAllPosts(merged);
          const current = merged.find((p) => p.slug === initialPost.slug);
          if (current) setPost(current);
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
  }, [initialPost.slug]);

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

  // Schema.org Graph injection
  const articleUrl = post.canonicalUrl || `https://framecipher.com/blog/${post.slug}`;

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": post.schemaType || "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.featuredImage?.url
          ? (post.featuredImage.url.startsWith("http") ? post.featuredImage.url : `https://framecipher.com${post.featuredImage.url}`)
          : "https://framecipher.com/logo.png",
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole || "Founder & Lead Strategist",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "American International University-Bangladesh (AIUB)",
            url: "https://aiub.edu",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Frame Cipher",
          logo: {
            "@type": "ImageObject",
            url: "https://framecipher.com/logo.png",
          },
        },
        datePublished: post.publishDate ? `${post.publishDate}T00:00:00.000Z` : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://framecipher.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://framecipher.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
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

  return (
    <article className="min-h-screen bg-frame-bg text-frame-fg font-body relative overflow-x-hidden">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Reading Progress Bar (Fixed Top) */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-frame-accent z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />

      {/* ARTICLE HEADER & BREADCRUMBS */}
      <div className="border-b-2 border-frame-border bg-[#0D0D11] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <nav className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.2em] text-frame-muted-fg">
            <Link href="/" className="hover:text-frame-fg transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-frame-muted-fg/60" />
            <Link href="/blog" className="hover:text-frame-fg transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-frame-muted-fg/60" />
            <span className="text-frame-accent font-bold">{post.category}</span>
          </nav>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block px-3.5 py-1 text-xs font-heading font-black uppercase tracking-[0.2em] bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-body font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Executive Strategy Perspective</span>
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              {post.title}
            </h1>

            <p className="font-body text-base sm:text-xl font-medium text-frame-muted-fg leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Author Metadata Bar */}
          <div className="pt-6 border-t border-frame-border flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/authors/${authorSlugOf(profile, post.author)}`}
              className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
            >
              {profile?.image?.url ? (
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-frame-muted border border-frame-border shrink-0">
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
                <div className="w-12 h-12 rounded-xl bg-frame-accent text-white flex items-center justify-center font-heading font-bold text-lg shadow-xs border border-purple-400 shrink-0">
                  {initialsOf(profile?.name || post.author)}
                </div>
              )}
              <div>
                <div className="text-xs font-heading font-bold uppercase tracking-wider text-frame-fg flex items-center gap-1.5">
                  <span>{profile?.name || post.author}</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-frame-muted text-frame-accent border border-frame-border">
                    {profile?.worksFor || "FrameCipher"}
                  </span>
                </div>
                <div className="text-[11px] font-body text-frame-muted-fg mt-0.5">
                  {profile?.jobTitle || post.authorRole || "Founder & Lead Strategist"} &bull; {post.publishDate}
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-4 text-xs font-body text-frame-muted-fg">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-frame-muted-fg/70" />
                <span>{post.readTime}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-frame-muted-fg/70" />
                <span>{(post.views || 1).toLocaleString()} {(post.views || 1) === 1 ? "read" : "reads"}</span>
              </span>
              <button
                onClick={handleShare}
                className="px-4 py-2 border-2 border-frame-border bg-[#18181B] hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg text-frame-fg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
              >
                {copiedUrl ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                <span>{copiedUrl ? "Link Copied" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY & SIDEBAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 Cols) */}
          <main className="lg:col-span-8 space-y-10 min-w-0">
            {/* Prominent Featured Image */}
            {post.featuredImage?.url && (
              <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden border-2 border-frame-border bg-[#09090B] shadow-2xl group">
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                />
                {post.featuredImage.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md px-5 py-2.5 text-xs text-frame-muted-fg border-t border-frame-border flex items-center justify-between">
                    <span>{post.featuredImage.caption}</span>
                    <span className="text-[10px] font-mono text-frame-accent uppercase">FrameCipher Media</span>
                  </div>
                )}
              </div>
            )}

            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="border-2 border-frame-border bg-[#121214] p-6 sm:p-8 space-y-4">
                <div className="text-xs font-heading font-black uppercase tracking-[0.2em] text-frame-accent flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Executive Table of Contents</span>
                </div>
                <div className="space-y-2 pt-2 border-t border-frame-border">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs sm:text-sm font-heading uppercase text-frame-muted-fg hover:text-frame-accent transition-colors leading-snug tracking-wider"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Sections */}
            {post.sections && post.sections.length > 0 ? (
              <div className="space-y-10">
                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((p, idx) => (
                      <p key={idx} className="font-body text-base sm:text-lg text-frame-muted-fg leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {section.callout && (
                      <div className="border-l-4 border-frame-accent bg-[#181124] p-6 space-y-2">
                        <div className="font-heading text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                          {section.callout.title}
                        </div>
                        <p className="font-quote text-base sm:text-lg text-frame-fg italic leading-relaxed">
                          "{section.callout.message}"
                        </p>
                      </div>
                    )}

                    {section.formula && (
                      <div className="border-2 border-frame-border bg-[#121214] p-6 space-y-3">
                        <div className="font-mono text-sm sm:text-base text-frame-accent bg-black/80 p-4 border border-frame-border overflow-x-auto">
                          {section.formula.latex}
                        </div>
                        <p className="font-body text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                          {section.formula.description}
                        </p>
                        {section.formula.variables && (
                          <div className="pt-3 border-t border-frame-border grid grid-cols-1 gap-2 text-xs">
                            {section.formula.variables.map((v, i) => (
                              <div key={i} className="flex items-baseline gap-2">
                                <span className="font-mono font-bold text-frame-accent">{v.symbol}:</span>
                                <span className="text-frame-muted-fg">{v.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            ) : post.content ? (
              <div
                className="font-body text-base text-frame-muted-fg leading-relaxed space-y-4 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.content) }}
              />
            ) : null}

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-10 border-t-2 border-frame-border space-y-6">
                <div className="flex items-center gap-2 font-heading text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  <Sparkles className="h-4 w-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  Common Strategic Inquiries
                </h3>

                <div className="space-y-4">
                  {post.faqs.map((faq) => {
                    const isOpen = openFaqIds.has(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="border-2 border-frame-border bg-[#121214] transition-colors"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-[#18181B] transition-colors"
                        >
                          <span className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-frame-fg">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-frame-accent shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-frame-muted-fg shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 font-body text-sm sm:text-base text-frame-muted-fg leading-relaxed border-t border-frame-border">
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
              <div className="pt-8 border-t-2 border-frame-border flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-frame-muted border border-frame-border text-frame-muted-fg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom Author Card */}
            <div className="border-2 border-frame-border bg-linear-to-br from-[#181124] to-[#121214] p-8 flex flex-col sm:flex-row items-center gap-6">
              <Link
                href={`/authors/${authorSlugOf(profile, post.author)}`}
                className="shrink-0 block"
              >
                {profile?.image?.url ? (
                  <div className="w-18 h-18 rounded-2xl overflow-hidden bg-frame-muted border border-frame-border shrink-0">
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
                  <div className="w-18 h-18 rounded-2xl bg-frame-accent text-white flex items-center justify-center font-heading font-bold text-3xl shrink-0 shadow-sm border border-purple-400">
                    {initialsOf(profile?.name || post.author)}
                  </div>
                )}
              </Link>
              <div className="space-y-2 text-center sm:text-left">
                <Link
                  href={`/authors/${authorSlugOf(profile, post.author)}`}
                  className="font-heading font-bold uppercase text-lg text-frame-fg tracking-tight hover:text-frame-accent transition-colors"
                >
                  Authored by {profile?.name || post.author}
                </Link>
                <div className="text-xs font-body font-semibold text-frame-accent uppercase tracking-wider">
                  {profile?.jobTitle || post.authorRole || "Founder & Lead Strategist"}
                </div>
                <p className="text-xs font-body text-frame-muted-fg leading-relaxed">
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
                          className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-frame-border text-frame-muted-fg hover:text-frame-fg hover:border-frame-accent/60 transition-colors"
                          aria-label={key}
                        >
                          <SocialIcon name={key} className="h-3.5 w-3.5" />
                          {SOCIAL_LABELS[key] || key}
                        </a>
                      ))}
                  </div>
                ) : null}

                <Link
                  href={`/authors/${authorSlugOf(profile, post.author)}`}
                  className="inline-block mt-2 font-heading text-xs font-bold uppercase tracking-wider text-frame-accent border border-frame-accent/40 px-4 py-2 rounded-lg hover:bg-frame-accent hover:text-frame-fg transition-colors"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 min-w-0 sticky top-24 self-start">
            <WordPressSidebar
              categories={[...BLOG_CATEGORIES]}
              activeCategory={post.category}
              recentPosts={allPosts}
              currentPostSlug={post.slug}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
