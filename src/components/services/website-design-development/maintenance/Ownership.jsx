'use client'

import React from 'react'
import { Check } from 'lucide-react'

const documentationItems = [
  'Website and hosting access',
  'Domain management',
  'CMS or application access',
  'Analytics and tracking',
  'Important integrations',
  'Backup and recovery procedures',
  'Maintenance scope',
  'Technical notes',
  'Third-party accounts',
]

export default function Ownership() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Ownership,{' '}
            <span className="italic text-frame-accent">Access &amp; Documentation.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Website maintenance should not mean giving up control of your digital assets. We work with the agreed access structure for your website, hosting, domain, analytics, third-party services, and other systems required for maintenance.
          </p>
        </div>

        {/* Documentation Items Card */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-6">
            Where applicable, documentation can cover:
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documentationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
            <p>
              Domain and hosting ownership should remain clearly documented and aligned with the project agreement.
            </p>
            <p className="font-medium text-white">
              Our goal is to make the maintenance relationship accountable without making the business dependent on one individual to understand how its website works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
