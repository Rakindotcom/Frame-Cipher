'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Audit & Goal Definition',
    phase: 'Days 1–3',
    body: [
      'We begin with your business model, offer, target customer, market, and conversion goals.',
      'For an existing account, we review the current setup before recommending changes. For a new account, we define the measurement framework and campaign direction before launch.',
    ],
    note: 'Zero guesswork: audit reveals actual search waste and baseline performance.',
  },
  {
    num: '02',
    title: 'Research & Campaign Planning',
    phase: 'Week 1',
    body: [
      'We research search intent, keyword themes, competitors, audiences, products or services, geographic markets, and the expected customer journey.',
    ],
    note: 'The result is a campaign plan that connects advertising activity with the business outcome you actually want.',
  },
  {
    num: '03',
    title: 'Setup & Tracking Validation',
    phase: 'Week 1–2',
    body: [
      'We build or restructure campaigns, configure targeting, create ad assets, connect relevant conversion tracking, and review the account before launch.',
    ],
    note: 'Tracking is rigorously validated before significant optimization decisions are made.',
  },
  {
    num: '04',
    title: 'Launch & Initial Optimization',
    phase: 'Week 2',
    body: [
      'After launch, we monitor early traffic, search terms, conversions, spend distribution, ad performance, and tracking behavior.',
    ],
    note: 'The first stage is about validating the setup and identifying meaningful signals rather than making large changes simply to create activity.',
  },
  {
    num: '05',
    title: 'Testing & Ongoing Optimization',
    phase: 'Weeks 3–4+',
    body: [
      'As performance data develops, we test and refine the areas that influence campaign results.',
    ],
    bullets: [
      'Keywords & search terms',
      'Negative keyword lists',
      'Responsive Search Ads',
      'Landing page alignment',
      'Bids & Target CPA/ROAS',
      'Budget pacing & allocation',
      'Audience signal refinement',
      'Geographic bid modifiers',
      'Product margin segments',
    ],
    note: 'Optimization is guided by performance data and business value.',
  },
  {
    num: '06',
    title: 'Reporting & Scaling',
    phase: 'Monthly Cycle',
    body: [
      'Reporting focuses on the metrics that make campaign decisions possible.',
    ],
    bullets: [
      'Net spend & pacing',
      'Conversions & CPQL',
      'Cost per conversion',
      'Conversion value & ROAS',
      'Revenue where measurable',
      'Search-term trend logs',
      'Campaign performance',
      'Market-by-market data',
      'Executive roadmap & next actions',
    ],
    note: 'When data supports further growth, we look for opportunities to scale the budget, expand winning themes, enter new markets, or introduce additional campaign types without losing measurement discipline.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Manage{' '}
            <span className="italic text-frame-accent">Google Ads.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Campaigns are built, launched, tracked, tested, and scaled through a structured process so decisions are driven by evidence rather than assumptions.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (6-Step Structured Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>

                <div className="space-y-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {step.bullets && (
                  <div className="pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-2">
                      Key Levers Tested:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-zinc-300">
                      {step.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {step.note && (
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                    <span className="text-frame-accent">Standard: </span>
                    {step.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
