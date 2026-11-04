'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Stakeholder Consultation',
    desc: 'We identify business goals, stakeholders, departments, users, existing systems, workflows, and project constraints.',
  },
  {
    step: '02',
    title: 'Business & System Analysis',
    desc: 'We document important processes, data flows, roles, dependencies, integrations, and operational requirements.',
  },
  {
    step: '03',
    title: 'Architecture & Integration Planning',
    desc: 'We define application structure, data architecture, security, integrations, scalability requirements, and the appropriate technical approach.',
  },
  {
    step: '04',
    title: 'UI/UX Design',
    desc: 'We design role-based workflows, dashboards, forms, navigation, and key user journeys around how the organization operates.',
  },
  {
    step: '05',
    title: 'Development & Integration',
    desc: 'We build the approved application and connect the required enterprise systems, APIs, identity providers, databases, and third-party services.',
  },
  {
    step: '06',
    title: 'Testing, Launch & Handoff',
    desc: 'We validate the application, support production launch, provide agreed documentation and handoff materials, and assist with the initial post-launch period.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach <span className="italic text-frame-accent">Enterprise App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We follow a structured development process that connects business requirements with technical implementation. The exact workflow can change based on the organization&apos;s systems, project scope, integrations, and rollout requirements.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.16] hover:bg-[#18181B]"
            >
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
