'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    timeline: 'Sprint 01',
    title: 'Account & Business Audit',
    description: 'We review your current advertising setup, business model, target market, offer, existing results, tracking, landing pages, and available first-party data.',
    bullets: [
      'For existing accounts: identify wasted spend, structural issues, missed opportunities, and tracking gaps.',
      'For new campaigns: establish the commercial foundation before launch.',
    ],
  },
  {
    step: '02',
    timeline: 'Sprint 02',
    title: 'Audience, Offer & Funnel Research',
    description: 'We identify who the campaign needs to reach, what action we want them to take, what message is most relevant, and where the biggest friction may exist in the funnel.',
    note: 'The result is a clearer view of the audience, offer, conversion path, and measurement priorities.',
  },
  {
    step: '03',
    timeline: 'Sprint 03',
    title: 'Platform & Media Strategy',
    description: 'We select the appropriate channels and define how each should contribute to the broader acquisition strategy.',
    bullets: [
      'Platform selection & campaign objectives',
      'Budget allocation & audience strategy',
      'Funnel stages & geographic markets',
      'Testing priorities & conversion goals',
    ],
    note: 'The strategy is designed around your business rather than around a fixed platform package.',
  },
  {
    step: '04',
    timeline: 'Sprint 04',
    title: 'Tracking, Creative & Campaign Setup',
    description: 'We build or coordinate the technical and campaign foundations required for launch.',
    bullets: [
      'Campaign structure & conversion actions',
      'Analytics configuration & audience setup',
      'Ad creative & copy alignment',
      'Landing-page alignment & product feeds',
    ],
    note: 'Before launch, the agreed campaign plan and budget are reviewed with you.',
  },
  {
    step: '05',
    timeline: 'Sprint 05',
    title: 'Launch, Testing & Optimization',
    description: 'Once campaigns are live, we monitor early data and begin structured testing.',
    bullets: [
      'Budget adjustments & audience refinement',
      'Creative changes & search-term analysis',
      'Bid strategy adjustments & restructuring',
      'Landing-page improvements & exclusions',
    ],
    note: 'Changes are based on evidence rather than constant activity for the sake of activity.',
  },
  {
    step: '06',
    timeline: 'Sprint 06+',
    title: 'Reporting & Scaling',
    description: 'Once enough reliable data exists, we identify what deserves more budget, what needs improvement, and what should be reduced or stopped. Reporting focuses on business-relevant performance and the decisions that follow from the data.',
    note: 'Scaling should come after the campaign demonstrates enough evidence to justify additional investment.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#09090B] py-20 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Paid Advertising <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our process is designed to establish the business objective first, then build the campaign system around it.
          </p>
        </div>

        {/* Modality 3: Technical Blueprint Matrix (gap-0 seamless grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>

                {step.bullets && (
                  <ul className="space-y-2 border-t border-white/[0.06] pt-4 font-mono text-xs text-zinc-400">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#A855F7] shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {step.note && (
                <div className="mt-6 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-zinc-500">
                  <span className="text-frame-accent font-semibold block mb-0.5">RULE:</span>
                  {step.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
