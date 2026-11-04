'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="rounded-3xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Top Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Next Strategic Move
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            {/* Left Column (8 cols): Title & Description */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
                Get SEO Strategy That <span className="italic text-frame-accent">Fits Your Team</span>
              </h2>

              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
                Not every business needs an agency executing every task, and not every internal team needs full-time outside staffing. Framecipher provides high-leverage strategy and fractional leadership for businesses that need clear direction, an unvetted second opinion, or a sequenced 30/60/90-day roadmap their team can actually execute.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact">
                  Talk to Our SEO Team &rarr;
                </PosterButton>
                <PosterButton href="/services/seo" variant="outline">
                  Explore All SEO Services &rarr;
                </PosterButton>
              </div>
            </div>

            {/* Right Column (4 cols): Asymmetrical Big Graphic Arrow / Direct Link */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="group flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-3xl border border-white/[0.08] bg-[#16161A] text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-frame-accent/60 hover:bg-frame-accent hover:text-white"
                aria-label="Contact Framecipher for SEO Strategy"
              >
                <ArrowUpRight className="h-12 w-12 sm:h-16 sm:w-16 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
