import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your brand, audience, existing website, content structure, integrations, goals, and how your team plans to manage the site after launch.',
  },
  {
    number: '02',
    title: 'Content & CMS Planning',
    description: 'We define Collections, fields, relationships, reusable components, content requirements, and the publishing workflow.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We plan page hierarchy, responsive layouts, visual systems, interactions, and conversion paths before final development.',
  },
  {
    number: '04',
    title: 'Webflow Development',
    description: 'We build the approved design in Webflow, connect CMS content, implement components, configure interactions, and add agreed integrations or custom code.',
  },
  {
    number: '05',
    title: 'SEO, Accessibility & Performance QA',
    description: 'We review metadata, links, redirects, responsive behavior, forms, interactions, page performance, accessibility, and other agreed technical requirements.',
  },
  {
    number: '06',
    title: 'Client Review & Revisions',
    description: 'You review the project at defined checkpoints so major design, CMS, and functionality decisions are addressed before launch.',
  },
  {
    number: '07',
    title: 'Launch & CMS Handoff',
    description: 'We complete final launch checks, publish the website, provide the agreed access and documentation, and train your team on routine CMS management.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Webflow Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We structure the process around getting the content model and design system right before the final build is locked in.
          </p>
        </div>

        {/* 7 Process Step Cards */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.14]"
            >
              <p
                className="absolute -right-2 -top-4 select-none font-mono text-[6.5rem] sm:text-[7.5rem] font-bold leading-none tracking-tighter text-white/[0.03]"
                aria-hidden="true"
              >
                {step.number}
              </p>
              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
