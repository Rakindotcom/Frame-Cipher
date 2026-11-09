'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 pt-2 pb-16 text-white sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-white/20 shadow-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {/* Ambient Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/15 via-purple-600/10 to-transparent blur-3xl" />

          {/* Heading beside oversized directional arrow */}
          <div className="mt-5 flex items-baseline justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.94] tracking-[-0.03em] text-white">
              Start Your Enterprise App Development Project.
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-mono text-7xl xl:text-8xl font-light text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          {/* Bottom Split */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-3">
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Have a complex workflow, legacy system, internal platform, or enterprise product that needs to be built or modernized?
              </p>
              <p className="max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                Tell us what your organization needs to improve, which systems are already involved, and who will use the application. We will review the requirements and help define a practical path from discovery and architecture to deployment and long-term support.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <PosterButton href="/contact" variant="accent" className="h-[52px] w-full justify-center text-sm font-medium">
                Start Your Enterprise Project
              </PosterButton>
              <PosterButton href="#pricing" variant="outline" className="h-[52px] w-full justify-center text-sm font-medium">
                Get a Custom Quote
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
