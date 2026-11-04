'use client'

import React from 'react'
import { Check } from 'lucide-react'

const factors = [
  {
    title: 'Every Market Has Different Search Demand',
    body: [
      'People in different countries do not always search for the same product, service, or solution in the same way.',
      'Search volume, terminology, competition, seasonality, and commercial intent can vary by market. Even when the language is the same, the words and phrases people use may differ.',
    ],
    groups: [
      {
        label: 'We evaluate:',
        points: [
          'Country-level search demand',
          'Keyword variations',
          'Commercial and transactional intent',
          'Informational search behavior',
          'Regional terminology',
          'Spelling differences',
          'Seasonal patterns',
          'SERP differences',
          'Competitor visibility',
          'Content opportunities',
        ],
      },
    ],
    note: 'This helps determine which existing pages can be adapted, which pages require deeper localization, and where entirely new content is justified.',
  },
  {
    title: 'One Site Can Serve Multiple Countries or Languages',
    body: [
      'International websites can use different structures depending on the business model, target markets, technical resources, existing authority, and long-term expansion plans.',
    ],
    groups: [
      {
        label: 'Common approaches include:',
        points: [
          'Country-code top-level domains',
          'Country or language subdirectories',
          'Subdomains',
          'Language directories',
          'Country-language combinations',
        ],
      },
      {
        label: 'There is no universal structure that works for every business. We consider:',
        points: [
          'Number of target markets',
          'Number of languages',
          'Existing domain authority',
          'Brand structure',
          'Technical resources',
          'Content requirements',
          'Migration complexity',
          'Maintenance requirements',
          'Future expansion plans',
        ],
      },
    ],
    note: 'The goal is to choose a structure that is clear for users, manageable for your team, and scalable as new markets are added.',
  },
  {
    title: 'Technical Signals Must Align Across Markets',
    body: [
      'International SEO becomes more complex when regional and language versions send inconsistent signals.',
      'Canonical URLs, hreflang annotations, XML sitemaps, internal links, redirects, indexation rules, and localized content should support the same targeting strategy.',
    ],
    groups: [
      {
        label: 'We review how these elements work together across:',
        points: [
          'Regional URLs',
          'Language versions',
          'Hreflang',
          'Canonicals',
          'Internal links',
          'XML sitemaps',
          'Robots directives',
          'Indexation',
          'Redirects',
          'Structured data',
          'Page performance',
        ],
      },
    ],
    note: 'The objective is to create a clear relationship between international versions so search engines can better understand which pages serve which audiences.',
  },
  {
    title: 'Local Authority Matters in Each Target Market',
    body: [
      'A website can have strong overall authority and still face different competitive conditions in another country.',
      'Local competitors may have stronger market-specific content, more relevant industry coverage, established publications, or stronger relationships within their market.',
    ],
    groups: [
      {
        label: 'Our international authority strategy can include:',
        points: [
          'Country-specific backlink research',
          'Relevant industry publications',
          'Regional digital PR',
          'Local outreach',
          'Competitor backlink analysis',
          'Market-specific content promotion',
          'Relevant partnerships and resource opportunities',
        ],
      },
    ],
    note: 'The focus is on building relevant authority around the markets and topics that support your growth strategy.',
  },
]

export default function WhatsDifferent() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Market Dynamics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What Makes{' '}
            <span className="italic text-frame-accent">International SEO Different</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO introduces challenges that a single-market website may never face. One website can serve different countries, languages, currencies, search behaviors, and competitive environments at the same time.
          </p>
        </div>

        {/* 4 Multi-Market Factors Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {factors.map((factor, index) => (
            <div
              key={factor.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Factor // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {factor.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {factor.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {factor.groups.map((group, gIdx) => (
                  <div key={gIdx} className="mt-5">
                    {group.label && (
                      <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                        {group.label}
                      </p>
                    )}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.06] pt-3 text-xs sm:text-sm text-zinc-300">
                      {group.points.map((point, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {factor.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs sm:text-sm text-zinc-300">
                    <p className="leading-relaxed">{factor.note}</p>
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
