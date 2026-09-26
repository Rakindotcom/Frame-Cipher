import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Initial Setup',
    body: 'Goal definition, KPI selection, access requirements, and reporting structure are typically established during the initial setup period.',
  },
  {
    number: '02',
    title: 'Monthly Reporting',
    body: 'The standard reporting cycle covers the agreed previous month\u2019s performance and is delivered according to the agreed monthly schedule.',
  },
  {
    number: '03',
    title: 'Quarterly Analysis',
    body: 'For businesses with sufficient historical data, quarterly reviews can provide a broader view of trends and strategic changes.',
  },
  {
    number: '04',
    title: 'One-Time Analysis',
    body: 'Businesses that do not need ongoing reporting can also request a standalone social media performance analysis where available.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Timeline &amp; delivery"
          title="Reporting Timeline &amp; Delivery"
        >
          Reporting is a recurring cycle by default, with deeper analysis and one-time engagements available
          where the scope requires it.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
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
          Meaningful trend analysis becomes more useful as historical data accumulates. One month can show
          what happened. Several months can reveal whether a pattern is developing.
        </p>
      </div>
    </section>
  )
}
