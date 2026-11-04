'use client'

import React from 'react'
import { Check } from 'lucide-react'

const businessTypes = [
  {
    title: 'Ecommerce & Retail Brands',
    body: 'International ecommerce SEO can cover:',
    points: [
      'Country-specific product demand',
      'Localized category pages',
      'Regional product terminology',
      'Currency and pricing information',
      'Product availability',
      'Shipping information',
      'Product and category architecture',
      'International product content',
      'Regional internal linking',
      'Market-specific buying intent',
    ],
    note: 'For larger stores, we also consider how country and language variations affect crawlability, indexation, duplication, catalog management, and product-page scalability.',
  },
  {
    title: 'SaaS & Technology Companies',
    body: 'SaaS businesses often sell the same core product across multiple markets while adapting their messaging around local needs and search behavior. International SEO can support:',
    points: [
      'Country-specific search demand',
      'Product-led content',
      'Localized landing pages',
      'Market-specific use cases',
      'Industry content',
      'Pricing localization',
      'Regional terminology',
      'Competitor analysis',
      'Commercial comparison content',
    ],
    note: 'The goal is to scale international content without creating thin regional pages that offer little unique value.',
  },
  {
    title: 'B2B & Professional Services',
    body: 'B2B search behavior can vary significantly between countries. We research local terminology, service expectations, industries, buying journeys, and search intent for each market. SEO can focus on:',
    points: [
      'Service pages',
      'Industry pages',
      'Market pages',
      'Commercial queries',
      'Informational content',
      'Thought leadership',
      'Case studies',
      'Lead-generation content',
    ],
    note: 'The structure is built around how buyers in each market discover, compare, evaluate, and contact providers.',
  },
  {
    title: 'Manufacturers & Exporters',
    body: 'Manufacturers and exporters often need international SEO across multiple products, industries, and countries. We can build strategies around:',
    points: [
      'Product terminology',
      'Technical specifications',
      'Export markets',
      'B2B search intent',
      'Industry keywords',
      'Regional demand',
      'Distributor searches',
      'Buyer searches',
      'Country-specific content',
    ],
    note: 'For Bangladeshi manufacturers and exporters, this can support international market expansion while keeping the existing local presence clear and technically separate from new market targeting.',
  },
  {
    title: 'Multi-Location Businesses',
    body: 'Businesses operating across multiple countries may need international SEO alongside country- or location-level search strategies. We can evaluate:',
    points: [
      'Country pages',
      'Regional service pages',
      'Branch information',
      'Local contact details',
      'Market-specific content',
      'Country-level search signals',
      'Internal linking between regional locations',
    ],
    note: 'The structure should distinguish genuine market differences without creating large numbers of low-value pages.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Built Around Your Model</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            International SEO for{' '}
            <span className="italic text-frame-accent">Different Business Types</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO strategies vary by business model. The way an ecommerce brand expands is different from how a SaaS company, manufacturer, or professional service business enters a new market.
          </p>
        </div>

        {/* 5 Business Types Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Sector // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs sm:text-sm text-zinc-300">
                    <p className="leading-relaxed">{item.note}</p>
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
