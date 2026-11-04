'use client'

import React from 'react'
import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Research, strategy, technical SEO, content, and development can be coordinated through one team rather than split between multiple providers. This helps reduce communication gaps and keeps website implementation aligned with the original SEO plan.',
    points: [
      'No outsourced middlemen',
      'Unified strategy & technical execution',
      'Direct client communication',
      'One accountable partner',
    ],
  },
  {
    title: 'Technical + Market Strategy',
    body: 'International SEO is not only about hreflang. We combine technical implementation with market research, keyword strategy, localization, content, authority development, and performance analysis. This keeps technical decisions connected to actual market goals.',
    points: [
      'Empirical market research',
      'Country-specific search demand',
      'Hreflang & technical architecture',
      'Strategic content localization',
    ],
  },
  {
    title: 'Structure Before Localization',
    body: 'We evaluate the international structure before scaling localized content. This reduces the risk of creating large amounts of content on a structure that later needs major technical changes. It also gives each market a clearer place within the overall website architecture.',
    points: [
      'ccTLD vs subfolder architecture',
      'Silo isolation & canonical rules',
      'Crawl budget efficiency',
      'Future-proof multi-market roadmap',
    ],
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. We can help Bangladeshi businesses expand into new countries while maintaining a clear distinction between their existing local presence and new international markets. We also support businesses already operating across multiple countries that need to improve their international SEO structure, localization, technical setup, or market-level performance.',
    points: [
      'Direct Dhaka HQ presence',
      'Tier-1 global market experience (US, UK, UAE, AU, CA, EU)',
      'Cross-border expansion expertise',
      'Multi-currency & localization precision',
    ],
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">The Framecipher Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">International SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO often requires strategy, technical SEO, content, and development to work together. Framecipher keeps those areas connected through one in-house workflow, so implementation can stay aligned with the strategy from planning through execution.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Pillar // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {reason.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                  {reason.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
