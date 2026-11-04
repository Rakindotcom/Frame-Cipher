'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
            Next move // Global Strategy &amp; Architecture
          </p>

          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Expand Into New Markets With the{' '}
              <br />
              <span className="italic text-frame-accent">Right SEO Foundation.</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          {/* Bottom Split Grid: Descriptive prose on left, PosterButtons on right */}
          <div className="mt-8 border-t border-white/[0.08] pt-8 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                International growth should not mean building a separate SEO strategy from scratch for every country. It should mean creating a flexible system where your website structure, technical signals, content, authority, and measurement work together across markets.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                Framecipher helps businesses plan and implement that system before international expansion becomes technically difficult. From market research and architecture to hreflang, localization, technical SEO, authority building, and market-level reporting, we build international SEO around the countries and audiences your business actually wants to reach.
              </p>
              <p className="text-sm sm:text-base font-medium text-white pt-1">
                Ready to expand beyond your current market?
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                Get Free International SEO Consultation &rarr;
              </PosterButton>
              <PosterButton href="/services/seo" variant="outline">
                Explore All SEO Services &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
