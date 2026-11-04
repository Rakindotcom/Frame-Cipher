'use client'

import React from 'react'

const apiIntegrationItems = [
  {
    title: "REST APIs",
    desc: "Build structured APIs for web applications, mobile apps, internal tools, partners, or customer integrations."
  },
  {
    title: "GraphQL Where Appropriate",
    desc: "Use GraphQL when flexible data retrieval provides a practical benefit for the application."
  },
  {
    title: "API Authentication",
    desc: "Protect API access with suitable authentication and authorization mechanisms."
  },
  {
    title: "Rate Limiting",
    desc: "Control excessive requests and protect shared infrastructure from unnecessary API traffic."
  },
  {
    title: "Webhook Events",
    desc: "Send or receive events when important actions occur, such as payments, subscription changes, account updates, or workflow events."
  },
  {
    title: "Webhook Retry Handling",
    desc: "Retry logic can help prevent temporary delivery failures from becoming lost events."
  },
  {
    title: "Signature Verification",
    desc: "Where supported by the connected service, incoming webhook signatures can be verified before processing."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connect payment platforms, CRM systems, communication services, analytics tools, storage systems, email providers, and other required platforms."
  },
  {
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
            SaaS APIs, Webhooks &amp; <span className="italic text-frame-accent">Integrations.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Modern SaaS products often need to connect with other software, services, and customer systems. A modern SaaS application lives inside an interconnected business ecosystem through clean APIs and real-time webhook events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apiIntegrationItems.map((item, idx) => (
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
