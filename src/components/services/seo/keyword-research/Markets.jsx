'use client'

import React from 'react'
import { MapPin, Globe2, Network, Check } from 'lucide-react'

const marketBlocks = [
  {
    number: '01',
    icon: MapPin,
    title: 'Keyword Research for Bangladeshi Businesses',
    description:
      'We support Bangladeshi ecommerce brands, professional service firms, B2B exporters, tech startups, and enterprise organizations.',
    points: [
      'Bangladesh-specific local terminology & search habits',
      'Local commercial intent & metropolitan city modifiers',
      'English search behavior across corporate sectors',
      'Bangla script search behavior & phonetics',
      'Banglish spelling variations & conversational colloquialisms',
      'Local competitors & mobile-first device query dynamics',
      'National broad search demand vs. divisional local intent',
    ],
    note: 'The objective is identifying how real Bangladeshi consumers actually formulate queries on mobile devices, rather than assuming standard corporate website copy mirrors search behavior.',
  },
  {
    number: '02',
    icon: Globe2,
    title: 'International Keyword Research',
    description:
      'For Bangladeshi exporters and overseas businesses targeting Tier-1 markets (USA, UK, Australia, Canada, UAE, Europe), we research each country in its native context.',
    points: [
      'Country-specific terminology & localized product phrasing',
      'Regional spelling variants (e.g., US vs UK English)',
      'Local commercial intent modifiers & buyer expectations',
      'Market-level SERP competitors & local domain authority',
      'Regional search volume, seasonality, and CPC dynamics',
      'Localized product or service taxonomy & legal terminology',
    ],
    note: 'We strictly avoid treating direct Google Translate translation as keyword research. The strategy is built around how native buyers in each territory search.',
  },
  {
    number: '03',
    icon: Network,
    title: 'Multi-Market Keyword Mapping',
    description:
      'Businesses serving multiple countries need keyword architectures that scale cleanly without cross-border cannibalization.',
    points: [
      'Country-specific keyword mapping per target domain/subfolder',
      'Language version & hreflang intent separation',
      'Regional landing page keyword assignment',
      'Market-specific product/service catalog variations',
      'Country-level supporting content & localized SILO clusters',
      'Scalable framework preventing international keyword collisions',
    ],
    note: 'Prevents multiple regional folders from competing against each other for identical global search queries.',
  },
]

const marketTokens = [
  'Bangladesh',
  'Dhaka HQ',
  'Bangla Script',
  'Banglish Queries',
  'United States',
  'United Kingdom',
  'Australia & Canada',
  'United Arab Emirates',
  'Multi-Market Mapping',
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Markets We Research
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Bangladesh &amp; <span className="italic text-frame-accent">International Markets</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research must reflect the exact market where the search happens. Search terminology, language, competitors, search demand, and buying behavior vary between Bangladesh and international territories. Framecipher researches these nuances before finalizing any targeting strategy.
          </p>
        </div>

        {/* 3 Market Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {marketBlocks.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Market 0{item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.note}
                </div>
              </div>
            )
          })}
        </div>

        {/* Geo Market Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {marketTokens.map((token) => (
            <span
              key={token}
              className="rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 font-mono text-xs text-zinc-300"
            >
              {token}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
