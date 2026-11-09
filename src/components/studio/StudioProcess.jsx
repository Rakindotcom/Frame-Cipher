'use client'

import React from 'react'
import { MessageSquare, FileCheck2, CalendarCheck, Clapperboard, CheckCheck, ArrowRight } from 'lucide-react'

const steps = [
  { step: '01', title: 'Discuss your project', icon: MessageSquare, description: 'Tell us what to produce, who it is for and where it will publish. Share references or scripts.', action: 'Brief & format lock' },
  { step: '02', title: 'Define requirements', icon: FileCheck2, description: 'We confirm session length, participants, crew, equipment, lighting and editing scope.', action: 'Itemised scope' },
  { step: '03', title: 'Confirm the booking', icon: CalendarCheck, description: 'Schedule, price and scope are agreed in writing, and the slot is reserved with preparation notes.', action: 'Slot reserved' },
  { step: '04', title: 'Prepare and record', icon: Clapperboard, description: 'We set up and check sound and light before filming. You arrive with products, guests or notes.', action: 'Live studio shoot' },
  { step: '05', title: 'Edit and deliver', icon: CheckCheck, description: 'Cuts follow the agreed specs, feedback rounds are handled, and platform-ready masters, captions and cloud delivery follow.', action: 'Masters delivered' },
]

export default function StudioProcess() {
  return (
    <section id="process" className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Studio Booking in Five Steps.
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            To start, send three WhatsApp messages to +880 1768-146650: your date, your setup, and your goal. Receive an itemised quote within 48 hours.
          </p>
        </div>

        {/* Discrete Cards Grid (5-Column, gap-6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((st) => {
            const Icon = st.icon
            return (
              <div
                key={st.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                      Step {st.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-medium text-white leading-snug">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {st.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 mt-6">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-purple-400">
                    <span>{st.action}</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp Consultation Action Strip on #0D0D0F */}
        <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 flex flex-col items-center justify-between gap-6 sm:flex-row before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <p className="text-sm sm:text-base font-normal text-zinc-300 max-w-xl">
            Your date, your setup, your goal: three quick messages on WhatsApp, and we take sovereign ownership from there.
          </p>
          <a
            href="https://wa.me/8801768146650"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[52px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 shrink-0"
          >
            <span>Start on WhatsApp</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
