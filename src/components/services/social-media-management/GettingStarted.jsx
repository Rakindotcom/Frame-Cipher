'use client'

import React from 'react'

const startSteps = [
  {
    number: '01',
    title: 'Book Your Free Consultation',
    body: 'Contact Framecipher by phone, WhatsApp, email, or our website form to discuss your business and social media requirements.',
  },
  {
    number: '02',
    title: 'Receive a Free Social Audit',
    body: 'We review your existing profiles, content, platform mix, and engagement to identify key opportunities and gaps.',
  },
  {
    number: '03',
    title: 'Get a Custom Content Strategy',
    body: 'We recommend the right platform mix, content approach, content pillars, and publishing structure based on your goals.',
  },
  {
    number: '04',
    title: 'Approve the Plan',
    body: 'You review the proposed strategy and content direction before publishing begins.',
  },
  {
    number: '05',
    title: 'Content Creation & Posting Begins',
    body: 'Our in-house team creates, schedules, publishes, and manages your approved social content.',
  },
  {
    number: '06',
    title: 'Monthly Reporting & Continuous Improvement',
    body: 'You receive regular performance reporting, insights, and recommendations so the strategy can evolve based on what is actually working.',
  },
]

export default function GettingStarted() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               ONBOARDING FLOW 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Happens After You{' '}
            <span className="italic text-[#A855F7]">Contact Us?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Getting started is straightforward, and nothing is published before you approve the direction.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startSteps.map((step) => (
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
                    Step {step.number}
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
        </div>
      </div>
    </section>
  )
}
