'use client'

import React from 'react'
import { Check } from 'lucide-react'

const takeoverChecklist = [
  'Platform and technology stack',
  'Website access',
  'Hosting and domain setup',
  'Existing backups',
  'Security status',
  'Update backlog',
  'Plugin, app, or dependency issues',
  'Performance concerns',
  'Important integrations',
  'Known bugs',
  'Critical website functions',
]

export default function Takeover() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Maintenance for{' '}
            <span className="italic text-frame-accent">Existing or Third-Party Builds.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            You do not need to work with the original developer to maintain your website. We can take over maintenance for websites built by another agency, freelancer, internal team, or previous developer. Before ongoing maintenance begins, we review the current setup so we understand what we are taking responsibility for.
          </p>
        </div>

        {/* Takeover Audit Card */}
        <div className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12">
          <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            Initial Takeover Review
          </h3>
          <p className="mt-2 text-sm font-normal text-zinc-300 mb-6">We assess:</p>

          <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
            {takeoverChecklist.map((chk, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{chk}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
            <p>
              We then identify the priority issues and define a maintenance scope around the current condition of the website.
            </p>
            <p className="font-medium text-white">
              This gives the new maintenance relationship a documented starting point instead of assuming the site is already healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
