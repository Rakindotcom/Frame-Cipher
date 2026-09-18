import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

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

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Managed Ecommerce Infrastructure
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              09
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best Shopify Development Service in Bangladesh
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Framecipher builds Shopify stores for merchants who want reliable uptime and simplified backend management without taking on full custom infrastructure. Whether you&apos;re launching a store in Dhaka or selling to customers across the US, UK, Australia, Canada, or UAE, our Shopify development services deliver a store built to convert visitors and stay easy for your team to run.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </div>

          {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
          <div className="mt-16 grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border md:grid-cols-4">
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Theme Architecture
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Online Store 2.0
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Modular Liquid &amp; JSON sections
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                App Strategy
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Zero App Bloat
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Disciplined stack &amp; native functions
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Global Commerce
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Shopify Markets
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Multi-currency, localization &amp; duties
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Speed Benchmark
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Sub-Second Load
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Core Web Vitals &amp; mobile tuning
              </p>
            </div>
          </div>
        </div>
      </section>

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
