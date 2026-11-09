'use client'

import React from 'react'
import { RefreshCw, Layout, FileCode2, Smartphone, GitBranch } from 'lucide-react'

const portingMigration = [
  {
    icon: RefreshCw,
    title: 'Existing iOS App Modernization',
    desc: 'We can review older iOS applications and update architecture, dependencies, interface components, supported iOS versions, or technical functionality.',
  },
  {
    icon: Layout,
    title: 'UIKit to SwiftUI Transition',
    desc: 'Where appropriate, parts of an existing application can be modernized with SwiftUI without requiring an unnecessary full rewrite.',
  },
  {
    icon: FileCode2,
    title: 'Legacy Code & Dependency Review',
    desc: 'We identify outdated libraries, technical debt, unstable integrations, and areas that may create future maintenance problems.',
  },
  {
    icon: Smartphone,
    title: 'Android-to-iOS Development',
    desc: 'When you already have an Android product, we can use the existing business logic and workflows as a reference while creating a proper iOS experience.',
  },
  {
    icon: GitBranch,
    title: 'Feature Migration',
    desc: 'Existing accounts, integrations, data workflows, and product functionality can be reviewed for reuse, redesign, or replacement during migration.',
  },
]

export default function PortingMigration() {
  return (
    <section id="porting-migration" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Porting &amp; Migration.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Already have an application? We can improve or extend the product you already built through phased modernization, eliminating legacy technical debt.
          </p>
        </div>

        {/* 5 Upgrades Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portingMigration.map((item, i) => {
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
