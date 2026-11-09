'use client'

import React from 'react'
import { Layout, Smartphone, Layers, ShieldCheck, FileText } from 'lucide-react'

const deliverables = [
  {
    icon: Layout,
    category: 'Product & UX',
    desc: 'Requirements, user flows, wireframes, interface design, prototypes, and iOS-specific interaction patterns.',
  },
  {
    icon: Smartphone,
    category: 'iOS Application',
    desc: 'A production-ready iOS application built around the approved features, workflows, and supported devices.',
  },
  {
    icon: Layers,
    category: 'Backend & Integrations',
    desc: 'Required APIs, backend connections, authentication, payments, notifications, analytics, and third-party integrations.',
  },
  {
    icon: ShieldCheck,
    category: 'Testing & Release',
    desc: 'QA testing, release builds, TestFlight support, App Store submission assistance, and launch preparation.',
  },
  {
    icon: FileText,
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
            What You Receive From an iOS Development Project.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved project scope, but a complete iOS engagement provides turnkey assets with zero proprietary lock-in.
          </p>
        </div>

        {/* 5 Deliverables Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((del, i) => {
            const Icon = del.icon
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
                    {del.category}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 border-t border-white/[0.08] pt-4">
                    {del.desc}
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
