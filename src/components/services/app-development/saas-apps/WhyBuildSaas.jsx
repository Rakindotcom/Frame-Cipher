'use client'

import React from 'react'
import {
  TrendingUp,
  Sliders,
  Zap,
  Globe,
  Rocket,
  ShieldCheck,
} from 'lucide-react'

const whyBuildSaas = [
  {
    icon: TrendingUp,
    title: "Recurring Revenue Model",
    desc: "Subscription-based access allows businesses to build an ongoing commercial relationship with customers instead of relying only on one-time software purchases."
  },
  {
    icon: Sliders,
    title: "Centralized Product Management",
    desc: "A SaaS provider can manage product updates, features, infrastructure, access, billing, and customer experience from a central platform."
  },
  {
    icon: Zap,
    title: "Faster Product Iteration",
    desc: "The product can evolve continuously based on customer feedback, product analytics, support issues, and business priorities."
  },
  {
    icon: Globe,
    title: "Expansion Into New Markets",
    desc: "A well-planned SaaS product can support additional organizations, users, plans, integrations, and markets without creating a completely separate product for every customer."
  },
  {
    icon: Rocket,
    title: "Product-Led Growth Opportunities",
    desc: "Trials, onboarding, feature limits, plan upgrades, invitations, usage prompts, and other growth mechanics can be built directly into the product."
  },
  {
    icon: ShieldCheck,
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
            Why Businesses Build SaaS Products.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS changes not only how software is delivered, but also how the product is priced, managed, improved, and scaled.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBuildSaas.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
