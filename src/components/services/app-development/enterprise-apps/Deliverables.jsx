'use client'

import React from 'react'

const deliverablesList = [
  {
    title: "Business & Technical Planning",
    desc: "Requirements documentation, workflow analysis, system architecture, integration planning, and project roadmap."
  },
  {
    title: "Enterprise UI/UX",
    desc: "User flows, role-based interfaces, dashboards, prototypes, responsive layouts, and approved design assets."
  },
  {
    title: "Enterprise Application",
    desc: "The agreed web, mobile, or connected enterprise application built around the approved requirements."
  },
  {
    title: "Integrations",
    desc: "Agreed ERP, CRM, HRMS, legacy, API, identity, database, payment, communication, or third-party integrations."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, security controls, integration testing, performance testing, user acceptance testing, and release validation according to project scope."
  },
  {
    title: "Deployment & Rollout",
    desc: "Environment preparation, deployment support, production launch assistance, and agreed rollout activities."
  },
  {
    title: "Documentation & Handoff",
    desc: "Source code, technical documentation, API information, environment details, relevant credentials, and other agreed handoff materials."
  },
  {
    title: "Ongoing Support Arrangement",
    desc: "Post-launch support, maintenance, enhancement, and development can continue under a separate agreed support arrangement."
  }
]

export default function Deliverables() {
  return (
    <section id="deliverables" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive <span className="italic text-frame-accent">(Project Deliverables).</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved scope, but an enterprise engagement can include the following:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
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
