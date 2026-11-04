'use client'

import React from 'react'

const uiUxAdoption = [
  {
    title: "Role-Based Interfaces",
    desc: "Different departments and job functions can receive interfaces that show the actions and information relevant to their responsibilities."
  },
  {
    title: "Workflow-First Design",
    desc: "We start with the task users need to complete before deciding how the interface should be structured."
  },
  {
    title: "Information Architecture",
    desc: "Large enterprise applications need clear navigation, search, filtering, hierarchy, and predictable access to important information."
  },
  {
    title: "Dashboard Design",
    desc: "Dashboards are structured around the metrics, tasks, alerts, and decisions relevant to each role."
  },
  {
    title: "Accessibility",
    desc: "Interfaces can include readable content, suitable controls, keyboard support, screen-reader considerations, and other accessibility requirements where applicable."
  },
  {
    title: "Training-Minimal Interfaces",
    desc: "Clear labels, familiar patterns, consistent interactions, and useful feedback can reduce unnecessary learning effort."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be reviewed with representative users and stakeholders before development is finalized."
  },
  {
    title: "Responsive Design",
    desc: "Enterprise interfaces may need to support desktop workstations, tablets, and mobile devices depending on how different user groups access the application."
  }
]

export default function UiUxAdoption() {
  return (
    <section id="ui-ux" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            UI/UX Design for Enterprise <span className="italic text-frame-accent">Adoption.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise software needs to make complex work easier for people who may use it every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uiUxAdoption.map((item, idx) => (
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
