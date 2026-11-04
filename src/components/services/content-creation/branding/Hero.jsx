import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const customerTouchpoints = [
  'Website pages & digital apps',
  'Social media channels & reels',
  'Paid display & video advertising',
  'Fundraising & sales pitch decks',
  'Retail product packaging & labels',
  'Business documents & stationery',
  'Commercial proposals & RFPs',
  'Direct customer emails & newsletters',
  'Video production & motion graphics',
  'Storefronts, signage & interior branding',
  'Product interfaces & SaaS software',
  'Customer service & executive communications'
]

const beyondLogoQuestions = [
  'Which exact secondary and accent colors should be used with the logo?',
  'Which specific headline and body typefaces should appear on the website?',
  'How should an investor presentation or pitch deck be visually structured?',
  'What exact photography style, lighting, and art direction fit the company?',
  'Should social media captions sound formal, conversational, or authoritative?',
  'Which specific words and messaging pillars should the brand repeat constantly?',
  'Which proprietary graphic shapes and motifs can appear without the logo?',
  'How should the entire visual identity adapt to dark mode and print substrates?',
  'How should the brand identity adapt to physical packaging and shipping boxes?',
  'How will another external designer or developer execute the identity in 12 months?'
]

export default function Hero({ service }) {
  const title = service?.h1 || "Branding Service in Bangladesh"
  const subtitle = service?.shortDesc || "Build a Brand That Looks Consistent, Sounds Distinct, and Feels Credible. Your brand is more than a logo. It is the system behind how your business looks, speaks, and shows up across every customer touchpoint. Framecipher provides branding services that bring strategy, visual identity, brand voice, and practical guidelines together into one cohesive brand system."

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
          <span className="text-[#A855F7]">Branding</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Holistic Brand Architecture"
        meta="Strategy • Visual Identity • Verbal Voice • Guidelines • Rebranding"
        number="07"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Start Your Branding Project &rarr;
            </PosterButton>
            <PosterButton href="/projects#branding" variant="outline">
              View Our Branding Work &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
        <span className="mt-4 block text-xs md:text-sm font-normal text-[#A1A1AA] leading-relaxed wide:text-lg">
          Whether you are launching a new business, growing an existing brand, or preparing for a rebrand, we create brand identities designed for real-world use across websites, social media, marketing materials, packaging, presentations, and other business channels.
        </span>
      </PageHero>

      {/* FEATURE BAR */}
      <div className="border-b border-white/[0.08] bg-[#121214]/40 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-center text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#FAFAFA]">
          <span>Brand Strategy</span>
          <span className="text-[#A855F7]">•</span>
          <span>Visual Identity</span>
          <span className="text-[#A855F7]">•</span>
          <span>Brand Voice</span>
          <span className="text-[#A855F7]">•</span>
          <span>Brand Guidelines</span>
          <span className="text-[#A855F7]">•</span>
          <span>Rebranding</span>
        </div>
      </div>

      {/* VALUE PROPOSITION: BUILT AROUND BUSINESS & CUSTOMER EXPERIENCE */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
              Unified Ecosystem
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Branding Built Around Your Business and Customer Experience
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
              Branding should not exist only inside an idealistic presentation deck. Customers experience your business across dozens of physical and digital touchpoints every day. Each interaction creates another opportunity to reinforce credibility, or create confusion.
            </p>
          </div>

          {/* 12 TOUCHPOINTS GRID */}
          <div className="mt-12 border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Omnichannel Consistency
              </span>
              <span className="text-xs font-mono font-bold text-[#A1A1AA]">
                12 Customer Touchpoints
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm font-medium text-[#A1A1AA] max-w-4xl wide:text-lg">
              When every designer, copywriter, marketer, or vendor makes creative decisions in isolation, the brand rapidly fractures. Our branding service creates the authoritative system behind those decisions:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {customerTouchpoints.map((tp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 border border-white/[0.08] bg-[#09090B] p-3.5">
                  <CheckIcon />
                  <span className="text-xs font-medium text-[#FAFAFA] leading-snug">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT BRANDING MEANS BEYOND A LOGO */}
          <div className="mt-8 border border-white/[0.08] bg-[#09090B] p-6 md:p-10">
            <div className="border-b border-white/[0.06] pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Strategic Scope
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                What Branding Means Beyond a Logo
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#A1A1AA] max-w-3xl wide:text-lg">
                A logo identifies a business; branding gives that identity meaning and context. Consider what happens the moment a logo is approved. A logo cannot answer the 10 operational questions that follow; a complete brand system can:
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {beyondLogoQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-white/[0.06] bg-[#121214] p-4">
                  <span className="font-mono text-xs font-black text-[#A855F7] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#FAFAFA] leading-relaxed">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
