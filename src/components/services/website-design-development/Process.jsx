import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery and Consultation',
    description: 'We learn about your business, target audience, goals, and current website. We identify whether you need a new website, redesign, or platform migration.',
    deliverable: 'Project brief and initial requirements.',
  },
  {
    number: '02',
    title: 'Planning & Recommendation',
    description: 'We review your content needs, functionality, budget, and growth plans. We recommend a platform and outline the website structure.',
    deliverable: 'Sitemap, platform recommendation, and project scope.',
  },
  {
    number: '03',
    title: 'Proposal & Estimate',
    description: 'You receive a clear scope of work, estimated timeline, and quotation before development begins. We discuss what is included and what may require additional work.',
    deliverable: 'Project proposal and estimate.',
  },
  {
    number: '04',
    title: 'UI/UX Design & Development',
    description: 'We plan page layouts, create the visual design, and build the website. You review agreed milestones before we move to the next stage.',
    deliverable: 'Approved design and working website.',
  },
  {
    number: '05',
    title: 'Testing & Quality Check',
    description: 'We test the website across devices and browsers. We review mobile responsiveness, forms, functionality, and performance.',
    deliverable: 'Tested website and revision checklist.',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    description: 'We prepare the website for launch, publish it, and provide agreed handover guidance. We can also discuss maintenance and future improvements.',
    deliverable: 'Live website and handover materials.',
  },
]

const timelines = [
  { type: 'Landing Page', time: '1 to 2 weeks', note: 'Single-offer campaign page with conversion tracking setup' },
  { type: 'Business Website', time: '3 to 5 weeks', note: 'Multi-page conversion website with CMS and lead forms' },
  { type: 'eCommerce Website', time: '6 to 10 weeks', note: 'Full store build with payment gateways, inventory, and logistics' },
  { type: 'Website Redesign', time: '4 to 8 weeks', note: 'Rebuilding underperforming sites while preserving valuable SEO rankings' },
]

export default function Process() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Our 6-step website{' '}
              <span className="italic text-frame-accent">process.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            We follow a structured engineering process from initial consultation to final launch and handover. Exact timelines depend on scope and content readiness.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                  Deliverable
                </span>
                <span className="mt-1 font-heading text-xs text-zinc-200 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Production Timelines Architectural Ledger */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h3 className="font-mono text-xs tracking-[1.1px] text-frame-accent">
              Typical Turnaround Timelines
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {timelines.map((item, i) => (
              <div key={i} className="pt-3 sm:pt-0 sm:px-4 first:pl-0 last:pr-0 space-y-1">
                <span className="font-heading text-sm font-medium text-white block">
                  {item.type}
                </span>
                <span className="font-mono text-xs text-frame-accent block">
                  {item.time}
                </span>
                <p className="text-xs text-zinc-400 leading-normal">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
