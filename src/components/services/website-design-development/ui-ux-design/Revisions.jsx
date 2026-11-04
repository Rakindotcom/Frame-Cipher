'use client'

import React from 'react'

const approvalCheckpoints = [
  {
    title: 'Review & Approval',
    description: 'Major stages can include review and approval checkpoints for research, wireframes, visual design, and prototypes.',
  },
  {
    title: 'Revisions',
    description: 'The number of included revision rounds depends on the selected project scope and is defined before work begins.',
  },
  {
    title: 'Handoff Support',
    description: 'After final approval, we can provide clarification and implementation support where included in the project scope.',
  },
  {
    title: 'Post-Delivery Support',
    description: 'Additional design changes, new features, extended design-system work, and future product updates can be handled as a separate scope.',
  },
]

export default function Revisions() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Revisions, Approvals &amp;{' '}
            <span className="italic text-frame-accent">Post-Delivery Support.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            UI/UX projects work best when feedback happens at the right stage instead of being saved until the end.
          </p>
        </div>

        {/* 4 Checkpoint Cards Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {approvalCheckpoints.map((chk, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Checkpoint 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {chk.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {chk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 italic">
            We do not guarantee a specific conversion rate or business outcome from design alone. Results can also depend on content, implementation, traffic, pricing, marketing, product quality, and other factors outside the design process.
          </p>
        </div>
      </div>
    </section>
  )
}
