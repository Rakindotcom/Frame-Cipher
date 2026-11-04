'use client'

import React from 'react'

const backendAreas = [
  'Backend architecture',
  'Database design',
  'API development',
  'Authentication and authorization',
  'Business logic',
  'Admin systems',
  'File and media handling',
  'Data validation',
  'Third-party connections',
  'Deployment and environment setup',
  'Scalability planning',
]

export default function BackendDevelopment() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Architecture &amp;{' '}
            <span className="italic text-frame-accent">Backend Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The mobile interface is only one part of a working application. Backend systems, databases, APIs, authentication, business logic, and infrastructure determine how the product operates behind the interface. Depending on the project, we can handle:
          </p>
        </div>

        {/* 11 Areas Card on #121214 */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {backendAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#0f1011] p-4 sm:p-5 transition-colors duration-200 hover:bg-[#141516]"
              >
                <span className="font-mono text-xs text-frame-accent font-medium">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              We treat the application as one connected system rather than separating the mobile interface from the backend architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
