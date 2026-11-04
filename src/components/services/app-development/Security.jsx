'use client'

import React from 'react'

const securityPillars = [
  {
    title: 'Secure Authentication',
    desc: 'Protecting accounts through appropriate authentication and authorization methods.',
  },
  {
    title: 'Role-Based Access',
    desc: 'Controlling what customers, staff, administrators, and other user types can view or modify.',
  },
  {
    title: 'Secure API Communication',
    desc: 'Protecting data exchanged between the application, backend, and third-party services.',
  },
  {
    title: 'Data Protection',
    desc: "Handling customer and business information according to the application's actual requirements.",
  },
  {
    title: 'Dependency & Platform Maintenance',
    desc: 'Keeping relevant frameworks, libraries, and platform components updated to reduce avoidable security and compatibility risks.',
  },
  {
    title: 'Secure Payment Workflows',
    desc: "Using appropriate payment-provider integrations and following the provider's required transaction flow.",
  },
]

export default function Security() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Security &amp;{' '}
            <span className="italic text-frame-accent">Data Protection.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security should be considered throughout application development rather than added at the end. Depending on the product, security planning can include:
          </p>
        </div>

        {/* Modality 3: Shared 1px Hairline Continuum Matrix */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((sec, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {sec.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Security requirements vary by product, industry, data, and integrations, so the exact approach is defined during technical planning.
          </p>
        </div>
      </div>
    </section>
  )
}
