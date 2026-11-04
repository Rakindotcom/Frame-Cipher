'use client'

import React from 'react'
import {
  Code2,
  Layout,
  Database,
  Globe,
  Cloud,
  MapPin,
  CheckCircle2,
} from 'lucide-react'

const techStack = [
  {
    num: '01',
    area: 'Core Android',
    details: 'Kotlin • Android SDK • Android Jetpack',
    icon: Code2,
  },
  {
    num: '02',
    area: 'UI Development',
    details: 'Jetpack Compose and Android interface components, where appropriate for the project.',
    icon: Layout,
  },
  {
    num: '03',
    area: 'Local Data',
    details: 'Room and other suitable Android storage approaches where local persistence is required.',
    icon: Database,
  },
  {
    num: '04',
    area: 'APIs & Networking',
    details: 'REST APIs and appropriate networking tools for communication between the Android application and backend systems.',
    icon: Globe,
  },
  {
    num: '05',
    area: 'Firebase & Cloud Services',
    details: 'Firebase services where authentication, notifications, analytics, crash reporting, or related capabilities are required.',
    icon: Cloud,
  },
  {
    num: '06',
    area: 'Location & Device Services',
    details: 'Google Maps and Android device APIs where location or hardware functionality is part of the product.',
    icon: MapPin,
  },
]

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android Technology{' '}
            <span className="italic text-frame-accent">Stack.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We choose the technology stack based on the application&apos;s requirements, supported devices, maintainability, and long-term roadmap.
          </p>
        </div>

        {/* 6-Card Stack Grid */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {item.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {item.area}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Stack Philosophy Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Stack Discipline:</strong> The final stack is selected for the application rather than added simply to make the technology list longer.
          </p>
        </div>
      </div>
    </section>
  )
}
