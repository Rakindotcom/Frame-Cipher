'use client'

import React from 'react'
import { Check } from 'lucide-react'

const deliverables = [
  {
    category: 'Research & UX Structure',
    items: [
      'User research findings',
      'Audience and persona definitions',
      'User journey maps',
      'Task and conversion flows',
      'Information architecture',
    ],
  },
  {
    category: 'Wireframes & Prototypes',
    items: [
      'Low-fidelity wireframes',
      'High-fidelity UI screens',
      'Interactive prototypes',
      'Key interaction states',
      'Responsive layouts',
    ],
  },
  {
    category: 'Design System',
    items: [
      'Reusable components',
      'Typography and spacing rules',
      'Color and style definitions',
      'Buttons, forms, cards, navigation, and other interface patterns',
      'Component states and variations',
    ],
  },
  {
    category: 'Handoff & Documentation',
    items: [
      'Organized Figma files',
      'Design specifications',
      'Export-ready assets',
      'Responsive behavior guidance',
      'Developer notes where required',
      'Design support during implementation',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What You Receive From a{' '}
            <span className="italic text-frame-accent">UI/UX Design Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The exact deliverables depend on the project scope, but a typical UI/UX engagement can include the design assets and documentation needed to move from an idea or existing product toward development.
          </p>
        </div>

        {/* 4 Asset Group Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((deliv, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Asset Group 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {deliv.category}
                </h3>
                <ul className="mt-6 space-y-2 text-xs sm:text-sm font-normal text-zinc-200">
                  {deliv.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Agreement Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The final deliverables are agreed during project scoping so you know what is included before design begins.
          </p>
        </div>
      </div>
    </section>
  )
}
