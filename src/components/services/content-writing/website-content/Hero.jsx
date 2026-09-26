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
          <span className="text-frame-accent">Website Content</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Content Writing"
        meta="One In-House Team / Clear, Credible, On-Brand"
        number="02"
        title="Website Content Writing Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Content Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Website Content Sample &rarr;
            </PosterButton>
          </>
        }
      >
        Your website needs to explain what you do, who you help, why it matters, and what visitors should do
        next.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For SMEs, Startups, Ecommerce Brands &amp; Established Businesses
          </p>

          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides Website Content Writing Service in Bangladesh for businesses that need clear,
            credible, and brand-aligned copy across their core website pages. We write homepage, About, service,
            and supporting website content for businesses in Bangladesh and international markets, including the
            US, UK, Australia, Canada, and UAE.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our approach combines business discovery, audience understanding, messaging strategy, page-specific
            copywriting, brand voice, SEO-aware structure, and cross-page consistency.
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
              A free content consultation can be requested before a larger engagement so you can evaluate the
              approach and fit.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Content Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
