'use client'

import React from 'react'
import { MapPin, Globe, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise App Development Services Across Bangladesh &amp; Worldwide.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides enterprise app development services from Dhaka, Bangladesh for organizations across the country and international markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  Domestic Delivery
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">
                Across Bangladesh
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  Global Scale
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">
                International Markets
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  Tailored Governance
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">
                Custom Architecture
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Enterprise requirements vary by organization. We account for existing systems, local operations, security requirements, integration dependencies, and project governance rather than applying the same implementation to every market.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
          <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
            Get Free Consultation
          </PosterButton>
          <PosterButton href="#pricing" variant="outline" className="h-[52px] px-8 text-sm font-medium">
            Discuss Your Enterprise Project
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
