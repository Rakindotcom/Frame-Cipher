import React from 'react'

const steps = [
  {
    title: 'Initial Diagnosis & Data Collection',
    body: 'We begin by collecting the available evidence from Search Console, analytics, site data, technical changes, backlink history, and your description of what happened. The first objective is to understand the timeline before recommending changes.',
  },
  {
    title: 'Impact & Scope Analysis',
    body: 'We identify the size and pattern of the visibility loss. This includes looking at affected pages, queries, traffic sources, countries, devices, content categories, and important commercial URLs.',
  },
  {
    title: 'Root Cause Investigation',
    body: 'We compare the evidence against likely causes, including manual actions, Google updates, technical changes, migrations, indexing issues, security problems, backlink patterns, content quality, and competitive SERP changes.',
  },
  {
    title: 'Remediation Planning',
    body: 'Once the likely cause is established, we create a prioritized recovery plan showing what needs to be fixed, what can be left unchanged, and what evidence should be documented.',
  },
  {
    title: 'Implementation & Documentation',
    body: 'We implement agreed fixes and maintain a record of the work completed. For manual actions, documentation can be especially important because Google asks reconsideration requests to explain the violation, the corrective steps, and the results of those efforts.',
  },
  {
    title: 'Reconsideration or Algorithmic Reassessment',
    body: 'Manual actions may require a reconsideration request after the underlying violation has been fixed. Algorithmic and technical recovery does not use the same process. Instead, changes need to be implemented and then assessed as Google recrawls and reassesses the site.',
  },
  {
    title: 'Recovery Validation & Prevention',
    body: 'We monitor whether the affected pages and queries are showing signs of improvement and whether the original technical, content, or policy issue has been resolved. We also identify preventive changes that can reduce the chance of the same problem recurring.',
  },
]

export default function Process() {
  return (
    <section className="bg-[#09090B] py-20 md:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>Step-by-Step Methodology</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            How We Approach Google Penalty Recovery
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Our process is deliberately evidence-first. The right diagnosis prevents wasted work and shortens the actual recovery path.
          </p>
        </div>

        {/* Modality 3: Seamless Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Phase // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                </div>

                <h3 className="mt-6 text-lg font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
