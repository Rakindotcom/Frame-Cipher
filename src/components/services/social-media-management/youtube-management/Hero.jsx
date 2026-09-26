import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Channel Strategy',
  'Video Production',
  'YouTube SEO',
  'Thumbnails',
  'Shorts',
  'Analytics',
]

const audience = [
  'Businesses',
  'Brands',
  'Experts',
  'Organizations',
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
          <span className="text-frame-accent">YouTube Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Long-Term Discovery"
        number="01"
        title="YouTube Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Proposal &rarr;
            </PosterButton>
          </>
        }
      >
        Your YouTube channel should do more than store videos. It should help people discover your
        brand, understand your expertise, and take the next step.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Businesses In Bangladesh And International Markets
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Search, Retention &amp; Packaging
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides YouTube Management Service in Bangladesh for businesses, brands,
            experts, and organizations that want a structured approach to channel strategy, content
            production, YouTube SEO, thumbnails, publishing, Shorts, community management, and
            performance analysis.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We work with businesses in Bangladesh and international markets, including the US, UK,
            Australia, Canada, and UAE. Every channel strategy is built around your audience, business
            goals, content capabilities, and market.
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
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">We Handle</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Channel strategy, content planning, scripting, video production and editing, YouTube
                SEO, thumbnail and title strategy, Shorts, playlists and end screens, publishing,
                community management, and analytics.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">We Build For</span>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-border bg-frame-muted/10 px-2 py-0.5 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Bangladesh, the US, UK, Australia, Canada, and UAE, with channel strategies adapted
                around market-specific audiences, language, search behavior, and business goals.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              Unlike a fast-moving feed, a video can keep generating discovery opportunities long
              after it is published. That makes a well-managed library a long-term business asset.
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
