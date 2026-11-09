'use client'

import React from 'react'
import {
  FileCode2,
  ShieldCheck,
  Server,
  ListTodo,
  Check,
} from 'lucide-react'

const takeoverStages = [
  {
    icon: FileCode2,
    num: '01',
    title: 'Codebase & Architecture Assessment',
    desc: 'We review the existing codebase to understand how the application is structured and maintained.',
    bullets: [
      'Application architecture',
      'Code organization',
      'Build configuration',
      'Technical dependencies',
      'Known technical debt',
      'Development documentation',
      'Maintainability concerns',
      'Areas requiring immediate attention',
    ],
  },
  {
    icon: ShieldCheck,
    num: '02',
    title: 'Dependency & Security Review',
    desc: 'We identify outdated, deprecated, or potentially problematic dependencies where they are relevant to the project. The review can also identify security maintenance requirements and components that require updates.',
    bullets: [
      'Vulnerability scanning (CVEs)',
      'Outdated third-party packages',
      'Deprecated SDK dependencies',
      'Permission & authentication review',
      'Secure storage & secrets handling',
      'API token rotation audits',
    ],
  },
  {
    icon: Server,
    num: '03',
    title: 'Infrastructure & Integration Review',
    desc: 'An application rarely operates alone. We review relevant infrastructure, APIs, databases, authentication systems, payment services, third-party integrations, and deployment environments. This helps identify dependencies that could affect future maintenance.',
    bullets: [
      'Cloud hosting & server setup',
      'Database health & index efficiency',
      'Payment gateways (Stripe/bKash)',
      'Push notification pipelines',
      'CI/CD release automations',
      'App Store / Play Console credentials',
    ],
  },
  {
    icon: ListTodo,
    num: '04',
    title: 'Maintenance Baseline & Backlog',
    desc: 'After assessment, we organize identified issues into a practical maintenance baseline.',
    bullets: [
      'Critical technical issues',
      'Compatibility requirements',
      'Security updates',
      'Performance concerns',
      'Integration issues',
      'Technical debt',
      'Recommended improvements',
      'Future maintenance priorities',
    ],
    footer: 'This gives both teams a clearer starting point before ongoing support begins.',
  },
]

export default function TakingOverExistingApp() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Taking Over an Existing App.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Did another agency or freelancer build your app? We conduct a thorough assessment before beginning ongoing maintenance so that responsibilities, technical risks, and code quality are clear from day one.
          </p>
        </div>

        {/* 4-Stage Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {takeoverStages.map((stage) => {
            const Icon = stage.icon
            return (
              <div
                key={stage.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {stage.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {stage.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {stage.desc}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {stage.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {stage.footer && (
                  <div className="mt-6 border-t border-white/10 pt-3 text-xs leading-relaxed text-zinc-400 font-sans">
                    {stage.footer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
