'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-2 pb-16 text-white sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-white/[0.14] shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/15 via-frame-accent/10 to-transparent blur-3xl" />

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
              Next Move // Strategic Search Growth
            </p>
          </div>

          {/* Heading beside oversized directional arrow */}
          <div className="mt-5 flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.94] tracking-[-0.03em] text-white">
              Ready to Grow{' '}
              <br className="hidden sm:inline" />
              <span className="italic text-frame-accent">Through Search?</span>
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
                Find out what may be limiting your website&apos;s organic visibility, which search opportunities matter to your business, and what SEO priorities should come first.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <PosterButton href="/contact" variant="accent" className="w-full justify-center">
                Get Your Free SEO Audit
              </PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full justify-center">
                Talk to the Framecipher SEO Team
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
