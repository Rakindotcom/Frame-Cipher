'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
              Next Move · Product Vision
            </p>
          </div>

          {/* Heading with Oversized Arrow */}
          <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-10">
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.03em] text-white">
              Start Your UI/UX{' '}
              <span className="italic text-frame-accent">Design Project.</span>
            </h2>
            <span
              className="hidden lg:block select-none font-mono text-7xl xl:text-8xl font-light text-white/20"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </div>

          {/* Bottom Split: Running Description & Actions Stack */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                Your website, app, or digital product should make it easier for users to understand what to do and complete what they came to accomplish. Tell us what you&apos;re building, improving, or redesigning, and we&apos;ll recommend a UI/UX approach based on your users, goals, and project scope.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Get Free Consultation
              </PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Request a UI/UX Project Quote
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
