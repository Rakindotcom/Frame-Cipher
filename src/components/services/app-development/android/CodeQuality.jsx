'use client'

import React from 'react'
import {
  Layers,
  Cpu,
  Component,
  Database,
  GitBranch,
  CheckCircle2,
} from 'lucide-react'

const codeQuality = [
  {
    num: '01',
    title: 'Clear Separation of Responsibilities',
    desc: 'Keeping interface, business logic, data access, and external services organized so changes remain easier to manage.',
    icon: Layers,
  },
  {
    num: '02',
    title: 'Modern Android Architecture',
    desc: 'Using established Android patterns such as MVVM where appropriate for the product and development requirements.',
    icon: Cpu,
  },
  {
    num: '03',
    title: 'Reusable Components',
    desc: 'Creating reusable code and interface components where practical to reduce duplication and support consistency.',
    icon: Component,
  },
  {
    num: '04',
    title: 'API & Data Layers',
    desc: 'Separating network communication, local storage, and business logic for a more predictable application structure.',
    icon: Database,
  },
  {
    num: '05',
    title: 'Dependency Management',
    desc: 'Keeping frameworks, libraries, and dependencies organized and maintained throughout development.',
    icon: GitBranch,
  },
  {
    num: '06',
    title: 'Testing & Code Review',
    desc: 'Using appropriate testing and review practices to identify problems early and support long-term maintainability.',
    icon: CheckCircle2,
  },
]

export default function CodeQuality() {
  return (
    <section
      id="code-quality"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Architecture &amp;{' '}
            <span className="italic text-frame-accent">Code Quality.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A maintainable Android application needs a clear code structure as well as functional features. Depending on the project, architecture can include:
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {codeQuality.map((item, i) => (
            <div
              key={i}
              className="group bg-[#0f1011] p-8 transition-colors duration-200 hover:bg-[#141516]"
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
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Fit Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Architecture Principle:</strong> The architecture should fit the product. We do not add patterns simply to make the technical stack look more complex.
          </p>
        </div>
      </div>
    </section>
  )
}
