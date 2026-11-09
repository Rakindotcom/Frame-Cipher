'use client'

import React from 'react'
import {
  Search,
  FileCheck2,
  Activity,
  Wrench,
  CloudUpload,
  BarChart3,
} from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Initial App Assessment',
    desc: 'We begin by reviewing the current application and its technical environment. This can include the codebase, dependencies, application health, crash history, performance, security, backend, APIs, integrations, deployment process, and known issues. We then identify the areas that need immediate attention and those that can be planned later.',
  },
  {
    icon: FileCheck2,
    step: '02',
    title: 'Maintenance Plan & SLA Scoping',
    desc: 'We define the maintenance scope around the application\'s actual requirements. This can include supported platforms, maintenance coverage, issue priorities, monitoring requirements, bug-fix scope, security responsibilities, feature support, communication process, and response expectations. Where an SLA is required, response and support terms should be defined before the engagement begins.',
  },
  {
    icon: Activity,
    step: '03',
    title: 'Monitoring & Maintenance Setup',
    desc: 'We establish the relevant monitoring and maintenance workflow for the application. Depending on the system, this may include application health monitoring, crash and error tracking, performance checks, integration monitoring, security reviews, and issue tracking.',
  },
  {
    icon: Wrench,
    step: '04',
    title: 'Ongoing Updates & Issue Resolution',
    desc: 'Once maintenance begins, we handle planned updates and reported issues according to their priority and scope. This can include bug fixes, dependency updates, OS compatibility work, security patches, performance improvements, and integration fixes.',
  },
  {
    icon: CloudUpload,
    step: '05',
    title: 'Release & Deployment Support',
    desc: 'Before production releases, we review the relevant changes and perform appropriate testing. After deployment, we verify the updated application and monitor for issues that require attention.',
  },
  {
    icon: BarChart3,
    step: '06',
    title: 'Regular Reporting & Review',
    desc: 'We provide regular updates on completed work, current issues, maintenance activities, and recommended next steps. This keeps your team informed about the application\'s technical condition without requiring them to manage every engineering detail.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach App Maintenance &amp; Support.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our maintenance process starts with understanding the application before making changes. The exact workflow depends on the platform, codebase, infrastructure, and support requirements.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {step.desc}
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
