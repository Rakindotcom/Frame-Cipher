'use client'

import React from 'react'

const testingStages = [
  {
    title: 'Functional Testing',
    desc: 'We verify authentication, navigation, forms, business rules, user flows, notifications, and core features.',
  },
  {
    title: 'Android Testing',
    desc: 'Supported Android devices, versions, screen sizes, permissions, and platform-specific behavior are tested within the agreed scope.',
  },
  {
    title: 'iOS Testing',
    desc: 'Supported Apple devices, iOS versions, permissions, navigation patterns, and platform-specific behavior are tested independently.',
  },
  {
    title: 'Integration Testing',
    desc: 'We test APIs, payment systems, authentication, maps, notifications, analytics, and third-party services.',
  },
  {
    title: 'Performance Testing',
    desc: 'We review loading, rendering, memory-sensitive workflows, API behavior, and other important application performance areas.',
  },
  {
    title: 'Network Testing',
    desc: 'Slow connections, temporary service failures, interrupted requests, and recovery behavior are tested where relevant.',
  },
  {
    title: 'Regression Testing',
    desc: 'After important changes, affected workflows are tested again before release.',
  },
  {
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
            Cross-Platform App Testing &amp;{' '}
            <span className="italic text-frame-accent">Quality Assurance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shared code does not guarantee identical behavior across both platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testingStages.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
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
