import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We review your business, audience, goals, content, functionality, integrations, and preferred editing experience.',
  },
  {
    number: '02',
    title: 'Platform & Architecture Planning',
    description: 'We confirm whether standard Wix or Wix Studio is the right fit and define the sitemap, content structure, technical scope, and required functionality.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We plan the user journey, page layouts, visual hierarchy, calls to action, and responsive experience around your brand.',
  },
  {
    number: '04',
    title: 'Wix Development',
    description: 'We build the website, connect CMS content, configure apps, implement integrations, and add custom functionality where required.',
  },
  {
    number: '05',
    title: 'SEO, Performance & Testing',
    description: 'We review metadata, page structure, forms, integrations, responsiveness, performance, analytics, and key user flows across devices.',
  },
  {
    number: '06',
    title: 'Client Review & Revisions',
    description: 'You review the agreed project scope at defined checkpoints so we can refine the website before launch.',
  },
  {
    number: '07',
    title: 'Launch & Handover',
    description: 'We connect the final setup, complete launch checks, and provide the agreed Wix access and basic editor guidance.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Wix Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We keep the process structured so the project stays clear from the first conversation to launch.
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
