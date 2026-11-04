'use client'

import React from 'react'
import { Check } from 'lucide-react'

const postLaunchItems = [
  'New feature and screen design',
  'User-flow improvements',
  'Usability issue resolution',
  'Design-system expansion',
  'Interface updates',
  'Conversion-focused UX improvements',
  'Periodic UX reviews',
  'Design support for product iterations',
]

export default function PostLaunch() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Post-Launch{' '}
            <span className="italic text-frame-accent">UX Support.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Launching a product does not mean the design work has to stop. New features, user feedback, analytics, and business changes can reveal opportunities for further improvement.
          </p>
        </div>

        {/* Post-Launch Items Card */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white mb-6">
            Post-launch UX support can include:
          </h3>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-normal text-zinc-200">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              This service is useful for businesses that want to keep their product experience consistent as the product grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
