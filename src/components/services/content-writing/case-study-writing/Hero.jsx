import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const markets = ['US', 'UK', 'Australia', 'Canada', 'UAE']

export default function Hero() {
  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">
            Services
          </Link>
          <span>/</span>
          <Link href="/services/content-writing" className="transition hover:text-[#FAFAFA]">
            Content Writing
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Case Study Writing</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Case Study Writing"
        meta="One In-House Team / Evidence-First Storytelling"
        number="07"
        title="Case Study Writing Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </>
        }
      >
        Your best client result deserves more than a vague testimonial.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] md:text-sm">
            Real Story. Real Evidence. Clear Business Impact.
          </p>

          <p className="mx-auto max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Framecipher provides Case Study Writing Service for businesses in Bangladesh and clients across the
            US, UK, Australia, Canada, UAE, and other international markets. We turn real customer experiences
            into detailed case studies built around the problem, process, solution, measurable results, and
            customer perspective.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Instead of writing generic praise, we research the story behind the result. We interview the people
            involved, gather the relevant data, develop the narrative, verify the details, and coordinate
            approval before delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-[#FAFAFA] md:gap-3 md:text-sm">
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Dhaka &amp; Bangladesh</span>
            {markets.map((market) => (
              <span key={market} className="flex items-center gap-2">
                <span aria-hidden="true" className="font-bold text-[#A855F7]">
                  &rarr;
                </span>
                <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">{market}</span>
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-[#FAFAFA] sm:text-base">
              Tell us which customer result you want documented and what the story needs to prove.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get Free Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
