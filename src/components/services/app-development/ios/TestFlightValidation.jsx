'use client'

import React from 'react'
import { Users, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react'

const testFlightValidation = [
  {
    icon: Users,
    title: 'Internal Testing',
    desc: 'Early builds can be reviewed by your internal team before broader testing begins.',
  },
  {
    icon: Rocket,
    title: 'External Beta Testing',
    desc: 'Selected testers can evaluate real workflows, device behavior, usability, and edge cases before launch.',
  },
  {
    icon: RefreshCw,
    title: 'Feedback & Revision',
    desc: 'Testing feedback is reviewed, prioritized, and converted into required fixes or approved changes.',
  },
  {
    icon: CheckCircle2,
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
            TestFlight Beta Testing &amp; Pre-Release Validation.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Before public release, we use TestFlight to validate the application with controlled internal and external user groups to catch real-world edge cases.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testFlightValidation.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
