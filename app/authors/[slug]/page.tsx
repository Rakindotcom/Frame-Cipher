import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicAuthorBySlug } from "@/lib/authors/serverAuthorStorage";
import { getPublicBlogPosts } from "@/lib/blog/serverBlogStorage";
import { BASE_URL } from "@/lib/seo/site";
import { withBrandSuffix, clampMetaDescription } from "@/lib/seo/metadata";
import { getMergedPostsFromStorage, isLegacyDemoPost } from "@/lib/blog/getBlogPosts";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageSchema } from "@/lib/seo/schema";
import PosterButton from "@/components/home/PosterButton";
import {
  Mail,
  Globe,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SOCIAL_LABELS, SocialIcon } from "@/components/icons/SocialIcon";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

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
  const author = await getPublicAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found | FrameCipher",
      description: "The requested author profile could not be found.",
    };
  }

  const ogImage = author.image?.url;
  const authorTitle = withBrandSuffix(
    author.seoTitle || `${author.name}: ${author.jobTitle}`
  );
  const authorDescription = clampMetaDescription(
    author.metaDescription ||
      author.shortBio ||
      `Author profile for ${author.name} at FrameCipher.`
  );
  const metadata: Metadata = {
    title: authorTitle,
    description: authorDescription,
    alternates: {
      canonical: `${BASE_URL}/authors/${author.slug}`,
    },
    openGraph: {
      title: authorTitle,
      description: authorDescription,
      url: `${BASE_URL}/authors/${author.slug}`,
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
      title: authorTitle,
      description: authorDescription,
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
  const author = await getPublicAuthorBySlug(slug);

  if (!author || (author.status && author.status !== "published")) {
    notFound();
  }

  const authorSlug = author.slug || slug;
  const canonicalUrl = `${BASE_URL}/authors/${authorSlug}`;
  const authorSchema = generatePageSchema({
    pageType: "author",
    data: {
      author,
      canonicalUrl,
      title: `${author.name} | Frame Cipher`,
      description: author.shortBio || author.bio,
    },
  });

  const hasImage = Boolean(author.image?.url);
  const socials = Object.entries(author.socialLinks || {}).filter(
    ([, value]) => value && value.trim().length > 0
  );

  const rawPosts = await getPublicBlogPosts();
  const allPosts = getMergedPostsFromStorage(rawPosts);
  const targetAuthorName = (author.name || "").toLowerCase().trim();
  const targetAuthorSlug = (author.slug || "").toLowerCase().trim();
  const targetAuthorId = (author.id || "").toLowerCase().trim();

  const articles = allPosts.filter((post) => {
    if (isLegacyDemoPost(post) || (post.status && post.status !== "published")) return false;
    const postAuthor = (post.author || "").toLowerCase().trim();
    if (!postAuthor) return false;
    const postAuthorSlug = postAuthor.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return (
      postAuthor === targetAuthorName ||
      postAuthor === targetAuthorSlug ||
      postAuthor === targetAuthorId ||
      postAuthorSlug === targetAuthorSlug ||
      (targetAuthorName.length > 3 && targetAuthorName.includes(postAuthor)) ||
      (postAuthor.length > 3 && postAuthor.includes(targetAuthorName))
    );
  });

  const bioParagraphs = (author.bio || author.shortBio || "Detailed professional background coming soon.")
    .split(/\n\s*\n/)
    .filter(Boolean);

  const firstName = author.name.split(" ")[0];

  return (
    <main className="author-page min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      {/* Author JSON-LD structured data */}
      <JsonLd data={authorSchema} />

      {/* Profile Header & Identity Hero */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb & Navigation Header Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <Link href="/authors" className="hover:text-white transition-colors">
                Authors
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <span className="text-frame-accent">{author.name}</span>
            </nav>

            <Link
              href="/authors"
              className="group inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 shrink-0"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
              <span>All Authors</span>
            </Link>
          </div>

          {/* Author Master Profile Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              {/* Avatar */}
              <div className="shrink-0">
                {hasImage ? (
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border border-white/[0.08] bg-[#18181B] flex items-center justify-center">
                    <img
                      src={author.image!.url}
                      alt={author.image!.alt || author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl bg-[#18181B] border border-white/[0.08] text-white flex items-center justify-center font-heading font-medium text-4xl sm:text-5xl">
                    {initialsOf(author.name)}
                  </div>
                )}
              </div>

              {/* Identity & Metadata */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#18181B] border border-emerald-500/20 rounded-full px-3.5 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Person Schema Active</span>
                  </span>
                </div>

                <h1 className="font-heading font-medium tracking-[-0.03em] text-white [font-size:clamp(2.4rem,6vw,4.5rem)] leading-[1.02]">
                  {author.name}
                </h1>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 font-mono text-sm">
                  <span className="text-zinc-300">
                    {author.jobTitle}
                  </span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-frame-accent font-medium">
                    {author.worksFor}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
                  {author.shortBio || author.bio || "Strategist and practice contributor at FrameCipher."}
                </p>

                {/* Social Channels & Contact Pills */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {socials.map(([key, value]) => (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 font-mono text-xs uppercase tracking-wider transition-colors"
                      aria-label={key}
                    >
                      <SocialIcon name={key} className="h-3.5 w-3.5" />
                      <span>{SOCIAL_LABELS[key] || key}</span>
                    </a>
                  ))}
                  {author.website && (
                    <a
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Website</span>
                    </a>
                  )}
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Email</span>
                    </a>
                  )}
                </div>

                {/* Symmetrical CTA Buttons */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4">
                  <PosterButton href="/contact">
                    Work with {firstName}
                  </PosterButton>
                  <PosterButton href="/authors" variant="outline">
                    Explore All Authors
                  </PosterButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Expertise (Modality 5 Architectural Surfaces) */}
      <section className="relative isolate py-16 md:py-24 px-4 sm:px-6 md:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Background Dossier */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 shadow-xl">
              <h2 className="font-heading font-medium tracking-tight text-white text-2xl mb-6">
                About &amp; Operating Thesis
              </h2>
              <div className="space-y-4">
                {bioParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base font-normal leading-relaxed text-zinc-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Competencies & Expertise */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="font-heading font-medium tracking-tight text-white text-2xl mb-6">
                  Domain Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {(author.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-zinc-300 bg-[#18181B] border border-white/[0.08] rounded-md px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <p className="font-mono text-xs text-zinc-400">
                  Affiliated with <span className="text-white font-medium">{author.worksFor}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights by Author */}
      {articles.length > 0 && (
        <section className="relative isolate py-16 md:py-24 px-4 sm:px-6 md:px-8 border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-white/[0.08] pb-4">
              <div>
                <h2 className="font-heading font-medium tracking-tight text-white text-3xl md:text-4xl">
                  Published Strategic Briefs
                </h2>
              </div>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors shrink-0"
              >
                <span>All Strategic Articles</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14]"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-heading font-medium text-white text-xl leading-snug line-clamp-3 group-hover:text-frame-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm font-normal text-zinc-400 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-xs text-zinc-500">
                    <span>{post.readTime}</span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors inline-flex items-center gap-1">
                      <span>Read Brief</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Master SoftWeb CTA Section */}
      <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                Work directly with{' '}
                <br className="hidden sm:inline" />
                <span className="italic text-frame-accent">
                  {author.name}.
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
                {author.worksFor} builds high-converting systems, technical Webflow platforms, and organic search
                engines. Schedule a direct strategic assessment for your brand.
              </p>
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <PosterButton href="/contact">
                  Start a Project with {firstName}
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Send a Brief
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
