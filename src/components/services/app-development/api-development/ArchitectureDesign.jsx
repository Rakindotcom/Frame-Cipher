'use client'

import React from 'react'
import {
  Layers,
  FileCode2,
  ShieldCheck,
  KeyRound,
  GitBranch,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Workflow,
  Cpu,
} from 'lucide-react'

const contractDesignItems = [
  {
    title: "Resource & Endpoint Design",
    desc: "We define structured, intuitive REST resources and GraphQL queries that accurately mirror your domain business logic, keeping endpoints predictable for consumers.",
    icon: Layers,
  },
  {
    title: "Request & Response Schemas",
    desc: "Explicit JSON typing, strict payload validation, and deterministic response bodies prevent ambiguity between client and server applications.",
    icon: FileCode2,
  },
  {
    title: "OpenAPI & API Specifications",
    desc: "Standardized OpenAPI 3.1 and Swagger specifications created first, serving as the single source of truth for engineering teams and partner integrations.",
    icon: ShieldCheck,
  },
  {
    title: "Security Requirements & Access Model",
    desc: "Role-based access control (RBAC), OAuth 2.0 token scopes, and granular access rules mapped per endpoint before implementation begins.",
    icon: KeyRound,
  },
  {
    title: "API Versioning Strategy",
    desc: "Predictable URI and header versioning (/v1, /v2) ensuring legacy clients continue functioning smoothly while new features roll out.",
    icon: GitBranch,
  },
  {
    title: "Backward Compatibility",
    desc: "Strict schema deprecation and modification rules preventing breaking changes from disrupting active mobile apps and connected partner systems.",
    icon: RefreshCw,
  },
  {
    title: "Data Validation Rules",
    desc: "Comprehensive server-side request sanitization rejecting malformed data, excessive payloads, or illegal inputs before reaching backend logic.",
    icon: CheckCircle2,
  },
  {
    title: "Error Response Standards",
    desc: "Structured, predictable error formats (RFC 7807 problem details) with descriptive machine-readable error codes and debug correlation IDs.",
    icon: AlertTriangle,
  },
  {
    title: "Integration & Dependency Mapping",
    desc: "Complete architectural dependency diagrams detailing third-party APIs, database pipelines, webhook hooks, and downstream services.",
    icon: Workflow,
  },
  {
    title: "Contract Design for Connected Applications",
    desc: "Decoupled contract interfaces allowing web, mobile, and third-party engineering teams to mock endpoints and build in parallel without waiting for backend deployment.",
    icon: Cpu,
  }
]

export default function ArchitectureDesign() {
  return (
    <section id="architecture" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Architecture &amp; Contract Design.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Once the project requirements are clear, we define the technical structure of the API. This creates a predictable contract between your application, users, and connected systems. Our architecture work includes:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contractDesignItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
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
