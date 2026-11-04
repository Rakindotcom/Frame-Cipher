'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#121214] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 text-xs text-zinc-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Next Step // Evidence-First Diagnosis
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[0.98]">
            Start With the{' '}
            <span className="italic text-frame-accent">Right Diagnosis</span>
          </h2>

          {/* Subtitle / Lead Paragraphs */}
          <div className="mt-6 max-w-2xl mx-auto space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            <p>
              A sudden Google traffic drop does not automatically mean your site has a penalty. Before deleting content, disavowing backlinks, rebuilding pages, or launching a large-scale SEO campaign, determine what actually changed.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Framecipher investigates the evidence, separates manual actions from algorithmic and technical problems, documents the findings, and builds a recovery plan around the real cause.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PosterButton href="/contact">
              Get Your Site Diagnosed &rarr;
            </PosterButton>
            <PosterButton href="/services/seo" variant="outline">
              Explore All SEO Services &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
