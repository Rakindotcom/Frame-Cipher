import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Company Pages',
  'Executive Profiles',
  'Thought Leadership',
  'Content',
  'Engagement',
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
          <span className="text-frame-accent">LinkedIn Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Social Capability"
        meta="One In-House Team / B2B-Focused Strategy"
        number="01"
        title="LinkedIn Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Your Free LinkedIn Presence Audit &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </>
        }
      >
        Build a stronger LinkedIn presence with strategic content, executive positioning, company page
        management, and consistent engagement. Framecipher helps B2B brands and leaders turn LinkedIn
        into a credible channel for visibility, relationships, and business growth.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            The LinkedIn Capability Set
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Visibility, Authority &amp; Credibility
          </h2>
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
                Company Page strategy and publishing, executive profile positioning, voice development,
                thought leadership, carousels, document posts, employee advocacy, engagement, and
                reporting.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">We Build For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                B2B companies, SaaS and technology businesses, professional services firms,
                manufacturers and exporters, consultants and agencies, and leadership teams.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Bangladesh, the US, UK, Australia, Canada, and UAE, with content and communication
                adapted to the market, audience, and industry.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              LinkedIn rewards people, not brands. A company page alone is necessary for credibility,
              but coordinated executive profiles are usually where the real reach happens.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get Your Free LinkedIn Presence Audit
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
