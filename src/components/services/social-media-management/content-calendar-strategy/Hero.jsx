import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Content Strategy',
  'Content Pillars',
  'Master Calendar',
  'Campaign Planning',
  'Repurposing',
  'Platform Adaptation',
]

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
          <span className="text-frame-accent">Content Calendar &amp; Strategy</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Built For Your Business Goals"
        number="01"
        title="Content Calendar & Strategy Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Content Strategy Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your Content Goals &rarr;
            </PosterButton>
          </>
        }
      >
        A content calendar should give your business a clear plan for what to publish, where to publish
        it, when to publish it, and why each piece of content matters.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Businesses In Bangladesh And International Markets
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Your social media content should work as one coordinated system, not as separate posts
            created independently for every platform. Framecipher provides Content Calendar &amp; Strategy
            Service in Bangladesh for businesses that need a clear plan for what to publish, where to
            publish it, when to publish it, and why each piece of content matters.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We connect business goals, audience needs, content pillars, campaigns, platform roles,
            publishing schedules, repurposing opportunities, and performance insights into one practical
            content system.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our team works with businesses across Bangladesh and international markets, including the US,
            UK, Australia, Canada, and UAE.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg md:gap-3 md:text-sm">
            {capabilities.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1.5 ${
                    index === capabilities.length - 1
                      ? 'border border-frame-accent bg-frame-accent/10 text-frame-accent'
                      : 'border border-frame-border/80 bg-frame-bg'
                  }`}
                >
                  {item}
                </span>
                {index < capabilities.length - 1 && (
                  <span className="font-bold text-frame-accent">&rarr;</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border text-left sm:grid-cols-3">
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Manage For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Multi-platform businesses, ecommerce and product brands, service businesses, B2B and
                professional brands, startups and growing businesses, in-house marketing teams, and
                international businesses.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Businesses across Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE
                with market-specific content planning.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Audience and content pillar planning, a master content calendar, campaign coordination,
                platform-specific adaptation, a repurposing roadmap, approval workflows, and performance
                review.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              Your content should not be a collection of disconnected posts.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Content Strategy Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
