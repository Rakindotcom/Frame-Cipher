'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChooseFramecipher = [
  {
    title: 'One In-House Team',
    description: 'Research, wireframing, visual design, testing, and handoff stay coordinated within one team.',
  },
  {
    title: 'Structure Before Visuals',
    description: 'We start with user flow and information architecture instead of jumping directly into colors, decoration, or visual trends.',
  },
  {
    title: 'Development-Aware Design',
    description: 'Our designs consider how the final experience will be implemented, including responsive behavior, component states, interactions, and handoff requirements.',
  },
  {
    title: 'Transparent Review Process',
    description: 'Important stages include review and approval checkpoints so you can confirm the direction before the next phase begins.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We recommend the design approach that fits the product rather than forcing every project into the same platform, template, or workflow.',
  },
  {
    title: 'Local & International Experience',
    description: 'Based in Dhaka, we work with businesses in Bangladesh and international markets, adapting the design process around the product, audience, and market requirements.',
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
                <span className="italic text-frame-accent">UI/UX Design.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                We treat UI/UX design as a connected process from research and structure through visual design, validation, and development handoff.
              </p>

              {/* Stat Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Figma Tokens &amp; Dev-Ready Specs
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every screen, state, and interaction is engineered with developer handoff in mind, eliminating guesswork during implementation.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your UI/UX Project
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {whyChooseFramecipher.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums tracking-wider text-frame-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    {item.description}
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
