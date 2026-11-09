'use client'

import React from 'react'
import { Wrench, RefreshCw, ShieldAlert, Zap, Check } from 'lucide-react'

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
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Types of App Maintenance We Provide.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different applications require different types of maintenance. We organize maintenance work around the reason the application needs an update.
          </p>
        </div>

        {/* 4 Discrete Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenanceTypes.map((type) => {
            const Icon = type.icon
            return (
              <div
                key={type.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {type.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {type.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {type.desc}
                  </p>

                  {type.details && (
                    <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-400 leading-relaxed">
                      {type.details}
                    </div>
                  )}

                  {type.examples && (
                    <div className="mt-4 border-t border-white/10 pt-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 block mb-2">
                        Common Focus Areas:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {type.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <Check className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
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
