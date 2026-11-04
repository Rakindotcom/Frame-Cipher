'use client'

import React from 'react'

const typesOfSaas = [
  {
    title: "B2B SaaS",
    desc: "Software for companies that need tools for sales, operations, finance, HR, customer management, reporting, or internal workflows."
  },
  {
    title: "B2C SaaS",
    desc: "Subscription-based products for individual customers, including productivity, learning, content, lifestyle, and other consumer services."
  },
  {
    title: "Vertical SaaS",
    desc: "Industry-focused software built around the workflows, terminology, permissions, and requirements of a specific sector."
  },
  {
    title: "CRM & Sales SaaS",
    desc: "Platforms for leads, contacts, pipelines, customer activity, communication, reporting, and sales workflows."
  },
  {
    title: "HR & Workforce SaaS",
    desc: "Software for employee management, recruitment, attendance, scheduling, workforce operations, and related business processes."
  },
  {
    title: "Finance & Accounting SaaS",
    desc: "Products for invoicing, expenses, financial records, payments, reporting, subscription management, and accounting workflows."
  },
  {
    title: "Education SaaS",
    desc: "Learning platforms, course management, student systems, assessments, communication, and education-focused workflows."
  },
  {
    title: "Healthcare SaaS",
    desc: "Software for appointments, records, scheduling, communication, wellness, and other supported healthcare workflows."
  },
  {
    title: "Operations & Workflow SaaS",
    desc: "Platforms for approvals, tasks, field operations, inventory, service management, reporting, and recurring business processes."
  },
  {
    title: "AI-Powered SaaS",
    desc: "Products that use AI within broader business workflows, such as automation, document processing, recommendations, content generation, analysis, or intelligent assistance."
  },
  {
    title: "White-Label SaaS",
    desc: "Platforms that allow businesses or partners to offer the same underlying product under different branding, domains, configurations, or customer-facing identities."
  }
]

export default function TypesOfSaas() {
  return (
    <section id="types-of-saas" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Types of SaaS <span className="italic text-frame-accent">We Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build SaaS products around different customer models, industries, and operational workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {typesOfSaas.map((item, idx) => (
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
