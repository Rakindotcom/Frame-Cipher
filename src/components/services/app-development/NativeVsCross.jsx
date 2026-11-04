'use client'

import React from 'react'

const nativeVsCrossRows = [
  {
    native: 'Built specifically for Android or iOS',
    cross: 'Uses a shared codebase across platforms',
  },
  {
    native: 'Greater control over platform-specific features',
    cross: 'Efficient for reaching multiple platforms',
  },
  {
    native: 'Useful for highly platform-specific products',
    cross: 'Suitable for many business and consumer applications',
  },
  {
    native: 'Separate platform development may be required',
    cross: 'Reduces duplicated development work',
  },
  {
    native: 'Can be appropriate for demanding platform integrations',
    cross: 'Can support faster multi-platform delivery',
  },
]

export default function NativeVsCross() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Native vs Cross-Platform{' '}
            <span className="italic text-frame-accent">App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Choosing between native and cross-platform development depends on your product requirements rather than a fixed rule.
          </p>
        </div>

        {/* Comparison Table on #121214 */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/2">
                  Native App Development
                </th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/2">
                  Cross-Platform App Development
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
              {nativeVsCrossRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-medium text-white leading-relaxed border-r border-white/[0.08]">
                    {row.native}
                  </td>
                  <td className="p-5 md:p-6 text-zinc-300 leading-relaxed">
                    {row.cross}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Evaluation Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-zinc-300">
            We consider the target users, required features, performance needs, timeline, budget, integrations, and long-term roadmap before recommending a technology.
          </p>
        </div>
      </div>
    </section>
  )
}
