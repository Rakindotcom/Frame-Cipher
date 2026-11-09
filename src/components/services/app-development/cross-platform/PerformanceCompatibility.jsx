'use client'

import React from 'react'
import {
  Smartphone,
  Tablet,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react'

const performanceCompatibility = [
  {
    icon: Smartphone,
    title: 'Android Device Compatibility',
    desc: 'We account for the supported Android versions, screen sizes, hardware differences, and agreed device range.',
  },
  {
    icon: Tablet,
    title: 'iPhone & iPad Compatibility',
    desc: 'Supported Apple devices and operating-system versions are considered throughout development and testing.',
  },
  {
    icon: Zap,
    title: 'App Startup & Rendering',
    desc: 'We review launch behavior, screen rendering, animations, data-heavy views, and other performance-sensitive areas.',
  },
  {
    icon: Cpu,
    title: 'Memory & Resource Usage',
    desc: 'Resource-heavy workflows and performance-sensitive screens are reviewed to reduce unnecessary device strain.',
  },
  {
    icon: Layers,
    title: 'API & Network Performance',
    desc: 'We review API response handling, loading states, caching, timeouts, and network-dependent workflows.',
  },
  {
    icon: CheckCircle2,
    title: 'Real-Device Validation',
    desc: 'Where required, testing includes physical Android and Apple devices rather than relying only on emulators and simulators.',
  },
]

export default function PerformanceCompatibility() {
  return (
    <section id="performance" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform Performance &amp; Device Compatibility.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application still runs across different devices, operating systems, screen sizes, and hardware conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {performanceCompatibility.map((item, idx) => {
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
