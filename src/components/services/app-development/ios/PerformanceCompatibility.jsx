'use client'

import React from 'react'

const performanceCompatibility = [
  {
    title: 'Device Compatibility',
    desc: 'We test the agreed device range so layouts and functionality remain consistent across supported iPhone and iPad configurations.',
  },
  {
    title: 'iOS Version Support',
    desc: 'Supported iOS versions are defined during planning and considered throughout development and testing.',
  },
  {
    title: 'Network Conditions',
    desc: 'Apps that depend on APIs, media, or live data should handle slow connections, interrupted requests, and temporary service failures.',
  },
  {
    title: 'Performance Optimization',
    desc: 'We review loading behavior, API response handling, memory-sensitive screens, rendering, and other performance-sensitive areas.',
  },
  {
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
            iOS Performance &amp;{' '}
            <span className="italic text-frame-accent">Device Compatibility.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An application needs to work reliably outside a controlled development environment under unstable cellular networks and varied battery conditions.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {performanceCompatibility.map((item, i) => (
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
