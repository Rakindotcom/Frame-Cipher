'use client'

import React from 'react'
import { CheckCircle2, Globe, MapPin, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const areas = [
  {
    eyebrow: 'Domestic market',
    title: 'LinkedIn Ads for Businesses in Bangladesh',
    icon: MapPin,
    body: [
      'Framecipher is based in Dhaka and manages LinkedIn campaigns for businesses targeting professional audiences across Bangladesh.',
      'Because LinkedIn audiences can be narrower than broad consumer platforms, we focus on realistic audience sizing and clear ICP definition rather than promising mass reach.',
    ],
    bullets: [
      'Industry-specific audiences',
      'Job functions and seniority',
      'Company size',
      'Dhaka-focused or nationwide targeting',
      'B2B service demand',
      'Professional messaging',
      'Lead qualification',
      'Local sales processes',
    ],
    tail: 'The objective is to identify where LinkedIn can contribute meaningful value to the sales pipeline rather than assuming every B2B business needs the platform.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'Global LinkedIn Ads Campaigns',
    icon: Globe,
    body: [
      'We also manage LinkedIn campaigns for businesses targeting international B2B audiences across markets such as the US, UK, Australia, Canada, UAE, and other regions.',
      'Rather than treating international B2B audiences as one global pool, we assess each market based on target-account availability, audience size, competitive conditions, sales economics, and commercial opportunity.',
    ],
    bullets: [
      'Country-specific ICP research',
      'Industry and company targeting',
      'Job function and seniority',
      'Market-specific creative',
      'Localized offers',
      'Geographic segmentation',
      'Account-based targeting',
      'Regional budget allocation',
      'Market-level conversion tracking',
    ],
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads for Bangladesh{' '}
            <span className="italic text-frame-accent">&amp; Global Markets.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            LinkedIn campaign strategy should reflect the market being targeted. Audience availability, industry concentration, professional demographics, competition, and sales behavior can differ between Bangladesh and international markets. Framecipher manages LinkedIn Ads for businesses targeting Bangladesh as well as global B2B markets.
          </p>
        </div>

        {/* 2-Column Market Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      {area.eyebrow}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl font-medium text-white group-hover:text-frame-accent transition-colors">
                    {area.title}
                  </h3>

                  <div className="space-y-3 text-sm md:text-base font-normal leading-relaxed text-zinc-300">
                    {area.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="border-t border-white/[0.04] pt-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {area.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {area.tail && (
                  <div className="mt-6 border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {area.tail}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Market Target CTA Banner */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Tell us your B2B target market and conversion goal, and we will build the audience and campaign structure around that market.
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
