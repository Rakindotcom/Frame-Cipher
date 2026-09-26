import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const markets = ['US', 'UK', 'Australia', 'Canada', 'UAE']

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8"
      >
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">
            Services
          </Link>
          <span>/</span>
          <Link href="/services/content-writing" className="transition hover:text-frame-fg">
            Content Writing
          </Link>
          <span>/</span>
          <span className="text-frame-accent">Email Copywriting</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Email Copywriting"
        meta="One In-House Team / Inbox-Aware Copy"
        number="06"
        title="Email Copywriting Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request an Email Copywriting Quote &rarr;
            </PosterButton>
          </>
        }
      >
        Your email has to earn attention before it can communicate anything.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
            For Welcome, Nurture, Newsletter &amp; Lifecycle Email
          </p>

          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher provides Email Copywriting Service for businesses in Bangladesh and clients across the US,
            UK, Australia, Canada, and UAE. We write subject lines, email campaigns, and sequences around the
            audience, offer, customer journey, and action each message needs to support.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            From welcome and nurture sequences to promotional campaigns, newsletters, ecommerce lifecycle emails,
            and win-back flows, we build email copy that has a clear purpose instead of filling another space in
            the sending calendar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg md:gap-3 md:text-sm">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Dhaka &amp; Bangladesh</span>
            {markets.map((market) => (
              <span key={market} className="flex items-center gap-2">
                <span aria-hidden="true" className="font-bold text-frame-accent">
                  &rarr;
                </span>
                <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">{market}</span>
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium leading-relaxed text-frame-fg sm:text-base">
              Tell us what you are selling, who you are emailing, and what you want the reader to do next.
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
