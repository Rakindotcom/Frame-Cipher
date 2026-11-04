'use client'

import React from 'react'

const useCases = [
  {
    title: "Web & Mobile Applications",
    desc: "Connect web and mobile applications to backend systems, databases, authentication services, and business logic."
  },
  {
    title: "SaaS Platforms",
    desc: "Build APIs that allow SaaS applications to communicate with web clients, mobile applications, integrations, and external users."
  },
  {
    title: "Ecommerce Systems",
    desc: "Connect stores with payment, inventory, CRM, ERP, accounting, shipping, and marketing systems."
  },
  {
    title: "Payment & Financial Workflows",
    desc: "Connect applications with supported payment gateways, banking services, transaction systems, and financial workflows."
  },
  {
    title: "CRM & ERP Connectivity",
    desc: "Synchronize customer, order, inventory, accounting, and operational data between systems."
  },
  {
    title: "Internal Business Systems",
    desc: "Connect internal applications, dashboards, admin panels, databases, and operational tools."
  },
  {
    title: "Partner Platforms",
    desc: "Build controlled API access for vendors, customers, affiliates, marketplaces, and other approved partners."
  },
  {
    title: "Real-Time Data Synchronization",
    desc: "Use webhooks and event-based workflows where systems need timely updates without constant polling."
  },
  {
    title: "Business Automation",
    desc: "Connect multiple systems so repetitive data-transfer workflows can happen automatically."
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Development <span className="italic text-frame-accent">Use Cases.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            APIs support many different business workflows. We design the API around what your application and connected systems actually need to accomplish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
