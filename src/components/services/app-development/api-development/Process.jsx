'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'We start by understanding what needs to connect, which systems are involved, what data must move, who will consume the API, existing API documentation, business-critical workflows, and known integration problems.',
    deliverable: 'A clear understanding of the required API or integration scope.'
  },
  {
    step: '02',
    title: 'Technical Design & API Specification',
    desc: 'We define endpoints, resources, data structures, authentication, versioning, errors, and integration patterns before coding starts.',
    deliverable: 'An agreed technical direction before development begins.'
  },
  {
    step: '03',
    title: 'Development & Implementation',
    desc: 'We build the API or connect the required third-party systems. Documentation is developed alongside the implementation rather than being left until the end.',
    deliverable: 'The agreed API or integration functionality.'
  },
  {
    step: '04',
    title: 'Testing & Reliability Review',
    desc: 'We test normal workflows and failure conditions. This can include integration, functional, load, security, webhook, and error-handling tests based on scope.',
    deliverable: 'A tested implementation ready for deployment.'
  },
  {
    step: '05',
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
            How We Approach an API Development or{' '}
            <span className="italic text-frame-accent">Integration Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process keeps architecture, development, testing, and launch connected.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-3xl font-medium text-frame-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-frame-accent block">
                  You Receive:
                </span>
                <span className="text-xs text-zinc-300 font-medium mt-1 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
