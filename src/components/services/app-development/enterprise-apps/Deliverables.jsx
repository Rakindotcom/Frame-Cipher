'use client'

import React from 'react'
import {
  FileText,
  Layout,
  Boxes,
  Network,
  ShieldCheck,
  Rocket,
  KeyRound,
  HeartHandshake
} from 'lucide-react'

const deliverablesList = [
  {
    icon: FileText,
    title: "Business & Technical Planning",
    desc: "Requirements documentation, workflow analysis, system architecture, integration planning, and project roadmap."
  },
  {
    icon: Layout,
    title: "Enterprise UI/UX",
    desc: "User flows, role-based interfaces, dashboards, prototypes, responsive layouts, and approved design assets."
  },
  {
    icon: Boxes,
    title: "Enterprise Application",
    desc: "The agreed web, mobile, or connected enterprise application built around the approved requirements."
  },
  {
    icon: Network,
    title: "Integrations",
    desc: "Agreed ERP, CRM, HRMS, legacy, API, identity, database, payment, communication, or third-party integrations."
  },
  {
    icon: ShieldCheck,
    title: "Security & Testing",
    desc: "Authentication, permissions, security controls, integration testing, performance testing, user acceptance testing, and release validation according to project scope."
  },
  {
    icon: Rocket,
    title: "Deployment & Rollout",
    desc: "Environment preparation, deployment support, production launch assistance, and agreed rollout activities."
  },
  {
    icon: KeyRound,
    title: "Documentation & Handoff",
    desc: "Source code, technical documentation, API information, environment details, relevant credentials, and other agreed handoff materials."
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support Arrangement",
    desc: "Post-launch support, maintenance, enhancement, and development can continue under a separate agreed support arrangement."
  }
]

export default function Deliverables() {
  return (
    <section id="deliverables" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive (Project Deliverables).
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved scope, but an enterprise engagement can include the following:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverablesList.map((item, idx) => {
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
