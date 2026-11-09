'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { MapPin, Globe, CreditCard } from 'lucide-react'

export default function BangladeshWorldwide() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS App Development Services Across Bangladesh &amp; Worldwide.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides SaaS app development services from Dhaka, Bangladesh for startups, businesses, and organizations across the country and international markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-6">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>Nationwide Coverage</span>
              </div>
              <h3 className="font-heading text-xl font-medium text-white">
                Across Bangladesh
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Nationwide Delivery
            </span>
          </div>

          <div className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-6">
                <Globe className="h-4 w-4 text-purple-600" />
                <span>Global Delivery</span>
              </div>
              <h3 className="font-heading text-xl font-medium text-white">
                International Markets
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Global Remote Workflow
            </span>
          </div>

          <div className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-6">
                <CreditCard className="h-4 w-4 text-purple-600" />
                <span>Payments &amp; Compliance</span>
              </div>
              <h3 className="font-heading text-xl font-medium text-white">
                Tailored Integrations
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                For Bangladesh-focused SaaS products, local payment integrations can be considered where required. International products can be structured around regional payment, billing, data, and operational requirements based on the project scope.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Tailored Architecture
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
          <PosterButton href="/contact" variant="accent">
            Get Free Consultation
          </PosterButton>
          <PosterButton href="#pricing" variant="outline">
            View Packages &amp; Pricing
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
