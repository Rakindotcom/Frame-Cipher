'use client'

import React from 'react'

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, development, integration, testing, and communication stay within one team. You do not need to coordinate separate vendors for each technical stage."
  },
  {
    title: "Built for Failure, Not Just Success",
    desc: "We do not treat the successful API response as the entire integration. Timeouts, errors, failed webhooks, unavailable services, and unexpected responses are part of real-world API behavior."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We define the API structure, authentication approach, data flow, and integration requirements before development gets too far."
  },
  {
    title: "Built Around Your Existing Systems",
    desc: "We work around the systems you already use instead of assuming everything needs to be replaced."
  },
  {
    title: "Local & International Integration Experience",
    desc: "Framecipher is based in Dhaka and serves businesses in Bangladesh alongside clients in the UAE, US, UK, Australia, and Canada. Our integration work can involve local platforms such as bKash and Nagad alongside international services."
  },
  {
    title: "Transparent Review Process",
    desc: "You receive defined review points throughout the project. The goal is to make technical progress visible instead of presenting everything only at the end."
  },
  {
    title: "Long-Term Support",
    desc: "API work often continues after launch. When needed, we can support version updates, third-party API changes, performance improvements, security updates, and integration troubleshooting."
  },
  {
    title: "Zero Lock-In & Full IP Ownership",
    desc: "You retain 100% intellectual property ownership of your API architecture, code, schema specifications, and documentation with zero restrictive vendor lock-in."
  }
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for <span className="italic text-frame-accent">API Development &amp; Integration?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build and integrate APIs with the discipline required for production software.
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
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
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
