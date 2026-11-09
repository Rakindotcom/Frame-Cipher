'use client'

import React from 'react'
import { Smartphone, Cpu, Wifi, Zap, CheckCircle2 } from 'lucide-react'

const performanceCompatibility = [
  {
    icon: Smartphone,
    title: 'Device Compatibility',
    desc: 'We test the agreed device range so layouts and functionality remain consistent across supported iPhone and iPad configurations.',
  },
  {
    icon: Cpu,
    title: 'iOS Version Support',
    desc: 'Supported iOS versions are defined during planning and considered throughout development and testing.',
  },
  {
    icon: Wifi,
    title: 'Network Conditions',
    desc: 'Apps that depend on APIs, media, or live data should handle slow connections, interrupted requests, and temporary service failures.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'We review loading behavior, API response handling, memory-sensitive screens, rendering, and other performance-sensitive areas.',
  },
  {
    icon: CheckCircle2,
    title: 'Real-Device Validation',
    desc: 'Where required, testing is performed on physical Apple devices rather than relying only on Xcode simulators.',
  },
]

export default function PerformanceCompatibility() {
  return (
    <section id="performance-compatibility" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Performance &amp; Device Compatibility.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An application needs to work reliably outside a controlled development environment under unstable cellular networks and varied battery conditions.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {performanceCompatibility.map((item, i) => {
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
