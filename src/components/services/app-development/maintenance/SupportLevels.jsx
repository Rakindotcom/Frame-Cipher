'use client'

import React from 'react'
import { AlertOctagon, AlertTriangle, Info, CheckCircle2 } from 'lucide-react'

const supportLevels = [
  {
    icon: AlertOctagon,
    severity: 'P1 — Critical',
    title: 'Critical Issues',
    desc: 'Critical issues can affect the application\'s core operation, major user flows, revenue-generating functions, or a significant portion of users.',
    examples: [
      'Application-wide crashes',
      'Major production outages',
      'Critical payment failures',
      'Severe authentication failures',
      'Major backend failures',
    ],
  },
  {
    icon: AlertTriangle,
    severity: 'P2 — High-Priority',
    title: 'High-Priority Issues',
    desc: 'High-priority issues affect important functionality but may not completely stop the application from operating.',
    examples: [
      'Major feature failures',
      'Significant API problems',
      'Recurring crashes',
      'Important integration failures',
      'Serious performance degradation',
    ],
  },
  {
    icon: Info,
    severity: 'P3 — Standard',
    title: 'Standard Issues',
    desc: 'Standard issues generally affect specific features or user flows without causing a widespread outage.',
    examples: [
      'Individual feature bugs',
      'UI problems',
      'Non-critical API errors',
      'Device-specific issues',
      'Minor performance problems',
    ],
  },
  {
    icon: CheckCircle2,
    severity: 'P4 — Minor',
    title: 'Minor Requests',
    desc: 'Minor requests usually involve small changes or improvements that do not require emergency intervention.',
    examples: [
      'Small UI adjustments',
      'Minor content changes',
      'Small configuration updates',
      'Low-impact usability improvements',
    ],
  },
]

export default function SupportLevels() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Support Levels &amp; Response Times.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Every production issue is prioritized by business impact and urgency. Our SLA response framework ensures that mission-critical incidents receive immediate engineering escalation.
          </p>
        </div>

        {/* Editorial Divided Rows on #0D0D0F (Directive 17 compliant: Zero nested boxes) */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="divide-y divide-white/10">
            {supportLevels.map((lvl, idx) => {
              const Icon = lvl.icon
              return (
                <div
                  key={idx}
                  className="group p-6 sm:p-8 transition-colors duration-200 hover:bg-[#121214]"
                >
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                    {/* Severity Identifier */}
                    <div className="lg:col-span-3 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white">
                        {lvl.severity}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-5 space-y-2">
                      <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                        {lvl.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {lvl.desc}
                      </p>
                    </div>

                    {/* Examples: Clean editorial list without nested boxes */}
                    <div className="lg:col-span-4 space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2">
                        Examples Include:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                        {lvl.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
