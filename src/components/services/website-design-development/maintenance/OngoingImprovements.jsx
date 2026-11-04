'use client'

import React from 'react'
import { Check } from 'lucide-react'

const ongoingImprovements = [
  'Performance optimization',
  'UX improvements',
  'Conversion-focused changes',
  'New landing pages',
  'Small functionality enhancements',
  'Integration improvements',
  'Technical SEO fixes',
  'Ecommerce improvements',
  'Security hardening',
  'New features through separate development scope',
]

export default function OngoingImprovements() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Post-Launch Support &amp;{' '}
            <span className="italic text-frame-accent">Ongoing Improvements.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Website maintenance can identify opportunities that go beyond routine upkeep. As the website develops, we can support improvements such as:
          </p>
        </div>

        {/* Ongoing Improvements Card */}
        <div className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]">
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {ongoingImprovements.map((item, idx) => (
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

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-zinc-300">
              Routine maintenance keeps the website healthy. Ongoing development helps the website improve as the business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
