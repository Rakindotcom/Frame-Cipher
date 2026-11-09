'use client'

import React from 'react'
import {
  Search,
  FileCode2,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Check,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Requirements',
    desc: 'We start by understanding what needs to connect, which systems are involved, what data must move, who will consume the API, existing API documentation, business-critical workflows, and known integration problems.',
    deliverable: 'A clear understanding of the required API or integration scope.'
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'Technical Design & API Specification',
    desc: 'We define endpoints, resources, data structures, authentication, versioning, errors, and integration patterns before coding starts.',
    deliverable: 'An agreed technical direction before development begins.'
  },
  {
    step: '03',
    icon: Layers,
    title: 'Development & Implementation',
    desc: 'We build the API or connect the required third-party systems. Documentation is developed alongside the implementation rather than being left until the end.',
    deliverable: 'The agreed API or integration functionality.'
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Testing & Reliability Review',
    desc: 'We test normal workflows and failure conditions. This can include integration, functional, load, security, webhook, and error-handling tests based on scope.',
    deliverable: 'A tested implementation ready for deployment.'
  },
  {
    step: '05',
    icon: CheckCircle2,
    title: 'Deployment, Monitoring & Handoff',
    desc: 'We deploy the approved work, confirm data flow, configure agreed monitoring, and provide documentation or handoff materials.',
    deliverable: 'A production-ready API or integration with the agreed launch and handoff setup.'
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach an API Development or Integration Project.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process keeps architecture, development, testing, and launch connected.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] divide-y divide-white/[0.08] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-[#18181B] lg:flex-row lg:items-start lg:gap-12"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-medium text-purple-600">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 max-w-3xl">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/[0.08] pt-3 lg:mt-0 lg:border-t-0 lg:pt-0 lg:text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block">
                    You Receive:
                  </span>
                  <div className="mt-1 flex items-center lg:justify-end gap-2 text-xs text-zinc-200 font-medium">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
