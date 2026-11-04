'use client'

import React from 'react'

const onboardingSteps = [
  {
    number: '01',
    title: 'Access & Technology Review',
    description: 'We confirm access to the website, hosting, domain, analytics, relevant third-party services, and other systems required for maintenance.',
  },
  {
    number: '02',
    title: 'Security & Update Review',
    description: 'We check the current update status, known vulnerabilities, outdated dependencies, security configuration, and existing technical issues.',
  },
  {
    number: '03',
    title: 'Backup Baseline',
    description: 'We review the current backup setup and establish a reliable backup and recovery process appropriate for the website.',
  },
  {
    number: '04',
    title: 'Performance & Uptime Baseline',
    description: 'We review website availability, performance, important pages, and critical user journeys so future changes can be compared against a known starting point.',
  },
  {
    number: '05',
    title: 'Critical Function Review',
    description: 'For ecommerce and lead-generation websites, we identify important functions such as forms, checkout, payments, bookings, CRM connections, and other business-critical integrations.',
  },
  {
    number: '06',
    title: 'Maintenance Plan',
    description: 'We turn the assessment into a practical maintenance scope covering update frequency, backup requirements, monitoring, support, content work, reporting, and response priorities.',
  },
]

export default function Onboarding() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Health Audit &amp;{' '}
            <span className="italic text-frame-accent">Maintenance Onboarding.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Before routine maintenance begins, we establish a clear picture of the website&apos;s current condition.
          </p>
        </div>

        {/* 6 Onboarding Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {onboardingSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Onboarding Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            This onboarding process helps prevent inherited problems from being mistaken for newly introduced maintenance issues.
          </p>
        </div>
      </div>
    </section>
  )
}
