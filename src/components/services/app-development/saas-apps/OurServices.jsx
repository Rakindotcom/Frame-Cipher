'use client'

import React from 'react'

const saasServices = [
  {
    title: "Product Strategy & Multi-Tenant Architecture",
    desc: "We define your product structure before development begins. That includes tenants, users, workflows, data models, permissions, integrations, and scalability requirements."
  },
  {
    title: "SaaS UI/UX Design",
    desc: "We design onboarding, dashboards, workflows, settings, billing screens, and role-based interfaces around how different users actually interact with the product."
  },
  {
    title: "Full-Stack SaaS Development",
    desc: "We build the frontend and backend around the approved product scope instead of treating SaaS as a collection of disconnected CRUD screens."
  },
  {
    title: "Subscription & Billing Integration",
    desc: "We integrate the billing system around your business model, including plans, trials, subscription changes, payment events, invoices, and access rules where required."
  },
  {
    title: "API & Backend Development",
    desc: "We build or connect the APIs, authentication systems, databases, admin tools, and third-party services your SaaS product needs."
  },
  {
    title: "Performance, Security & Scalability",
    desc: "We plan infrastructure, performance, tenant isolation, monitoring, and security around current requirements and expected growth."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test product workflows, tenant isolation, billing, APIs, permissions, performance, and critical user journeys before launch."
  },
  {
    title: "SaaS Deployment",
    desc: "We prepare the application, environments, infrastructure, domains, release workflow, monitoring, and production deployment based on the approved scope."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "After launch, we can continue with bug fixes, framework updates, feature development, performance work, integrations, and technical support."
  }
]

export default function OurServices() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our SaaS App <span className="italic text-frame-accent">Development Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build SaaS products around your business model, customer journey, technical requirements, and long-term product roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saasServices.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
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
