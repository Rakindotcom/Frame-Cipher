'use client'

import React from 'react'

const onboardingItems = [
  {
    title: "Signup & Account Creation",
    desc: "Keep registration clear while collecting the information required to create the account or workspace."
  },
  {
    title: "Workspace Setup",
    desc: "Guide new customers through company details, preferences, initial configuration, team setup, or other required steps."
  },
  {
    title: "Guided Onboarding",
    desc: "Help users discover the important parts of the platform rather than placing every feature in front of them at once."
  },
  {
    title: "Team Invitations",
    desc: "Allow account owners or administrators to bring additional team members into the product at the right stage."
  },
  {
    title: "Trial Activation",
    desc: "Connect trial creation with plan rules, feature limits, onboarding states, and billing events."
  },
  {
    title: "Feature Discovery",
    desc: "Introduce important functionality through contextual guidance and relevant user flows."
  },
  {
    title: "First-Value Experience",
    desc: "The onboarding process should move users toward the product's first meaningful outcome as efficiently as the workflow allows."
  },
  {
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
            SaaS Onboarding &amp;{' '}
            <span className="italic text-frame-accent">Activation.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Signing up is only the first step. The product also needs to help new customers reach value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {onboardingItems.map((item, idx) => (
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
