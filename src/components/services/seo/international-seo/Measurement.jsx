'use client'

import React from 'react'
import { Check } from 'lucide-react'

const measurements = [
  {
    title: 'Market-Level Search Visibility',
    intro: 'We monitor visibility across priority countries and languages. This can include:',
    points: [
      'Search impressions',
      'Organic clicks',
      'Ranking visibility',
      'Indexed pages',
      'Priority keyword performance',
      'Search trends',
    ],
    note: 'This helps identify which markets are gaining traction and where additional optimization may be needed.',
  },
  {
    title: 'Country-Specific Rankings & CTR',
    intro: 'Rankings and click behavior can vary by country. We track priority terms by market where reliable data is available and evaluate how titles, snippets, search intent, SERP features, and competitors affect click-through rates.',
    points: [
      'Ranking improvements per market',
      'Ranking losses per market',
      'Wrong-version ranking issues',
      'New keyword opportunities',
      'Underperforming regional pages',
      'Keyword cannibalization across versions',
    ],
    note: 'Evaluates real searcher response and SERP performance per country.',
  },
  {
    title: 'Organic Traffic by Market',
    intro: 'We analyze organic traffic by country and landing page to understand:',
    points: [
      'Which markets are growing',
      'Which pages drive that growth',
      'Whether new markets are gaining visibility',
      'Which markets are losing traffic',
      'Which pages need further optimization',
    ],
    note: 'This turns a single global traffic number into a clearer market-by-market picture.',
  },
  {
    title: 'Leads & Conversions by Market',
    intro: 'Traffic matters most when it contributes to meaningful business activity. Where analytics supports it, we can track:',
    points: [
      'Form submissions',
      'Phone calls and demo requests',
      'Online purchases and orders',
      'Quote requests and enquiries',
      'Contact actions and goal completions',
    ],
    note: 'This connects international organic visibility with measurable customer activity.',
  },
  {
    title: 'Revenue & Business Outcomes',
    intro: 'For ecommerce and businesses with suitable analytics setups, reporting can also cover:',
    points: [
      'Organic revenue by country',
      'Revenue by market segment',
      'Conversion rate per country',
      'Lead value and pipeline velocity',
      'Revenue-driving regional landing pages',
    ],
    note: "The exact reporting depends on the website's analytics, conversion tracking, CRM integration, and available business data.",
  },
]

export default function Measurement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Empirical Reporting</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Measure{' '}
            <span className="italic text-frame-accent">International SEO Performance</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO should show more than total global traffic. Our reporting focuses on how individual markets perform and whether organic visibility is contributing to meaningful business outcomes.
          </p>
        </div>

        {/* 5 Measurement Blocks Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measurements.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Metric Stream // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.intro}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3 text-xs sm:text-sm text-zinc-300">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-[#18181B] p-3 text-xs text-zinc-400">
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
