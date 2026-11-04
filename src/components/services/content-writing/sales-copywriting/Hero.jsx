import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const markets = ['US', 'UK', 'Australia', 'Canada']

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
          <span className="text-[#A855F7]">Sales Copywriting</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Sales Copywriting"
        meta="One In-House Team / Proof-Driven Copy"
        number="05"
        title="Sales Copywriting Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Sales Copywriting Quote &rarr;
            </PosterButton>
          </>
        }
      >
        Sales copy has one job: help the right buyer understand the offer, believe the case for it, and take
        the next step. That requires more than persuasive-sounding sentences.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] md:text-sm">
            For Sales Pages, Proposals, Pitch Decks &amp; VSL Scripts
          </p>

          <p className="mx-auto max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Framecipher provides Sales Copywriting Service for businesses in Bangladesh and clients across the
            US, UK, Australia, and Canada.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            We build sales copy around the actual offer, audience, proof, objections, and buying decision rather
            than forcing every project into the same formula.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            From sales pages and proposals to pitch decks, VSL scripts, and direct-response materials, we write
            the argument that connects the problem to the solution and the solution to a clear next step.
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
              Tell us what you are selling, who you want to reach, and where the copy will be used.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
