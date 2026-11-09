'use client'

import React from 'react'
import {
  Layers,
  Boxes,
  Lock,
  ShieldCheck,
  Webhook,
  RotateCcw,
  CheckCircle2,
  Sliders,
  Globe,
} from 'lucide-react'

const apiIntegrationItems = [
  {
    icon: Layers,
    title: "REST APIs",
    desc: "Build structured APIs for web applications, mobile apps, internal tools, partners, or customer integrations."
  },
  {
    icon: Boxes,
    title: "GraphQL Where Appropriate",
    desc: "Use GraphQL when flexible data retrieval provides a practical benefit for the application."
  },
  {
    icon: Lock,
    title: "API Authentication",
    desc: "Protect API access with suitable authentication and authorization mechanisms."
  },
  {
    icon: ShieldCheck,
    title: "Rate Limiting",
    desc: "Control excessive requests and protect shared infrastructure from unnecessary API traffic."
  },
  {
    icon: Webhook,
    title: "Webhook Events",
    desc: "Send or receive events when important actions occur, such as payments, subscription changes, account updates, or workflow events."
  },
  {
    icon: RotateCcw,
    title: "Webhook Retry Handling",
    desc: "Retry logic can help prevent temporary delivery failures from becoming lost events."
  },
  {
    icon: CheckCircle2,
    title: "Signature Verification",
    desc: "Where supported by the connected service, incoming webhook signatures can be verified before processing."
  },
  {
    icon: Sliders,
    title: "Third-Party Integrations",
    desc: "Connect payment platforms, CRM systems, communication services, analytics tools, storage systems, email providers, and other required platforms."
  },
  {
    icon: Globe,
    title: "Public API Access",
    desc: "For integration-focused SaaS products, public APIs can become part of the customer-facing product itself."
  }
]

export default function ApisWebhooksIntegrations() {
  return (
    <section id="apis-webhooks" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS APIs, Webhooks &amp; Integrations.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Modern SaaS products often need to connect with other software, services, and customer systems. A modern SaaS application lives inside an interconnected business ecosystem through clean APIs and real-time webhook events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apiIntegrationItems.map((item, idx) => {
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
