'use client'

import React from 'react'
import { Check } from 'lucide-react'

const businessTypes = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'AI-driven product discovery can involve:',
    points: [
      'Product recommendations',
      'Product comparisons',
      'Feature questions',
      'Buying guides',
      'Alternatives',
      'Use cases',
      'Category recommendations',
    ],
    closing:
      'We can optimize product, category, comparison, and supporting content so important product information is easier to understand and reference.',
  },
  {
    title: 'B2B & SaaS Companies',
    body: 'B2B buyers often use AI tools to research solutions before contacting a vendor.',
    lead: 'We can support visibility across:',
    points: [
      'Problem-based queries',
      'Software comparisons',
      'Alternatives',
      'Use cases',
      'Feature questions',
      'Industry solutions',
      'Integration questions',
      'Expert content',
      'Buyer education',
    ],
    closing:
      'The goal is to make your expertise visible throughout the research and evaluation process.',
  },
  {
    title: 'Local & Service Businesses',
    body: 'Local and service businesses can appear in AI-assisted recommendations, comparisons, and problem-solving searches.',
    lead: 'We assess:',
    points: [
      'Service descriptions',
      'Location information',
      'Expertise',
      'Reviews and reputation',
      'Local content',
      'Business profiles',
      'Relevant third-party sources',
      'Local query visibility',
    ],
    closing:
      'This helps establish clearer signals around what the business does, where it operates, and which customers it serves.',
  },
  {
    title: 'Professional & Expert Brands',
    body: 'Professionals and expert-led businesses can benefit from stronger connections between their name, expertise, work, publications, and business.',
    lead: 'We can improve:',
    points: [
      'Author information',
      'Expertise pages',
      'Professional profiles',
      'Published work',
      'Topic coverage',
      'Expert contributions',
      'Entity relationships',
      'Brand consistency',
    ],
    closing:
      'The objective is to strengthen the connection between the expert, the subject they cover, and the organization they represent.',
  },
  {
    title: 'International & Multi-Market Businesses',
    body: 'Businesses operating across countries need AI-search visibility that accounts for regional differences.',
    lead: 'We can evaluate:',
    points: [
      'Country-specific queries',
      'Regional terminology',
      'Localized content',
      'Market-specific competitors',
      'International brand information',
      'Country-level entity signals',
      'Regional source authority',
    ],
    closing:
      'This helps businesses maintain a consistent core identity while adapting to different markets and languages.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Vertical Adaptation // Industry Specifics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            AI Search Optimization for{' '}
            <span className="italic text-frame-accent">Different Business Types</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AI search behavior varies by business model, audience, query type, and purchase journey.
          </p>
        </div>

        {/* 5 Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Segment 0{index + 1}
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
