import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Ecommerce Website</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Sub-Service"
        meta="Built Around How Your Customers Buy / In-House Team"
        number="03"
        title="Best E-commerce Website Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Store Packages
            </PosterButton>
          </>
        }
      >
        Build an online store designed to turn product browsing into completed purchases. Frame Cipher combines ecommerce strategy, conversion-focused UX, development, payment integration, and performance through one in-house team.
      </PageHero>

      {/* E-COMMERCE BUYING JOURNEY BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            E-commerce Website Development Built Around How Your Customers Buy
          </p>
          <h2 className="font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Product Discovery &rarr; Product Page &rarr; Cart &rarr; Checkout &rarr; Payment &rarr; Order &rarr; Delivery &rarr; Customer
          </h2>
          <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            An ecommerce website should do more than display products. From product discovery and category navigation to cart, checkout, payment, and post-purchase workflows, we structure the store around the complete buying journey.
          </p>
        </div>
      </section>
    </div>
  )
}
