'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We discuss your app idea, business goals, target users, required features, existing systems, and project priorities.',
  },
  {
    step: '02',
    title: 'Strategy & Architecture Planning',
    desc: 'We review the product requirements and define the framework, technical architecture, shared-vs-native approach, integrations, and initial scope.',
  },
  {
    step: '03',
    title: 'Design & Development',
    desc: 'We create the platform-aware interface and develop the approved application with regular review checkpoints.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    desc: 'We test both platforms independently across the agreed devices, features, integrations, and release conditions.',
  },
  {
    step: '05',
    title: 'Launch & Dual Store Deployment',
    desc: 'We prepare the production builds, support the required testing and submission workflows, and move both applications toward release.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach a{' '}
            <span className="italic text-frame-accent">Cross-Platform App Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A disciplined development approach moving your project from initial discovery through dual-store launch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-3xl font-medium text-frame-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
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
