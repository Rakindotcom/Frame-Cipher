'use client'

import React from 'react'
import {
  MessageSquare,
  Compass,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  Wrench,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We review your idea, business goals, target users, core features, platform requirements, and current product stage.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Strategy & Architecture Planning',
    desc: 'We define the application structure, device and OS requirements, API needs, integrations, and initial development scope.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'UI/UX Design',
    desc: 'We map important user journeys, create wireframes, develop the Android interface, and refine the experience through review.',
    icon: Layout,
  },
  {
    step: '04',
    title: 'Native Development',
    desc: 'Our team builds the Android application in Kotlin and connects the required backend systems, APIs, and platform features.',
    icon: Code2,
  },
  {
    step: '05',
    title: 'Testing & Quality Assurance',
    desc: 'We test important features, integrations, devices, supported Android versions, and performance conditions.',
    icon: CheckCircle2,
  },
  {
    step: '06',
    title: 'Launch & Google Play Deployment',
    desc: 'We prepare the release build and support the relevant Google Play submission and release process.',
    icon: Rocket,
  },
  {
    step: '07',
    title: 'Post-Launch Support',
    desc: 'After launch, we can continue with compatibility updates, bug fixes, performance work, new features, and ongoing technical support.',
    icon: Wrench,
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            How We Approach an{' '}
            <span className="italic text-frame-accent">Android App Build.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our process connects product planning, Android UX, architecture, development, testing, and release from the beginning.
          </p>
        </div>

        {/* 7-Step Workflow Grid with Watermark Numerals */}
        <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 overflow-hidden p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              {/* Background Watermark Numeral */}
              <span className="pointer-events-none absolute -bottom-4 -right-2 font-heading text-8xl font-black text-white/[0.02] transition-colors group-hover:text-white/[0.04]">
                {step.step}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
