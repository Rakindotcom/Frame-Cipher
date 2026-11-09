'use client'

import React from 'react'
import { Layers, Boxes, Database, GitBranch, CheckCircle2 } from 'lucide-react'

const codeQuality = [
  {
    icon: Layers,
    title: 'Structured Codebase',
    desc: 'We separate interface, business logic, networking, data, and reusable components where the project benefits from that structure.',
  },
  {
    icon: Boxes,
    title: 'Maintainable Components',
    desc: 'Reusable components reduce unnecessary duplication and make future feature updates easier to manage.',
  },
  {
    icon: Database,
    title: 'API & Data Layers',
    desc: 'Networking, models, local data, and application state are organized so the codebase remains easier to test and extend.',
  },
  {
    icon: GitBranch,
    title: 'Dependency Management',
    desc: 'Project dependencies are reviewed for compatibility, maintenance, and their impact on future iOS updates.',
  },
  {
    icon: CheckCircle2,
    title: 'Code Review & Quality Checks',
    desc: 'Important areas are reviewed for structure, reliability, maintainability, and consistency before release.',
  },
]

export default function ArchitectureCodeQuality() {
  return (
    <section id="architecture-code-quality" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Architecture &amp; Code Quality.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Good iOS development is not only about how the application looks. The underlying code should remain understandable, performant, and reliable as the product grows.
          </p>
        </div>

        {/* 5 Quality Standards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {codeQuality.map((item, i) => {
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
