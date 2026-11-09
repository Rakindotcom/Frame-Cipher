'use client'

import React from 'react'
import { Check } from 'lucide-react'

const uiUxPoints = [
  'User journey mapping',
  'Task and conversion flows',
  'Information architecture',
  'Wireframes',
  'Interactive prototypes',
  'High-fidelity interface design',
  'Design systems',
  'Responsive and accessibility-aware design',
  'Usability testing where scoped',
]

export default function UiUxDesign() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            UI/UX Design for Apps.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A successful app needs a clear experience before it needs more code. Our app UI/UX work can include:
          </p>
        </div>

        {/* 9 Points Grid on #121214 */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uiUxPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#18181B] p-4 transition-colors hover:border-white/[0.18]"
              >
                <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                <span className="text-sm font-normal text-zinc-200">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              We connect UX planning with development requirements so the final interface is designed around actual user actions rather than isolated screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
