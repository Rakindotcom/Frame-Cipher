'use client'

import React from 'react'
import {
  CheckCircle2,
  Smartphone,
  Tablet,
  Layers,
  Zap,
  Wifi,
  RotateCcw,
  Rocket,
} from 'lucide-react'

const testingStages = [
  {
    icon: CheckCircle2,
    title: 'Functional Testing',
    desc: 'We verify authentication, navigation, forms, business rules, user flows, notifications, and core features.',
  },
  {
    icon: Smartphone,
    title: 'Android Testing',
    desc: 'Supported Android devices, versions, screen sizes, permissions, and platform-specific behavior are tested within the agreed scope.',
  },
  {
    icon: Tablet,
    title: 'iOS Testing',
    desc: 'Supported Apple devices, iOS versions, permissions, navigation patterns, and platform-specific behavior are tested independently.',
  },
  {
    icon: Layers,
    title: 'Integration Testing',
    desc: 'We test APIs, payment systems, authentication, maps, notifications, analytics, and third-party services.',
  },
  {
    icon: Zap,
    title: 'Performance Testing',
    desc: 'We review loading, rendering, memory-sensitive workflows, API behavior, and other important application performance areas.',
  },
  {
    icon: Wifi,
    title: 'Network Testing',
    desc: 'Slow connections, temporary service failures, interrupted requests, and recovery behavior are tested where relevant.',
  },
  {
    icon: RotateCcw,
    title: 'Regression Testing',
    desc: 'After important changes, affected workflows are tested again before release.',
  },
  {
    icon: Rocket,
    title: 'Release Validation',
    desc: 'Both platform builds are reviewed against the approved scope before submission.',
  },
]

export default function Testing() {
  return (
    <section id="testing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Testing &amp; Quality Assurance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shared code does not guarantee identical behavior across both platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testingStages.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
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
