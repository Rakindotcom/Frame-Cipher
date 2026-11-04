'use client'

import React from 'react'

const startRequirements = [
  'Business or product idea',
  'Target users',
  'Core features',
  'Preferred platforms, if known',
  'Existing website or software',
  'Required integrations',
  'Backend or API requirements',
  'Brand assets or design references',
  'Existing application access, if this is a modernization project',
  'App Store or Google Play account details when required',
]

export default function StartRequirements() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We Need to Start{' '}
            <span className="italic text-frame-accent">Your App Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            You do not need to have the complete technical architecture figured out before contacting us. We can help define the right approach during discovery. We may need:
          </p>
        </div>

        {/* 10 Items Card on #121214 */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {startRequirements.map((req, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.14]"
              >
                <span className="font-mono text-xs text-frame-accent font-medium">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              The clearer the initial requirements, the easier it is to recommend the right scope and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
