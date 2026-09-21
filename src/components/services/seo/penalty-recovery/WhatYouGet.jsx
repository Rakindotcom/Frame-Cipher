import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'Root Cause Diagnosis',
    body: 'A clear assessment of whether the decline appears related to a manual action, update impact, technical problem, security issue, or another search-performance factor.',
  },
  {
    title: 'Evidence & Impact Report',
    body: 'A documented report showing what changed, which pages or queries were affected, the evidence supporting the diagnosis, and the main issues requiring attention.',
  },
  {
    title: 'Prioritized Recovery Plan',
    body: 'A practical recovery roadmap organized by severity, impact, implementation requirements, and logical sequence.',
  },
  {
    title: 'Remediation & Implementation',
    body: 'Where included in the engagement, we implement the agreed technical, content, structural, or link-related fixes identified during the investigation.',
  },
  {
    title: 'Reconsideration Documentation',
    body: 'For manual actions, we organize the remediation evidence and supporting information needed for a clear reconsideration request.',
  },
  {
    title: 'Recovery Monitoring',
    body: 'We track the relevant visibility and technical indicators after remediation so the recovery process can be evaluated using evidence rather than assumptions.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Get With Framecipher">
          Our deliverables are designed to move from an unclear loss to a documented diagnosis,
          prioritized action, and measurable recovery.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Deliverable 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}