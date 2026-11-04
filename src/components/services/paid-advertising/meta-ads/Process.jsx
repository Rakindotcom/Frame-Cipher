'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Audit & Goal Definition',
    phase: 'Days 1–3',
    body: [
      'We start by understanding the business model, offer, target customer, market, existing data, and desired conversion outcome.',
      'For an existing account, we review historical performance, ad fatigue curves, and the current campaign setup before recommending major changes.',
    ],
    note: 'Zero guesswork: audit uncovers ad fatigue patterns and tracking leakage.',
  },
  {
    num: '02',
    title: 'Offer, Audience & Creative Research',
    phase: 'Week 1',
    body: [
      'We study what the customer needs, what objections prevent action, which messages resonate, and which creative formats fit the buying journey.',
      'We also identify first-party signals, customer lists, and audience inputs available to teach Meta’s delivery system.',
    ],
    note: 'Generates meaningful creative hypotheses rather than guessing randomly.',
  },
  {
    num: '03',
    title: 'Tracking & Campaign Setup',
    phase: 'Week 1–2',
    body: [
      'We configure campaign objectives, conversion events, audiences, creative assets, placements, budgets, and measurement before launch.',
      'This includes Meta Pixel and server-side Conversions API (CAPI) validation with event deduplication.',
    ],
    note: 'Accurate data signals are validated before any ad dollars are spent.',
  },
  {
    num: '04',
    title: 'Launch & Initial Learning',
    phase: 'Week 2',
    body: [
      'After launch, we monitor delivery, conversion signals, spend distribution, creative performance, and early user engagement.',
      'We avoid making constant emotional changes before the account gathers enough statistical data to support an informed decision.',
    ],
    note: 'Allows Meta’s machine learning to exit the learning phase with stability.',
  },
  {
    num: '05',
    title: 'Testing & Creative Refresh',
    phase: 'Weeks 3–4+',
    body: [
      'We systematically test meaningful variations to learn which combination creates the strongest business outcome.',
    ],
    bullets: [
      '3-second video hooks',
      'Value propositions & offers',
      'Direct-response ad copy',
      'Visual styles (UGC vs Clean)',
      'Formats (Reels, Feed, Carousels)',
      'Calls to action (CTAs)',
      'Advantage+ audience signals',
      'Post-click landing pages',
    ],
    note: 'Creative rotation prevents fatigue before ad performance deteriorates.',
  },
  {
    num: '06',
    title: 'Reporting & Scaling',
    phase: 'Ongoing Growth Cycle',
    body: [
      'Once campaigns display clear performance signals, we identify opportunities to scale spend profitably.',
    ],
    bullets: [
      'Vertical budget increases (+15-20%)',
      'Horizontal creative angle expansion',
      'New format exploration (Reels/Stories)',
      'Cross-border market launches',
      'Post-click conversion rate optimization',
      'Account consolidation for liquidity',
      'Advanced first-party attribution',
    ],
    note: 'Scaling is based on verifiable unit economics and bottom-line margin.',
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
            <span className="italic text-frame-accent">Meta Ads.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A structured, scientific methodology that replaces random boosting with mathematical creative testing, server-side attribution, and sustainable scaling.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (6 Structured Phase Cards) */}
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
