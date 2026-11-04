'use client'

import React from 'react'
import { Check } from 'lucide-react'

const steps = [
  {
    title: 'Market & Demand Assessment',
    body: 'We start by defining where you want to grow and which markets deserve priority. We review:',
    points: [
      'Target countries',
      'Target languages',
      'Search demand',
      'Competition',
      'Commercial opportunity',
      'Existing organic visibility',
      'Expansion priorities',
      'Business relevance',
    ],
    note: 'This establishes the foundation for the international SEO roadmap.',
  },
  {
    title: 'Competitor & Opportunity Analysis',
    body: 'Next, we compare search results and competitors across priority markets. We identify:',
    points: [
      'Market-specific competitors',
      'Keyword opportunities',
      'Content gaps',
      'Backlink gaps',
      'SERP patterns',
      'Ranking page types',
      'Commercial opportunities',
      'Market-specific content requirements',
    ],
    note: 'The findings shape a strategy that reflects the actual search environment in each target market.',
  },
  {
    title: 'Architecture & Technical Planning',
    body: 'Before scaling localized content, we define how the website should be structured. We determine:',
    points: [
      'URL conventions',
      'Country and language hierarchy',
      'Internal linking logic',
      'Sitemap organization',
      'Canonical relationships',
      'Hreflang requirements',
      'Indexation rules',
      'Migration considerations',
    ],
    note: 'This creates a technical framework that can support additional markets without unnecessary restructuring.',
  },
  {
    title: 'Hreflang & Site Implementation',
    body: 'Once the structure is defined, we implement the relevant international signals. This may include:',
    points: [
      'Hreflang mapping',
      'HTML annotations',
      'HTTP headers where appropriate',
      'XML sitemap annotations',
      'Canonicals',
      'Internal links',
      'Redirects',
      'Indexation checks',
    ],
    note: 'Each implementation is validated against the actual website structure rather than applied as a generic template.',
  },
  {
    title: 'Localization & Content Execution',
    body: 'We then adapt the website to the search behavior and expectations of each target market. This can involve:',
    points: [
      'Market-specific keyword research',
      'Page mapping',
      'Content localization',
      'On-page optimization',
      'Regional landing pages',
      'Product or service localization',
      'Supporting content',
      'Internal-link optimization',
    ],
    note: 'The objective is useful, market-relevant content that remains aligned with the wider international architecture.',
  },
  {
    title: 'Authority Building & Market Expansion',
    body: 'Once the technical and content foundation is established, we identify opportunities to build authority in priority markets. This can include:',
    points: [
      'Local link opportunities',
      'Digital PR',
      'Industry outreach',
      'Relevant publications',
      'Content promotion',
      'Partnerships',
      'Competitor backlink analysis',
    ],
    note: 'As your business expands, the same framework can be applied to additional markets without treating every new country as an entirely separate SEO project.',
  },
  {
    title: 'Measurement & Continuous Optimization',
    body: 'We monitor each market and use performance data to guide the next stage of work. We look for:',
    points: [
      'Strong-performing markets',
      'Underperforming markets',
      'New keyword opportunities',
      'Technical problems',
      'Content gaps',
      'Authority gaps',
      'Conversion opportunities',
      'Emerging market opportunities',
    ],
    note: 'The strategy evolves as search performance, competition, and business priorities change.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Execution Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Approach{' '}
            <span className="italic text-frame-accent">International SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our process moves from market research to technical planning, implementation, localization, authority development, and continuous measurement.
          </p>
        </div>

        {/* 7-Step Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] md:p-8"
            >
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Sprint // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-[#A855F7]" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.body}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3 text-xs sm:text-sm text-zinc-300">
                  {step.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {step.note && (
                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-[#0E0E10] p-3 text-xs text-zinc-400">
                    <p className="leading-relaxed">{step.note}</p>
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
