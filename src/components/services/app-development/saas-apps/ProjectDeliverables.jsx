'use client'

import React from 'react'

const deliverablesList = [
  {
    title: "Product Strategy",
    desc: "Business requirements, user journeys, product roadmap, SaaS model, and technical planning."
  },
  {
    title: "Multi-Tenant Architecture",
    desc: "Tenant structure, data model, access control, and scalability planning."
  },
  {
    title: "UI/UX",
    desc: "Onboarding flows, dashboards, workflows, design systems, responsive interfaces, and prototypes."
  },
  {
    title: "SaaS Application",
    desc: "Frontend and backend development around the approved features and business workflows."
  },
  {
    title: "Billing & Integrations",
    desc: "Subscription logic, payment integrations, APIs, webhooks, notifications, analytics, and other agreed services."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, tenant isolation, functional testing, integration testing, performance testing, and release validation."
  },
  {
    title: "Deployment",
    desc: "Production setup, deployment support, monitoring, domains, and other agreed infrastructure work."
  },
  {
    title: "Handoff & Documentation",
    desc: "Source code, technical documentation, API information, access credentials, and other agreed project deliverables."
  }
]

export default function ProjectDeliverables() {
  return (
    <section id="deliverables" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From a{' '}
            <span className="italic text-frame-accent">SaaS Development Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved project scope, but a complete SaaS engagement can include:
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
