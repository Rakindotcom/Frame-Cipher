'use client'

import React from 'react'

const uiUxDesignItems = [
  {
    title: "Onboarding Experience",
    desc: "Guide new customers toward the first meaningful value instead of overwhelming them with every feature."
  },
  {
    title: "Dashboard Design",
    desc: "Prioritize the information and actions each user needs most often."
  },
  {
    title: "Workflow Design",
    desc: "Break complex processes into clear steps so users understand what to do and what happens next."
  },
  {
    title: "Role-Based Interfaces",
    desc: "Different user types can receive different navigation, views, actions, and controls based on their responsibilities."
  },
  {
    title: "Design Systems",
    desc: "Reusable UI components help maintain consistency across dashboards, forms, settings, billing pages, and workflows."
  },
  {
    title: "Responsive SaaS Interfaces",
    desc: "Design the product for desktop, tablet, or mobile access based on how customers use the software."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be evaluated through prototypes, feedback, and iterative design before development is finalized."
  },
  {
    title: "Navigation Architecture",
    desc: "Design clear top-level navigation, sidebar menus, sub-navigation, and contextual actions so users can move through the product without confusion."
  }
]

export default function UiUxProductDesign() {
  return (
    <section id="ui-ux" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS UI/UX &amp;{' '}
            <span className="italic text-frame-accent">Product Design.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS interface often needs to serve new trial users, regular users, team members, managers, and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uiUxDesignItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
