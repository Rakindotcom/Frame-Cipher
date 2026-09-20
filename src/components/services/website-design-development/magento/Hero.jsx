import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg/90 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Magento</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / Enterprise Ecommerce"
        meta="Magento & Adobe Commerce / 100K+ SKUs"
        number="07"
        title="Best Magento Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher builds Magento stores for merchants with large product catalogs, complex inventory, or B2B pricing needs that outgrow simpler ecommerce platforms. Whether you&apos;re scaling a store in Dhaka or managing multi-region operations across the US, UK, Australia, Canada, or UAE, our Magento development services deliver a platform built to handle real ecommerce complexity, not just a bigger product list.
      </PageHero>

      {/* VISUAL DASHBOARD PANEL */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">MAGENTO_COMMERCE // ENTERPRISE ARCHITECTURE</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-GRADE</span>
              <span>INDEX: ELASTICSEARCH / OPENSEARCH</span>
              <span className="text-frame-accent font-black">CATALOG: 100K+ SKUs</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Commerce Engine</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Adobe Commerce</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">B2B Company Accounts</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Storefront Speed</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Hyvä Theme</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Sub-Second TTFB</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">System Sync</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">ERP &amp; PIM</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Real-Time GraphQL/REST</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Payment Layer</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Local &amp; Global</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">bKash/Nagad + Stripe</p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY WE'RE THE RIGHT MAGENTO DEVELOPMENT TEAM */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Advisory &amp; Engineering
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why We&apos;re the Right Magento Development Team
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border bg-frame-bg px-4 py-2 shadow-sm">Complex Catalog &amp; Pricing</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border bg-frame-bg px-4 py-2 shadow-sm">B2B &amp; Multi-Store</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-accent bg-frame-accent/10 px-4 py-2 text-frame-accent shadow-sm">Platform-Neutral Recommendation</span>
            </div>

            <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Build For</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Merchants with large catalogs, complex inventory, B2B pricing, or multi-region needs that outgrow simpler ecommerce platforms.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">What We Build</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Enterprise storefronts, B2B company accounts, ERP &amp; PIM integrations, and multi-store operations built on Adobe Commerce.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We first understand products, customers, pricing, fulfillment, and integrations&mdash;then build a store that handles real ecommerce complexity.
                </p>
              </div>
            </div>

            <div className="mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-fg">
                Not sure whether Magento or a different platform fits your store? We&apos;ll tell you honestly which one makes sense.
              </p>
              <PosterButton href="/contact" className="shrink-0">
                Get an Honest Assessment
              </PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
