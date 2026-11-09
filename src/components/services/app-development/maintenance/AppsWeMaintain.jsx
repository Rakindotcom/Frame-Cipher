'use client'

import React from 'react'
import {
  Smartphone,
  Apple,
  Layers,
  Globe2,
  Building2,
} from 'lucide-react'

const appsWeMaintain = [
  {
    icon: Smartphone,
    num: '01',
    title: 'Android Apps',
    desc: 'We maintain Android applications across supported Android versions and device environments. Support can include compatibility updates, bug fixes, performance optimization, security updates, dependency maintenance, and release support.',
  },
  {
    icon: Apple,
    num: '02',
    title: 'iOS Apps',
    desc: 'We help maintain iOS applications as Apple introduces new operating system versions, SDK requirements, devices, and platform changes. Maintenance can cover compatibility, bugs, performance, dependencies, integrations, security, and release updates.',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Cross-Platform Apps',
    desc: 'Cross-platform applications have their own framework, dependency, and platform compatibility requirements. We can maintain applications built with supported cross-platform technologies while addressing both the shared codebase and platform-specific issues.',
  },
  {
    icon: Globe2,
    num: '04',
    title: 'SaaS & Web Applications',
    desc: 'SaaS applications require ongoing attention across the frontend, backend, database, APIs, infrastructure, authentication, and integrations. Our maintenance approach can cover application stability, security, performance, infrastructure, integrations, and incremental product improvements.',
  },
  {
    icon: Building2,
    num: '05',
    title: 'Enterprise Applications',
    desc: 'Enterprise applications often involve complex workflows, integrations, user roles, internal systems, and security requirements. We can structure maintenance around application stability, integration reliability, security updates, technical improvements, and controlled releases.',
  },
]

export default function AppsWeMaintain() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Apps We Maintain.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our maintenance capabilities span native mobile platforms, cross-platform codebases, cloud SaaS applications, and mission-critical enterprise systems.
          </p>
        </div>

        {/* 5-Card Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appsWeMaintain.map((app) => {
            const Icon = app.icon
            return (
              <div
                key={app.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {app.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {app.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {app.desc}
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
