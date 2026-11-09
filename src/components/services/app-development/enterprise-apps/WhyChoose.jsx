'use client'

import React from 'react'
import {
  Users,
  Compass,
  Layers,
  Cpu,
  Target,
  CheckCircle2,
  ShieldCheck,
  Lightbulb
} from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: "One In-House Team",
    desc: "Discovery, architecture, design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    icon: Compass,
    title: "We Start With the Organization",
    desc: "We understand how people, processes, systems, and information work together before turning requirements into application features."
  },
  {
    icon: Layers,
    title: "Architecture Before Implementation",
    desc: "We map workflows, integrations, security, data, and scalability before committing the project to implementation."
  },
  {
    icon: Cpu,
    title: "Built Around Existing Systems",
    desc: "Where replacement is not practical, we design the new application to work alongside the platforms your organization already depends on."
  },
  {
    icon: Target,
    title: "Business-First Development",
    desc: "The objective is not simply to produce software. It is to improve the workflow the software is responsible for supporting."
  },
  {
    icon: CheckCircle2,
    title: "Clear Stakeholder Reviews",
    desc: "Important requirements, designs, architecture decisions, and release milestones are reviewed before moving forward."
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    desc: "The same team can continue supporting application updates, integrations, performance, security, and future development after launch."
  },
  {
    icon: Lightbulb,
    title: "Platform & Technology Advice",
    desc: "We recommend the architecture, technologies, and integration approach that fit the organization's actual requirements rather than forcing every project into one fixed solution."
  }
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for Enterprise Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We bring senior architectural talent, proven enterprise frameworks, and transparent communication to high-stakes projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
