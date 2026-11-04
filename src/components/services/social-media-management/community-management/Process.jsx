import React from 'react'

const steps = [
  {
    number: '01',
    phase: 'Discovery & Audit',
    title: 'Community Audit',
    body: 'We review your active platforms, recent interactions, common questions, existing response patterns, reviews, moderation issues, and escalation needs.',
    deliverable: 'Comprehensive community audit & interaction baseline report.',
  },
  {
    number: '02',
    phase: 'Tone & Guardrails',
    title: 'Brand Voice & Response Guidelines',
    body: 'We establish practical guidance for tone, frequently asked questions, response boundaries, CTAs, and situations that require escalation.',
    deliverable: 'Approved brand voice handbook & response matrix.',
  },
  {
    number: '03',
    phase: 'Routing & Rules',
    title: 'Escalation & Moderation Setup',
    body: 'We define which issues can be handled directly, which require approval, and which should be routed to your team. Moderation rules and platform-specific requirements are also considered.',
    deliverable: 'Escalation routing matrix & automated filter configuration.',
  },
  {
    number: '04',
    phase: 'Active Operations',
    title: 'Monitoring & Response',
    body: 'Once the workflow is approved, ongoing monitoring and response begin across the agreed platforms and coverage windows.',
    deliverable: 'Active daily SLA response & inbox management.',
  },
  {
    number: '05',
    phase: 'Outreach & Growth',
    title: 'Proactive Engagement',
    body: 'Where included, we participate in relevant conversations, encourage useful interactions, and identify opportunities for deeper community engagement.',
    deliverable: 'Weekly engagement log & community advocacy tracking.',
  },
  {
    number: '06',
    phase: 'Telemetry & Refinement',
    title: 'Reporting & Optimization',
    body: 'We review response activity, recurring questions, feedback themes, escalations, and other relevant metrics to improve the workflow over time.',
    deliverable: 'Monthly telemetry dashboard & workflow iteration recommendations.',
  },
]

const operationalSlas = [
  { type: 'Initial Setup & Audit', time: '2 to 3 Business Days', note: 'Account review, interaction baseline, and initial response framework setup' },
  { type: 'Workflow & Routing Rules', time: 'Within Week 1', note: 'Brand voice playbook, escalation protocols, and team routing integration' },
  { type: 'Standard Inquiries', time: '15 to 45 Minutes', note: 'First-line response during active business operating hours' },
  { type: 'Escalated Issues', time: 'Immediate Routing', note: 'Instant internal team alert with ticket context and customer history' },
]

export default function Process() {
  return (
    <section id="process" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              How our community management process{' '}
              <span className="italic text-frame-accent">works.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            We build the response system, brand voice guardrails, and escalation workflows before asking the team to start replying.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {step.phase}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.body}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                  Deliverable
                </span>
                <span className="mt-1 font-heading text-xs text-zinc-200 block">
                  {step.deliverable}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Operational SLAs Architectural Ledger */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h3 className="font-mono text-xs tracking-[1.1px] text-frame-accent">
              Operational Turnaround &amp; Response Standards
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {operationalSlas.map((sla, idx) => (
              <div key={idx} className="rounded-lg border border-white/[0.04] bg-[#18181B] p-4 transition-colors hover:border-white/[0.08]">
                <div className="font-heading text-sm font-medium text-white">{sla.type}</div>
                <div className="font-mono text-xs text-frame-accent mt-1">{sla.time}</div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{sla.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
