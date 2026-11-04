'use client'

import React from 'react'
import { Map, Globe, PhoneCall } from 'lucide-react'

const coreAreas = [
  {
    icon: Map,
    title: 'Google Maps Visibility',
    desc: 'Prominent Map Pack placements so nearby buyers discover your storefront or service radius instantly.',
  },
  {
    icon: Globe,
    title: 'Local Organic Visibility',
    desc: 'Optimized local landing pages and localized signals capturing searches beyond the 3-Pack.',
  },
  {
    icon: PhoneCall,
    title: 'Real Customer Actions',
    desc: 'Driving phone calls, direction requests, website clicks, appointment bookings, and high-intent enquiries.',
  },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Core Strategy // Discovery to Conversion
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Local SEO Built for Maps,{' '}
            <span className="italic text-frame-accent">Search Visibility,</span> and Local Customers
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local customers often search with a specific place, area, or service in mind—whether it is a restaurant nearby, a clinic in their city, a repair service in their area, or a company serving their neighborhood.
          </p>
        </div>

        {/* Narrative & Cards Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <p>
              Your business needs to appear right where those high-intent local searches happen. We do not treat your Google Business Profile and website as separate marketing channels. We connect the relevant local signals so your business presents consistent, verified information across every layer of Google Search and Maps.
            </p>
            <p className="text-zinc-400">
              The goal is not simply to inflate impressions on an analytics dashboard. It is to create commanding local visibility that directly supports real customer actions: calls, store visits, direction requests, and bookings.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Three Connected Pillars
            </span>

            {coreAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex items-start gap-4 hover:border-white/20 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
