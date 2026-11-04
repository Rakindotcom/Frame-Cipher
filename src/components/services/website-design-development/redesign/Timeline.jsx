'use client'

import React from 'react'

const timelineTableRows = [
  { type: 'Visual Refresh', timeline: '~2 to 3 weeks' },
  { type: 'Standard Redesign', timeline: '~4 to 6 weeks' },
  { type: 'Platform Migration', timeline: '~6 to 10 weeks' },
  { type: 'Complex / Ecommerce', timeline: '~8 to 14+ weeks' },
]

export default function Timeline() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Redesign{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A website redesign typically takes 2 to 14+ weeks, depending on how much of the website needs rebuilding, whether a platform migration is involved, and the size and complexity of the existing site.
          </p>
        </div>

        {/* Timeline Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] max-w-3xl">
          <table className="w-full text-left">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Project Type</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Typical Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
              {timelineTableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">{row.type}</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-frame-accent">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Timeline Footnote Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 max-w-4xl space-y-2 text-sm sm:text-base font-normal text-zinc-300 leading-relaxed">
          <p>
            Projects can move faster when access to the current website, analytics, hosting, content, and other required systems is provided at the beginning.
          </p>
          <p className="font-medium text-white">
            The final timeline is confirmed after the audit and scope are established.
          </p>
        </div>
      </div>
    </section>
  )
}
