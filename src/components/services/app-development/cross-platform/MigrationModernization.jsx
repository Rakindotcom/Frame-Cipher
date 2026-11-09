'use client'

import React from 'react'
import {
  Smartphone,
  RefreshCw,
  Layers,
  GitBranch,
  Database,
} from 'lucide-react'

const migrationModernization = [
  {
    icon: Smartphone,
    title: 'Native Android to Cross-Platform',
    desc: 'Existing Android applications can be evaluated for migration when a shared Android and iOS architecture better supports the future roadmap.',
  },
  {
    icon: Smartphone,
    title: 'Native iOS to Cross-Platform',
    desc: 'Existing iOS products can be assessed for shared-code development while retaining native implementation for features that need it.',
  },
  {
    icon: RefreshCw,
    title: 'React Native Migration',
    desc: 'Older React Native applications can be reviewed for dependency updates, architecture improvements, performance work, and framework modernization.',
  },
  {
    icon: Layers,
    title: 'Flutter Modernization',
    desc: 'Existing Flutter applications can be reviewed for outdated packages, maintainability, architecture issues, and performance concerns.',
  },
  {
    icon: GitBranch,
    title: 'Legacy Dependency Review',
    desc: 'We identify outdated libraries, unstable integrations, technical debt, and dependencies that may create future compatibility problems.',
  },
  {
    icon: Database,
    title: 'Feature & Data Migration',
    desc: 'Existing business logic, APIs, user accounts, workflows, and data requirements can be mapped into the new architecture according to the migration scope.',
  },
]

export default function MigrationModernization() {
  return (
    <section id="migration" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Migration &amp; Modernization.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Already have an application? We can review the existing product before deciding whether migration or modernization is the right move.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {migrationModernization.map((item, idx) => {
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
