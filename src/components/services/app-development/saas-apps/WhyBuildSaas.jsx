'use client'

import React from 'react'

const whyBuildSaas = [
  {
    title: "Recurring Revenue Model",
    desc: "Subscription-based access allows businesses to build an ongoing commercial relationship with customers instead of relying only on one-time software purchases."
  },
  {
    title: "Centralized Product Management",
    desc: "A SaaS provider can manage product updates, features, infrastructure, access, billing, and customer experience from a central platform."
  },
  {
    title: "Faster Product Iteration",
    desc: "The product can evolve continuously based on customer feedback, product analytics, support issues, and business priorities."
  },
  {
    title: "Expansion Into New Markets",
    desc: "A well-planned SaaS product can support additional organizations, users, plans, integrations, and markets without creating a completely separate product for every customer."
  },
  {
    title: "Product-Led Growth Opportunities",
    desc: "Trials, onboarding, feature limits, plan upgrades, invitations, usage prompts, and other growth mechanics can be built directly into the product."
  },
  {
    title: "Long-Term Product Value",
    desc: "The objective is not simply to launch software. It is to build a product that can support customers, subscriptions, new features, and operational growth over time."
  }
]

export default function WhyBuildSaas() {
  return (
    <section id="why-build-saas" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Build <span className="italic text-frame-accent">SaaS Products.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS changes not only how software is delivered, but also how the product is priced, managed, improved, and scaled.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBuildSaas.map((item, idx) => (
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
