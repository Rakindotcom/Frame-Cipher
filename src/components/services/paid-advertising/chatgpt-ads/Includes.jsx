'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Account & Campaign Setup',
    body: [
      'A strong ChatGPT Ads campaign starts with the right structure. We organize the campaign around a defined business goal, including campaign objectives, budgets, locations, dates, ad groups, ads, and landing pages.',
    ],
    bullets: [
      'Campaign and ad-group structure',
      'Campaign objective selection',
      'Budget planning',
      'Location targeting',
      'Product or service segmentation',
      'Landing-page alignment',
      'Conversion event planning',
      'Campaign naming and organization',
      'Initial creative structure',
      'Pre-launch readiness checks',
    ],
    note: 'OpenAI Ads Manager supports campaign, ad-group, and ad-level workflows for creating and managing ChatGPT advertising campaigns.',
  },
  {
    title: 'Context & Intent Targeting',
    body: [
      'Context is one of the key differences between ChatGPT Ads and traditional keyword advertising. We develop context hints around genuine customer needs, buying situations, use cases, and product or service relevance.',
    ],
    bullets: [
      'Customer intent',
      'Use cases',
      'Product categories',
      'Service needs',
      'Pain points',
      'Buying situations',
      'Customer characteristics',
      'Geographic relevance',
    ],
    note: 'Where different customer needs require different messaging or landing pages, we separate them into focused ad groups. The aim is not to fill an ad group with loosely related terms. The aim is to give the advertising system useful context around the situations where your offer can genuinely help.',
  },
  {
    title: 'Ad Creative & Copy',
    body: [
      'ChatGPT Ads appear inside an active research or decision-making environment. The creative therefore needs to communicate value quickly and clearly.',
    ],
    bullets: [
      'Headlines',
      'Descriptions',
      'Image creative',
      'Value propositions',
      'Use-case messaging',
      'Benefit-led variations',
      'Calls to action',
      'Landing-page alignment',
    ],
    note: 'OpenAI’s current ad format supports a headline, description, landing page, and image asset alongside advertiser identification. We build multiple meaningful variations where testing makes sense. Each variation should test a different message, benefit, use case, or angle rather than simply changing a few words.',
  },
  {
    title: 'Conversion Tracking & Measurement',
    body: [
      'Advertising without reliable measurement can produce misleading performance data. Framecipher builds the measurement foundation needed to understand what happens after an ad interaction.',
    ],
    bullets: [
      'Conversion event planning',
      'OpenAI Pixel implementation',
      'Conversions API setup',
      'Event validation',
      'UTM tracking',
      'Landing-page analytics',
      'Conversion reporting',
      'Data quality checks',
    ],
    note: 'OpenAI currently supports conversion measurement through the OpenAI Pixel, Conversions API, or both. Advertisers can also preserve the OpenAI click reference and use tracking parameters to connect advertising traffic with other analytics systems. We also account for differences between Ads Manager and third-party analytics. Attribution windows, timestamps, consent settings, browser conditions, deduplication, campaign configuration, and modeled conversions can all affect reported totals.',
  },
  {
    title: 'Campaign Management & Optimization',
    body: [
      'Launching a campaign is only the beginning. We monitor performance and use available data to identify practical opportunities for improvement.',
    ],
    bullets: [
      'Budget adjustments',
      'Ad-group refinement',
      'Context-hint refinement',
      'Creative testing',
      'Landing-page alignment',
      'Bid strategy review',
      'Conversion optimization',
      'Underperforming variation analysis',
      'Campaign structure improvements',
    ],
    note: 'We do not treat every early performance change as a reason for an immediate adjustment. A new campaign needs enough relevant data to separate meaningful signals from normal performance variation.',
  },
  {
    title: 'Reporting & Performance Analysis',
    body: [
      'Your reporting should answer business questions, not simply display platform metrics.',
    ],
    bullets: [
      'Impressions',
      'Clicks',
      'CTR',
      'CPC',
      'CPM',
      'Spend',
      'Conversions',
      'Conversion rate',
      'Cost per conversion',
      'Campaign-level trends',
      'Creative performance',
      'Ad-group performance',
      'Landing-page performance',
    ],
    note: 'OpenAI Ads Manager currently provides performance reporting across metrics such as impressions, clicks, spend, CTR, average CPC, average CPM, and conversions. We turn those numbers into practical observations. You should understand what changed, what was tested, what the data suggests, and what should be tested next.',
  },
]

export default function Includes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Our ChatGPT Ads{' '}
            <span className="italic text-frame-accent">Management Services.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ChatGPT Ads management covers campaign setup, context targeting, creative, conversion tracking, optimization, and reporting. Each part is managed as one connected process.
          </p>
        </div>

        {/* 3-Column Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Service 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent/60 group-hover:bg-frame-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {item.bullets?.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.04] pt-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.note && (
                <div className="mt-5 border-l-2 border-frame-accent bg-frame-accent/10 p-3.5 rounded-r-lg text-xs leading-relaxed text-zinc-400">
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
