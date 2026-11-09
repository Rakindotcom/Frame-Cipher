'use client'

import React from 'react'
import {
  UserPlus,
  Building2,
  Compass,
  Users,
  Clock,
  Sparkles,
  Rocket,
  Mail,
} from 'lucide-react'

const onboardingItems = [
  {
    icon: UserPlus,
    title: "Signup & Account Creation",
    desc: "Keep registration clear while collecting the information required to create the account or workspace."
  },
  {
    icon: Building2,
    title: "Workspace Setup",
    desc: "Guide new customers through company details, preferences, initial configuration, team setup, or other required steps."
  },
  {
    icon: Compass,
    title: "Guided Onboarding",
    desc: "Help users discover the important parts of the platform rather than placing every feature in front of them at once."
  },
  {
    icon: Users,
    title: "Team Invitations",
    desc: "Allow account owners or administrators to bring additional team members into the product at the right stage."
  },
  {
    icon: Clock,
    title: "Trial Activation",
    desc: "Connect trial creation with plan rules, feature limits, onboarding states, and billing events."
  },
  {
    icon: Sparkles,
    title: "Feature Discovery",
    desc: "Introduce important functionality through contextual guidance and relevant user flows."
  },
  {
    icon: Rocket,
    title: "First-Value Experience",
    desc: "The onboarding process should move users toward the product's first meaningful outcome as efficiently as the workflow allows."
  },
  {
    icon: Mail,
    title: "Email Onboarding & Automation",
    desc: "Where required, onboarding can extend outside the product through email, reminders, notifications, and event-based communication."
  }
]

export default function OnboardingActivation() {
  return (
    <section id="onboarding" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Onboarding &amp; Activation.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Signing up is only the first step. The product also needs to help new customers reach value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {onboardingItems.map((item, idx) => {
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
