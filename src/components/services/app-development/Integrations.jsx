'use client'

import React from 'react'

const integrationTypes = [
  'Payment gateways',
  'bKash and Nagad where applicable',
  'CRM systems',
  'Maps and location services',
  'SMS and email services',
  'Social authentication',
  'Analytics platforms',
  'Cloud services',
  'External APIs',
  'Existing business software',
]

export default function Integrations() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API, Payment &amp;{' '}
            <span className="italic text-frame-accent">Third-Party Integrations.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Modern applications often depend on external services. We plan integrations around the required data flow, authentication, business rules, and failure conditions. Integrations can include:
          </p>
        </div>

        {/* 10 Types Card on #121214 */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrationTypes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.14]"
              >
                <span className="h-2 w-2 rounded-full bg-frame-accent shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-zinc-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              The exact integration scope depends on the provider, available APIs, authentication requirements, data flow, and project complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
