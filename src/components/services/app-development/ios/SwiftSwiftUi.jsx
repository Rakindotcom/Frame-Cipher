'use client'

import React from 'react'

const swiftSwiftUiPoints = [
  {
    title: 'Swift Development',
    desc: 'We use Swift to build application logic, networking, data handling, integrations, and native iOS functionality.',
  },
  {
    title: 'SwiftUI Interfaces',
    desc: 'SwiftUI provides a modern way to build interfaces with reusable components, adaptive layouts, and a structured UI development workflow.',
  },
  {
    title: 'UIKit When It Makes Sense',
    desc: 'UIKit remains useful for existing applications, specific interface requirements, advanced controls, and projects that need to work with an established UIKit codebase.',
  },
  {
    title: 'Native iOS Capabilities',
    desc: 'When your product depends on platform-specific behavior, device features, performance, background activity, or Apple frameworks, native development provides direct access to the required iOS capabilities.',
  },
  {
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
            Native iOS Development With{' '}
            <span className="italic text-frame-accent">Swift &amp; SwiftUI.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build native iOS applications with Swift and use SwiftUI, UIKit, or both depending on the product requirements and technical architecture.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {swiftSwiftUiPoints.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
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
