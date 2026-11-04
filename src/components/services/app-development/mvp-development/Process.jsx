'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Product Hypothesis',
    desc: 'We start by understanding the product idea, target users, business problem, and uncertainty that needs to be tested. We identify the core problem, target users, proposed solution, main product assumption, essential user journey, existing alternatives, technical constraints, and business priorities.',
    deliverable: 'A clear product hypothesis and initial MVP direction.'
  },
  {
    step: '02',
    title: 'MVP Scope & Success Metrics',
    desc: 'We turn the product hypothesis into a defined MVP scope. We determine essential features, features for later phases, core workflow, success signals, required integrations, analytics requirements, platform requirements, and initial timeline.',
    deliverable: 'An agreed MVP scope with clear priorities and measurement goals.'
  },
  {
    step: '03',
    title: 'UX/UI Design & Prototype',
    desc: 'We map the core user journey and create the necessary interface before development. The process can include user flows, wireframes, functional UI design, clickable prototype, responsive layouts, review, and refinement.',
    deliverable: 'A defined product experience ready for development.'
  },
  {
    step: '04',
    title: 'Development & Integration',
    desc: 'We develop the agreed functionality and connect the external systems required for the MVP. This may include frontend, backend, database, APIs, authentication, payments, third-party services, and analytics.',
    deliverable: 'The agreed working MVP functionality.'
  },
  {
    step: '05',
    title: 'QA & Launch Preparation',
    desc: 'We test the core workflows and prepare the product for real users. Testing covers functionality, integrations, authentication, payments, responsive behavior, error handling, and launch configuration verification.',
    deliverable: 'A tested MVP prepared for deployment.'
  },
  {
    step: '06',
    title: 'Launch & Validation Review',
    desc: 'We deploy the approved MVP and help establish the agreed feedback and measurement setup. After launch, the available data and feedback can be reviewed against the original hypothesis.',
    deliverable: 'A launched MVP and a clearer evidence base for the next product decision.'
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach an{' '}
            <span className="italic text-frame-accent">MVP Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process keeps product validation and software development connected from the beginning.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium text-frame-accent">
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
