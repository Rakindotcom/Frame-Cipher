'use client'

import React from 'react'
import { Check } from 'lucide-react'

const modernizationAreas = [
  'Legacy technology modernization',
  'UI/UX redesign',
  'New feature development',
  'Backend or API improvements',
  'Performance optimization',
  'OS compatibility updates',
  'Security improvements',
  'Integration updates',
  'Codebase improvements',
  'Architecture modernization',
]

export default function Modernization() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Modernization &amp; Existing Application Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            You may already have an application that works but needs technical, usability, or product improvements. We can support existing applications that require:
          </p>
        </div>

        {/* 10 Areas Card on #121214 */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modernizationAreas.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#18181B] p-4 transition-colors hover:border-white/[0.18]"
              >
                <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                <span className="text-sm font-normal text-zinc-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Before major changes begin, we review the existing technology stack, dependencies, architecture, integrations, and current problems so the modernization approach reflects the actual condition of the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
