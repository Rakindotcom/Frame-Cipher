'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const conversionActions = [
  'Qualified lead generation',
  'Phone calls',
  'Appointment bookings',
  'Ecommerce purchases',
  'Product sales',
  'Quote requests',
  'Demo requests',
  'Store visits',
  'Revenue or conversion value',
]

const pillars = [
  { id: '01', title: 'Conversion-First Strategy', desc: 'Campaigns architected around downstream pipeline value rather than top-of-funnel impression volume.' },
  { id: '02', title: 'Transparent Account Access', desc: 'Direct, unencumbered client ownership of your Google Ads account, data assets, and conversion tracking history.' },
  { id: '03', title: 'Continuous Optimization', desc: 'Weekly search-term hygiene, negative keyword expansion, asset testing, and empirical bid modeling.' },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Google Ads Management Built Around{' '}
            <span className="italic text-frame-accent">Conversions, Not Clicks.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A campaign can generate inexpensive clicks and still fail if those visitors never become leads, customers, or revenue.
          </p>
        </div>

        {/* 2-Column Architectural Split (5 cols sticky + 7 cols conversion ledger) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start mb-16">
          {/* Left Narrative Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Engineering Full Funnel Visibility
              </h3>
              <div className="space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                <p>
                  Google Ads management is the ongoing process of planning, building, tracking, testing, and optimizing paid campaigns around defined business goals.
                </p>
                <p>
                  We build campaigns around the action that matters most to your business. Before optimization begins, we establish what a valuable conversion means, how it should be measured, and which campaigns should contribute to it.
                </p>
                <p>
                  Our Google Ads management service brings strategy, campaign execution, conversion tracking, ad messaging, landing-page alignment, and ongoing optimization into one process. That gives us a clearer view of what is happening before, during, and after the ad click.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <PosterButton href="/contact" variant="accent">
                  Get a Free Consultation &rarr;
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Ledger Column: 9 Conversion Goals (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <h3 className="font-heading text-xl font-medium tracking-tight text-white mt-1">
                  The Business Action That Matters Most
                </h3>
              </div>
              <span className="font-mono text-xs text-zinc-500">9 Core Actions</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {conversionActions.map((action, idx) => (
                <div
                  key={action}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-xs font-semibold text-frame-accent shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-zinc-200">
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Architectural Pillar Ribbon (Modality 2) */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] border-t border-b border-white/[0.08] md:grid-cols-3 md:divide-y-0 md:divide-x">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="p-6 md:p-8 space-y-3 bg-[#09090B] hover:bg-[#121214] transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-frame-accent font-semibold">
                  PILLAR {pillar.id}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              </div>
              <h4 className="font-heading text-lg font-medium tracking-tight text-white">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
