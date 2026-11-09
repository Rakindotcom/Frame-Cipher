'use client'

import React from 'react'
import {
  Search,
  FileText,
  Layers,
  Layout,
  Code2,
  Rocket
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Stakeholder Consultation',
    desc: 'We identify business goals, stakeholders, departments, users, existing systems, workflows, and project constraints.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Business & System Analysis',
    desc: 'We document important processes, data flows, roles, dependencies, integrations, and operational requirements.',
  },
  {
    step: '03',
    icon: Layers,
    title: 'Architecture & Integration Planning',
    desc: 'We define application structure, data architecture, security, integrations, scalability requirements, and the appropriate technical approach.',
  },
  {
    step: '04',
    icon: Layout,
    title: 'UI/UX Design',
    desc: 'We design role-based workflows, dashboards, forms, navigation, and key user journeys around how the organization operates.',
  },
  {
    step: '05',
    icon: Code2,
    title: 'Development & Integration',
    desc: 'We build the approved application and connect the required enterprise systems, APIs, identity providers, databases, and third-party services.',
  },
  {
    step: '06',
    icon: Rocket,
    title: 'Testing, Launch & Handoff',
    desc: 'We validate the application, support production launch, provide agreed documentation and handoff materials, and assist with the initial post-launch period.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach Enterprise App Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We follow a structured development process that connects business requirements with technical implementation. The exact workflow can change based on the organization&apos;s systems, project scope, integrations, and rollout requirements.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
