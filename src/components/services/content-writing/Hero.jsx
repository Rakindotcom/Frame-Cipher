import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

const capabilities = [
  'SEO & Blog Writing',
  'Website Content',
  'Landing Page Copy',
  'Product Descriptions',
  'Sales Copy',
  'Email Copywriting',
  'Case Studies',
  'Rewriting & Refresh',
  'Content Strategy',
]

export default function Hero() {
  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          <span>/</span>
          <span className="text-[#A855F7]">Content Writing</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Complete Content Solution"
        meta="One In-House Team / Built For Your Brand"
        number="01"
        title="Content Writing Services in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Content Sample &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Content Team &rarr;
            </PosterButton>
          </>
        }
      >
        Writing built to do something specific: rank, explain, persuade, sell, or build trust.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] md:text-sm">
            For SMEs, Startups, Ecommerce Businesses &amp; Established Brands
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Writing built to do something specific: rank, explain, persuade, sell, or build trust.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Framecipher provides content writing services for SMEs, startups, ecommerce businesses, and
            established brands in Bangladesh and international markets.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Our in-house team handles research, writing, editing, SEO integration, and revisions around the
            purpose of each piece.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-[#FAFAFA] md:gap-3 md:text-sm">
            {capabilities.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1.5 ${
                    index === capabilities.length - 1
                      ? 'border border-[#A855F7]/40 bg-[#A855F7]/10 text-[#A855F7]'
                      : 'border border-white/[0.08] bg-[#09090B]'
                  }`}
                >
                  {item}
                </span>
                {index < capabilities.length - 1 && (
                  <span className="font-bold text-[#A855F7]">&rarr;</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-px border border-white/[0.08] bg-frame-border text-left sm:grid-cols-3">
            <div className="bg-[#09090B] p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Who We Write For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                SMEs, startups, ecommerce businesses, service businesses, B2B and professional firms,
                in-house marketing teams, and international brands.
              </p>
            </div>
            <div className="bg-[#09090B] p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE, with content
                adapted to the intended audience and market.
              </p>
            </div>
            <div className="bg-[#09090B] p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                Research, content briefs, drafting, editing, SEO integration, client review, and revisions
                around the purpose of each piece.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-[#FAFAFA] sm:text-base">
              A free content sample can be requested before a larger engagement so you can evaluate the
              writing approach and fit.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Content Sample
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
