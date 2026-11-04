'use client'

import React from 'react'

const architecturePillars = [
  {
    title: 'Shared Application Logic',
    desc: 'Common business rules, validation, models, workflows, and reusable application functionality can be structured for both platforms.',
  },
  {
    title: 'State Management',
    desc: 'We organize application state so screens, sessions, data, and user actions remain predictable as the product grows.',
  },
  {
    title: 'API & Data Layer',
    desc: 'Networking, authentication, models, API responses, local data, and error handling are structured separately from the interface where appropriate.',
  },
  {
    title: 'Local Storage',
    desc: 'Applications that need local data can use suitable device storage for cached content, preferences, offline workflows, and temporary application state.',
  },
  {
    title: 'Modular Structure',
    desc: 'Features can be organized into maintainable modules so the application remains easier to extend as the product becomes larger.',
  },
  {
    title: 'Scalable Backend Connection',
    desc: 'The mobile architecture is planned around the backend it depends on, including authentication, APIs, file handling, notifications, business logic, and administrative workflows.',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App{' '}
            <span className="italic text-frame-accent">Architecture.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A reliable cross-platform application should share the right code without forcing every feature into the same implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {architecturePillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
