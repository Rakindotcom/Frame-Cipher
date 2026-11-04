'use client'

import React from 'react'

const deliverables = [
  {
    category: 'Strategy & Architecture',
    desc: 'Requirements, framework recommendation, technical architecture, shared-vs-native decisions, and project planning.',
  },
  {
    category: 'UI/UX',
    desc: 'Platform-aware user flows, interface design, prototypes, adaptive layouts, and approved design assets.',
  },
  {
    category: 'Cross-Platform Application',
    desc: 'Flutter or React Native development with shared application logic and native modules where required.',
  },
  {
    category: 'Backend & Integrations',
    desc: 'API connections, authentication, payment services, notifications, analytics, business systems, and other agreed integrations.',
  },
  {
    category: 'Testing & Release',
    desc: 'Android and iOS testing, production builds, TestFlight support, Google Play testing, and store submission assistance.',
  },
  {
    category: 'Handoff & Documentation',
    desc: 'Source code, project files, technical documentation, access handover where applicable, and relevant release information.',
  },
]

export default function Deliverables() {
  return (
    <section id="deliverables" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From a{' '}
            <span className="italic text-frame-accent">Cross-Platform Development Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved scope, but a complete engagement can include:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.category}
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
