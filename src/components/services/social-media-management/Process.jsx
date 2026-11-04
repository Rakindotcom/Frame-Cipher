'use client'

import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Social Audit',
    body: 'We review your existing profiles, content, audience, engagement, platform mix, and overall social presence. The audit helps identify strengths, gaps, and opportunities before we build the management plan.',
  },
  {
    number: '02',
    title: 'Strategy & Content Planning',
    body: 'We develop your platform mix, content pillars, posting approach, campaign priorities, and monthly content calendar around your business goals.',
  },
  {
    number: '03',
    title: 'Creation & Approval',
    body: 'Our team creates the agreed content and prepares it for your review. Nothing is published under your brand without the approval process defined for your engagement.',
  },
  {
    number: '04',
    title: 'Publishing & Community Management',
    body: 'Approved content is scheduled and published across the selected platforms. We also monitor comments, messages, mentions, and other relevant interactions according to your plan.',
  },
  {
    number: '05',
    title: 'Reporting & Optimization',
    body: 'At the end of each reporting cycle, we review performance and identify what should continue, change, or be tested next. Your strategy evolves based on actual performance rather than assumptions.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               EXECUTION FRAMEWORK 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Management{' '}
            <span className="italic text-[#A855F7]">Process.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A structured management process rather than a monthly content drop, so the strategy can improve cycle after cycle.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#A855F7]">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-zinc-500">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}

          {/* Continuous Evolution Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#A855F7]/40 bg-frame-accent/[0.04] p-6 sm:p-8 space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Continuous Evolution
              </span>
              <h3 className="mt-2 font-heading text-xl font-medium text-white">
                Data-Led Iteration
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Your strategy evolves based on actual performance rather than assumptions. Every reporting cycle explains what should continue, what should change, and what should be tested next.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#A855F7]">
              <CheckCircle2 className="h-4 w-4" />
              <span>Full Transparency by Default</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
