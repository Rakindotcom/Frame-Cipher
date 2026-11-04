'use client'

import React from 'react'

const deploymentHandoffItems = [
  {
    title: "Source Code Ownership",
    desc: "The agreed source code is delivered according to the project scope and contract terms."
  },
  {
    title: "Cloud Account Ownership",
    desc: "Where appropriate, infrastructure can be maintained under the client's account or another agreed ownership structure."
  },
  {
    title: "Database Access",
    desc: "Appropriate database access, credentials, and documentation can be handed over according to the project's security model."
  },
  {
    title: "Environment Configuration",
    desc: "Development, staging, and production environments can be documented so the application remains understandable after launch."
  },
  {
    title: "Deployment Documentation",
    desc: "Provide the information needed to understand how the application is built, deployed, and maintained."
  },
  {
    title: "API Documentation",
    desc: "Document important APIs and integration points required for ongoing development."
  },
  {
    title: "Admin Access",
    desc: "Provide the agreed access to administrative interfaces and product-management tools."
  },
  {
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
            SaaS Deployment, Ownership &amp;{' '}
            <span className="italic text-frame-accent">Handoff.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS project should leave you with a clear understanding of the product and the infrastructure that runs it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {deploymentHandoffItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
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
