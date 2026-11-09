'use client'

import React from 'react'
import {
  Lock,
  KeyRound,
  Gauge,
  CheckCircle2,
  Layers,
  ShieldAlert,
  Search,
  FileText,
} from 'lucide-react'

const securityAccessItems = [
  {
    icon: Lock,
    title: "Authentication",
    desc: "Authentication verifies who or what is making an API request. Depending on the project, this may use API keys, tokens, OAuth, or another appropriate authentication mechanism."
  },
  {
    icon: KeyRound,
    title: "Authorization",
    desc: "Authentication alone does not determine what a consumer can access. Authorization controls which resources and actions each user, application, or partner can access."
  },
  {
    icon: Gauge,
    title: "Rate Limiting",
    desc: "Rate limiting helps control excessive requests and protect APIs from unexpected traffic or abuse. Limits are planned around the API's expected usage and business requirements."
  },
  {
    icon: CheckCircle2,
    title: "Input Validation",
    desc: "Incoming data should not be trusted automatically. We validate requests and reject invalid or unexpected data before it reaches sensitive business logic or connected systems."
  },
  {
    icon: Layers,
    title: "API Gateway Security",
    desc: "Where the architecture requires an API gateway, it can provide a centralized layer for authentication, routing, rate limiting, traffic control, and monitoring."
  },
  {
    icon: ShieldAlert,
    title: "Sensitive Data Protection",
    desc: "API responses should expose only the data required by the consumer. We consider data exposure, access permissions, credentials, and sensitive information when designing API workflows."
  },
  {
    icon: Search,
    title: "Security Testing",
    desc: "Security checks can be included within API testing based on the project's scope and requirements."
  },
  {
    icon: FileText,
    title: "Audit Logging & Compliance",
    desc: "Capture comprehensive request and response telemetry, security access logs, and administrative actions with immutable audit trails to meet regulatory and corporate security policies."
  }
]

export default function Security() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Security &amp; Access Control.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security needs to be considered before an API reaches production. We design security controls around the application's users, integrations, data, and access requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityAccessItems.map((item, idx) => {
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
