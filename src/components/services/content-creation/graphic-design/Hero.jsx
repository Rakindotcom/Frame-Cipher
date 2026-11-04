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
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-[#FAFAFA]">Content Creation</Link>
          <span>/</span>
          <span className="text-[#A855F7]">Graphic Design</span>
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
        <span className="mt-4 block text-xs md:text-sm font-normal text-[#A1A1AA] leading-relaxed wide:text-lg">
          We design individual assets, multi-page business documents, packaging, marketing materials, and coordinated design sets around your brand, audience, message, and intended use.
        </span>
      </PageHero>

      {/* VALUE PROPOSITION: BUILT AROUND BRAND & BUSINESS NEEDS */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
              Functional Communication
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Graphic Design Built Around Your Brand & Business Needs
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
              Effective graphic design does more than make a business look professional. It helps people understand information, recognize your brand, and navigate your message. That is why we consider the purpose of each asset before developing its visual direction.
            </p>
          </div>

          {/* 4 PURPOSES GRID */}
          <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {assetPurposes.map((item, idx) => (
              <div key={idx} className="bg-[#09090B] p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-black text-[#A855F7]">
                    Asset 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                    {item.asset}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                    {item.focus}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ONE BRAND ACROSS EVERY MATERIAL */}
          <div className="mx-auto mt-12 max-w-4xl border border-white/[0.08] bg-[#09090B] p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Unified Visual Language
              </span>
              <span className="rounded bg-[#121214] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FAFAFA]">
                Cohesive Identity
              </span>
            </div>
            <h4 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
              One Brand Across Every Business Material
            </h4>
            <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              Businesses often commission presentations, brochures, packaging, sales materials, advertisements, and corporate documents at different times from different vendors. Without a consistent design system, these assets quickly diverge. We apply unified principles across typography, color, imagery, layouts, icons, and spacing so every collateral piece visibly belongs to one authoritative brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
