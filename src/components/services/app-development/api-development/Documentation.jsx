'use client'

import React from 'react'
import {
  FileCode2,
  Terminal,
  BookOpen,
  Users,
  Boxes,
  KeyRound,
  Share2,
  Code2,
} from 'lucide-react'

const documentationItems = [
  {
    icon: FileCode2,
    title: "OpenAPI & Swagger Documentation",
    desc: "Where appropriate, we provide API documentation using OpenAPI/Swagger or another suitable documentation approach. Documentation can cover endpoints, parameters, authentication, responses, and errors."
  },
  {
    icon: Terminal,
    title: "Interactive API Documentation",
    desc: "Interactive documentation can allow developers to understand and test available endpoints more easily. The exact documentation setup depends on the API architecture and project requirements."
  },
  {
    icon: BookOpen,
    title: "Request & Response Examples",
    desc: "Examples make API documentation easier to follow. We can document sample requests, responses, parameters, authentication requirements, and common error scenarios."
  },
  {
    icon: Users,
    title: "Developer Onboarding",
    desc: "When another developer or team needs to consume the API, clear documentation reduces unnecessary back-and-forth. We structure documentation around the information they actually need to integrate."
  },
  {
    icon: Boxes,
    title: "Sandbox Environments",
    desc: "For suitable projects, a sandbox or testing environment can allow consumers to test API workflows without affecting live production data."
  },
  {
    icon: KeyRound,
    title: "Partner API Documentation",
    desc: "If your API is intended for vendors, customers, or business partners, documentation can include onboarding instructions and access requirements."
  },
  {
    icon: Share2,
    title: "API Handoff & Knowledge Transfer",
    desc: "At project completion, we provide the agreed documentation and handoff materials so your team can understand and continue working with the API."
  },
  {
    icon: Code2,
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
            API Documentation &amp; Developer Experience.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A technically good API can still create problems if nobody knows how to use it. Documentation should help your internal developers, external partners, and future team members understand the API without reverse-engineering the code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {documentationItems.map((item, idx) => {
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
