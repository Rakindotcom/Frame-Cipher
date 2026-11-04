'use client'

import React from 'react'
import { Check } from 'lucide-react'

const marketBlocks = [
  {
    title: 'International SEO for Bangladeshi Businesses',
    body: 'Bangladeshi businesses entering overseas markets often need more than translated content. They may need new keyword research, market-specific landing pages, international site architecture, localization, technical implementation, and authority development.',
    tokens: ['USA', 'UK', 'UAE', 'Australia', 'European markets', 'Other priority export or service markets'],
    note: 'The strategy depends on the business model, target audience, product or service, competition, and market opportunity.',
  },
  {
    title: 'Expanding From Bangladesh Into Global Markets',
    body: 'Moving from a Bangladesh-focused website to a multi-market website should be planned before large amounts of international content are published. We can help define:',
    points: [
      'Priority markets',
      'Country and language targeting',
      'URL architecture',
      'Keyword mapping',
      'Localization requirements',
      'Hreflang implementation',
      'Internal linking',
      'Technical SEO',
      'Authority-building priorities',
      'Market-level reporting',
    ],
    note: 'This creates an international SEO foundation that can expand without forcing the business to rebuild its website structure later.',
  },
  {
    title: 'SEO for Businesses Already Operating Internationally',
    body: 'International businesses may already have country folders, language versions, subdomains, or separate domains but still face technical and performance problems. We can review existing setups for:',
    points: [
      'Wrong regional pages ranking',
      'Hreflang errors',
      'Canonical conflicts',
      'Weak localization',
      'Duplicate regional content',
      'Poor internal linking',
      'Indexation problems',
      'Migration risks',
      'Uneven market performance',
    ],
    note: 'The goal is to improve the existing international structure rather than automatically replacing it.',
  },
  {
    title: 'Market-Specific Strategies Across Regions',
    body: 'Different countries can require different SEO priorities. A market may differ in:',
    points: [
      'Search terminology',
      'Competition',
      'Content expectations',
      'SERP behavior',
      'Buying intent',
      'Language',
      'Currency',
      'User expectations',
      'Local authority',
    ],
    note: 'We therefore build market strategies around actual search conditions instead of applying identical SEO recommendations to every country.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Global Operations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher works with businesses in Bangladesh as well as companies targeting multiple international markets. Our international SEO approach can support both businesses starting their first overseas expansion and companies that already operate across several countries.
          </p>
        </div>

        {/* 4 Market Blocks Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {marketBlocks.map((block, index) => (
            <div
              key={block.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Focus // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {block.body}
                </p>

                {block.tokens && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
                    {block.tokens.map((token) => (
                      <span
                        key={token}
                        className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-xs text-zinc-300"
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                )}

                {block.points && (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                    {block.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {block.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs sm:text-sm text-zinc-300">
                    <p className="leading-relaxed">{block.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
