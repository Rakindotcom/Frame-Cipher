'use client'

import React from 'react'
import {
  Compass,
  Palette,
  Maximize2,
  Sliders,
  CheckCircle2,
} from 'lucide-react'

const uiUxPoints = [
  {
    num: '01',
    title: 'User Flow Mapping',
    desc: 'We structure navigation and important tasks before visual design begins.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Material Design',
    desc: 'We use Android interface conventions and Material Design principles where they improve consistency and usability.',
    icon: Palette,
  },
  {
    num: '03',
    title: 'Adaptive Layouts',
    desc: 'We design for the screen sizes, orientations, and device categories relevant to the application\'s target audience.',
    icon: Maximize2,
  },
  {
    num: '04',
    title: 'Interaction & State Design',
    desc: 'We plan loading, empty, error, success, disabled, and other important interface states.',
    icon: Sliders,
  },
  {
    num: '05',
    title: 'Prototype & Usability Testing',
    desc: 'Where included, we validate important flows before development so usability issues can be identified earlier.',
    icon: CheckCircle2,
  },
]

export default function UiUxDesign() {
  return (
    <section
      id="ui-ux-design"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            UI/UX Design for Android
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Android interfaces should feel natural to Android users while supporting the goals of the product.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uiUxPoints.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                  {item.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
