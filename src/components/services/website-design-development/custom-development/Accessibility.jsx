'use client'

import React from 'react'
import { Check } from 'lucide-react'

const accessibilityAreas = [
  'Semantic HTML',
  'Keyboard navigation',
  'Focus management',
  'Accessible forms',
  'Screen-reader support',
  'Appropriate ARIA usage',
  'Readable interfaces',
  'Responsive interaction patterns',
]

export default function Accessibility() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Accessibility &amp; Inclusive{' '}
            <span className="italic text-frame-accent">Next.js Development.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Accessibility starts during interface and frontend development. Depending on the project, we consider:
          </p>
        </div>

        {/* 8 Accessibility Areas Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {accessibilityAreas.map((acc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-3.5 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/[0.14]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </span>
              <span>{acc}</span>
            </div>
          ))}
        </div>

        {/* Takeaway Paragraph */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-400">
          Accessibility requirements depend on the audience, project scope, and applicable standards. We address them as part of the design and development process rather than leaving them as a final check.
        </p>
      </div>
    </section>
  )
}
