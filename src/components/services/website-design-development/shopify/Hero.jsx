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

      {/* HERO SECTION IN HOME STYLE */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Managed Ecommerce Infrastructure
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              10
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
              View Pricing & Plans &rarr;
            </PosterButton>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE BANNER */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Why We&apos;re the Right Shopify Development Team
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              High-Converting Storefronts Without App Bloat
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
              <span>Store Strategy</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Liquid & OS 2.0</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Disciplined App Stack</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Performance & SEO</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Merchant Autonomy</span>
            </div>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Shopify handles the hosting and security, but your storefront determines trust, product discovery, and sales conversion. We build modular Online Store 2.0 themes with clean Liquid code, avoiding bloated apps to keep your store lightning-fast on mobile devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

