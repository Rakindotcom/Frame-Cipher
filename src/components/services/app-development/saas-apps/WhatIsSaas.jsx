'use client'

import React from 'react'

const whatIsSaas = [
  {
    title: "SaaS vs Traditional Software",
    desc: "Traditional software may be sold or deployed as a one-time product. SaaS is typically delivered as an ongoing service that customers access through the web or connected applications."
  },
  {
    title: "SaaS vs a Standard Web Application",
    desc: "A standard web application can serve one company, one workflow, or a limited group of users. A SaaS platform is designed to serve multiple customers with separate accounts, permissions, billing, and customer data."
  },
  {
    title: "Multi-Tenant Software",
    desc: "Multi-tenancy allows multiple customer organizations or accounts to use the same platform while keeping their data and access logically separated."
  },
  {
    title: "Subscription-Based Access",
    desc: "SaaS products commonly use monthly, annual, usage-based, or other recurring plans to provide access to the software."
  },
  {
    title: "Continuous Product Delivery",
    desc: "Because the product is managed centrally, updates, improvements, fixes, and new functionality can be released continuously as the SaaS evolves."
  }
]

export default function WhatIsSaas() {
  return (
    <section id="what-is-saas" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Is SaaS App <span className="italic text-frame-accent">Development?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS app development is the process of building software that customers access as an ongoing online service instead of installing and managing a separate copy. A SaaS product usually combines the application itself with customer accounts, tenant management, billing, permissions, analytics, integrations, and infrastructure designed for continuous operation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {whatIsSaas.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 transition-colors duration-300 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
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
