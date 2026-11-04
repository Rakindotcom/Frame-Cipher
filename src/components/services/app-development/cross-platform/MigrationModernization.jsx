'use client'

import React from 'react'

const migrationModernization = [
  {
    title: 'Native Android to Cross-Platform',
    desc: 'Existing Android applications can be evaluated for migration when a shared Android and iOS architecture better supports the future roadmap.',
  },
  {
    title: 'Native iOS to Cross-Platform',
    desc: 'Existing iOS products can be assessed for shared-code development while retaining native implementation for features that need it.',
  },
  {
    title: 'React Native Migration',
    desc: 'Older React Native applications can be reviewed for dependency updates, architecture improvements, performance work, and framework modernization.',
  },
  {
    title: 'Flutter Modernization',
    desc: 'Existing Flutter applications can be reviewed for outdated packages, maintainability, architecture issues, and performance concerns.',
  },
  {
    title: 'Legacy Dependency Review',
    desc: 'We identify outdated libraries, unstable integrations, technical debt, and dependencies that may create future compatibility problems.',
  },
  {
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
            Cross-Platform App Migration &amp;{' '}
            <span className="italic text-frame-accent">Modernization.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Already have an application? We can review the existing product before deciding whether migration or modernization is the right move.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {migrationModernization.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
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
