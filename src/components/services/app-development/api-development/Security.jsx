'use client'

import React from 'react'

const securityAccessItems = [
  {
    title: "Authentication",
    desc: "Authentication verifies who or what is making an API request. Depending on the project, this may use API keys, tokens, OAuth, or another appropriate authentication mechanism."
  },
  {
    title: "Authorization",
    desc: "Authentication alone does not determine what a consumer can access. Authorization controls which resources and actions each user, application, or partner can access."
  },
  {
    title: "Rate Limiting",
    desc: "Rate limiting helps control excessive requests and protect APIs from unexpected traffic or abuse. Limits are planned around the API's expected usage and business requirements."
  },
  {
    title: "Input Validation",
    desc: "Incoming data should not be trusted automatically. We validate requests and reject invalid or unexpected data before it reaches sensitive business logic or connected systems."
  },
  {
    title: "API Gateway Security",
    desc: "Where the architecture requires an API gateway, it can provide a centralized layer for authentication, routing, rate limiting, traffic control, and monitoring."
  },
  {
    title: "Sensitive Data Protection",
    desc: "API responses should expose only the data required by the consumer. We consider data exposure, access permissions, credentials, and sensitive information when designing API workflows."
  },
  {
    title: "Security Testing",
    desc: "Security checks can be included within API testing based on the project's scope and requirements."
  },
  {
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
            API Security &amp; <span className="italic text-frame-accent">Access Control.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security needs to be considered before an API reaches production. We design security controls around the application's users, integrations, data, and access requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {securityAccessItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
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
