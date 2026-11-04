'use client'

import React from 'react'
import { AlertOctagon, AlertTriangle, Info, CheckCircle2 } from 'lucide-react'

const supportLevels = [
  {
    icon: AlertOctagon,
    severity: 'P1 — Critical',
    badgeColor: 'text-red-400 border-red-500/30 bg-red-500/10',
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
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
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
    badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
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
    badgeColor: 'text-zinc-400 border-white/[0.08] bg-white/[0.04]',
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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Support Levels &amp;{' '}
            <span className="italic text-frame-accent">Response Times.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Every production issue is prioritized by business impact and urgency. Our SLA response framework ensures that mission-critical incidents receive immediate engineering escalation.
          </p>
        </div>

        {/* Editorial Divided Rows (Modality 1) */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <div className="divide-y divide-white/[0.08]">
            {supportLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 transition-colors duration-200 hover:bg-[#161619]"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Severity Badge */}
                  <div className="lg:col-span-3">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${lvl.badgeColor}`}
                    >
                      {lvl.severity}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                      {lvl.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="lg:col-span-4 rounded-xl border border-white/[0.06] bg-black/40 p-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2.5">
                      Examples Include:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {lvl.examples.map((ex, exIdx) => (
                        <li key={exIdx} className="flex items-start gap-2">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-frame-accent" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

