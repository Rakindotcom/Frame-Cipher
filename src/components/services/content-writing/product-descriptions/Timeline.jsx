import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Single Products & Small Batches',
    body: 'A standard product description typically takes 2–3 business days, depending on product complexity and the availability of source information.',
  },
  {
    number: '02',
    title: 'Bulk Catalog Projects',
    body: 'Bulk projects are scheduled according to the number of SKUs, product complexity, research requirements, priority products, platform requirements, and the review process.',
  },
  {
    number: '03',
    title: 'Priority-Batch Start',
    body: 'For larger catalogs, we can begin with a priority batch before moving through the remaining SKUs on an agreed schedule.',
    note: 'A priority batch is a practical way to confirm the copy direction before the full catalog is written.',
  },
  {
    number: '04',
    title: 'Review, Feedback & Revisions',
    body: 'Every agreed batch is reviewed before delivery, and the included revision round is based on feedback against the agreed scope.',
    note: 'The delivery schedule is confirmed after the catalog size, review process, and approvals are understood.',
  },
]

export default function Timeline() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Timeline & delivery" title="Product Description Writing Timeline">
          Timeline depends on catalog size, product complexity, and how many batches need to be reviewed before
          delivery.
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
