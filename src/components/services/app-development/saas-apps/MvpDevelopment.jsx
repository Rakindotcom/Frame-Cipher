'use client'

import React from 'react'
import {
  Search,
  CheckCircle2,
  Layers,
  CreditCard,
  UserPlus,
  Activity,
  Rocket,
  RefreshCw,
} from 'lucide-react'

const mvpDevelopmentItems = [
  {
    icon: Search,
    title: "Problem & Market Definition",
    desc: "Identify the customer problem, primary users, business model, and core workflow before expanding the feature list."
  },
  {
    icon: CheckCircle2,
    title: "Core Feature Selection",
    desc: "Separate essential launch features from functionality that can be introduced during later product releases."
  },
  {
    icon: Layers,
    title: "MVP Architecture",
    desc: "Build the initial architecture around the core product while leaving room for future users, features, billing changes, and integrations."
  },
  {
    icon: CreditCard,
    title: "Billing & Revenue Path",
    desc: "For subscription products, the MVP should have a practical path from signup to trial or payment."
  },
  {
    icon: UserPlus,
    title: "User Onboarding",
    desc: "The initial release should help early users understand the product and reach its primary value."
  },
  {
    icon: Activity,
    title: "Initial Analytics",
    desc: "Measure important product events from the beginning so real usage can inform later product decisions."
  },
  {
    icon: Rocket,
    title: "Launch Preparation",
    desc: "Prepare the application, infrastructure, integrations, accounts, and operating workflow for the first release."
  },
  {
    icon: RefreshCw,
    title: "Feedback & Iteration",
    desc: "Prioritize future improvements using customer feedback, product usage, support data, and business goals."
  }
]

export default function MvpDevelopment() {
  return (
    <section id="mvp" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS MVP Development: From Idea to First Users.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An MVP should validate the core product without creating unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mvpDevelopmentItems.map((item, idx) => {
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
