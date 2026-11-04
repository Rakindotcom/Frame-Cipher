'use client'

import React from 'react'

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, product design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "Architecture First, Features Second",
    desc: "We begin with tenant structure, data architecture, business rules, and product requirements before expanding the feature list."
  },
  {
    title: "Business-First Development",
    desc: "We consider how customers will use, pay for, and grow with the product instead of focusing only on technical implementation."
  },
  {
    title: "Scalable Product Thinking",
    desc: "The application is planned around future users, features, integrations, and operational requirements."
  },
  {
    title: "Clear Review Points",
    desc: "Important requirements, designs, product milestones, and release stages are reviewed before moving forward."
  },
  {
    title: "Platform & Technology-Neutral Advice",
    desc: "We recommend the technology and architecture that fit the product rather than forcing every SaaS project into the same solution."
  },
  {
    title: "Direct Communication",
    desc: "You collaborate directly with the engineers, designers, and project leads building your SaaS."
  },
  {
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
            Why Choose Framecipher for <span className="italic text-frame-accent">SaaS App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            How We Approach SaaS Development: Engineering scalable multi-tenant platforms with in-house craftsmanship, clear architectural governance, and long-term product partnership.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
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
