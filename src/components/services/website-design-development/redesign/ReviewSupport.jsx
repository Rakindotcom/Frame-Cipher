'use client'

import React from 'react'

const supportStages = [
  {
    title: 'Client Review & Approval',
    description: 'Major design and structural decisions are presented for review before development progresses.',
  },
  {
    title: 'Pre-Launch Review',
    description: 'The completed website goes through functional, responsive, SEO, content, and technical checks before launch.',
  },
  {
    title: 'Launch Support',
    description: 'We remain involved during the launch process to address issues identified during the transition.',
  },
  {
    title: 'Post-Launch Monitoring',
    description: 'We monitor agreed technical and search signals after launch and investigate issues that require attention.',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Long-term maintenance, security updates, performance reviews, content updates, and additional feature development can be provided separately when required.',
  },
]

export default function ReviewSupport() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Review, Approval &amp;{' '}
            <span className="italic text-frame-accent">Post-Launch Support.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A redesign should not move from concept to launch without clear review points.
          </p>
        </div>

        {/* 5 Checkpoints Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportStages.map((stage, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Checkpoint 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
