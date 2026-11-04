'use client'

import React from 'react'
import { Check } from 'lucide-react'

const internationalUxPoints = [
  'Process adapted to the product and audience',
  'Technical requirements per market',
  'Business goals and KPIs',
  'Experience built for audiences in the UAE, US, UK, Australia & Canada',
]

const bangladeshUxPoints = [
  'Responsive and mobile-first requirements from the start',
  'Design treating mobile as a priority, not a final adjustment',
  'Local user flows and context',
]

export default function ServiceAreas() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Service{' '}
            <span className="italic text-frame-accent">Areas.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka, Bangladesh, and provides UI/UX design services for businesses across Bangladesh and international markets.
          </p>
        </div>

        {/* 2 Regional Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Global Projects */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors hover:border-white/[0.14]">
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium text-white">
              Global Projects
            </h3>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300">
              We adapt the process around:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-normal text-zinc-200">
              {internationalUxPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bangladesh Businesses */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors hover:border-white/[0.14]">
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium text-white">
              Bangladesh Businesses
            </h3>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300">
              For Bangladesh-based businesses, we also consider:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-normal text-zinc-200">
              {bangladeshUxPoints.map((pt) => (
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
      </div>
    </section>
  )
}
