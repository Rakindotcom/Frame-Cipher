'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-2 pb-16 text-white sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-white/[0.14] shadow-2xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {/* Subtle Ambient Corner Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/15 via-purple-600/10 to-transparent blur-3xl" />

          {/* Heading beside oversized directional arrow */}
          <div className="mt-5 flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-8">
            <h2
              aria-label="Start Your iOS App Development Project"
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.94] tracking-[-0.03em] text-white"
            >
              Start Your iOS App Development Project.
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-mono text-7xl xl:text-8xl font-light text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          {/* Bottom Split: Running Description & Actions Stack */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Have an iOS app idea, an existing product, or a business workflow that needs a dedicated mobile solution? Tell us what you want to build, what problem it should solve, and what stage your project is at. We will review the requirements and recommend a practical path from strategy to launch.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Start Your iOS App Project
              </PosterButton>
              <PosterButton href="#pricing" variant="outline" className="w-full">
                View Packages &amp; Timeline
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
