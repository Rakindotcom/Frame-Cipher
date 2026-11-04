'use client'

import React from 'react'
import { CheckCircle2, BarChart2 } from 'lucide-react'

const reportMetrics = [
  'Impressions',
  'Clicks',
  'CTR (Click-Through Rate)',
  'CPC (Cost Per Click)',
  'CPM (Cost Per Mille)',
  'Total Advertising Spend',
  'Total Conversions',
  'Conversion Rate (%)',
  'Cost Per Conversion (CPA)',
  'Campaign-Level Performance Trends',
  'Ad-Group Performance Segmentation',
  'Creative Asset Performance',
  'Key Commercial Observations',
  'Actionable Optimization Actions',
]

export default function Reporting() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Reporting &amp;{' '}
            <span className="italic text-frame-accent">Performance Expectations.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Good reporting should make campaign performance easier to understand.
          </p>
        </div>

        {/* 2-Column Split: Metrics vs Interpretation */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Metrics Grid (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg font-normal text-zinc-300">
              Depending on the campaign setup, your reports can include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {reportMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-[#121214] p-3 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Analysis Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3">
              <h3 className="font-heading text-lg font-medium text-white">
                Platform Reporting Capabilities
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                OpenAI Ads Manager currently provides campaign performance data including impressions, clicks, and spend, with additional reporting available for CTR, CPC, CPM, and conversions depending on the campaign and measurement setup.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3">
              <h3 className="font-heading text-lg font-medium text-white">
                Business-Led Interpretation
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                We also explain performance in business terms. A lower CPC does not automatically mean a campaign improved if lead quality declined. Likewise, higher traffic does not automatically mean stronger performance if the landing page fails to convert.
              </p>
            </div>

            <div className="rounded-xl border-l-2 border-frame-accent bg-frame-accent/10 p-5">
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Our reporting focuses on the relationship between media delivery, user intent, conversions, and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
