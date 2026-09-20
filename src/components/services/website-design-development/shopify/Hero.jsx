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
          <span className="text-frame-accent">Shopify</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / Managed Ecommerce Infrastructure"
        meta="Shopify & Online Store 2.0 / High Conversion"
        number="09"
        title="Best Shopify Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher builds Shopify stores for merchants who want reliable uptime and simplified backend management without taking on full custom infrastructure. Whether you&apos;re launching a store in Dhaka or selling to customers across the US, UK, Australia, Canada, or UAE, our Shopify development services deliver a store built to convert visitors and stay easy for your team to run.
      </PageHero>

      {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">SHOPIFY_COMMERCE // OS 2.0 ARCHITECTURE</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-READY</span>
              <span>APPS: ZERO-BLOAT POLICY</span>
              <span className="text-frame-accent font-black">CHECKOUT: LEVEL 1 PCI-DSS</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Theme Architecture</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Online Store 2.0</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Modular Liquid & JSON</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">App Strategy</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Zero App Bloat</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Native Functions Stack</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Global Commerce</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Shopify Markets</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Multi-currency & Duties</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Speed Benchmark</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Sub-Second Load</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Core Web Vitals 95+</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC VALUE BANNER / WHY WE'RE THE RIGHT TEAM */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Principles
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why We&apos;re the Right Shopify Development Team
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent border-y-2 border-frame-border/60 py-3 my-8">
              <span>Managed Ecommerce Infrastructure</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Custom Shopify Development</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Disciplined App Architecture</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Platform-Neutral Recommendations</span>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Shopify removes much of the infrastructure burden from ecommerce, but the storefront built on top of it still determines how customers browse, trust, and buy.
              </p>
              <p>
                Framecipher focuses on building Shopify stores that are structured for real business use, not simply designed to look good in a portfolio.
              </p>
              <p>
                We plan your catalog, navigation, theme architecture, app stack, integrations, payment setup, and conversion flow before development begins.
              </p>
              <p>
                We also take a platform-neutral approach. Shopify can be a strong fit for businesses that want managed ecommerce infrastructure and easy store management. When WooCommerce, Magento, or another platform makes more practical sense, we explain that before development starts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
