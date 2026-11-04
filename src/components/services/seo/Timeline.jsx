'use client'

import React from 'react'

const timelineFactors = [
  'Website age and authority',
  'Technical condition',
  'Industry competition',
  'Search intent and keyword difficulty',
  'Existing content quality',
  'Link and authority profile',
  'Target country or location',
  'Implementation speed',
  'Consistency of ongoing SEO work',
]

export default function Timeline() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Realistic Expectations // Compounding Trajectory
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Long Does{' '}
            <span className="italic text-frame-accent">SEO Take?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            SEO does not follow one fixed timeline because every website starts from a different position.
          </p>
        </div>

        {/* 12-Column Responsive Split (Modality 4) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Column (7 cols): Narrative Insights */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-5">
              <p>
                An initial SEO audit can often be completed within a few business days once the required information and access are available. Technical improvements may be implemented sooner, while meaningful organic growth usually requires sustained work over several months.
              </p>
              <div className="h-px w-full bg-white/[0.06]" />
              <p>
                Local visibility can sometimes improve sooner than highly competitive national or international rankings, but no reliable timeline applies to every website.
              </p>
              <div className="h-px w-full bg-white/[0.06]" />
              <p>
                For launches, seasonal campaigns, or important business dates, starting SEO early gives technical and content work more time to take effect.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): 9 Timeline Drivers */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                Timeline Drivers
              </span>

              <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                The timeline can depend on:
              </h3>

              <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-4">
                {timelineFactors.map((factor, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 border-b border-white/[0.04] pb-2.5 text-xs sm:text-sm font-normal text-zinc-300"
                  >
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
