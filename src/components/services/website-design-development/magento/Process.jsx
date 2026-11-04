import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your business model, catalog size, B2B or B2C requirements, existing systems, integrations, operational workflow, and future plans. We also assess whether Magento is actually the right platform for the project.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the catalog structure, Magento edition, store setup, customer groups, integration requirements, technical architecture, and project scope.',
  },
  {
    number: '03',
    title: 'UX & Storefront Design',
    description: 'We plan navigation, category structures, product experiences, checkout flows, mobile layouts, and calls to action around how customers actually shop.',
  },
  {
    number: '04',
    title: 'Magento Development',
    description: 'We build the storefront, catalog architecture, custom modules, integrations, payment workflows, and other agreed functionality.',
  },
  {
    number: '05',
    title: 'Integration & Data Setup',
    description: 'We connect approved systems and prepare product, customer, inventory, pricing, and other required data according to the project scope.',
  },
  {
    number: '06',
    title: 'Quality, Security & Load Testing',
    description: 'We test functionality, integrations, responsiveness, security-related configuration, checkout journeys, and performance under expected workload conditions.',
  },
  {
    number: '07',
    title: 'Launch & Handoff',
    description: 'We complete the final launch checks, verify critical integrations and purchase flows, and provide the agreed access and guidance for ongoing store management.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Magento Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We keep the process structured so the technical foundation is clear before development becomes expensive to change.
          </p>
        </div>

        {/* 7 Process Step Cards */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] transition-colors duration-200 hover:border-white/[0.14]"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 select-none font-mono text-[6.5rem] sm:text-[7.5rem] font-bold leading-none tracking-tighter text-white/[0.03]"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
