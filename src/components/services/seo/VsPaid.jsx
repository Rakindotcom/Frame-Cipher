'use client'

import React from 'react'

const comparisonRows = [
  {
    seo: 'Builds organic search visibility',
    paid: 'Buys advertising placement',
  },
  {
    seo: 'Requires ongoing optimization',
    paid: 'Can generate visibility soon after launch',
  },
  {
    seo: 'No charge for each organic click',
    paid: 'Usually involves pay-per-click costs',
  },
  {
    seo: 'Results develop over time',
    paid: 'Results depend on active campaign spend',
  },
  {
    seo: 'Content and website improvements can compound',
    paid: 'Traffic generally stops when campaigns stop',
  },
  {
    seo: 'Supports ongoing search discovery',
    paid: 'Useful for time-sensitive campaigns and immediate demand',
  },
]

export default function VsPaid() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Channel Architecture // Strategic Allocation
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SEO vs Paid Search:{' '}
            <span className="italic text-frame-accent">What&apos;s the Difference?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            SEO and paid search use different approaches to gaining visibility and can also support one another.
          </p>
        </div>

        {/* Architectural Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-5 border-r border-white/[0.08] w-1/2 text-white">
                    Organic Search (SEO)
                  </th>
                  <th className="p-5 w-1/2 text-frame-accent">
                    Paid Search (SEM / PPC)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-zinc-300">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="align-top transition-colors hover:bg-white/[0.02]">
                    <td className="p-5 border-r border-white/[0.08] font-normal leading-relaxed text-white">
                      {row.seo}
                    </td>
                    <td className="p-5 font-normal leading-relaxed text-zinc-300">
                      {row.paid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Allocation Takeaways */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              The appropriate mix depends on your goals, timeline, budget, competition, and customer journey.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Some businesses use SEO as a long-term search foundation while paid search supports launches, promotions, or specific commercial campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
