'use client'

import React from 'react'

const documentationItems = [
  {
    title: "OpenAPI & Swagger Documentation",
    desc: "Where appropriate, we provide API documentation using OpenAPI/Swagger or another suitable documentation approach. Documentation can cover endpoints, parameters, authentication, responses, and errors."
  },
  {
    title: "Interactive API Documentation",
    desc: "Interactive documentation can allow developers to understand and test available endpoints more easily. The exact documentation setup depends on the API architecture and project requirements."
  },
  {
    title: "Request & Response Examples",
    desc: "Examples make API documentation easier to follow. We can document sample requests, responses, parameters, authentication requirements, and common error scenarios."
  },
  {
    title: "Developer Onboarding",
    desc: "When another developer or team needs to consume the API, clear documentation reduces unnecessary back-and-forth. We structure documentation around the information they actually need to integrate."
  },
  {
    title: "Sandbox Environments",
    desc: "For suitable projects, a sandbox or testing environment can allow consumers to test API workflows without affecting live production data."
  },
  {
    title: "Partner API Documentation",
    desc: "If your API is intended for vendors, customers, or business partners, documentation can include onboarding instructions and access requirements."
  },
  {
    title: "API Handoff & Knowledge Transfer",
    desc: "At project completion, we provide the agreed documentation and handoff materials so your team can understand and continue working with the API."
  },
  {
    title: "Client SDKs & Code Samples",
    desc: "Provide client code snippets and helper SDKs across JavaScript, Python, PHP, and mobile platforms so developers can integrate your endpoints in minutes instead of days."
  }
]

export default function Documentation() {
  return (
    <section id="documentation" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Documentation &amp; <span className="italic text-frame-accent">Developer Experience.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A technically good API can still create problems if nobody knows how to use it. Documentation should help your internal developers, external partners, and future team members understand the API without reverse-engineering the code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {documentationItems.map((item, idx) => (
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
