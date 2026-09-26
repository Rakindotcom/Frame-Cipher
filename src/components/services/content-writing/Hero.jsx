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
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <span className="text-frame-accent">Content Writing</span>
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
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For SMEs, Startups, Ecommerce Businesses &amp; Established Brands
          </p>

          <p className="mx-auto mt-2 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Writing built to do something specific: rank, explain, persuade, sell, or build trust.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides content writing services for SMEs, startups, ecommerce businesses, and
            established brands in Bangladesh and international markets.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our in-house team handles research, writing, editing, SEO integration, and revisions around the
            purpose of each piece.
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
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Write For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                SMEs, startups, ecommerce businesses, service businesses, B2B and professional firms,
                in-house marketing teams, and international brands.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Bangladesh, including Dhaka, plus the US, UK, Australia, Canada, and UAE, with content
                adapted to the intended audience and market.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Research, content briefs, drafting, editing, SEO integration, client review, and revisions
                around the purpose of each piece.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
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
