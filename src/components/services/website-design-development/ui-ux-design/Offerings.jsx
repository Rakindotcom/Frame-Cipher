'use client'

import React from 'react'
import { Check } from 'lucide-react'

const coreServices = [
  {
    tag: '01',
    title: 'User Research & Flow Mapping',
    intro: 'We identify who is using the product, what they need to accomplish, and where important journeys begin and end.',
    items: [
      'User journey mapping',
      'Audience and persona definition',
      'Task and conversion flow analysis',
      'Competitor and pattern review',
      'Key user goal identification',
    ],
    outro: 'A clear interface starts with a clear understanding of what users need to do.',
  },
  {
    tag: '02',
    title: 'Wireframing & Information Architecture',
    intro: 'We structure content, navigation, and screen hierarchy before visual design decisions are made.',
    items: [
      'Low-fidelity wireframes',
      'Information architecture',
      'Navigation planning',
      'Content prioritization',
      'Interactive prototypes',
    ],
    outro: 'Solving structural problems at the wireframe stage is easier than rebuilding them after development.',
  },
  {
    tag: '03',
    title: 'UI Design, Interaction & Visual Systems',
    intro: 'Once the structure is validated, we turn it into a clear and consistent interface designed around real user actions.',
    items: [
      'High-fidelity UI design',
      'Interaction design',
      'Responsive interface design',
      'Design system development',
      'Component and state design',
      'Accessibility-aware design',
    ],
    outro: 'Visual design should make the user\'s next action clearer, not simply make the screen look attractive.',
  },
  {
    tag: '04',
    title: 'Usability Testing & Validation',
    intro: 'We test important design decisions before development where the project scope allows it, then refine the experience based on what the testing reveals.',
    items: [
      'Prototype usability testing',
      'Heuristic evaluation',
      'Stakeholder review',
      'Analytics or behavior review where available',
      'Post-launch UX review',
      'Iterative refinement',
    ],
    outro: 'The goal is to replace assumptions with structured feedback and evidence wherever possible.',
  },
  {
    tag: '05',
    title: 'Post-Launch UX Support',
    intro: 'Products continue to change after launch. New features, user feedback, and business goals can create new design requirements.',
    items: [
      'New feature interface design',
      'UX refinements',
      'Design system expansion',
      'User-flow improvements',
      'Periodic UX reviews',
      'Ongoing product design support',
    ],
    outro: 'Post-launch UX support is available as a separate service and can continue as your product evolves.',
  },
]

export default function Offerings() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our UI/UX{' '}
            <span className="italic text-frame-accent">Design Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We provide end-to-end UI/UX design services based on your users, business goals, product structure, and technical requirements. We start with the experience and user flow before moving into visual design, so every screen has a clear purpose.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {service.intro}
                </p>

                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-white">
                  What We Do
                </p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm font-normal text-zinc-200">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="text-xs sm:text-sm italic text-zinc-400">
                  {service.outro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
