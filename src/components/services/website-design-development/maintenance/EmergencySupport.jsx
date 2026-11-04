'use client'

import React from 'react'
import { AlertCircle } from 'lucide-react'

const emergencyTriggers = [
  'The website goes offline',
  'A critical update breaks the site',
  'A checkout stops working',
  'Forms stop submitting',
  'A key integration fails',
  'Malware or suspicious activity is detected',
  'Important website data needs to be restored',
  'A major technical error affects visitors or customers',
]

export default function EmergencySupport() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Emergency Website{' '}
            <span className="italic text-frame-accent">Support &amp; Recovery.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Some website problems cannot wait for a scheduled maintenance cycle.
          </p>
        </div>

        {/* Emergency Triggers Card */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-6">
            Emergency support can apply when:
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyTriggers.map((trigger, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.14]"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                <span className="text-xs sm:text-sm font-normal text-zinc-200 leading-snug">
                  {trigger}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
            <p>
              Our response starts with identifying the immediate problem, protecting the available data, and restoring critical functionality where possible.
            </p>
            <p className="font-medium text-white">
              When a tested backup is available, it can provide an important recovery path. The exact emergency response and availability depend on your maintenance plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
