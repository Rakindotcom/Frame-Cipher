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
          <Link href="/services/social-media-management" className="transition hover:text-frame-fg">
            Social Media Management
          </Link>
          <span>/</span>
          <span className="text-frame-accent">Instagram Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Reels-First Strategy"
        number="01"
        title="Instagram Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Your Free Instagram Account Audit &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Instagram Team &rarr;
            </PosterButton>
          </>
        }
      >
        Instagram can help people discover your brand, understand what you offer, build trust, and
        contact your business. But keeping an account active is not the same as managing it
        strategically.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            Framecipher Provides Instagram Management Service In Bangladesh And For International
            Businesses
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Strategy, Reels, Content &amp; Community
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg md:gap-3 md:text-sm">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Profile Optimization</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Content &amp; Reels</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent">Instagram SEO &amp; Reporting</span>
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border text-left sm:grid-cols-3">
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">We Handle</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Profile optimization, Instagram SEO, content strategy, creative content, Reels,
                Feed, Carousels, Stories, Highlights, publishing, comments, DMs, and reporting.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">We Build For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Ecommerce and product brands, local businesses, service companies, fashion, beauty
                and lifestyle brands, professional businesses, and founders.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Bangladesh, the US, UK, Australia, Canada, and UAE, with content and communication
                adapted to the market and audience.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              We build your Instagram presence around your business goals, target audience, content
              performance, and the way Instagram currently recommends and distributes content.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get Your Free Instagram Account Audit
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
