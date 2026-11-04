'use client'

import React from 'react'
import {
  ListFilter,
  FileCheck2,
  Sliders,
  Calendar,
  Presentation,
  Check,
} from 'lucide-react'

const deliverables = [
  {
    title: 'Prioritized Findings',
    icon: ListFilter,
    lead: "We don't present every issue as equally important. Each significant finding is prioritized according to:",
    points: [
      'Likely SEO impact',
      'Affected pages or templates',
      'Business importance',
      'Search visibility opportunities',
      'Implementation complexity',
      'Urgency of remediation',
    ],
    summary: 'Helps your team focus on high-yield fixes that move the needle first.',
  },
  {
    title: 'Evidence & Impact Analysis',
    icon: FileCheck2,
    lead: 'Every important recommendation has clear reasoning behind it. Findings include:',
    points: [
      'What we found & where we found it',
      'Raw data & supporting evidence',
      'Why it matters to search engines',
      'Which exact URLs/templates are affected',
      'Potential SEO and revenue impact',
    ],
    summary: 'Makes findings actionable for marketers, developers, and founders alike.',
  },
  {
    title: 'Effort & Implementation Guidance',
    icon: Sliders,
    lead: 'Not every fix requires the same engineering resources. We separate:',
    points: [
      'Quick wins (hours to deploy)',
      'Medium-effort optimizations',
      'Technical infrastructure projects',
      'Content team assignments',
      'Developer-heavy code changes',
      'Ongoing authority opportunities',
    ],
    summary: 'Written clearly enough for any in-house developer or partner to execute.',
  },
  {
    title: '30/60/90-Day Action Roadmap',
    icon: Calendar,
    lead: 'A long audit can become difficult to execute without a sequence. We organize recommendations into:',
    points: [
      'First 30 Days: Critical technical errors & crawl stabilization',
      'Next 60 Days: Content intent, internal linking & cannibalization',
      'Next 90 Days: Authority growth, topical expansion & AI search scaling',
    ],
    summary: "Roadmap is customized to your site's actual condition, not a rigid template.",
  },
  {
    title: 'Findings Walkthrough',
    icon: Presentation,
    lead: 'We review the core audit findings directly with your team in a live walkthrough covering:',
    points: [
      'What matters most vs what can wait',
      'Which fixes require engineering coordination',
      'Tasks content writers can execute immediately',
      'Opportunities with highest commercial potential',
      'Clear, definitive next steps',
    ],
    summary: 'Ensures total alignment before implementation begins.',
  },
]

export default function Deliverables() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Deliverables // Actionable Output
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What We Deliver in an{' '}
            <span className="italic text-frame-accent">SEO Audit</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            An SEO audit is only valuable when the output can guide real decisions.
          </p>
        </div>

        {/* 5 Deliverables Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Deliverable 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {item.summary}
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
