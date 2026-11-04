'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise App Development Services{' '}
            <span className="italic text-frame-accent">Across Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides enterprise app development services from Dhaka, Bangladesh for organizations across the country and international markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Domestic Delivery
            </span>
            <h3 className="mt-3 font-heading text-lg font-medium text-white">
              Across Bangladesh
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
              We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Global Scale
            </span>
            <h3 className="mt-3 font-heading text-lg font-medium text-white">
              International Markets
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
              Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Tailored Governance
            </span>
            <h3 className="mt-3 font-heading text-lg font-medium text-white">
              Custom Architecture
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
              Enterprise requirements vary by organization. We account for existing systems, local operations, security requirements, integration dependencies, and project governance rather than applying the same implementation to every market.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
          <PosterButton href="/contact" variant="accent">
            Get Free Consultation
          </PosterButton>
          <PosterButton href="#pricing" variant="outline">
            Discuss Your Enterprise Project
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
