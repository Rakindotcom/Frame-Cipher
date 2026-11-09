'use client'

import React from 'react'
import {
  Users,
  Layers,
  Briefcase,
  TrendingUp,
  Eye,
  Sliders,
  MessageSquare,
  HeartHandshake,
} from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: "One In-House Team",
    desc: "Strategy, product design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    icon: Layers,
    title: "Architecture First, Features Second",
    desc: "We begin with tenant structure, data architecture, business rules, and product requirements before expanding the feature list."
  },
  {
    icon: Briefcase,
    title: "Business-First Development",
    desc: "We consider how customers will use, pay for, and grow with the product instead of focusing only on technical implementation."
  },
  {
    icon: TrendingUp,
    title: "Scalable Product Thinking",
    desc: "The application is planned around future users, features, integrations, and operational requirements."
  },
  {
    icon: Eye,
    title: "Clear Review Points",
    desc: "Important requirements, designs, product milestones, and release stages are reviewed before moving forward."
  },
  {
    icon: Sliders,
    title: "Platform & Technology-Neutral Advice",
    desc: "We recommend the technology and architecture that fit the product rather than forcing every SaaS project into the same solution."
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "You collaborate directly with the engineers, designers, and project leads building your SaaS."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    desc: "The same team can continue with feature development, maintenance, platform updates, performance work, and integrations after launch."
  }
]

export default function WhyChooseFramecipher() {
  return (
    <section id="why-choose" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for SaaS App Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            How We Approach SaaS Development: Engineering scalable multi-tenant platforms with in-house craftsmanship, clear architectural governance, and long-term product partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => {
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
