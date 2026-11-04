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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Apps We{' '}
            <span className="italic text-frame-accent">Maintain.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our maintenance capabilities span native mobile platforms, cross-platform codebases, cloud SaaS applications, and mission-critical enterprise systems.
          </p>
        </div>

        {/* 5-Card Architectural Grid on #121214 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appsWeMaintain.map((app) => {
            const Icon = app.icon
            return (
              <div
                key={app.num}
                className="group rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-frame-accent/40 hover:bg-[#161619]"
              >
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-frame-accent group-hover:border-frame-accent/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {app.num}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {app.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

