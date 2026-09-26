import { SectionIntro } from '../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Free Content Sample',
    body: 'A short sample is typically delivered within 2–3 business days, subject to scope and availability.',
  },
  {
    number: '02',
    title: 'Standard Content Projects',
    body: 'Standard blog posts, website pages, and similar projects commonly take 3–7 business days from confirmed brief to final draft. More research-intensive or specialist projects may require additional time.',
  },
  {
    number: '03',
    title: 'Large Website & Catalog Projects',
    body: 'Large website rewrites and ecommerce catalog projects are scheduled in batches based on page count, product volume, research requirements, and priority.',
  },
  {
    number: '04',
    title: 'Ongoing Monthly Content',
    body: 'Monthly engagements follow an agreed content calendar and production schedule so delivery remains predictable. Timeline is confirmed before work begins.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Timeline &amp; delivery"
          title="Content Writing Timeline &amp; Delivery"
        >
          Turnaround depends on the format, research depth, and volume involved, and is confirmed before work
          begins.
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
      </div>
    </section>
  )
}
