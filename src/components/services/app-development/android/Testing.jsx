'use client'

import React from 'react'
import {
  CheckCircle2,
  Smartphone,
  Gauge,
  Cpu,
  RefreshCw,
  PackageCheck,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react'

const testingStages = [
  {
    num: '01',
    title: 'Functional Testing',
    desc: 'Checking important features and workflows against the approved requirements.',
    icon: CheckCircle2,
  },
  {
    num: '02',
    title: 'Device & OS Testing',
    desc: 'Testing relevant device types, screen sizes, and supported Android versions.',
    icon: Smartphone,
  },
  {
    num: '03',
    title: 'Performance Testing',
    desc: 'Reviewing loading behavior, responsiveness, API interactions, and other performance concerns.',
    icon: Gauge,
  },
  {
    num: '04',
    title: 'Integration Testing',
    desc: 'Testing APIs, payments, Firebase services, maps, notifications, authentication, and other connected systems.',
    icon: Cpu,
  },
  {
    num: '05',
    title: 'Regression Testing',
    desc: 'Rechecking previously completed functionality after major changes or new development.',
    icon: RefreshCw,
  },
  {
    num: '06',
    title: 'Pre-Release Testing',
    desc: 'Performing final checks on the production-ready build before Google Play submission.',
    icon: PackageCheck,
  },
  {
    num: '07',
    title: 'Crash Monitoring',
    desc: 'Setting up appropriate crash and issue reporting where included in the project scope.',
    icon: AlertTriangle,
  },
  {
    num: '08',
    title: 'Security Testing',
    desc: 'Reviewing authentication flows, session handling, API communication, and permission behaviour as part of the pre-release verification process.',
    icon: ShieldCheck,
  },
]

export default function Testing() {
  return (
    <section
      id="testing"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            App Testing, Quality Assurance &amp;{' '}
            <span className="italic text-frame-accent">Play Store Release.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Testing takes place throughout development so issues can be identified before the final release.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testingStages.map((stage, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {stage.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <stage.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-lg font-medium tracking-tight text-white">
                {stage.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Takeaway Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">QA Rule:</strong> Quality assurance is not limited to confirming that the app opens. The goal is to verify that important workflows continue working under supported conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
