import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

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
          <span className="text-frame-accent">Social Media Management</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Complete Social Media Solution"
        meta="One In-House Team / Built For Your Brand"
        number="01"
        title="Social Media Management Services in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Your Free Social Audit &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Social Team &rarr;
            </PosterButton>
          </>
        }
      >
        Social media should do more than keep your profiles active. Framecipher manages content,
        publishing, community engagement, and performance across the platforms that matter to
        your business, with one in-house team handling your social presence from planning to
        reporting.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            Strategy To Reporting, Handled By One Team
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Get A Free Social Audit And See What Is Working
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg md:gap-3 md:text-sm">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Social Audit</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Content Strategy</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Creation &amp; Approval</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Publishing</span>
            <span className="font-bold text-frame-accent">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent">Community &amp; Reporting</span>
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border text-left sm:grid-cols-3">
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Manage For</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                SMEs, startups, ecommerce brands, local companies, B2B brands, established
                businesses, and personal brands.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Where We Work</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Facebook, Instagram, LinkedIn, TikTok, and YouTube across Bangladesh and
                international markets.
              </p>
            </div>
            <div className="bg-frame-bg p-5">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                Platform-specific planning, original content, publishing, community care, and
                monthly reporting.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              Not sure which platforms your business should be on? We will tell you honestly
              which ones make sense instead of recommending all five by default.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get Your Free Social Audit
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
