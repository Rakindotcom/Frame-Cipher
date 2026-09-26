import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Individual Articles',
    body: 'A standard article commonly takes 3–7 business days from confirmed brief to final draft, depending on research depth and topic complexity.',
  },
  {
    number: '02',
    title: 'Monthly Content Programs',
    body: 'Ongoing programs follow an agreed monthly content calendar and production schedule. The exact number of articles depends on the scope, research requirements, approval process, and publishing goals.',
  },
  {
    number: '03',
    title: 'Content Refresh Projects',
    body: 'Refresh timelines depend on the number of pages, research requirements, content depth, and whether the work involves substantial restructuring.',
  },
  {
    number: '04',
    title: 'Large or Specialist Projects',
    body: 'Large content programs, technical subjects, multi-market projects, and content requiring interviews or specialist input may require additional planning and delivery time.',
    note: 'SEO performance should be viewed separately from writing turnaround. Google notes that the effects of improvements can sometimes take days or several months to become visible.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Timeline &amp; delivery"
          title="SEO Content Timeline &amp; Publishing Cadence"
        >
          Writing turnaround and search performance are two different clocks, and it is worth being clear about
          both before a project starts.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {phase.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {phase.body}
                </p>
              </div>

              {phase.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {phase.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
