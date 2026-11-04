'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: "You don't need separate teams for design, mobile development, backend development, and technical coordination.",
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend native, cross-platform, SaaS, web, or MVP approaches based on the project\'s actual requirements.',
  },
  {
    title: 'Design Before Development',
    desc: 'User flows and interface structure are considered before development so technical work isn\'t built around unclear product decisions.',
  },
  {
    title: 'Development-Aware UI/UX',
    desc: 'Our designers and developers can work within the same project context, making the transition from approved design to implementation clearer.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Major stages can include review and approval checkpoints so you remain involved throughout development.',
  },
  {
    title: 'Full-Cycle Support',
    desc: 'From discovery and architecture through testing, launch, and post-launch improvements, the project stays within one coordinated workflow.',
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
                <span className="italic text-frame-accent">App Development.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                Framecipher connects product strategy, UI/UX, application development, backend engineering, and launch support within one in-house team.
              </p>

              {/* Stat Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Source Code &amp; IP Ownership Handover
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You own all repositories, Figma design assets, schemas, API endpoints, and store developer accounts with complete independence.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your App Project
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {whyChooseUs.map((reason, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    {reason.desc}
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
