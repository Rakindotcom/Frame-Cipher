import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const markets = ['US', 'UK', 'Australia', 'Canada', 'UAE']

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8"
      >
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">
            Services
          </Link>
          <span>/</span>
          <Link href="/services/content-writing" className="transition hover:text-frame-fg">
            Content Writing
          </Link>
          <span>/</span>
          <span className="text-frame-accent">SEO &amp; Blog Writing</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="SEO &amp; Blog Writing"
        meta="One In-House Team / Search Intent First"
        number="01"
        title="Best SEO &amp; Blog Writing Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Content Sample &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Content Team &rarr;
            </PosterButton>
          </>
        }
      >
        SEO blog content should do more than target a keyword.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For SMEs, Startups, Ecommerce Businesses &amp; Established Brands
          </p>

          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            It should answer the right search, provide useful information, demonstrate appropriate expertise,
            and give readers a clear reason to keep reading. Framecipher provides SEO &amp; Blog Writing Service
            in Bangladesh for SMEs, startups, ecommerce businesses, and established brands, with content
            support for international markets including the US, UK, Australia, Canada, and UAE.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our in-house team combines keyword research, search-intent analysis, content planning, SEO
            writing, editing, internal linking, and content refresh support into one workflow.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg md:gap-3 md:text-sm">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Dhaka &amp; Bangladesh</span>
            {markets.map((market) => (
              <span key={market} className="flex items-center gap-2">
                <span aria-hidden="true" className="font-bold text-frame-accent">
                  &rarr;
                </span>
                <span
                  className={
                    market === 'UAE'
                      ? 'border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent'
                      : 'border border-frame-border/80 bg-frame-bg px-3 py-1.5'
                  }
                >
                  {market}
                </span>
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              A free content sample can be requested before a larger engagement so you can evaluate the
              writing approach and fit.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Content Sample
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
