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
          <span className="text-frame-accent">Magento</span>
        </div>
      </nav>

      {/* HERO SECTION IN HOME STYLE */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Enterprise Ecommerce
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              08
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best Magento Development Service in Bangladesh
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Framecipher builds Magento stores for merchants with large product catalogs, complex inventory, or B2B pricing needs that outgrow simpler ecommerce platforms. Whether you&apos;re scaling a store in Dhaka or managing multi-region operations across the US, UK, Australia, Canada, or UAE, our Magento development services deliver a platform built to handle real ecommerce complexity, not just a bigger product list.
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
              Enterprise Commerce Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Complex Catalogs & High-Volume Commerce Engines
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
              <span>Catalog Architecture</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>B2B Pricing Rules</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Custom Modules & Hyvä</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>ERP/CRM Integration</span>
            </div>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento is not simply a platform for adding more products. It becomes valuable when ecommerce operations require complex catalog structures, customer-specific B2B pricing, multiple storefronts, or deep enterprise integrations. Framecipher plans around your products, fulfillment pipelines, and ERP dependencies before building the store.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
