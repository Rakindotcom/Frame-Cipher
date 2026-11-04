'use client'

import React from 'react'
import { CheckCircle2, Globe, MapPin, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const areas = [
  {
    eyebrow: 'Domestic Market',
    title: 'Google Ads for Businesses in Bangladesh',
    icon: MapPin,
    badge: 'Dhaka & Nationwide',
    body: [
      'Framecipher is based in Dhaka and provides Google Ads management for businesses across Bangladesh.',
      'Campaign strategy can account for local search behavior, Bangla-English language use where relevant, mobile-heavy browsing, regional demand, local competition, and the economics of the Bangladeshi market.',
    ],
    bullets: [
      'Dhaka metro & regional businesses',
      'Nationwide eCommerce platforms',
      'Local service & healthcare providers',
      'Emerging direct-to-consumer brands',
      'B2B suppliers & manufacturers',
      'Corporate & professional services',
      'Bangladeshi exporters expanding abroad',
    ],
    tail: 'The campaign structure, targeting, budget, and conversion goals are built around the actual market rather than imported assumptions from another country.',
  },
  {
    eyebrow: 'Global Delivery',
    title: 'International Google Ads Campaigns',
    icon: Globe,
    badge: 'Tier-1 English Markets & GCC',
    body: [
      'We also manage Google Ads campaigns for businesses targeting international customers. Markets may include the US, UK, Australia, Canada, UAE, and other countries where the business has a viable commercial opportunity.',
      'The objective is not simply to expand reach. It is to understand where demand exists, how customers search, and whether the economics support profitable acquisition in each target market.',
    ],
    bullets: [
      'Country-by-country campaign planning',
      'Market-specific keyword research',
      'Geographic segmentation & dayparting',
      'Language & dialect considerations',
      'Currency & commercial pricing context',
      'Localized high-converting landing pages',
      'Market-specific value propositions',
      'Localized auction competition analysis',
      'Time-zone synchronized ad schedules',
      'Multi-currency conversion value tracking',
    ],
    tail: 'Each international market is treated as a separate financial unit with dedicated CPA thresholds calibrated to that nation’s buying power.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Google Ads for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Campaign structure, targeting, budget, and conversion goals are adapted to each market rather than copied from a single-region plan.
          </p>
        </div>

        {/* Modality 2 Symmetrical 2-Column Market Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.eyebrow}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
                      <Icon className="h-4 w-4 text-frame-accent" />
                      <span>{area.eyebrow}</span>
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-[#09090B] px-3 py-0.5 font-mono text-[11px] text-zinc-400">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {area.title}
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {area.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-3">
                      Target Coverage &amp; Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                      {area.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08] bg-[#09090B]/50 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl">
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <span className="font-semibold text-zinc-200">Execution Standard: </span>
                    {area.tail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Market Assessment Action Banner */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="text-base sm:text-lg font-normal text-zinc-200 max-w-2xl leading-relaxed">
            Tell us your target market and conversion goal, and we will structure the campaign around the realistic economics of that auction.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get a Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
