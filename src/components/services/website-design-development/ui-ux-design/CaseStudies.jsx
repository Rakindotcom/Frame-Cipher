'use client'

import React from 'react'
import { Check } from 'lucide-react'

const caseStudyPillars = [
  {
    title: 'The Challenge',
    desc: 'What the business or product needed to improve, clarify, or build from scratch.',
  },
  {
    title: 'UX Approach',
    desc: 'How we approached research, user flows, information architecture, wireframing, and usability decisions.',
  },
  {
    title: 'Interface Design',
    desc: 'How the approved structure became the final visual system, responsive interface, and interaction patterns.',
  },
  {
    title: 'Prototype & Handoff',
    desc: 'How the experience was tested, refined, documented, and prepared for development.',
  },
  {
    title: 'Outcome',
    desc: 'Where verified project data is available, we can show measurable outcomes such as resolved usability issues, improved task completion, reduced friction, or other documented improvements.',
  },
]

const capabilities = [
  'User Journey & Persona Mapping',
  'Information Architecture Validation',
  'Interactive Clickable Prototypes',
  'WCAG AA Accessibility Standards',
  'Atomic Design System Tokens',
  'Multi-State Component Variants',
  'Responsive Breakpoint Adaptation',
  'Organized Developer Specifications',
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What Each UI/UX{' '}
            <span className="italic text-frame-accent">Case Study Demonstrates.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We document our design projects with rigorous UX rationale and verified outcomes, showing how user-centered thinking solves real product challenges.
          </p>
        </div>

        {/* 5 Stage Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Card */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            Core Design Capabilities Demonstrated
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            Only publish project metrics, performance claims, or business results that are supported by actual project evidence.
          </p>
        </div>
      </div>
    </section>
  )
}
