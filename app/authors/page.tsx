import Link from "next/link";
import { Metadata } from "next";
import { getServerAuthors } from "@/lib/authors/serverAuthorStorage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import PosterButton from "@/components/home/PosterButton";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Authors | FrameCipher",
  description:
    "Meet the strategists and contributors behind FrameCipher's Webflow builds, B2B growth systems and technical SEO insights.",
  alternates: {
    canonical: "/authors",
  },
  openGraph: {
    type: "website",
    url: "/authors",
    siteName: "FrameCipher",
    title: "Authors | FrameCipher",
    description:
      "Meet the strategists and contributors behind FrameCipher's Webflow builds, B2B growth systems and technical SEO insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FrameCipher authors",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Authors | FrameCipher",
    description:
      "Meet the strategists and contributors behind FrameCipher's Webflow builds, B2B growth systems and technical SEO insights.",
  },
};

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const authorMarqueeItems = [
  "Executive Thought Leadership",
  "Structured Person Schema",
  "Engineering & Webflow Systems",
  "Algorithmic Paid Advertising",
  "Topical SEO Architecture",
  "Verified B2B Contributors",
  "Authority Content Engines",
  "Senior Practice Leaders",
];

const baseMarquee = [...authorMarqueeItems, ...authorMarqueeItems];
const repeatedMarquee = [...baseMarquee, ...baseMarquee];

export default async function AuthorsIndexPage() {
  const authors = (await getServerAuthors()).filter(
    (a) => a.status === "published" && a.name
  );

  return (
    <main className="author-page authors-page min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Authors", url: "/authors" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb navigation" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-frame-accent">Authors</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            {/* Architectural Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
                The People Behind FrameCipher
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Person Schema Verified</span>
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.02] tracking-[-0.03em] text-white">
              Author profiles &amp;{' '}
              <span className="italic text-frame-accent">
                strategists.
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              Every strategy, build, and insight on this site is signed by a real human.
              Profiles carry structured <span className="text-white font-medium">Person schema</span> so search engines
              recognize exactly who wrote and stands behind the work.
            </p>

            {/* Symmetrical Button Pair (52px Height + Arrows) */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/blog">
                Explore All Insights
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Book a Consultation
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Authors and editorial credentials ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedMarquee.map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
                {item}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-frame-accent" />
            </div>
          ))}
        </div>
      </section>

      {/* Authors Grid (Modality 5 Dark Surface Cards) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
                All Published Contributors
              </h2>
            </div>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 font-mono text-xs text-zinc-400">
              {authors.length} {authors.length === 1 ? 'Author' : 'Authors'}
            </span>
          </div>

          {authors.length === 0 ? (
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 text-center text-zinc-400 text-sm">
              No published authors yet.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {authors.map((author) => {
                const hasImage = Boolean(author.image?.url);
                return (
                  <Link
                    key={author.id}
                    href={`/authors/${author.slug}`}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14]"
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        {hasImage ? (
                          <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/[0.08] bg-[#18181B] shrink-0 flex items-center justify-center">
                            <img
                              src={author.image.url}
                              alt={author.image.alt || author.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-[#18181B] border border-white/[0.08] text-white flex items-center justify-center font-heading font-medium text-lg shrink-0">
                            {initialsOf(author.name)}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h2 className="font-heading font-medium text-white text-lg leading-tight truncate group-hover:text-frame-accent transition-colors">
                            {author.name}
                          </h2>
                          <p className="font-mono text-xs text-zinc-400 mt-1 truncate">
                            {author.jobTitle}
                          </p>
                          <p className="font-mono text-[11px] font-semibold text-frame-accent mt-0.5 truncate">
                            {author.worksFor}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm font-normal text-zinc-400 leading-relaxed line-clamp-3">
                        {author.shortBio || author.bio}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-xs uppercase tracking-[1.1px] text-zinc-400 group-hover:text-white transition-colors">
                      <span>Inspect Profile</span>
                      <span className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Master SoftWeb CTA Section */}
      <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                Need strategic advisory{' '}
                <br className="hidden sm:inline" />
                <span className="italic text-frame-accent">
                  from our senior practitioners?
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
                Our authors and team leads actively work on live client systems, B2B search dominance,
                and high-converting technical platforms. Schedule a direct consultation.
              </p>
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <PosterButton href="/contact">
                  Book a Consultation
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
