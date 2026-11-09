'use client'

import React from 'react'
import { VolumeX, CalendarClock, Smartphone, Layers } from 'lucide-react'

const reasons = [
  {
    icon: VolumeX,
    title: 'Controlled Audio and Lighting',
    description: 'Street horns, room echo and uneven shadows pull attention from your message. An acoustically treated room and a calibrated lighting grid fix these before you record.',
  },
  {
    icon: CalendarClock,
    title: 'Planning That Prevents Reshoots',
    description: 'Shoots run over budget when scripts, talking points, product samples and availability are left to chance. A written brief aligns angles, durations and expectations so studio hours stay efficient.',
  },
  {
    icon: Smartphone,
    title: 'Framing for 16:9 and 9:16',
    description: 'A YouTube master needs a different composition from a vertical Reel or TikTok. Knowing where the video will publish lets the operator frame safe zones for every screen.',
  },
  {
    icon: Layers,
    title: 'Shooting and Editing as One Workflow',
    description: 'When one team shoots and edits, the director plans reaction cutaways, b-roll, room tone and hooks that make the final edit smoother.',
  },
]

export default function StudioWhyMatters() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Editorial Split Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-tight text-white">
              Why a Physical Studio in Dhaka Transforms Quality.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Most Dhaka video problems are practical: noisy traffic audio, mixed colour temperatures, power cuts mid-take, and footage never planned for distribution platforms. A dedicated physical studio eliminates these bottlenecks completely.
            </p>
          </div>
        </div>

        {/* Discrete Cards Grid (gap-6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                      Advantage 0{idx + 1}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                      <Icon className="h-5 w-5" />
                    </div>
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

        {/* Comparative Ledger on #0D0D0F */}
        <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Compare Both Options in Writing.
          </h3>
          <p className="mt-3 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            A soundstage studio day often costs significantly less than a location shoot once venue hire, portable lighting transport, acoustic sound blankets, travel logistics, and unpredictable weather contingencies are added up. We itemise both options so you make an informed decision.
          </p>
        </div>
      </div>
    </section>
  )
}
