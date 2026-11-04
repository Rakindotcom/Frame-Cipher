'use client'

import React from 'react'

const deliverables = [
  {
    category: 'Product & UX',
    desc: 'Requirements, user flows, wireframes, interface design, prototypes, and iOS-specific interaction patterns.',
  },
  {
    category: 'iOS Application',
    desc: 'A production-ready iOS application built around the approved features, workflows, and supported devices.',
  },
  {
    category: 'Backend & Integrations',
    desc: 'Required APIs, backend connections, authentication, payments, notifications, analytics, and third-party integrations.',
  },
  {
    category: 'Testing & Release',
    desc: 'QA testing, release builds, TestFlight support, App Store submission assistance, and launch preparation.',
  },
  {
    category: 'Handoff & Documentation',
    desc: 'Source code, project files, technical documentation, access handover where applicable, and release information.',
  },
]

export default function Deliverables() {
  return (
    <section id="deliverables" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From an{' '}
            <span className="italic text-frame-accent">iOS Development Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved project scope, but a complete iOS engagement provides turnkey assets with zero proprietary lock-in.
          </p>
        </div>

        {/* 5 Deliverables Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((del, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                  {del.category}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.08] pt-4">
                  {del.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
