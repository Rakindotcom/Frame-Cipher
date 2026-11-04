'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const journeyStages = [
  {
    step: '01',
    stageName: 'UPPER FUNNEL',
    title: 'Demand Generation',
    body: 'Some businesses need to create interest before customers begin searching for the solution. Paid social, video, discovery, and other upper-funnel campaigns can introduce the product, service, problem, or value proposition to relevant audiences.',
    tail: 'The objective is to build qualified attention that can support later conversion activity.',
  },
  {
    step: '02',
    stageName: 'MID FUNNEL',
    title: 'Consideration & Retargeting',
    body: 'People who already know your brand may need more information before they are ready to act. Consideration campaigns can focus on product benefits, proof, comparisons, use cases, offers, testimonials, or other information that helps move the customer forward.',
    tail: 'Retargeting can then reconnect with people who have already interacted with the business but have not yet converted.',
  },
  {
    step: '03',
    stageName: 'LOWER FUNNEL',
    title: 'Lead & Sales Conversion',
    body: 'Conversion campaigns focus on the action that creates measurable business value.',
    bullets: [
      'A product purchase',
      'Lead submission',
      'Consultation request',
      'Phone call',
      'Appointment',
      'Booking',
      'Application',
      'Trial or software sign-up',
    ],
    tail: 'Campaign structure, landing pages, tracking, and optimization should all support that specific conversion event.',
  },
  {
    step: '04',
    stageName: 'POST CONVERSION',
    title: 'Customer Retention',
    body: 'Paid advertising can also support existing customers when the economics and platform capabilities make sense.',
    bullets: [
      'Repeat purchases',
      'New products',
      'Cross-sells',
      'Upsells',
      'Seasonal offers',
      'Customer-specific promotions',
    ],
    tail: 'Retention should be evaluated alongside acquisition so the advertising strategy considers customer value, not only first-time conversion.',
  },
]

export default function CustomerJourney() {
  return (
    <section className="border-t border-b border-white/[0.08] bg-[#09090B] py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising Across the{' '}
            <span className="italic text-frame-accent">Customer Journey.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Paid advertising does not have to serve the same purpose at every stage of the customer journey. The channel, message, audience, offer, and measurement approach can all change as the customer moves closer to conversion.
          </p>
        </div>

        {/* Modality 2: Architectural Divided Column Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] border-t border-b border-white/[0.08] md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
          {journeyStages.map((stage) => (
            <div
              key={stage.step}
              className="group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-[#121214] sm:p-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white transition-colors duration-200 group-hover:text-white">
                  {stage.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {stage.body}
                </p>

                {stage.bullets && (
                  <ul className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    {stage.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs text-zinc-300 font-mono">
                        <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4 font-mono text-[11px] text-zinc-500">
                <span className="text-frame-accent font-semibold block mb-1">STRATEGIC GOAL:</span>
                {stage.tail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
