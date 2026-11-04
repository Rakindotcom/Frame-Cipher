'use client'

import React from 'react'

const paragraphs = [
  'AI Search Optimization timelines depend on the number of pages, prompt sets, markets, entity work, content restructuring, technical scope, and ongoing monitoring required.',
  'A standard AI visibility audit is typically delivered within about a week. A standard AEO/GEO package, focusing on priority content optimization, entity review, prompt testing, and implementation guidance, usually takes 3 to 4 weeks. A comprehensive AI visibility build covering content, entity, technical, source-authority, and visibility strategy can take 6 to 8 weeks.',
  'AI search visibility builds alongside traditional SEO foundations rather than replacing them, so we track progress, citations, and mentions repeatedly over time as AI systems, sources, and competitors change.',
]

const timelineRows = [
  { project: 'AI Visibility Audit', duration: '~1 week' },
  { project: 'Standard AEO/GEO Package', duration: '~3–4 weeks' },
  { project: 'Comprehensive AI Visibility Build', duration: '~6–8 weeks' },
  { project: 'Ongoing AI Visibility Monitoring', duration: 'Ongoing' },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Delivery Schedules // Realistic Expectations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Project <span className="italic text-frame-accent">Timelines</span> &amp; Typical Delivery
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Timelines depend on scope, readiness, and review speed, so we set expectations rather
            than promising a fixed schedule.
          </p>
        </div>

        {/* 2-Column Content + Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
              Engagement &amp; typical delivery
            </span>
            <h3 className="mt-2 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              What this looks like in practice
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="pb-3 text-xs font-mono uppercase tracking-wider text-frame-accent">
                      Project Type
                    </th>
                    <th className="pb-3 text-xs font-mono uppercase tracking-wider text-frame-accent">
                      Typical Delivery
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {timelineRows.map((row) => (
                    <tr key={row.project}>
                      <td className="py-3.5 pr-4 text-xs sm:text-sm font-medium text-white">
                        {row.project}
                      </td>
                      <td className="py-3.5 text-xs sm:text-sm font-mono text-zinc-400">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
