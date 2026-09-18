import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Best UI/UX Design Service in Bangladesh"
  const subtitle = service?.shortDesc || service?.metaDescription || "UI/UX design for any niche—business sites, stores, apps & digital products. Wireframes, user flow mapping, and intuitive interfaces built around real human behavior."

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
          <span className="text-frame-accent">UI/UX Design</span>
        </div>
      </nav>

      {/* HERO SECTION IN HOME STYLE */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Interface & Interaction Systems
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              08
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.5rem,7vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Book Design Consultation</PosterButton>
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
              Core Philosophy & Methodology
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Design Systems Built For Conversion & Flow
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
              <span>User Research</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Information Architecture</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Interactive Wireframes</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Design System</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Usability Testing</span>
            </div>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Good UI/UX design is invisible when it works—the user completes their task without thinking about the interface at all. It only becomes visible when it is done wrong. We design digital interfaces that guide users effortlessly through conversion funnels while expressing your brand with refined visual craft.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
