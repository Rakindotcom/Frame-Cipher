'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChooseUsPillars = [
  {
    title: 'Business-First Architecture',
    desc: 'We start with business requirements, users, workflows, data, and integrations before deciding how the system should be built.',
  },
  {
    title: 'One In-House Team',
    desc: 'Strategy, UX, architecture, design, development, and launch support stay coordinated within one team.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend custom development when it solves a real limitation. When WordPress, Shopify, Webflow, Wix, or another platform is more practical, we say so.',
  },
  {
    title: 'Full-Stack Capability',
    desc: 'Frontend, backend, APIs, authentication, integrations, and application logic are treated as one connected system.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'We consider rendering, technical SEO, data delivery, mobile experience, and application performance from the beginning.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Important stages of architecture, design, and development go through defined review points before the project moves forward.',
  },
  {
    title: 'Built for Long-Term Maintenance',
    desc: 'The objective is not simply to launch the application. We structure the system so new features and future improvements can be added without unnecessary technical debt.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Why Choose Framecipher for{' '}
                <span className="italic text-frame-accent">Custom &amp; Next.js Development.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                Custom software needs closer collaboration than a standard website build. We structure our work around clear architecture, accountable development, and long-term maintainability.
              </p>

              {/* Stat / Guarantee Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Full Source IP Ownership
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You maintain full administrative ownership of your repository, database schema, CI/CD pipelines, and deployed infrastructure from day one.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your Custom Build
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {whyChooseUsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums tracking-wider text-frame-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
