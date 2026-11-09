'use client'

import React from 'react'
import {
  GitBranch,
  Cloud,
  Database,
  Sliders,
  FileText,
  Code2,
  KeyRound,
  CheckCircle2,
} from 'lucide-react'

const deploymentHandoffItems = [
  {
    icon: GitBranch,
    title: "Source Code Ownership",
    desc: "The agreed source code is delivered according to the project scope and contract terms."
  },
  {
    icon: Cloud,
    title: "Cloud Account Ownership",
    desc: "Where appropriate, infrastructure can be maintained under the client's account or another agreed ownership structure."
  },
  {
    icon: Database,
    title: "Database Access",
    desc: "Appropriate database access, credentials, and documentation can be handed over according to the project's security model."
  },
  {
    icon: Sliders,
    title: "Environment Configuration",
    desc: "Development, staging, and production environments can be documented so the application remains understandable after launch."
  },
  {
    icon: FileText,
    title: "Deployment Documentation",
    desc: "Provide the information needed to understand how the application is built, deployed, and maintained."
  },
  {
    icon: Code2,
    title: "API Documentation",
    desc: "Document important APIs and integration points required for ongoing development."
  },
  {
    icon: KeyRound,
    title: "Admin Access",
    desc: "Provide the agreed access to administrative interfaces and product-management tools."
  },
  {
    icon: CheckCircle2,
    title: "Technical Handoff",
    desc: "At project completion, the agreed files, credentials, documentation, and other deliverables are handed over for continued operation."
  }
]

export default function DeploymentHandoff() {
  return (
    <section id="deployment" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Deployment, Ownership &amp; Handoff.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS project should leave you with a clear understanding of the product and the infrastructure that runs it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentHandoffItems.map((item, idx) => {
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
