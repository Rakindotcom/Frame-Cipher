'use client'

import { Clock, Users, Wrench, Film, Palette, Zap, AlertCircle } from 'lucide-react'

const pricingFactors = [
  {
    factor: 'Session Duration',
    why: 'Longer shoots require more dedicated studio reservation hours and technical support.',
    icon: Clock,
  },
  {
    factor: 'Production Crew',
    why: 'Adding camera directors, sound recordists, gaffers or prompters increases coverage capability.',
    icon: Users,
  },
  {
    factor: 'Equipment & Set Staging',
    why: 'Special multi-mic configurations, custom backdrops, or product styling tables influence prep time.',
    icon: Wrench,
  },
  {
    factor: 'Number of Deliverables',
    why: 'Delivering a single 16:9 master video versus 1 master + 10 vertical short clips multiplies post-production work.',
    icon: Film,
  },
  {
    factor: 'Editing Complexity',
    why: 'Color grading, multicam switching, kinetic captions, sound design, and motion graphics determine editing hours.',
    icon: Palette,
  },
  {
    factor: 'Turnaround Time',
    why: 'Standard 4–7 business day delivery versus requested 24–48 hour express turnaround.',
    icon: Zap,
  },
]

export default function StudioPricing() {
  return (
    <section id="pricing" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Quotes
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            What Influences Studio Cost?
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            The cost of a studio session depends on the amount of studio time, crew support and post-production work required. FrameCipher Studio quotes each project according to its verified scope, rather than treating every shoot as a generic commodity.
          </p>
        </div>

        {/* Pricing Factors Grid */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {pricingFactors.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group bg-frame-bg p-6 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-frame-border bg-frame-muted/40 text-frame-accent transition-colors group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {item.factor}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-frame-muted-fg">
                  {item.why}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pricing Transparency Statement */}
        <div className="mt-8 border border-frame-border bg-frame-muted/15 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-frame-accent">
                <AlertCircle className="h-4 w-4" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Zero Artificial Pricing</span>
              </div>
              <p className="text-sm font-medium text-frame-muted-fg">
                Every final quote clearly details your reserved hours, equipment inclusions, deliverable count, revision policy, and payment schedule before any booking is confirmed.
              </p>
            </div>
            <a
              href="#booking"
              className="inline-flex shrink-0 items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90"
            >
              Request a Production Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
