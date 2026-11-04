'use client'

import React from 'react'
import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'

const apiServices = [
  {
    title: "API Strategy & Planning",
    desc: "A reliable API starts with understanding how your business systems work together. We first map your requirements, existing infrastructure, data flows, and integration dependencies before development begins.",
    bullets: [
      "Business and technical requirements",
      "Existing systems and infrastructure",
      "API consumers and connected applications",
      "Data flow between systems",
      "Third-party integration dependencies",
      "REST or GraphQL approach",
      "Scalability and performance requirements",
      "Project constraints and implementation priorities",
      "Long-term maintenance considerations"
    ],
    footer: "This gives the project a clear direction before we move into technical API architecture and contract design."
  },
  {
    title: "Custom API Development",
    desc: "We build custom APIs around your application's actual business logic and data model. Depending on the project, this can include REST or GraphQL APIs for websites, mobile apps, SaaS products, internal systems, and partner platforms.",
    bullets: [
      "REST API development",
      "GraphQL API development",
      "Authentication and authorization",
      "Request validation",
      "Response formatting",
      "Error handling",
      "Pagination and filtering",
      "API versioning",
      "Database integration",
      "Webhook endpoints"
    ],
    footer: "The result is an API that your own applications, partners, or approved third-party systems can consume."
  },
  {
    title: "API Integration & Connectivity",
    desc: "We connect your application with the external systems it needs to exchange data with. This may include payment platforms, CRMs, ERPs, ecommerce systems, banking services, logistics platforms, SaaS tools, and other business applications. Our integration work covers authentication, data mapping, request and response handling, webhooks, error handling, and integration testing based on each system's requirements."
  },
  {
    title: "API Testing & Quality Assurance",
    desc: "An API should not only work when everything goes right. We test normal requests, invalid inputs, authentication failures, integration errors, webhook behavior, and other realistic conditions.",
    bullets: [
      "Functional API testing",
      "Integration testing",
      "Endpoint testing",
      "Authentication testing",
      "Error-response testing",
      "Contract testing",
      "Load testing",
      "Performance testing",
      "Failure-scenario testing",
      "Regression testing"
    ],
    footer: "This helps identify problems before they affect customers or connected systems."
  },
  {
    title: "API Monitoring & Observability",
    desc: "API reliability does not end when an integration goes live. We monitor critical API behavior so problems can be identified before they disrupt connected systems.",
    bullets: [
      "API uptime and availability",
      "Response-time monitoring",
      "Error-rate tracking",
      "Webhook status",
      "Health checks",
      "API and application logs",
      "Failure alerts"
    ]
  },
  {
    title: "API Maintenance & Support",
    desc: "APIs need ongoing attention as applications, traffic, and connected platforms change. We provide maintenance when your API needs updates, troubleshooting, or continued technical support.",
    bullets: [
      "API version updates",
      "Third-party API change updates",
      "Documentation updates",
      "Performance improvements",
      "Security updates",
      "Integration troubleshooting",
      "Bug fixes and technical adjustments",
      "Monitoring and reliability improvements"
    ],
    footer: "Ongoing maintenance is available separately when a project requires continued API support."
  }
]

export default function Services() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our API Development &amp; <span className="italic text-frame-accent">Integration Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We handle API projects from architecture and development through integration, testing, monitoring, and ongoing improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apiServices.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
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

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-3 text-xs text-zinc-300">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.footer && (
                <div className="mt-6 border-t border-white/[0.08] pt-3 font-mono text-[11px] text-zinc-400">
                  {item.footer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PosterButton href="/contact" variant="accent">
            Discuss Your API Requirements &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
