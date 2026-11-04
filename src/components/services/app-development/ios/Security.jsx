'use client'

import React from 'react'

const securityPillars = [
  {
    title: 'Secure Authentication',
    desc: 'Authentication flows are designed around secure sessions, account recovery, access control, and suitable authentication methods.',
  },
  {
    title: 'Protected Data',
    desc: "Sensitive information is handled using appropriate storage and transmission practices based on the application's requirements.",
  },
  {
    title: 'API Security',
    desc: 'We account for authenticated endpoints, authorization, validation, secure communication, and backend access controls.',
  },
  {
    title: 'Permission Management',
    desc: 'Camera, location, photos, notifications, Bluetooth, and other permissions are requested based on actual product needs.',
  },
  {
    title: 'Privacy-Aware Development',
    desc: 'We review what data the app collects and how permissions, disclosures, and user-facing privacy requirements affect the product.',
  },
]

export default function Security() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Security, Privacy &amp;{' '}
            <span className="italic text-frame-accent">Permissions.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security decisions should be considered during product architecture, not added as a final checklist right before App Store submission.
          </p>
        </div>

        {/* 5 Security Protocols Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((sec, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                  {sec.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
