'use client'

import React from 'react'
import { Check } from 'lucide-react'

const marketBlocks = [
  {
    title: 'AI Search Optimization for Bangladeshi Businesses',
    body: 'Bangladeshi businesses may need to establish stronger visibility around:',
    points: [
      'Local businesses',
      'Ecommerce brands',
      'Professional services',
      'B2B companies',
      'Export businesses',
      'Expert-led brands',
      'Local and national search queries',
    ],
    closing:
      'We assess how the business is described across its website and relevant external sources, then identify opportunities to improve visibility and accuracy within AI-driven search.',
  },
  {
    title: 'International AI Search Optimization',
    body: 'For businesses targeting markets outside Bangladesh, we research how AI search visibility varies by:',
    points: [
      'Country',
      'Language',
      'Search intent',
      'Competitor',
      'Product or service',
      'Market expectations',
      'Source ecosystem',
    ],
    closing:
      'This helps identify whether the same brand information remains useful and accurate across different markets.',
  },
  {
    title: 'Multi-Market AI Visibility',
    body: 'International businesses may need separate visibility testing for different countries and languages.',
    lead: 'We can compare:',
    points: [
      'Brand mentions',
      'Competitor presence',
      'Frequently cited sources',
      'Query coverage',
      'Regional content gaps',
      'Market-specific opportunities',
    ],
    closing:
      'This provides a clearer picture of where AI visibility is strong and where further work may be needed.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Geographic Reach // Target Geographies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AI search behavior varies by language, market, industry, and query type. Framecipher
            provides AI Search Optimization for businesses in Bangladesh and international markets,
            adapting research and implementation to the audience and geographic markets being
            targeted.
          </p>
        </div>

        {/* 3 Market Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Market 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                {item.lead && (
                  <p className="mt-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {item.lead}
                  </p>
                )}

                <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {item.closing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
