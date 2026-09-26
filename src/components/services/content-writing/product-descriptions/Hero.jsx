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
          <span className="text-frame-accent">Product Descriptions</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Product Description Writing"
        meta="One In-House Team / Buyer-Focused Copy"
        number="04"
        title="Product Description Writing Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Quote &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Product Copy Sample &rarr;
            </PosterButton>
          </>
        }
      >
        Your product page has to do more than list specifications. It needs to help shoppers understand the
        product, assess its value, and know what to do next.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Ecommerce Brands, Shopify Stores, Amazon Sellers &amp; Marketplaces
          </p>

          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides Product Description Writing Service for ecommerce businesses that need original,
            buyer-focused product copy for individual products or large catalogs. We turn product features into
            clear benefits, address common purchase questions, structure copy for easy scanning, and adapt the
            content to the platform where it will be published.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We work with businesses in Bangladesh and international markets, including the US, UK, Australia,
            Canada, and UAE.
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
              Send us a few of your products and we will show you how the same source information can be turned
              into original, buyer-focused copy.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Quote
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
