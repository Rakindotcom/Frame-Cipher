'use client'

import Link from 'next/link'
import { Clock, RefreshCw, AlertCircle } from 'lucide-react'
import { SectionIntro, PosterButton } from '../Kinetic'
import { getPackagesForService } from '../../data/studioPackages'

function SubPackageTiers({ service }) {
  const tiers = getPackagesForService(service)
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((pkg, idx) => (
        <div key={idx} className={`flex flex-col justify-between border-2 p-7 md:p-8 ${pkg.popular ? 'border-frame-accent bg-frame-accent/5' : 'border-frame-border bg-frame-bg'}`}>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{pkg.tag}</span>
              {pkg.popular && (
                <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-frame-accent-fg">Recommended</span>
              )}
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">{pkg.name}</h3>
            <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">{pkg.description}</p>
            <div className="mt-6 border-b-2 border-frame-border/60 pb-6">
              <span className="font-heading text-3xl font-bold text-frame-fg md:text-4xl">{pkg.price}</span>
              {pkg.priceNote && <span className="ml-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">{pkg.priceNote}</span>}
            </div>
            <ul className="mt-6 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
              {pkg.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <span className="font-bold text-frame-accent">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border-t-2 border-frame-border/60 pt-6">
            <PosterButton href="#booking" variant={pkg.popular ? 'accent' : 'outline'} className="w-full text-xs">
              {pkg.cta || 'Book This Package'} &rarr;
            </PosterButton>
          </div>
        </div>
      ))}
    </div>
  )
}

function SubPricingFactors({ service }) {
  const factors = service.pricingFactors || [
    'Reserved studio shoot duration (half-day 4 hours vs full-day 8 hours)',
    'Crew requirements (director, camera operator, sound engineer, gaffer)',
    'Set styling, colored paper backdrops or green screen setup requirements',
    'Post-production deliverable count (single master vs master + vertical shorts)',
    'Sound design, subtitles, and motion graphics complexity',
  ]
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {factors.map((factor, i) => (
        <div key={i} className="border-2 border-frame-border bg-frame-muted/15 p-6 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">FACTOR 0{i + 1}</span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">
            {typeof factor === 'string' ? factor : factor.title}
          </h3>
          {typeof factor === 'object' && factor.desc && (
            <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">{factor.desc}</p>
          )}
        </div>
      ))}
    </div>
  )
}

function SubPricingTerms() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="flex items-start gap-4 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
        <Clock className="mt-1 h-6 w-6 shrink-0 text-frame-accent" />
        <div>
          <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg md:text-lg">Turnaround & Production Timelines</h4>
          <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
            Raw studio captures are available within 24 hours. Full post-production edits are typically completed within
            3 to 7 business days, with express same-day turnaround available on request.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
        <RefreshCw className="mt-1 h-6 w-6 shrink-0 text-frame-accent" />
        <div>
          <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg md:text-lg">Structured Revision Policy</h4>
          <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
            Every editing quote includes 2 structured revision rounds covering cuts, pacing, subtitles, color, and
            audio balance. Substantial brief changes or reshoots are quoted transparently.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function StudioSubPricingFactors({ service }) {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment structure" title="Packages, rates & scope factors." index="05">
          Fixed-scope BDT packages with itemised crew, studio time and deliverables — quoted in writing within 48
          hours. Below: what each tier includes and what moves a quote.
        </SectionIntro>
        <SubPackageTiers service={service} />
        <SubPricingFactors service={service} />
        <SubPricingTerms />
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-2 border-frame-border bg-frame-bg p-6 sm:flex-row md:p-8">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 shrink-0 text-frame-accent" />
            <p className="text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
              Review our <Link href="/studio/pricing" className="font-bold text-frame-fg underline decoration-frame-accent/40 transition-colors hover:text-frame-accent">standard studio packages &amp; hourly rates</Link> or contact our studio director for an exact project estimate.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0 text-xs">Request a Production Quote</PosterButton>
        </div>
      </div>
    </section>
  )
}
