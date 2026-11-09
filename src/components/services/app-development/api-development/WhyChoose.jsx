'use client'

import React from 'react'
import {
  Users,
  ShieldAlert,
  Layers,
  Settings,
  Globe,
  Eye,
  HeartHandshake,
  Lock,
} from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: "One In-House Team",
    desc: "Strategy, development, integration, testing, and communication stay within one team. You do not need to coordinate separate vendors for each technical stage."
  },
  {
    icon: ShieldAlert,
    title: "Built for Failure, Not Just Success",
    desc: "We do not treat the successful API response as the entire integration. Timeouts, errors, failed webhooks, unavailable services, and unexpected responses are part of real-world API behavior."
  },
  {
    icon: Layers,
    title: "Architecture Before Implementation",
    desc: "We define the API structure, authentication approach, data flow, and integration requirements before development gets too far."
  },
  {
    icon: Settings,
    title: "Built Around Your Existing Systems",
    desc: "We work around the systems you already use instead of assuming everything needs to be replaced."
  },
  {
    icon: Globe,
    title: "Local & International Integration Experience",
    desc: "Framecipher is based in Dhaka and serves businesses in Bangladesh alongside clients in the UAE, US, UK, Australia, and Canada. Our integration work can involve local platforms such as bKash and Nagad alongside international services."
  },
  {
    icon: Eye,
    title: "Transparent Review Process",
    desc: "You receive defined review points throughout the project. The goal is to make technical progress visible instead of presenting everything only at the end."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    desc: "API work often continues after launch. When needed, we can support version updates, third-party API changes, performance improvements, security updates, and integration troubleshooting."
  },
  {
    icon: Lock,
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
            Why Choose Framecipher for API Development &amp; Integration?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build and integrate APIs with the discipline required for production software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
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
