import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'KPI Tracking',
  'Cross-Platform',
  'Audience Analysis',
  'Content Analysis',
  'Campaign Analysis',
  'Organic vs Paid',
  'Benchmarking',
  'Recommendations',
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
          <Link href="/services/social-media-management" className="transition hover:text-[#FAFAFA]">
            Social Media Management
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Reporting &amp; Analytics</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Built Around Business Goals"
        number="01"
        title="Monthly Reporting &amp; Analytics Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Reporting Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your Reporting Needs &rarr;
            </PosterButton>
          </>
        }
      >
        A rising follower count does not automatically mean your social media is working.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] md:text-sm">
            For Businesses In Bangladesh And International Markets
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            A rising follower count does not automatically mean your social media is working.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Framecipher provides a Monthly Reporting &amp; Analytics Service in Bangladesh to help
            businesses understand what happened, why performance changed, what worked, what did not, and
            what should happen next.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Instead of sending raw platform exports, we consolidate relevant data across your social
            channels and turn it into clear performance insights, business-focused analysis, and practical
            recommendations.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Based in Dhaka, we support businesses across Bangladesh and international markets, including the
            US, UK, Australia, Canada, and UAE.
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
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Who We Report For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                Businesses managing social media in-house or through another provider, ecommerce and
                product brands, service businesses, B2B and professional businesses, startups, and
                international brands.
              </p>
            </div>
            <div className="bg-[#09090B] p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE, with reporting
                contextualized around market, platform mix, and audience.
              </p>
            </div>
            <div className="bg-[#09090B] p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] sm:text-sm wide:text-lg">
                Monthly reporting cycles, KPI frameworks, cross-platform consolidation, content and
                campaign analysis, and strategic recommendations.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-[#FAFAFA] sm:text-base">
              Your social media report should do more than show whether numbers went up or down.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Reporting Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
