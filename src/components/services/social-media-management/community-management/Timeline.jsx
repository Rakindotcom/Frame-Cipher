import React from 'react'

const phases = [
  {
    number: '01',
    stage: 'Onboarding & Audit',
    title: 'Initial Setup',
    body: 'A community audit and initial response framework can typically be prepared within a few business days, depending on the number of platforms and complexity.',
  },
  {
    number: '02',
    stage: 'Integration & Rules',
    title: 'Workflow Setup',
    body: 'Brand voice guidance, escalation rules, moderation requirements, access, and reporting structure are typically established within the first week.',
  },
  {
    number: '03',
    stage: 'Active Execution',
    title: 'Ongoing Management',
    body: 'After setup, monitoring and response continue according to your agreed plan and coverage window.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Timeline &amp; response{' '}
              <span className="italic text-frame-accent">coverage.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Community management is an ongoing operating discipline rather than a one-time project. We establish reliable workflows from day one.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (3 Phases) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {phase.stage}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {phase.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {phase.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {phase.body}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                  Phase Horizon
                </span>
                <span className="mt-1 font-heading text-xs text-zinc-200 block">
                  {phase.stage} Milestone
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Guidance Note Box */}
        <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
          <h3 className="font-heading text-lg font-medium text-white mb-2">
            Realistic SLA Standard
          </h3>
          <p className="text-sm font-normal leading-relaxed text-zinc-300 md:text-base">
            Response times depend on your selected plan, platform coverage, message volume, operating hours, and escalation requirements. We recommend defining a realistic response standard before the engagement begins rather than making an undefined promise of “instant” replies.
          </p>
        </div>
      </div>
    </section>
  )
}
