'use client'

import React from 'react'
import { AlertOctagon, RefreshCw, ShieldCheck } from 'lucide-react'

const whyRealPartner = [
  {
    icon: AlertOctagon,
    title: "Silent Failures Are the Real Risk",
    desc: "A failed API request is not always obvious. Data may stop syncing. A webhook may fail. A payment status may not update. An external service may return an unexpected response. We design integrations to detect and handle these situations rather than assuming every request will succeed."
  },
  {
    icon: RefreshCw,
    title: "Third-Party APIs Keep Changing",
    desc: "Your integration depends partly on another company's system. Third-party providers can change endpoints, authentication requirements, response formats, rate limits, or API versions. That is why version planning, error handling, monitoring, and ongoing maintenance matter."
  },
  {
    icon: ShieldCheck,
    title: "APIs Become Long-Term Infrastructure",
    desc: "An API can become the connection point between your website, mobile app, internal systems, partners, and external services. A rushed API decision can create maintenance problems later. We focus on clear architecture and documentation so the API remains useful as your business grows."
  }
]

export default function WhyPartner() {
  return (
    <section id="why-partner" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Your Business Needs a Real API Development Partner.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An API is usually invisible until it fails. When data stops moving or an integration behaves unpredictably, customer experience and operations suffer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyRealPartner.map((item, idx) => {
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
