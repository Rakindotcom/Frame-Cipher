'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { Check } from 'lucide-react'

const commitments = [
  'Sound strategy',
  'Technically correct implementation',
  'Useful content',
  'Relevant authority building',
  'Transparent reporting',
  'Continuous optimization based on available evidence',
]

export default function Guarantee() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Honest Expectations // Integrity Standard
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why We Don&apos;t Guarantee{' '}
            <span className="italic text-frame-accent">Google Rankings.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            No SEO agency controls Google&apos;s algorithms, competitor activity, search demand, or every technical factor that can influence search results. For that reason, we do not guarantee a specific Google position such as #1.
          </p>
        </div>

        {/* 12-Column Responsive Split (Modality 4) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
              <p>
                Instead, we focus on the areas we can control: sound strategy, technically correct implementation, useful content, relevant authority building, transparent reporting, and continuous optimization based on available evidence.
              </p>
              <div className="h-px w-full bg-white/[0.06]" />
              <p>
                Our commitment is to explain the work clearly, prioritize meaningful opportunities, and avoid tactics that create unnecessary long-term risk.
              </p>
            </div>
          </div>

          {/* Right Commitments Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                What We Focus On
              </span>

              <ul className="mt-6 space-y-3.5 border-t border-white/[0.06] pt-5">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <PosterButton href="/contact" variant="outline" className="w-full justify-center">
                  Talk to the Framecipher SEO Team
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
