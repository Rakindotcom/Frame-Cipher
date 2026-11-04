'use client'

import React from 'react'
import { Check } from 'lucide-react'

const developerHandoffItems = [
  'Organized Figma files',
  'Reusable components',
  'Design system references',
  'Typography and spacing rules',
  'Responsive layouts',
  'Hover, focus, active, disabled, loading, and error states',
  'Navigation and interaction flows',
  'Prototype links',
  'Export-ready assets',
  'Development notes and specifications',
]

export default function DeveloperHandoff() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Developer-Ready{' '}
            <span className="italic text-frame-accent">UI/UX Handoff.</span>
          </h2>
        </div>

        {/* Intro Box */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 mb-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            A design file should not leave developers guessing how the product is supposed to work.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            We organize UI/UX deliverables so developers can understand the structure, states, interactions, and responsive behavior before implementation begins.
          </p>
        </div>

        {/* What Developers Can Receive */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-6">
            What Developers Can Receive
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developerHandoffItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
            <p>
              Because Framecipher also provides website and application development, we can support the transition from approved design into implementation where required.
            </p>
            <p className="font-medium text-white">
              The result is a clearer handoff with fewer assumptions between design and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
