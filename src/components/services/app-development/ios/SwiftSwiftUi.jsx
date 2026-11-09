'use client'

import React from 'react'
import { Code2, Layout, Layers, Smartphone, RefreshCw } from 'lucide-react'

const swiftSwiftUiPoints = [
  {
    icon: Code2,
    title: 'Swift Development',
    desc: 'We use Swift to build application logic, networking, data handling, integrations, and native iOS functionality.',
  },
  {
    icon: Layout,
    title: 'SwiftUI Interfaces',
    desc: 'SwiftUI provides a modern way to build interfaces with reusable components, adaptive layouts, and a structured UI development workflow.',
  },
  {
    icon: Layers,
    title: 'UIKit When It Makes Sense',
    desc: 'UIKit remains useful for existing applications, specific interface requirements, advanced controls, and projects that need to work with an established UIKit codebase.',
  },
  {
    icon: Smartphone,
    title: 'Native iOS Capabilities',
    desc: 'When your product depends on platform-specific behavior, device features, performance, background activity, or Apple frameworks, native development provides direct access to the required iOS capabilities.',
  },
  {
    icon: RefreshCw,
    title: 'Modernization Without an Unnecessary Rewrite',
    desc: 'For existing applications, SwiftUI can be introduced gradually alongside UIKit instead of forcing the entire application into a single framework.',
  },
]

export default function SwiftSwiftUi() {
  return (
    <section id="swift-swiftui" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Native iOS Development With Swift &amp; SwiftUI.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build native iOS applications with Swift and use SwiftUI, UIKit, or both depending on the product requirements and technical architecture.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {swiftSwiftUiPoints.map((item, i) => {
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
