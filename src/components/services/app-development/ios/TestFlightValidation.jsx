'use client'

import React from 'react'

const testFlightValidation = [
  {
    title: 'Internal Testing',
    desc: 'Early builds can be reviewed by your internal team before broader testing begins.',
  },
  {
    title: 'External Beta Testing',
    desc: 'Selected testers can evaluate real workflows, device behavior, usability, and edge cases before launch.',
  },
  {
    title: 'Feedback & Revision',
    desc: 'Testing feedback is reviewed, prioritized, and converted into required fixes or approved changes.',
  },
  {
    title: 'Release Readiness',
    desc: 'The final build is checked against the agreed feature scope and release requirements before production submission.',
  },
]

export default function TestFlightValidation() {
  return (
    <section id="testflight-validation" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TestFlight Beta Testing &amp;{' '}
            <span className="italic text-frame-accent">Pre-Release Validation.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Before public release, we use TestFlight to validate the application with controlled internal and external user groups to catch real-world edge cases.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {testFlightValidation.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
