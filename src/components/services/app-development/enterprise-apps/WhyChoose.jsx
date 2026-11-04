'use client'

import React from 'react'

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Discovery, architecture, design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "We Start With the Organization",
    desc: "We understand how people, processes, systems, and information work together before turning requirements into application features."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We map workflows, integrations, security, data, and scalability before committing the project to implementation."
  },
  {
    title: "Built Around Existing Systems",
    desc: "Where replacement is not practical, we design the new application to work alongside the platforms your organization already depends on."
  },
  {
    title: "Business-First Development",
    desc: "The objective is not simply to produce software. It is to improve the workflow the software is responsible for supporting."
  },
  {
    title: "Clear Stakeholder Reviews",
    desc: "Important requirements, designs, architecture decisions, and release milestones are reviewed before moving forward."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue supporting application updates, integrations, performance, security, and future development after launch."
  },
  {
    title: "Platform & Technology Advice",
    desc: "We recommend the architecture, technologies, and integration approach that fit the organization's actual requirements rather than forcing every project into one fixed solution."
  }
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for <span className="italic text-frame-accent">Enterprise Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We bring senior architectural talent, proven enterprise frameworks, and transparent communication to high-stakes projects.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
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
