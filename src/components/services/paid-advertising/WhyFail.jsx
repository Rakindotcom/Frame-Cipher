'use client'

import React from 'react'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    num: '01',
    category: 'Telemetry & Data',
    title: 'Poor Tracking',
    body: 'If conversions are not measured correctly, optimization decisions may be based on incomplete or misleading data. A campaign may appear profitable when it is not, or weak when the platform is simply failing to capture the real outcome.',
  },
  {
    num: '02',
    category: 'Audience Targeting',
    title: 'Wrong Audience or Intent',
    body: 'Even strong creative cannot compensate for targeting the wrong people. Campaigns can underperform when the audience is too broad, too narrow, poorly matched to the offer, or disconnected from the actual buying intent.',
  },
  {
    num: '03',
    category: 'Commercial Mechanics',
    title: 'Weak Offers',
    body: 'An ad can generate attention without creating enough reason to act. Price, positioning, trust, urgency, product-market fit, guarantees, incentives, or the clarity of the offer can all affect conversion.',
  },
  {
    num: '04',
    category: 'Creative Fatigue',
    title: 'Poor Ad Creative',
    body: 'Repeated, generic, or poorly matched creative can limit performance. Strong paid advertising often requires multiple angles, formats, messages, and creative variations so the campaign can learn what actually resonates.',
  },
  {
    num: '05',
    category: 'Post-Click Friction',
    title: 'Weak Landing Pages',
    body: 'The ad can do its job and still lose the customer after the click. Common post-click points of failure include slow page experience, message mismatch, weak calls to action, unclear value proposition, poor mobile usability, too much friction, weak trust signals, and complicated forms or checkout.',
    problems: [
      'Slow page experience',
      'Message mismatch',
      'Weak calls to action',
      'Unclear value proposition',
      'Poor mobile usability',
      'Too much friction',
      'Weak trust signals',
      'Complicated forms or checkout',
    ],
  },
  {
    num: '06',
    category: 'Cross-Channel Silos',
    title: 'Fragmented Platform Strategy',
    body: 'Running Google, Meta, TikTok, LinkedIn, and other platforms independently can make the overall strategy harder to control. Each channel should have a defined role within the customer journey rather than receiving budget simply because it is available.',
  },
  {
    num: '07',
    category: 'Scientific Rigor',
    title: 'No Systematic Testing',
    body: 'Campaigns cannot improve consistently without structured testing. We look for opportunities to test audiences, creative, offers, landing pages, campaign structures, and budget allocation based on measurable hypotheses rather than random changes.',
  },
]

export default function WhyFail() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Paid Advertising <span className="italic text-frame-accent">Campaigns Fail.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A campaign can fail for reasons that have little to do with the advertising platform itself. We look beyond the ad account to identify where the actual problem is.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {reasons.map((reason) => (
            <div
              key={reason.num}
              className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                {/* Col 1-3: Number and Category */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold">
                    VECTOR {reason.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    {reason.category}
                  </span>
                </div>

                {/* Col 4-7: Headline */}
                <div className="md:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {reason.title}
                  </h3>
                </div>

                {/* Col 8-12: Description & Diagnostics */}
                <div className="md:col-span-5 space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                    {reason.body}
                  </p>

                  {reason.problems && (
                    <div className="pt-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                        Common Friction Points:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {reason.problems.map((prob) => (
                          <div key={prob} className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                            <span className="h-1 w-1 rounded-full bg-frame-accent shrink-0" />
                            <span>{prob}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
