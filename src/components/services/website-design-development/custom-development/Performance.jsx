'use client'

import React from 'react'

const performanceAreas = [
  'Rendering strategy',
  'Server and client component boundaries',
  'JavaScript bundle size',
  'Image and asset delivery',
  'Data fetching',
  'Caching and revalidation',
  'API response efficiency',
  'Code splitting',
  'Lazy loading',
  'Mobile performance',
  'Core Web Vitals',
]

export default function Performance() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js Performance &amp;{' '}
            <span className="italic text-frame-accent">Core Web Vitals.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Performance should be considered during development rather than patched after launch. We focus on the parts of the application that can affect real user experience, including:
          </p>
        </div>

        {/* 11 Performance Areas Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {performanceAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-3.5 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/[0.14]"
            >
              <span className="text-frame-accent font-bold">&bull;</span>
              <span>{area}</span>
            </div>
          ))}
        </div>

        {/* Takeaway Paragraph */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Next.js supports different rendering approaches for different use cases, such as static and dynamic rendering. The right choice depends on whether content is shared, personalized, frequently changing, or data-driven. We focus on measured improvements rather than promising an arbitrary performance score for every project.
        </p>
      </div>
    </section>
  )
}
