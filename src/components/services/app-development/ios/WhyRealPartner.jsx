'use client'

import React from 'react'
import { ShieldCheck, Smartphone, Zap, RefreshCw } from 'lucide-react'

const whyRealPartner = [
  {
    icon: ShieldCheck,
    title: 'App Store Review Is a Real Gate',
    desc: "An iOS application must meet Apple's technical, content, privacy, and submission requirements before it can reach users through the App Store. We plan for those requirements during development instead of treating submission as an afterthought.",
  },
  {
    icon: Smartphone,
    title: 'iOS Users Expect a Native Experience',
    desc: 'Your app should feel natural on the platform. Navigation, gestures, layouts, typography, states, and interactions all need to work together as one cohesive product.',
  },
  {
    icon: Zap,
    title: 'Native Performance When It Matters',
    desc: 'Some applications depend heavily on device capabilities, performance, background behavior, or platform-specific features. In those cases, native iOS development gives us direct access to the tools the platform provides.',
  },
  {
    icon: RefreshCw,
    title: 'Architecture That Survives iOS Updates',
    desc: 'An application should not need a major rebuild every time the platform evolves. We structure the codebase and dependencies with future updates and maintenance in mind.',
  },
]

export default function WhyRealPartner() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Your Business Needs a Real iOS Development Partner.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shipping to the App Store requires more than just compiling Swift code. It demands adherence to Apple&apos;s strict standards, interface conventions, and long-term operating system lifecycle management.
          </p>
        </div>

        {/* 4 Factor Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyRealPartner.map((reason, i) => {
            const Icon = reason.icon
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
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {reason.desc}
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
