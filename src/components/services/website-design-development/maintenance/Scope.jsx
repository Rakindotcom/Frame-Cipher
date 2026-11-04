'use client'

import React from 'react'
import { Check } from 'lucide-react'

const includedItems = [
  'Security and software updates',
  'Backup management',
  'Backup verification',
  'Uptime monitoring',
  'Performance checks',
  'Malware and vulnerability checks',
  'Minor content updates',
  'Minor functionality fixes',
  'Integration checks',
  'Broken-link and error checks',
  'Routine technical support',
  'Maintenance reporting',
]

const separateProjectItems = [
  'Full website redesigns',
  'New website development',
  'Major new features',
  'Large application development',
  'Major ecommerce changes',
  'New complex integrations',
  'Platform migrations',
  'Full SEO campaigns',
  'Content writing',
  'Branding or graphic design projects',
  'Large content migrations',
]

export default function Scope() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What&apos;s Included in Website Maintenance,{' '}
            <span className="italic text-frame-accent">and What&apos;s Not.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear scope helps prevent confusion about what a maintenance plan is designed to cover.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Usually Included Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Usually Included
            </h3>
            <p className="mt-2 text-sm font-normal text-zinc-300">
              Depending on your plan, website maintenance can include:
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-normal text-zinc-200">
              {includedItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Handled as Separate Projects Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Usually Handled as Separate Projects
            </h3>
            <p className="mt-2 text-sm font-normal text-zinc-300">
              Some requests change the scope of the website rather than simply maintaining it. These may include:
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-normal text-zinc-400">
              {separateProjectItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Boundary Notice Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The exact boundary depends on your maintenance plan and the work required. We define that scope before beginning additional work so you know what is covered and what is not.
          </p>
        </div>
      </div>
    </section>
  )
}
