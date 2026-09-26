import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Initial Setup',
    body: 'A community audit and initial response framework can typically be prepared within a few business days, depending on the number of platforms and complexity.',
  },
  {
    number: '02',
    title: 'Workflow Setup',
    body: 'Brand voice guidance, escalation rules, moderation requirements, access, and reporting structure are typically established within the first week.',
  },
  {
    number: '03',
    title: 'Ongoing Management',
    body: 'After setup, monitoring and response continue according to your agreed plan and coverage window.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Timeline &amp; coverage" title="Timeline &amp; Response Coverage">
          Community management is an ongoing service rather than a one-time project. The timeline below
          describes a typical setup path rather than a fixed commitment.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {phase.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {phase.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Response times depend on your selected plan, platform coverage, message volume, operating hours, and
          escalation requirements. We recommend defining a realistic response standard before the engagement
          begins rather than making an undefined promise of “instant” replies.
        </p>
      </div>
    </section>
  )
}
