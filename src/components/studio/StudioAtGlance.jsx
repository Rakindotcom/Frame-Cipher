'use client'

import React from 'react'
import { MapPin, Clock, Wallet, BadgeCheck, Captions, Phone, CalendarClock } from 'lucide-react'

const rows = [
  { icon: MapPin, label: 'Location', value: '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206' },
  { icon: Clock, label: 'Hours', value: 'Open 24 hours (sessions by advance reservation)' },
  { icon: Wallet, label: 'Studio hire', value: 'From ৳2,000 per hour (room only)' },
  { icon: Wallet, label: 'Studio + crew', value: 'From ৳8,000 per session' },
  { icon: Wallet, label: 'Full production', value: 'From ৳35,000 per project' },
  { icon: CalendarClock, label: 'Quote turnaround', value: 'Itemised written quote within 48 hours' },
  { icon: BadgeCheck, label: 'Payment', value: '50% advance confirms dates, balance on final sign-off, VAT-compliant invoices' },
  { icon: Captions, label: 'Subtitles', value: 'English and Bangla' },
  { icon: Phone, label: 'Phone and WhatsApp', value: '+880 1768-146650' },
]

export default function StudioAtGlance() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Studio <span className="italic text-frame-accent">essentials.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            The facts you need before you book: verified rates, soundstage location, operational hours, and payment terms.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (3x3 Technical Cells) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row, i) => {
            const Icon = row.icon
            return (
              <div
                key={i}
                className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                      {row.label}
                    </dt>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>
                  <dd className="font-heading text-base sm:text-lg font-medium leading-snug text-white">
                    {row.value}
                  </dd>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-6 font-mono text-xs text-zinc-500">
          <p>Last updated: October 2026. Official studio ledger.</p>
          <p className="text-frame-accent">For stage dimensions and guest capacity, ask on WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}
