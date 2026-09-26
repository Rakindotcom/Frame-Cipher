import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const assetPurposes = [
  {
    asset: 'Pitch Decks & Keynotes',
    focus: 'Visual Hierarchy & Narrative Flow',
    desc: 'Structuring complex startup data, financial projections, and value propositions for rapid investor comprehension.'
  },
  {
    asset: 'Company Profiles',
    focus: 'Capabilities & Corporate Credibility',
    desc: 'Communicating team expertise, past track records, and operational strengths for enterprise procurement and RFPs.'
  },
  {
    asset: 'Brochures & Catalogues',
    focus: 'Information Architecture & Layout',
    desc: 'Organizing extensive product specifications, pricing matrices, and imagery into intuitive, scannable page grids.'
  },
  {
    asset: 'Packaging & Labels',
    focus: 'Physical Form & Dieline Precision',
    desc: 'Engineering retail box dielines, pouch labels, and bottles that command shelf attention while complying with print specs.'
  }
]

export default function Hero({ service }) {
  const title = service?.h1 || "Graphic Design Service in Bangladesh"
  const subtitle = service?.shortDesc || "Pitch decks, brochures, packaging, business materials, and advertisements should feel like parts of the same brand, not disconnected designs created one at a time. Our graphic design service turns your existing brand assets and approved content into clear, professional, production-ready designs for print and digital use."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-frame-fg">Content Creation</Link>
          <span>/</span>
          <span className="text-frame-accent">Graphic Design</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Brand Collateral & Document Architecture"
        meta="Print & Digital / Decks & Packaging / Production-Ready Systems"
        number="05"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#graphic-design" variant="outline">
              View Graphic Design Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
        <span className="mt-4 block text-xs md:text-sm font-normal text-frame-muted-fg leading-relaxed">
          We design individual assets, multi-page business documents, packaging, marketing materials, and coordinated design sets around your brand, audience, message, and intended use.
        </span>
      </PageHero>

      {/* VALUE PROPOSITION: BUILT AROUND BRAND & BUSINESS NEEDS */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
              Functional Communication
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Graphic Design Built Around Your Brand & Business Needs
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Effective graphic design does more than make a business look professional. It helps people understand information, recognize your brand, and navigate your message. That is why we consider the purpose of each asset before developing its visual direction.
            </p>
          </div>

          {/* 4 PURPOSES GRID */}
          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {assetPurposes.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-black text-frame-accent">
                    Asset 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {item.asset}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    {item.focus}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ONE BRAND ACROSS EVERY MATERIAL */}
          <div className="mx-auto mt-12 max-w-4xl border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-frame-border/60 pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Unified Visual Language
              </span>
              <span className="rounded bg-frame-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-fg">
                Cohesive Identity
              </span>
            </div>
            <h4 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              One Brand Across Every Business Material
            </h4>
            <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Businesses often commission presentations, brochures, packaging, sales materials, advertisements, and corporate documents at different times from different vendors. Without a consistent design system, these assets quickly diverge. We apply unified principles across typography, color, imagery, layouts, icons, and spacing so every collateral piece visibly belongs to one authoritative brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
