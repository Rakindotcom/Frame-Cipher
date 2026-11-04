'use client'

import React from 'react'
import { Check } from 'lucide-react'

const bangladeshMaintenancePoints = [
  'Mobile-first usage across the country',
  'Local business workflows',
  'Payment integrations (bKash, Nagad)',
  'Other market-specific requirements',
]

const internationalMaintenancePoints = [
  'Technology stack on the target platform',
  'Operating hours and support windows',
  'Integrations and business requirements',
  'Target-market context for every change',
]

export default function Markets() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Maintenance for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International Businesses.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka and provides website maintenance for businesses in Bangladesh and international markets.
          </p>
        </div>

        {/* 2 Regional Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Bangladesh Websites Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors hover:border-white/[0.14]">
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium text-white">
              Bangladesh Websites
            </h3>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300">
              Maintenance can consider:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-normal text-zinc-200">
              {bangladeshMaintenancePoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* International Websites Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors hover:border-white/[0.14]">
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium text-white">
              International Websites
            </h3>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300">
              We adapt the support process around:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-normal text-zinc-200">
              {internationalMaintenancePoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Market Principle Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-zinc-300">
            The same maintenance principle applies in every market: identify risks early, keep the website maintained, and make important technical work visible.
          </p>
        </div>
      </div>
    </section>
  )
}
