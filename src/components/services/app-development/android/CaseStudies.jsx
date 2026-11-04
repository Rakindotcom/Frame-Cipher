'use client'

import React from 'react'
import {
  FileText,
  AlertTriangle,
  Cpu,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
} from 'lucide-react'

const frameworkStages = [
  {
    num: '01',
    title: 'Project Overview',
    desc: 'Show the product type, target users, Android scope, and business objective.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Challenge',
    desc: 'Explain the customer, operational, product, or technical problem the app needed to address.',
    icon: AlertTriangle,
  },
  {
    num: '03',
    title: 'Android Solution',
    desc: 'Show the architecture, Android features, UX decisions, integrations, and major technical requirements.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Testing & Release',
    desc: 'Explain how device compatibility, performance, integrations, and Google Play requirements were handled.',
    icon: CheckCircle2,
  },
  {
    num: '05',
    title: 'Outcome',
    desc: 'Where verified data exists, show measurable results such as successful launch, improved workflows, resolved technical issues, adoption, or other documented outcomes.',
    icon: TrendingUp,
  },
]

const trackedCapabilities = [
  { label: 'Kotlin Coroutines Concurrency', value: 'Non-Blocking IO' },
  { label: 'Jetpack Compose Rendering', value: '60 FPS Direct' },
  { label: 'Real Device QA Matrix', value: 'Diverse Hardware' },
  { label: 'Offline Room Persistence', value: 'Local Cache First' },
  { label: 'Firebase Cloud Messaging', value: 'Instant Push SLA' },
  { label: 'Google Play Target SDK', value: 'API 34+ Current' },
  { label: 'Memory & LeakCanary Tuning', value: 'Zero ANR / Leaks' },
  { label: 'Crashlytics Real-Time Logging', value: '99.9% Crash-Free' },
]

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android Development{' '}
            <span className="italic text-frame-accent">Portfolio &amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A strong Android portfolio should show more than interface screenshots. It should demonstrate the problem, technical approach, development scope, and actual outcome.
          </p>
        </div>

        {/* 5-Stage Framework Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frameworkStages.map((stage, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {stage.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <stage.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {stage.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 8 Tracked Capabilities Ribbon */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
            Core Production Standards &bull; Verified Across Every Release
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 font-mono text-xs">
            {trackedCapabilities.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12]"
              >
                <span className="text-zinc-500 block text-[11px] uppercase mb-1">
                  {item.label}
                </span>
                <span className="font-semibold text-white text-sm block">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Integrity Disclaimer */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5 text-xs text-zinc-400">
          <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">Strict Evidence Policy:</strong> Only publish ratings, download figures, project counts, performance improvements, or other measurable claims when supported by actual evidence.
          </p>
        </div>
      </div>
    </section>
  )
}

