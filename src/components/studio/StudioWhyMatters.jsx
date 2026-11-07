'use client'

import React from 'react'
import { VolumeX, CalendarClock, Smartphone, Layers } from 'lucide-react'

const reasons = [
  {
    icon: VolumeX,
    title: 'Controlled audio and lighting',
    description: 'Street horns, room echo and uneven shadows pull attention from your message. An acoustically treated room and a calibrated lighting grid fix these before you record.',
  },
  {
    icon: CalendarClock,
    title: 'Planning that prevents reshoots',
    description: 'Shoots run over budget when scripts, talking points, product samples and availability are left to chance. A written brief aligns angles, durations and expectations so studio hours stay efficient.',
  },
  {
    icon: Smartphone,
    title: 'Framing for 16:9 and 9:16',
    description: 'A YouTube master needs a different composition from a vertical Reel or TikTok. Knowing where the video will publish lets the operator frame safe zones for every screen.',
  },
  {
    icon: Layers,
    title: 'Shooting and editing as one workflow',
    description: 'When one team shoots and edits, the director plans reaction cutaways, b-roll, room tone and hooks that make the final edit smoother.',
  },
]

export default function StudioWhyMatters() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Modality 4 Asymmetrical Editorial Split Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
              Why a physical studio in Dhaka{' '}
              <span className="text-white">transforms quality.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Most Dhaka video problems are practical: noisy traffic audio, mixed colour temperatures, power cuts mid-take, and footage never planned for distribution platforms. A dedicated physical studio eliminates these bottlenecks completely.
            </p>
          </div>
        </div>

        {/* Modality 3 Blueprint Matrix (2x2 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                    <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                      Advantage 0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Studio Day vs Location Shoot Comparative Ledger */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Compare both options in writing
          </h3>
          <p className="mt-3 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            A soundstage studio day often costs significantly less than a location shoot once venue hire, portable lighting transport, acoustic sound blankets, travel logistics, and unpredictable weather contingencies are added up. We itemise both options so you make an informed decision.
          </p>
        </div>
      </div>
    </section>
  )
}
