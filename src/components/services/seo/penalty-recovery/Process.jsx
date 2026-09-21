import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Evidence Collection',
    body: 'We begin by gathering the available evidence: where and when the drop started, which pages and queries were affected, Search Console data, analytics, manual-action reports, and any relevant site changes.',
    closing: 'This step establishes the factual baseline before anything is assumed.',
  },
  {
    title: 'Root Cause Analysis',
    body: 'We determine whether the problem appears to be a manual action, a Google update impact, a technical or migration issue, a security problem, or a search-demand and competitive change.',
    closing: 'Different causes require different recovery paths, so this step shapes everything that follows.',
  },
  {
    title: 'Recovery Plan Design',
    body: 'We produce a prioritized, sequenced recovery plan covering the specific issues that need correction, the work required, and the order in which it should happen.',
    closing: 'The plan is documented so your team always knows where the recovery stands.',
  },
  {
    title: 'Remediation & Implementation',
    body: 'We implement the agreed fixes, including content, technical, structural, and link-related work, depending on the diagnosis and the scope of the engagement.',
    closing: 'Changes are made carefully and verified rather than applied broadly on assumption.',
  },
  {
    title: 'Review Preparation',
    body: 'For manual actions, we prepare the reconsideration request with the remediation evidence organized clearly after the underlying issues have been resolved.',
    closing: 'Google asks for an explanation of the problem, the fixes applied, and the outcome, so we document accordingly.',
  },
  {
    title: 'Monitoring & Measurement',
    body: 'We track the relevant visibility and technical indicators after changes are made, comparing affected pages and queries over time.',
    closing: 'Recovery is measured through consistent trends, not single-day ranking movement.',
  },
  {
    title: 'Prevention & Maintenance',
    body: 'Where appropriate, we recommend technical, content, and workflow controls designed to reduce the chance of the same problem returning.',
    closing: 'The goal is a site that holds up across Google updates rather than a one-time cleanup.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="How we work" title="How We Approach Google Penalty Recovery">
          Our process is deliberately evidence-first. The right diagnosis prevents wasted work and
          shortens the actual recovery path.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-muted/30 p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                {step.closing && (
                  <p className="mt-4 border-l-2 border-frame-accent pl-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {step.closing}
                  </p>
                )}
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}