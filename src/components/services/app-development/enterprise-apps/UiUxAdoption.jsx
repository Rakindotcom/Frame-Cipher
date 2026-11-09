'use client'

import React from 'react'
import {
  Users,
  Workflow,
  Compass,
  LayoutDashboard,
  Eye,
  Sparkles,
  CheckCircle2,
  Smartphone
} from 'lucide-react'

const uiUxAdoption = [
  {
    icon: Users,
    title: "Role-Based Interfaces",
    desc: "Different departments and job functions can receive interfaces that show the actions and information relevant to their responsibilities."
  },
  {
    icon: Workflow,
    title: "Workflow-First Design",
    desc: "We start with the task users need to complete before deciding how the interface should be structured."
  },
  {
    icon: Compass,
    title: "Information Architecture",
    desc: "Large enterprise applications need clear navigation, search, filtering, hierarchy, and predictable access to important information."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Design",
    desc: "Dashboards are structured around the metrics, tasks, alerts, and decisions relevant to each role."
  },
  {
    icon: Eye,
    title: "Accessibility",
    desc: "Interfaces can include readable content, suitable controls, keyboard support, screen-reader considerations, and other accessibility requirements where applicable."
  },
  {
    icon: Sparkles,
    title: "Training-Minimal Interfaces",
    desc: "Clear labels, familiar patterns, consistent interactions, and useful feedback can reduce unnecessary learning effort."
  },
  {
    icon: CheckCircle2,
    title: "Usability Validation",
    desc: "Important workflows can be reviewed with representative users and stakeholders before development is finalized."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Enterprise interfaces may need to support desktop workstations, tablets, and mobile devices depending on how different user groups access the application."
  }
]

export default function UiUxAdoption() {
  return (
    <section id="ui-ux" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            UI/UX Design for Enterprise Adoption.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise software needs to make complex work easier for people who may use it every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxAdoption.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
