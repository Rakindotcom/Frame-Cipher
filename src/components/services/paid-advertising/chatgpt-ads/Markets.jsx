'use client'

import React from 'react'
import { CheckCircle2, Globe, MapPin, Layers } from 'lucide-react'

const markets = [
  {
    eyebrow: 'Market reality',
    title: 'Advertising From Bangladesh',
    icon: MapPin,
    body: [
      'Framecipher is based in Dhaka and manages ChatGPT Ads campaigns for businesses targeting markets where OpenAI advertising is currently available.',
      'This distinction matters for Bangladesh-based businesses. OpenAI\'s current self-service Ads Manager availability list does not include Bangladesh, while markets including the United States, United Kingdom, Canada, Australia, India, Saudi Arabia, and UAE are currently listed as available.',
      'For a Bangladesh-based company, we therefore assess the advertiser entity, target market, account requirements, and current platform eligibility before recommending a campaign. We do not promise access where the platform does not currently provide it.',
    ],
  },
  {
    eyebrow: 'Eligible regions',
    title: 'International Campaigns',
    icon: Globe,
    body: [
      'Bangladesh-based businesses can use Framecipher to plan and manage ChatGPT Ads campaigns for eligible international markets.',
      'The goal is not to copy one campaign across every country. Different markets can have different customer needs, competition, language, costs, offers, and conversion behavior.',
    ],
    listLabel: 'We can structure international campaigns around:',
    bullets: [
      'Country-specific targeting',
      'Market-specific messaging',
      'Local landing pages',
      'Product or service availability',
      'Conversion goals',
      'Budget allocation',
      'International reporting',
    ],
  },
  {
    eyebrow: 'Global delivery',
    title: 'Multi-Market Campaign Management',
    icon: Layers,
    body: [
      'Running campaigns across several countries requires more than changing the location field. We structure multi-market campaigns around meaningful differences between markets.',
      'This makes it easier to understand performance by market rather than hiding meaningful differences inside a single combined campaign.',
    ],
    listLabel: 'That can include:',
    bullets: [
      'Separate country campaigns',
      'Market-specific ad groups',
      'Localized creative',
      'Regional landing pages',
      'Currency considerations',
      'Conversion differences',
      'Budget allocation',
      'Market-level reporting',
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
            ChatGPT Ads for Bangladesh{' '}
            <span className="italic text-frame-accent">&amp; Global Markets.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            OpenAI Ads Manager availability is evaluated by advertiser country and target regions. We structure campaigns around verified eligibility and market dynamics.
          </p>
        </div>

        {/* 3-Column Architectural Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {markets.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      {area.eyebrow}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-medium text-white group-hover:text-frame-accent transition-colors">
                    {area.title}
                  </h3>

                  <div className="space-y-2.5 text-sm font-normal leading-relaxed text-zinc-300">
                    {area.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {area.bullets?.length > 0 && (
                    <div className="border-t border-white/[0.04] pt-4 mt-2">
                      {area.listLabel && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-2">
                          {area.listLabel}
                        </span>
                      )}
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {area.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
