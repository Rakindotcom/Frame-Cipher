'use client'

import React from 'react'
import {
  Compass,
  Layout,
  Smartphone,
  Layers,
  ShieldCheck,
  FileText,
} from 'lucide-react'

const deliverables = [
  {
    icon: Compass,
    category: 'Strategy & Architecture',
    desc: 'Requirements, framework recommendation, technical architecture, shared-vs-native decisions, and project planning.',
  },
  {
    icon: Layout,
    category: 'UI/UX',
    desc: 'Platform-aware user flows, interface design, prototypes, adaptive layouts, and approved design assets.',
  },
  {
    icon: Smartphone,
    category: 'Cross-Platform Application',
    desc: 'Flutter or React Native development with shared application logic and native modules where required.',
  },
  {
    icon: Layers,
    category: 'Backend & Integrations',
    desc: 'API connections, authentication, payment services, notifications, analytics, business systems, and other agreed integrations.',
  },
  {
    icon: ShieldCheck,
    category: 'Testing & Release',
    desc: 'Android and iOS testing, production builds, TestFlight support, Google Play testing, and store submission assistance.',
  },
  {
    icon: FileText,
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
            What You Receive From a Cross-Platform Development Project.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved scope, but a complete engagement can include:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => {
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
                    {item.category}
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
