'use client'

import React from 'react'

const performanceCompatibility = [
  {
    title: 'Android Device Compatibility',
    desc: 'We account for the supported Android versions, screen sizes, hardware differences, and agreed device range.',
  },
  {
    title: 'iPhone & iPad Compatibility',
    desc: 'Supported Apple devices and operating-system versions are considered throughout development and testing.',
  },
  {
    title: 'App Startup & Rendering',
    desc: 'We review launch behavior, screen rendering, animations, data-heavy views, and other performance-sensitive areas.',
  },
  {
    title: 'Memory & Resource Usage',
    desc: 'Resource-heavy workflows and performance-sensitive screens are reviewed to reduce unnecessary device strain.',
  },
  {
    title: 'API & Network Performance',
    desc: 'We review API response handling, loading states, caching, timeouts, and network-dependent workflows.',
  },
  {
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
            Cross-Platform Performance &amp;{' '}
            <span className="italic text-frame-accent">Device Compatibility.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application still runs across different devices, operating systems, screen sizes, and hardware conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {performanceCompatibility.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
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
