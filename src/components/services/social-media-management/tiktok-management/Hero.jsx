import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Content Strategy',
  'Video Production',
  'TikTok SEO',
  'Publishing',
  'Community Management',
  'Reporting',
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
          <span className="text-frame-accent">TikTok Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Search-Aware Strategy"
        number="01"
        title="TikTok Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Your Free TikTok Audit &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </>
        }
      >
        TikTok can help businesses build awareness, reach new audiences, showcase products, and create
        customer interest. But consistent results require more than posting random videos.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Businesses In Bangladesh And International Markets
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides TikTok Management Service for businesses in Bangladesh and international
            markets. We combine TikTok strategy, audience research, content planning, short-form video
            production, trend research, search-aware content, publishing, community management, and
            performance reporting.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our goal is to build a TikTok presence that supports your business goals instead of treating
            the platform as another content channel to maintain.
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
                Ecommerce and product brands, food and hospitality businesses, local companies,
                service businesses, SaaS and technology brands, creator-led brands, and
                international businesses.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                TikTok for businesses across Bangladesh, including Dhaka, plus the US, UK,
                Australia, Canada, and UAE with market-specific content strategies.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Audience research, content pillars, short-form video production, trend research,
                search-aware content, publishing, community management, and reporting.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              A repeatable content system, not a generic monthly content calendar.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get Your Free TikTok Audit
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
