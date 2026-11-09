'use client'

import React from 'react'
import {
  CheckCircle2,
  RefreshCw,
  Code2,
  Layers,
  Component,
  Layout,
  Gauge,
  ShieldCheck,
  Database,
  PlusCircle,
  Cpu,
} from 'lucide-react'

const modernizationItems = [
  { text: 'Legacy Android codebase modernization', icon: RefreshCw },
  { text: 'Java-to-Kotlin migration where appropriate', icon: Code2 },
  { text: 'Android version compatibility updates', icon: Layers },
  { text: 'Outdated dependency replacement', icon: Component },
  { text: 'Architecture improvements', icon: Cpu },
  { text: 'UI/UX modernization', icon: Layout },
  { text: 'Performance optimization', icon: Gauge },
  { text: 'Security improvements', icon: ShieldCheck },
  { text: 'API and backend updates', icon: Database },
  { text: 'New feature development', icon: PlusCircle },
  { text: 'Third-party integration updates', icon: Cpu },
]

export default function Modernization() {
  return (
    <section
      id="modernization"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Modernization &amp; Migration
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            An existing Android application may not need to be completely rebuilt. Sometimes the better approach is to modernize the current codebase and improve the areas causing problems. We can support:
          </p>
        </div>

        {/* 11-Item Capability Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modernizationItems.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#121214] p-5 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                <item.icon className="h-4 w-4" />
              </div>
              <span className="font-sans text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
