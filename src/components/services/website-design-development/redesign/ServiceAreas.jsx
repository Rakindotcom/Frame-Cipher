'use client'

import React from 'react'
import { Check } from 'lucide-react'

const targetMarkets = [
  'Bangladesh',
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
]

const bangladeshRedesignPoints = [
  'Mobile-first browsing behavior',
  'Local network conditions',
  'Bilingual content requirements',
  'Local conversion paths',
]

const internationalRedesignPoints = [
  'Target market and audience',
  'Technical requirements per region',
  'Business objectives and KPIs',
  'Global structure rather than a single-market template',
]

export default function ServiceAreas() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Website Redesign{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka, Bangladesh, and provides website redesign services for businesses across Bangladesh and international clients.
          </p>
        </div>

        {/* 3 Regional Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Target Markets */}
          <div className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]">
            <div>
              <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                Markets We Serve
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {targetMarkets.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Bangladesh Businesses */}
          <div className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]">
            <div>
              <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                Bangladesh Businesses
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Our redesign process can account for:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {bangladeshRedesignPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: International Standards */}
          <div className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]">
            <div>
              <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                Global Projects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                For international projects, we adapt the redesign around:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {internationalRedesignPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
