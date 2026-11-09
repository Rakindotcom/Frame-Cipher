'use client'

import React from 'react'
import {
  Server,
  Network,
  Globe,
  Boxes,
  KeyRound,
  Zap,
  Cpu,
  Check,
} from 'lucide-react'

const apiTypes = [
  {
    icon: Server,
    title: "REST API Development",
    desc: "We build REST APIs with structured resources, predictable endpoints, appropriate HTTP methods, validation, authentication, error handling, pagination, and versioning. REST APIs work well for websites, mobile applications, SaaS platforms, internal systems, and third-party integrations."
  },
  {
    icon: Network,
    title: "GraphQL API Development",
    desc: "GraphQL can help applications request the specific data they need through a defined schema. We can develop GraphQL APIs when the application's data structure and client requirements make the approach appropriate."
  },
  {
    icon: Globe,
    title: "Web API Development",
    desc: "We build web-facing APIs that allow applications and services to exchange data over web protocols. Depending on the project, a web API can support browser-based applications, mobile applications, backend services, client portals, dashboards, external integrations, and internal business tools. The API design depends on the application's consumers, data requirements, security model, and integration needs."
  },
  {
    icon: Boxes,
    title: "Internal APIs",
    desc: "Internal APIs connect different applications or services within the same organization. They can help separate systems while maintaining controlled communication between them.",
    label: "Examples include:",
    bullets: [
      "Website to ERP",
      "Ecommerce platform to inventory system",
      "CRM to internal application",
      "Mobile app to backend",
      "Admin panel to business system"
    ]
  },
  {
    icon: KeyRound,
    title: "Public & Partner APIs",
    desc: "If your customers, vendors, developers, or business partners need controlled access to your platform, we can design APIs around that requirement.",
    label: "Partner API features:",
    bullets: [
      "Authentication and authorization",
      "API keys or tokens",
      "Access scopes and rate limits",
      "API versioning and documentation",
      "Usage controls and onboarding process"
    ]
  },
  {
    icon: Zap,
    title: "Webhook & Event APIs",
    desc: "Webhooks allow one system to notify another when something happens. We can implement webhook-based workflows for events such as payment confirmation, order creation, shipment updates, customer updates, subscription events, inventory changes, and status notifications. Where required, we add retry and failure handling so temporary delivery problems do not silently lose important events."
  },
  {
    icon: Cpu,
    title: "Microservice APIs",
    desc: "For applications using multiple services, APIs can provide controlled communication between independent components. We can design service-to-service APIs around the application's architecture, data requirements, authentication model, and scaling needs."
  }
]

export default function ApiTypes() {
  return (
    <section id="api-types" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Types We Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different applications need different API architectures. We select the approach based on how your systems exchange and consume data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apiTypes.map((item, idx) => {
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

                  {item.bullets && item.bullets.length > 0 && (
                    <div className="mt-4 border-t border-white/[0.06] pt-3">
                      {item.label && (
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                          {item.label}
                        </span>
                      )}
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
