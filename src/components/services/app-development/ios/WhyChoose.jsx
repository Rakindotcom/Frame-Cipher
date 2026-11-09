'use client'

import React from 'react'
import {
  Users,
  Smartphone,
  Compass,
  Briefcase,
  Eye,
  HeartHandshake,
} from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: 'One In-House Team',
    desc: 'Strategy, UI/UX, development, integrations, testing, and launch stay within one team instead of being divided between multiple vendors.',
  },
  {
    icon: Smartphone,
    title: 'Built for iOS',
    desc: 'We design around iOS interaction patterns and Apple platform requirements instead of treating iOS as a resized version of another platform.',
  },
  {
    icon: Compass,
    title: 'Platform-Neutral Advice',
    desc: 'We recommend native, cross-platform, or another approach based on your product, users, timeline, and budget.',
  },
  {
    icon: Briefcase,
    title: 'Business-First Development',
    desc: 'We begin with what the application needs to achieve. Then we decide what should be built and how it should work.',
  },
  {
    icon: Eye,
    title: 'Clear Scope & Review',
    desc: 'You review important requirements, designs, builds, and release stages before the project moves forward.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    desc: 'After launch, we can continue supporting bug fixes, platform updates, feature enhancements, and ongoing technical maintenance.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for iOS App Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We operate as an engineering partner invested in your product launch, combining Apple HIG design precision with clean native Swift architecture.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
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
