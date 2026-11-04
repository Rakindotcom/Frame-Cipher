'use client'

import React from 'react'
import { Wrench, RefreshCw, ShieldAlert, Zap } from 'lucide-react'

const maintenanceTypes = [
  {
    icon: Wrench,
    num: '01',
    title: 'Corrective Maintenance',
    desc: 'Corrective maintenance addresses problems that already exist. This includes bugs, crashes, failed integrations, broken features, and other issues affecting application functionality.',
    details: 'The process typically involves identifying the issue, finding its cause, applying the fix, testing the affected areas, and verifying the result.',
  },
  {
    icon: RefreshCw,
    num: '02',
    title: 'Adaptive Maintenance',
    desc: 'Adaptive maintenance keeps an application compatible with changes around it. These changes can come from operating systems, devices, SDKs, APIs, third-party services, infrastructure, or platform requirements.',
    examples: [
      'Android or iOS updates',
      'SDK changes',
      'Dependency changes',
      'API changes',
      'Third-party service updates',
      'Infrastructure changes',
    ],
  },
  {
    icon: ShieldAlert,
    num: '03',
    title: 'Preventive Maintenance',
    desc: 'Preventive maintenance focuses on reducing future problems. Instead of waiting for outdated components to cause failures, we review areas that may become difficult to maintain later.',
    examples: [
      'Dependency reviews',
      'Security updates',
      'Codebase cleanup',
      'Technical debt identification',
      'Monitoring improvements',
      'Backup checks',
      'Deprecated component replacement',
      'Performance reviews',
    ],
  },
  {
    icon: Zap,
    num: '04',
    title: 'Perfective Maintenance',
    desc: 'Perfective maintenance improves an application even when it is already functioning correctly. The focus can be usability, performance, maintainability, or product improvements.',
    examples: [
      'UX improvements',
      'Performance optimization',
      'Minor feature improvements',
      'Interface refinements',
      'Workflow improvements',
      'Maintainability improvements',
    ],
  },
]

export default function TypesOfMaintenance() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Types of App Maintenance{' '}
            <span className="italic text-frame-accent">We Provide.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different applications require different types of maintenance. We organize maintenance work around the reason the application needs an update.
          </p>
        </div>

        {/* Blueprint Matrix (Modality 3: 4 Seamless Grid Cells) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.08] bg-[#121214]/40">
          {maintenanceTypes.map((type) => {
            const Icon = type.icon
            return (
              <div
                key={type.num}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 transition-colors duration-300 hover:bg-[#161619]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-frame-accent group-hover:border-frame-accent/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {type.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {type.desc}
                  </p>

                  {type.details && (
                    <p className="mt-4 text-xs text-zinc-300 border-t border-white/[0.06] pt-3 leading-relaxed">
                      {type.details}
                    </p>
                  )}

                  {type.examples && (
                    <div className="mt-4 border-t border-white/[0.06] pt-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                        Examples include:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {type.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-frame-accent" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

