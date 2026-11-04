'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Website Health Audit',
    description: 'We review the platform, access, security, backups, performance, integrations, and important website functions.',
  },
  {
    number: '02',
    title: 'Maintenance Plan Scoping',
    description: 'We define the update frequency, backup requirements, monitoring scope, content support, technical support, and response priorities.',
  },
  {
    number: '03',
    title: 'Backup & Monitoring Setup',
    description: 'We establish the required backup process and configure the appropriate monitoring for uptime, performance, errors, and important functionality.',
  },
  {
    number: '04',
    title: 'Safe Updates & Maintenance',
    description: 'Where the platform and environment allow, updates are reviewed and tested before they are applied to the live website.',
  },
  {
    number: '05',
    title: 'Ongoing Monitoring & Support',
    description: 'We monitor the website and handle scheduled maintenance, minor changes, troubleshooting, and identified issues according to the selected plan.',
  },
  {
    number: '06',
    title: 'Incident Response',
    description: 'When a critical issue occurs, we investigate the cause, protect the available data, restore functionality where possible, and document the issue.',
  },
  {
    number: '07',
    title: 'Reporting & Recommendations',
    description: 'Regular reports show completed maintenance, important issues found, and recommendations for keeping the website healthy.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            How We Approach{' '}
            <span className="italic text-frame-accent">Website Maintenance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our maintenance process focuses on preventing avoidable problems and keeping the website&apos;s condition visible over time.
          </p>
        </div>

        {/* 7 Steps Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.14]"
            >
              {/* Background Watermark Numeral */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-bold text-white/[0.03]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>

              <p className="relative z-10 mt-6 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
