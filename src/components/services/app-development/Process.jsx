'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Platform Strategy',
    desc: 'We review the idea, users, business goals, budget, and product requirements before recommending Android, iOS, cross-platform, SaaS, or an MVP-first approach.',
  },
  {
    step: '02',
    title: 'Architecture & Planning',
    desc: 'We define the technical structure, backend requirements, APIs, integrations, data flow, and major product components.',
  },
  {
    step: '03',
    title: 'UI/UX Design',
    desc: 'We map important user journeys, create wireframes, develop the interface, and validate the experience before development progresses.',
  },
  {
    step: '04',
    title: 'Development',
    desc: 'Our team builds the application, backend, integrations, and supporting systems according to the approved scope.',
  },
  {
    step: '05',
    title: 'Testing & Quality Assurance',
    desc: 'We test important features, integrations, supported devices, operating systems, and performance conditions before release.',
  },
  {
    step: '06',
    title: 'Launch',
    desc: 'We prepare the production build and support the relevant deployment or app-store submission process.',
  },
  {
    step: '07',
    title: 'Post-Launch Support',
    desc: 'After launch, we can continue with bug fixes, compatibility updates, monitoring, feature improvements, and ongoing technical support.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* 2-Column Sticky Layout + Modality 1 Numbered Step Rows (§3.7 Standard) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              How We Approach App Development.
            </h2>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300">
              Our process is designed to connect product goals, user experience, technology, and launch requirements from the beginning.
            </p>
          </div>

          <div className="divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="group flex flex-col gap-3 p-6 sm:p-8 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-semibold text-purple-600 tabular-nums">
                      {step.step}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-zinc-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-purple-600"
                  >
                    &rarr;
                  </span>
                </div>

                <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 sm:pl-9">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
