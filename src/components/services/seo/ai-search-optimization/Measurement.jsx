'use client'

import React from 'react'
import { Check } from 'lucide-react'

const measurements = [
  {
    title: 'AI Citation & Mention Coverage',
    body: 'We monitor how often your brand or content appears in relevant AI-generated answers.',
    lead: 'We can examine:',
    points: [
      'Mention frequency',
      'Citation frequency',
      'Referenced pages',
      'Source domains',
      'Query categories',
      'Competitor mentions',
    ],
    note: null,
  },
  {
    title: 'Prompt-Level Visibility',
    body: 'We track visibility across a defined prompt set rather than relying on a handful of anecdotal searches.',
    lead: 'This can reveal:',
    points: [
      'Queries where your brand appears',
      'Queries where competitors appear',
      'Topics with weak coverage',
      'Changes over time',
      'Market-specific differences',
    ],
    note: null,
  },
  {
    title: 'Competitor AI Visibility',
    body: 'Your AI visibility is easier to evaluate when compared with the businesses competing for the same audience.',
    lead: 'We compare:',
    points: [
      'Brand mentions',
      'Citation frequency',
      'Source coverage',
      'Recommendation visibility',
      'Topic coverage',
      'Market-level differences',
    ],
    note: null,
  },
  {
    title: 'Google Generative Search Performance',
    body: "Where relevant data is available, we review Google's reporting for generative search experiences alongside traditional Search Console performance.",
    lead: 'This can help connect AI-related search visibility with:',
    points: ['Impressions', 'Clicks', 'Queries', 'Landing pages', 'Search trends'],
    note: null,
  },
  {
    title: 'Brand Accuracy & Source Consistency',
    body: 'Visibility alone is not enough. We also evaluate whether AI systems and external sources describe the business accurately and consistently.',
    lead: 'We look for:',
    points: [
      'Incorrect information',
      'Outdated services',
      'Wrong business details',
      'Conflicting descriptions',
      'Inconsistent expertise or positioning',
    ],
    note: null,
  },
  {
    title: 'Traffic, Leads & Business Outcomes',
    body: 'AI visibility should eventually connect to business performance where measurable.',
    lead: 'Depending on the tracking setup, we can evaluate:',
    points: [
      'Organic traffic',
      'AI-related referral traffic where identifiable',
      'Form submissions',
      'Calls',
      'Purchases',
      'Demo requests',
      'Qualified leads',
      'Revenue',
    ],
    note: 'Not every AI interaction produces a measurable click, so reporting should distinguish visibility indicators from directly attributable business outcomes.',
  },
]

export default function Measurement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Telemetry &amp; Metrics // Transparent Tracking</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            How We Measure{' '}
            <span className="italic text-frame-accent">AI Search Visibility</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AI visibility should be measured at the query, brand, source, and business level where
            reliable data is available.
          </p>
        </div>

        {/* 6 Measurements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {measurements.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Dimension 0{index + 1}
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

              {item.note && (
                <div className="mt-6 border-l-2 border-frame-accent bg-[#09090B] p-4 text-xs leading-relaxed text-zinc-400 rounded-r-md">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
