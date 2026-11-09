'use client'

import React from 'react'
import { Eye, Languages, Globe, Layout } from 'lucide-react'

const accessibilityLocalization = [
  {
    icon: Eye,
    title: 'Accessibility Support',
    desc: 'We consider VoiceOver, readable typography, suitable touch targets, contrast, dynamic text sizing, and accessible interaction patterns where required.',
  },
  {
    icon: Languages,
    title: 'Bangla & English Interfaces',
    desc: 'For businesses serving Bangladesh, we can prepare interfaces for Bangla and English users with seamless script switching.',
  },
  {
    icon: Globe,
    title: 'Multilingual Localization',
    desc: 'Additional languages can be planned around your target international markets and application scope.',
  },
  {
    icon: Layout,
    title: 'Localization-Ready Layouts',
    desc: 'Text length, translated labels, dates, numbers, and interface changes are considered during design so localization does not create avoidable layout problems later.',
  },
]

export default function AccessibilityLocalization() {
  return (
    <section id="accessibility-localization" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Accessibility &amp; Localization.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your app should remain usable across different users, languages, devices, and accessibility needs without visual breakage.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accessibilityLocalization.map((item, i) => {
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
