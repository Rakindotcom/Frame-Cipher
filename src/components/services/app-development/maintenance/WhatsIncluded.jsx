'use client'

import React from 'react'
import {
  ClipboardCheck,
  ShieldCheck,
  Activity,
  Wrench,
  FileText,
  Users2,
} from 'lucide-react'

const includedInEveryPlan = [
  {
    icon: ClipboardCheck,
    num: '01',
    title: 'Onboarding & App Health Review',
    desc: 'We review the application before ongoing maintenance begins. This helps us understand the current codebase, dependencies, infrastructure, integrations, known issues, and technical priorities.',
  },
  {
    icon: ShieldCheck,
    num: '02',
    title: 'Compatibility & Security Updates',
    desc: 'We monitor relevant platform and dependency changes and identify updates that require attention. Security maintenance is handled according to the application\'s technology and agreed scope.',
  },
  {
    icon: Activity,
    num: '03',
    title: 'Monitoring & Issue Detection',
    desc: 'Relevant application health signals are monitored based on the maintenance plan. The goal is to identify crashes, errors, performance issues, and other technical problems that require investigation.',
  },
  {
    icon: Wrench,
    num: '04',
    title: 'Bug Fixes & Technical Support',
    desc: 'Bug-fix support is included according to the selected maintenance plan. We investigate reported issues, apply appropriate fixes, test affected functionality, and verify the result.',
  },
  {
    icon: FileText,
    num: '05',
    title: 'Reporting & Communication',
    desc: 'You receive updates about maintenance activities, resolved issues, outstanding work, and relevant recommendations.',
  },
  {
    icon: Users2,
    num: '06',
    title: 'Direct Team Access',
    desc: 'You communicate directly with the team handling your application\'s maintenance. This keeps technical discussions, issue reporting, and maintenance decisions connected.',
  },
]

export default function WhatsIncluded() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What’s Included in Every Maintenance Plan.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Every client retainer includes an enterprise baseline of code quality, active monitoring, direct senior engineer access, and comprehensive transparency.
          </p>
        </div>

        {/* Discrete Cards Grid (gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedInEveryPlan.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
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
