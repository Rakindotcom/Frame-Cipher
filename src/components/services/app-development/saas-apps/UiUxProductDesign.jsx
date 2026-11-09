'use client'

import React from 'react'
import {
  Compass,
  Layout,
  Sliders,
  Users,
  Boxes,
  Smartphone,
  CheckCircle2,
  Eye,
} from 'lucide-react'

const uiUxDesignItems = [
  {
    icon: Compass,
    title: "Onboarding Experience",
    desc: "Guide new customers toward the first meaningful value instead of overwhelming them with every feature."
  },
  {
    icon: Layout,
    title: "Dashboard Design",
    desc: "Prioritize the information and actions each user needs most often."
  },
  {
    icon: Sliders,
    title: "Workflow Design",
    desc: "Break complex processes into clear steps so users understand what to do and what happens next."
  },
  {
    icon: Users,
    title: "Role-Based Interfaces",
    desc: "Different user types can receive different navigation, views, actions, and controls based on their responsibilities."
  },
  {
    icon: Boxes,
    title: "Design Systems",
    desc: "Reusable UI components help maintain consistency across dashboards, forms, settings, billing pages, and workflows."
  },
  {
    icon: Smartphone,
    title: "Responsive SaaS Interfaces",
    desc: "Design the product for desktop, tablet, or mobile access based on how customers use the software."
  },
  {
    icon: CheckCircle2,
    title: "Usability Validation",
    desc: "Important workflows can be evaluated through prototypes, feedback, and iterative design before development is finalized."
  },
  {
    icon: Eye,
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
            SaaS UI/UX &amp; Product Design.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS interface often needs to serve new trial users, regular users, team members, managers, and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxDesignItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
