import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuthorBySlug } from "@/lib/authors/getAuthors";
import { buildPersonSchema } from "@/lib/schema/personSchema";
import { getAllCanonicalPosts } from "@/lib/blog/getBlogPosts";
import {
  Mail,
  Globe,
  ArrowUpRight,
  BrainCircuit,
} from "lucide-react";
import { SOCIAL_LABELS, SocialIcon } from "@/components/icons/SocialIcon";

export const revalidate = 3600;

const SITE_URL = "https://framecipher.com";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found | FrameCipher",
      description: "The requested author profile could not be found.",
    };
  }

  const ogImage = author.image?.url;
  const metadata: Metadata = {
    title: author.seoTitle || `${author.name} — ${author.jobTitle} — FrameCipher`,
    description:
      author.metaDescription ||
      author.shortBio ||
      `Author profile for ${author.name} at FrameCipher.`,
    alternates: {
      canonical: `${SITE_URL}/authors/${author.slug}`,
    },
    openGraph: {
      title: author.seoTitle || `${author.name} — ${author.jobTitle} — FrameCipher`,
      description: author.metaDescription || author.shortBio,
      url: `${SITE_URL}/authors/${author.slug}`,
      type: "profile",
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: author.image?.alt || author.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary",
      title: author.seoTitle || `${author.name} — ${author.jobTitle} — FrameCipher`,
      description: author.metaDescription || author.shortBio,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };

  return metadata;
}

export default async function AuthorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author || author.status !== "published") {
    notFound();
  }

  const personSchema = buildPersonSchema(author);
  const schemaJson = JSON.stringify(personSchema);

  const hasImage = Boolean(author.image?.url);
  const socials = Object.entries(author.socialLinks || {}).filter(
    ([, value]) => value && value.trim().length > 0
  );

  const articles = getAllCanonicalPosts().filter(
    (post) =>
      post.status === "published" &&
      post.author?.toLowerCase() === author.name.toLowerCase()
  );

  const bioParagraphs = (author.bio || author.shortBio || "Detailed professional background coming soon.")
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <main className="author-page">
      {/* Author JSON-LD structured data (auto-generated Person schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      {/* Profile Hero */}
      <section className="pt-24 sm:pt-28 pb-16 px-6 sm:px-10 lg:px-16 border-b border-frame-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 font-heading text-[11px] uppercase tracking-wider text-frame-accent bg-frame-muted/40 border border-frame-border rounded-full px-3.5 py-1.5">
              <BrainCircuit className="h-3.5 w-3.5" />
              Person Schema Active
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="shrink-0">
              {hasImage ? (
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border border-frame-border bg-frame-muted flex items-center justify-center">
                  <img
                    src={author.image.url}
                    alt={author.image.alt || author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-frame-accent text-frame-accent-fg flex items-center justify-center font-heading font-bold text-4xl sm:text-5xl border border-purple-400/60">
                  {initialsOf(author.name)}
                </div>
              )}
            </div>

            {/* Identity */}
            <div className="min-w-0 flex-1">
              <h1 className="font-heading font-bold uppercase tracking-tight text-frame-fg [font-size:clamp(2.2rem,6vw,5rem)] leading-[0.9]">
                {author.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4">
                <span className="font-heading font-semibold text-frame-muted-fg text-base sm:text-lg">
                  {author.jobTitle}
                </span>
                <span className="text-frame-muted">/</span>
                <span className="font-heading font-semibold text-frame-accent text-base sm:text-lg">
                  {author.worksFor}
                </span>
              </div>
              <p className="font-body text-frame-muted-fg mt-5 max-w-2xl text-sm sm:text-base leading-relaxed">
                {author.shortBio || author.bio || "Strategist and contributor at FrameCipher."}
              </p>

              {/* Social + contact */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6">
                {socials.map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-frame-border bg-frame-muted/30 text-frame-muted-fg hover:text-frame-fg hover:border-frame-accent/60 text-xs font-semibold transition-colors"
                    aria-label={key}
                  >
                    <SocialIcon name={key} className="h-4 w-4" />
                    {SOCIAL_LABELS[key] || key}
                  </a>
                ))}
                {author.website && (
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-frame-border bg-frame-muted/30 text-frame-muted-fg hover:text-frame-fg hover:border-frame-accent/60 text-xs font-semibold transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    Website
                  </a>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-frame-border bg-frame-muted/30 text-frame-muted-fg hover:text-frame-fg hover:border-frame-accent/60 text-xs font-semibold transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About + Expertise */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-frame-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-frame-fg text-2xl mb-5">
                About
              </h2>
              <div className="prose-invert max-w-none space-y-4">
                {bioParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-body text-frame-muted-fg text-sm leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold uppercase tracking-tight text-frame-fg text-2xl mb-5">
                Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {(author.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium text-frame-muted-fg bg-frame-muted/30 border border-frame-border rounded-full px-3.5 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights by Author */}
      {articles.length > 0 && (
        <section className="py-16 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-frame-accent font-semibold mb-2">
                  Published by {author.name}
                </p>
                <h2 className="font-heading font-bold uppercase tracking-tight text-frame-fg text-3xl">
                  Latest Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-heading text-xs font-bold uppercase tracking-wider text-frame-fg hover:text-frame-accent flex items-center gap-1.5 shrink-0"
              >
                All Articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-frame-border bg-frame-muted/20 p-6 flex flex-col gap-3 transition-colors duration-200 hover:border-frame-accent/60"
                >
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-frame-accent">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-frame-fg text-base leading-snug line-clamp-3 group-hover:text-frame-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-frame-muted-fg text-xs leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="font-body text-[11px] text-frame-muted mt-auto pt-2">
                    {post.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl border border-frame-border bg-frame-muted/30 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-frame-fg text-3xl sm:text-4xl leading-tight">
              Work with {author.name.split(" ")[0]}
            </h2>
            <p className="font-body text-frame-muted-fg text-sm mt-3 max-w-lg">
              {author.worksFor} builds high-converting experiences and growth systems.
              Get a free strategy assessment for your brand.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-heading text-xs font-bold uppercase tracking-wider text-frame-accent-fg bg-frame-accent hover:bg-purple-600 rounded-xl px-6 py-3.5 inline-flex items-center gap-2 transition-colors shrink-0"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}