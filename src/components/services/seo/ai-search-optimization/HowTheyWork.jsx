'use client'

import React from 'react'
import { Check } from 'lucide-react'

const layers = [
  {
    title: 'AEO: Answer-Level Optimization',
    body: 'AEO focuses on making specific information easier to surface in answer-driven search experiences.',
    lead: 'It can involve:',
    points: [
      'Direct answers',
      'Definitions',
      'FAQs',
      'Question-focused content',
      'Clear explanations',
      'Structured page sections',
    ],
    closing: 'The focus is the answer and the page that provides it.',
  },
  {
    title: 'GEO: Generative Visibility & Citations',
    body: 'GEO focuses on broader visibility within generative search experiences.',
    lead: 'It considers:',
    points: [
      'Topical authority',
      'Entity relationships',
      'Source credibility',
      'Brand context',
      'Content coverage',
      'Citations',
      'Competitive visibility',
    ],
    closing:
      'The focus extends beyond one page to the wider information ecosystem around the brand.',
  },
]

export default function HowTheyWork() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Methodology // Disciplines, One Strategy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            AEO, GEO &amp; AI Search:{' '}
            <span className="italic text-frame-accent">How They Work Together</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AEO and GEO are often used interchangeably, but they can describe different layers of
            the same broader AI Search Optimization strategy.
          </p>
        </div>

        {/* 2 Main Disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {layers.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 hover:border-white/[0.14] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Discipline 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                <p className="mt-5 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {item.lead}
                </p>

                <ul className="mt-3 space-y-2.5 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-l-2 border-frame-accent bg-[#09090B] p-4 text-xs sm:text-sm leading-relaxed text-zinc-400 rounded-r-md">
                {item.closing}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Pillars */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 space-y-3">
            <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
              Entity &amp; Source Authority
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Neither exists in isolation
            </h3>
            <p className="text-sm font-normal leading-relaxed text-zinc-300">
              Neither answer structure nor content depth exists in isolation.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              AI search can draw on multiple signals and sources when forming an answer. Strong
              entity information, credible references, consistent brand details, useful content,
              and clear expertise can all contribute to a stronger overall information footprint.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 space-y-4">
            <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
              Why the disciplines work together
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              One broader strategy
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                <span>AEO can improve the clarity of specific answers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                <span>GEO can strengthen broader generative visibility.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                <span>Entity and source authority can help connect the information together.</span>
              </li>
            </ul>
            <p className="pt-3 border-t border-white/[0.06] text-xs leading-relaxed text-zinc-400">
              Together, they form a broader AI Search Optimization strategy that works alongside
              traditional SEO rather than attempting to replace it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
