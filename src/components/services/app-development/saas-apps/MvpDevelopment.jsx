'use client'

import React from 'react'

const mvpDevelopmentItems = [
  {
    title: "Problem & Market Definition",
    desc: "Identify the customer problem, primary users, business model, and core workflow before expanding the feature list."
  },
  {
    title: "Core Feature Selection",
    desc: "Separate essential launch features from functionality that can be introduced during later product releases."
  },
  {
    title: "MVP Architecture",
    desc: "Build the initial architecture around the core product while leaving room for future users, features, billing changes, and integrations."
  },
  {
    title: "Billing & Revenue Path",
    desc: "For subscription products, the MVP should have a practical path from signup to trial or payment."
  },
  {
    title: "User Onboarding",
    desc: "The initial release should help early users understand the product and reach its primary value."
  },
  {
    title: "Initial Analytics",
    desc: "Measure important product events from the beginning so real usage can inform later product decisions."
  },
  {
    title: "Launch Preparation",
    desc: "Prepare the application, infrastructure, integrations, accounts, and operating workflow for the first release."
  },
  {
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
            SaaS MVP Development:{' '}
            <span className="italic text-frame-accent">From Idea to First Users.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An MVP should validate the core product without creating unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mvpDevelopmentItems.map((item, idx) => (
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
