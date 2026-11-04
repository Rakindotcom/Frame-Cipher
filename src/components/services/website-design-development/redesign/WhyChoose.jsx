'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const rightTeamPoints = [
  {
    title: 'Audit Before Design',
    description: 'We start by understanding the current website instead of immediately creating a new design. Every major redesign decision should have a reason behind it.',
  },
  {
    title: 'One In-House Team',
    description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the technical findings and business goals connected throughout the project.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We don\'t recommend a platform simply because it\'s the one we prefer. If the existing platform can support the required improvements, we can redesign it. If it is holding the website back, we can recommend a more suitable solution.',
  },
  {
    title: 'SEO-Aware Redesign',
    description: 'Your existing rankings, URLs, content, backlinks, and organic traffic are treated as assets that need protection during the redesign.',
  },
  {
    title: 'Business-Focused Decisions',
    description: 'The goal isn\'t simply to produce a newer-looking website. We focus on usability, conversion paths, performance, search visibility, content management, and the actual goals of the business.',
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
                Why We&apos;re the Right{' '}
                <span className="italic text-frame-accent">Website Redesign Team.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                A successful redesign needs more than a designer and a new visual concept. It needs someone to understand what the existing website is doing, what is failing, and what should happen after the redesign.
              </p>

              {/* Stat Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Organic SEO Equity Protected
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We preserve your valuable search rankings, URLs, backlinks, and traffic so you never lose the equity you spent years building.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your Redesign Project
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {rightTeamPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums tracking-wider text-frame-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    {point.description}
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
