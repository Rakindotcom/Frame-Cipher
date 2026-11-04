'use client'

import React from 'react'

const deliverables = [
  {
    category: 'Product & UX',
    items: [
      'User flows',
      'Wireframes',
      'UI/UX designs',
      'Interactive prototypes where required',
    ],
  },
  {
    category: 'Application',
    items: [
      'Production-ready mobile or web application',
      'Configured features',
      'User workflows',
      'Platform-specific builds where applicable',
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      'Backend services',
      'Database structure',
      'APIs',
      'Authentication and permissions',
      'Required integrations',
    ],
  },
  {
    category: 'Testing & Release',
    items: [
      'Tested production build',
      'Release configuration',
      'Store submission support where included',
    ],
  },
  {
    category: 'Handoff & Documentation',
    items: [
      'Source code',
      'Design files where applicable',
      'Technical documentation',
      'Deployment information',
      'Access and account documentation',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From an{' '}
            <span className="italic text-frame-accent">App Development Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The final deliverables depend on the agreed scope, but a typical project can include:
          </p>
        </div>

        {/* Modality 3: Shared 1px Hairline 5-Column Continuum Matrix */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {deliverables.map((del, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {del.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
                  {del.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The exact deliverables, source-code ownership, documentation, and support terms are defined in the project agreement.
          </p>
        </div>
      </div>
    </section>
  )
}
