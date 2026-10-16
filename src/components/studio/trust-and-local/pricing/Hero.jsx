'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'How Studio and Production Pricing Works'
  const subtitle =
    'Studio and production costs depend on scope, so we quote from each project instead of publishing a single fixed rate. Every quote itemises your studio hours, crew roles, equipment and post-production deliverables in writing within 48 hours — before any payment is accepted.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Pricing & Rates</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Itemised Quotes, No Surprises"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Request an Itemised Quote &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Studio Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE PROPOSITION SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
            Scope-Based Quoting, Not Guesswork
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Pay for Your Scope. Nothing Else.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Fixed packages force you to pay for services you do not need — or quietly cut crew and editing you do.
            Quoting strictly from scope means you invest only in the personnel, equipment and finishing your
            asset demands, with every line visible before you commit.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Hourly hire starts at ৳2,000, sessions from ৳7,500, signature productions run ৳45,000 to ৳1,85,000,
            and flagship campaigns are scoped past ৳5,00,000. A 50% advance confirms dates; the balance is due on
            final sign-off with VAT-compliant invoices.
          </p>

          {/* PROCESS CONTROLS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">48-Hour Written Quotes</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">50% Advance Confirms</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Balance on Sign-Off</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">VAT Invoices Always</span>
          </div>
        </div>
      </section>
    </div>
  )
}
