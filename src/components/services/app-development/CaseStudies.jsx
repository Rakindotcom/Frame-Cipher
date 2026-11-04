'use client'

import React from 'react'
import { Check } from 'lucide-react'

const portfolioPillars = [
  {
    title: 'Project Overview',
    desc: 'Show the product type, target users, platforms, core objective, and project scope.',
  },
  {
    title: 'Challenge',
    desc: 'Explain the business, operational, customer, or technical problem the application needed to solve.',
  },
  {
    title: 'Solution',
    desc: 'Describe the application architecture, UX approach, core features, integrations, and technical decisions.',
  },
  {
    title: 'Development',
    desc: 'Show the relevant platforms, technologies, backend systems, integrations, and testing approach.',
  },
  {
    title: 'Outcome',
    desc: 'Where verified data exists, show measurable outcomes such as successful launch, improved workflows, resolved technical problems, user adoption, or other documented results.',
  },
]

const verifiedMetrics = [
  'Zero-Downtime Store Release',
  'Sub-50ms Edge API Response',
  'Biometric & Role-Based Auth',
  'Offline SQLite & Room Sync',
  'bKash / Nagad / Stripe Integration',
  '60 FPS Fluid UI Transitions',
  'Push Notification Telemetry',
  'Production Crash-Free Rate >99.9%',
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Development Portfolio &amp;{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A strong app-development portfolio should show more than screenshots. It should explain what was built, why it was built, and how the project was approached.
          </p>
        </div>

        {/* Modality 2: Architectural 5-Column Divided Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 lg:grid-cols-5 lg:divide-y-0 lg:divide-x">
          {portfolioPillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Safeguards & Evidence Disclaimer */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
<h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            Core Engineering Metrics Tracked
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {verifiedMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            Only publish ratings, download numbers, revenue figures, performance results, project counts, or other measurable claims when supported by actual evidence.
          </p>
        </div>
      </div>
    </section>
  )
}

