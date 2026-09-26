import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Comment Management',
  'DM Handling',
  'Review Response',
  'Moderation',
  'Social Listening',
  'Escalation',
  'Proactive Engagement',
  'Community Reporting',
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
          <span className="text-frame-accent">Community Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / Built Around Customer Response"
        number="01"
        title="Community Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Community Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your Community Management Needs &rarr;
            </PosterButton>
          </>
        }
      >
        Your social media should not go quiet after you publish.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Businesses In Bangladesh And International Markets
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Your social media should not go quiet after you publish. When customers ask questions, send
            messages, leave reviews, or raise concerns, your response becomes part of their experience with
            your brand. Framecipher provides Community Management Service in Bangladesh to help businesses
            manage comments, DMs, reviews, moderation, and audience interactions across their active
            platforms.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We combine timely response, brand voice, escalation workflows, moderation, and community
            engagement into one coordinated system.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Based in Dhaka, we work with businesses across Bangladesh and international markets including
            the US, UK, Australia, Canada, and UAE.
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
                Ecommerce and product brands, service businesses, B2B and professional businesses, local
                and multi-location businesses, startups and growing businesses, and international
                businesses.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE with response
                workflows adapted to time zones, language, and audience expectations.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Comment and message response, review monitoring, escalation workflows, moderation, social
                listening, proactive engagement, and community reporting.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              Your audience should not have to wonder whether anyone is listening.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get a Free Community Consultation
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
