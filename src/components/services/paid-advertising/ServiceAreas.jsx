'use client'

import React from 'react'
import { MapPin, Globe2, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const areas = [
  {
    icon: MapPin,
    eyebrow: 'DOMESTIC MARKET',
    title: 'Paid Advertising Services in Bangladesh',
    body: 'Framecipher helps businesses across Bangladesh plan, launch, manage, and optimize paid advertising campaigns around measurable business goals. Campaign strategy can account for local customer behavior, Bangladeshi search demand, local competition, geographic targeting, local offers, and conversion paths suited to the market.',
    tail: 'For ecommerce businesses, campaigns can also be aligned with local purchasing behavior, delivery models, pricing, and payment options where relevant.',
  },
  {
    icon: Globe2,
    eyebrow: 'GLOBAL DELIVERY',
    title: 'International Paid Advertising',
    body: 'We support businesses targeting international markets, including the US, UK, Australia, Canada, UAE, and other markets. International campaigns require more than translating an existing campaign. We consider country-specific search behavior, audience characteristics, competition, pricing, offers, platform availability, creative messaging, conversion expectations, and market-level performance.',
    bullets: [
      'Single-country expansion',
      'Multiple international markets',
      'Regional campaigns',
      'Country-specific landing pages',
      'Multi-market ecommerce',
      'International lead generation',
      'B2B campaigns across different countries',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">Global Markets.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Campaign strategy is adapted to the target market rather than copied from a single-region plan. We support businesses across Bangladesh and international markets.
          </p>
        </div>

        {/* 2 Market Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="relative overflow-hidden group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {area.eyebrow}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {area.body}
                  </p>

                  {area.bullets && (
                    <ul className="space-y-2 pt-3 border-t border-white/[0.06]">
                      {area.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {area.tail && (
                    <div className="pt-3 border-t border-white/[0.06]">
                      <p className="text-sm font-normal leading-relaxed text-zinc-400">
                        {area.tail}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <PosterButton href="/contact" variant="accent">
            Start With a Free Ad Account Audit &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
