'use client'

import React from 'react'

const models = [
  {
    title: 'Project-Based Strategy',
    body: 'A defined engagement audit, roadmap, and a specific deliverable — with a clear start and end point. Suited to businesses that need direction once and can execute independently after.',
  },
  {
    title: 'Fractional Ongoing Advisory',
    body: 'Regular, retainer-based strategic guidance without full execution work — closer to having a part-time SEO lead than hiring an agency for hands-on tasks.',
  },
  {
    title: 'Hybrid: Strategy Plus Selective Execution',
    body: "Strategic direction from us, paired with execution on the specific pieces your internal team can't handle, technical work, for example, while your team owns content.",
  },
  {
    title: 'Full Consulting-to-Execution Transition',
    body: 'Starting with strategy and consulting, then transitioning into full execution with us once the roadmap is validated and trust is established.',
  },
]

export default function EngagementModels() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Flexible By Design</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Different Ways to{' '}
            <span className="italic text-frame-accent">Work With Us</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Strategy and consulting doesn&apos;t fit one single engagement model, so we don&apos;t force one.
          </p>
        </div>

        {/* 4 Models Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {models.map((model, index) => (
            <div
              key={model.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Model // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {model.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {model.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-zinc-300">
            None of these is the &ldquo;right&rdquo; way to work with a consulting partner — the right one depends entirely on what your team already has and what it&apos;s actually missing.
          </p>
        </div>
      </div>
    </section>
  )
}
