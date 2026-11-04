'use client'

import React from 'react'
import { Eye, TrendingUp, MousePointerClick, ShoppingCart, DollarSign, Check } from 'lucide-react'

const dimensions = [
  {
    title: 'Organic Visibility',
    icon: Eye,
    lead: 'We monitor how your store appears across relevant organic searches.',
    points: [
      'Search impressions',
      'Organic visibility growth',
      'Indexed catalog pages',
      'High-intent search queries',
      'SERP presence across categories',
      'Product-level visibility',
      'Category & collection visibility',
    ],
    note: 'Tracks total market coverage across search engines.',
  },
  {
    title: 'Product & Category Rankings',
    icon: TrendingUp,
    lead: 'We track priority keywords across important commercial pages to identify:',
    points: [
      'Ranking improvements on target SKUs',
      'Ranking losses and volatility alerts',
      'New keyword opportunities',
      'Underperforming product pages',
      'Underperforming categories',
      'Keyword cannibalization issues',
    ],
    note: 'Ensures priority catalog items gain and maintain position 1–3 rankings.',
  },
  {
    title: 'Organic Clicks & CTR',
    icon: MousePointerClick,
    lead: 'Search impressions do not automatically create website visits. We monitor organic clicks and CTR to identify pages needing improvements to:',
    points: [
      'Search intent alignment',
      'Product & category page titles',
      'Compelling meta descriptions',
      'SERP relevance & rich snippet appeal',
      'Organic search positioning',
    ],
    note: 'High CTR rich results drive more buyers without increasing ad spend.',
  },
  {
    title: 'Organic Conversions',
    icon: ShoppingCart,
    lead: 'We measure what organic visitors do after reaching your store. Depending on your analytics setup, this includes:',
    points: [
      'Product detail page views',
      'Add-to-cart actions',
      'Checkout initiation & progress',
      'Completed organic purchases',
      'B2B / bulk order lead submissions',
    ],
    note: 'Evaluates whether organic search traffic converts into actual shoppers.',
  },
  {
    title: 'Revenue & Business Outcomes',
    icon: DollarSign,
    lead: 'Where reliable ecommerce analytics are available, we connect organic search with business performance:',
    points: [
      'Organic ecommerce revenue',
      'Revenue by organic landing page',
      'Top revenue-driving products',
      'Organic conversion rate (CR%)',
      'Average order value (AOV)',
      'Assisted conversion attribution',
    ],
    note: 'Attribution depends on your analytics configuration and the quality of available data.',
  },
]

export default function Measurement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Telemetry &amp; ROI // Commercial Performance
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Measure{' '}
            <span className="italic text-frame-accent">Ecommerce SEO Performance</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Rankings matter, but they do not tell the entire story. We measure performance across the path from search visibility to business outcomes.
          </p>
        </div>

        {/* 5 Measurement Dimensions Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Metric 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {item.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
