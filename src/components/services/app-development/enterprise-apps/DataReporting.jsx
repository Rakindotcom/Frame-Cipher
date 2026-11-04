'use client'

import React from 'react'

const dataReporting = [
  {
    title: "Centralized Business Data",
    desc: "Organize relevant business information within a structured application while maintaining appropriate access and ownership boundaries."
  },
  {
    title: "Data Modeling",
    desc: "Define relationships between customers, employees, products, transactions, departments, locations, and other important business entities."
  },
  {
    title: "Data Validation",
    desc: "Use business rules and validation controls to reduce incomplete, inconsistent, or incorrect records."
  },
  {
    title: "Data Governance",
    desc: "Define appropriate ownership, access, retention, and handling rules for important business information."
  },
  {
    title: "Operational Dashboards",
    desc: "Give teams visibility into the metrics, tasks, alerts, and information required for daily operations."
  },
  {
    title: "Management Reporting",
    desc: "Build reports around financial activity, operational performance, organizational KPIs, and other management requirements."
  },
  {
    title: "Data Exports",
    desc: "Provide controlled export functionality for approved reporting, analysis, audit, or operational purposes."
  },
  {
    title: "Audit Reporting",
    desc: "Support traceability for important changes, approvals, transactions, and administrative activity."
  },
  {
    title: "Business Intelligence Integration",
    desc: "Connect suitable BI and analytics platforms when an organization requires more advanced reporting or analysis."
  }
]

export default function DataReporting() {
  return (
    <section id="data-reporting" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Data Management, Reporting &amp; <span className="italic text-frame-accent">Analytics.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise applications often become a central operational layer for information used across departments and connected systems. We structure data around business entities, workflows, permissions, validation, reporting, and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {dataReporting.map((item, idx) => (
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
