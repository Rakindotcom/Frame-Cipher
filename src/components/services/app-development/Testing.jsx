'use client'

import React from 'react'

const testingStages = [
  {
    title: 'Functional Testing',
    desc: 'Checking features and important workflows against the approved requirements.',
  },
  {
    title: 'Device & OS Testing',
    desc: 'Testing supported devices and operating-system versions relevant to the project.',
  },
  {
    title: 'Performance Testing',
    desc: 'Reviewing loading, responsiveness, API behavior, and other performance concerns.',
  },
  {
    title: 'Integration Testing',
    desc: 'Testing payments, APIs, notifications, maps, authentication, and other connected systems.',
  },
  {
    title: 'Usability Testing',
    desc: 'Reviewing important journeys and interface behavior to identify friction before release.',
  },
  {
    title: 'Regression Testing',
    desc: 'Checking previously completed features after major changes or new development.',
  },
  {
    title: 'Pre-Release Testing',
    desc: 'Performing final checks on the production-ready build before store submission or deployment.',
  },
]

export default function Testing() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Testing &amp;{' '}
            <span className="italic text-frame-accent">Quality Assurance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Testing is performed throughout development rather than saved for the final stage.
          </p>
        </div>

        {/* Modality 4: Elevated Surface Card Grid with Top Laser Sheen */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testingStages.map((stage, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
