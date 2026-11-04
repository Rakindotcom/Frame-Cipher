'use client'

import React from 'react'

const approachesTable = [
  {
    approach: 'Visual Refresh',
    bestWhen: 'The structure and platform work, but the interface looks dated',
    whatChanges: 'Visual design, styling, typography, imagery, and selected layouts',
  },
  {
    approach: 'UX Redesign',
    bestWhen: 'Visitors struggle with navigation or important actions',
    whatChanges: 'User flows, navigation, layouts, and information architecture',
  },
  {
    approach: 'Structural Redesign',
    bestWhen: 'The website has grown without a clear content structure',
    whatChanges: 'Sitemap, hierarchy, page relationships, and content organization',
  },
  {
    approach: 'Full Rebuild',
    bestWhen: 'Existing code or technology limits performance or functionality',
    whatChanges: 'Design, frontend, backend, and technical foundation',
  },
  {
    approach: 'Platform Migration',
    bestWhen: 'The current CMS or platform is the actual bottleneck',
    whatChanges: 'Platform, content, URLs, integrations, and SEO migration',
  },
]

export default function Offerings() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Refresh, Redesign,{' '}
            <span className="italic text-frame-accent">Rebuild or Migrate?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every outdated website needs the same level of work. The right approach depends on what the audit finds.
          </p>
        </div>

        {/* Diagnostic Approaches Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Approach</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Best When</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">What Changes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
              {approachesTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base md:text-lg font-medium uppercase text-white">{row.approach}</td>
                  <td className="p-5 md:p-6 text-sm md:text-base text-zinc-400 leading-relaxed">{row.bestWhen}</td>
                  <td className="p-5 md:p-6 text-sm md:text-base text-zinc-200 leading-relaxed">{row.whatChanges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
            Our Recommendation Comes After the Audit
          </h3>
          <div className="mt-3 space-y-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-4xl">
            <p>
              We don&apos;t push a full rebuild when a focused redesign can solve the problem.
            </p>
            <p>
              Likewise, we don&apos;t recommend a visual refresh when the underlying platform, structure, or technical foundation is causing the problem.
            </p>
            <p className="font-medium text-white">
              The objective is not to sell the biggest redesign. It&apos;s to fix the right problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
