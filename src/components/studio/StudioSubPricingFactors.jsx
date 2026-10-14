'use client'

import { Clock, Sliders, RefreshCw, AlertCircle } from 'lucide-react'

export default function StudioSubPricingFactors({ service }) {
  const factors = service.pricingFactors || [
    'Reserved studio shoot duration (half-day 4 hours vs full-day 8 hours)',
    'Crew requirements (director, camera operator, sound engineer, gaffer)',
    'Set styling, colored paper backdrops or green screen setup requirements',
    'Post-production deliverable count (single master vs master + vertical shorts)',
    'Sound design, subtitles, and motion graphics complexity',
  ]

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment Structure
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Transparent Scope & Pricing Factors.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Every production project is quoted according to its agreed scope, deliverable count, and technical setup. Here is what influences your investment:
          </p>
        </div>

        {/* Pricing Factors Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor, i) => (
            <div key={i} className="border-2 border-frame-border bg-frame-muted/15 p-6 md:p-8">
              <span className="font-mono text-xs font-bold text-frame-accent">FACTOR 0{i + 1}</span>
              <p className="mt-3 font-heading text-base font-bold uppercase text-frame-fg">
                {typeof factor === 'string' ? factor : factor.title}
              </p>
              {typeof factor === 'object' && factor.desc && (
                <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">{factor.desc}</p>
              )}
            </div>
          ))}
        </div>

        {/* Turnaround & Revision Terms Banner */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-frame-border bg-frame-muted/20 p-6 flex items-start gap-4">
            <Clock className="h-6 w-6 shrink-0 text-frame-accent mt-1" />
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Turnaround & Production Timelines
              </h4>
              <p className="mt-1 text-xs text-frame-muted-fg leading-relaxed">
                Raw studio captures are available within 24 hours. Full post-production edits are typically completed within 3 to 7 business days, with express same-day turnaround available on request.
              </p>
            </div>
          </div>

          <div className="border border-frame-border bg-frame-muted/20 p-6 flex items-start gap-4">
            <RefreshCw className="h-6 w-6 shrink-0 text-frame-accent mt-1" />
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Structured Revision Policy
              </h4>
              <p className="mt-1 text-xs text-frame-muted-fg leading-relaxed">
                Every editing quote includes 2 structured revision rounds covering cuts, pacing, subtitles, color, and audio balance. Substantial brief changes or reshoots are quoted transparently.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-frame-border bg-frame-bg p-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-frame-accent shrink-0" />
            <p className="text-xs font-medium text-frame-muted-fg">
              Need a verified rate card or an exact project estimate? Contact our studio director with your requirements.
            </p>
          </div>
          <a
            href="#booking"
            className="inline-flex shrink-0 items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all hover:bg-frame-accent/90"
          >
            Request a Production Quote
          </a>
        </div>
      </div>
    </section>
  )
}
