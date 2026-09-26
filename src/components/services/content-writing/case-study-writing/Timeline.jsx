import { SectionIntro } from '../../../Kinetic'

const factors = [
  'Customer availability',
  'Interview scheduling',
  'Data availability',
  'Number of stakeholders',
  'Revision requirements',
  'Client approval',
]

const cards = [
  {
    title: 'Revisions',
    text: 'The agreed number of revision rounds should be defined in the project scope before work begins. Additional revisions or substantial changes in scope may require a revised timeline or quotation.',
  },
  {
    title: 'Approval',
    text: 'We can coordinate the approval process with your team and, where required, the featured customer. The final publication should only use customer information, quotes, and results that have the appropriate permission.',
  },
]

export default function Timeline() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Timeline, revisions & approval" title="Timeline, Revisions &amp; Approval">
          A standard case study typically takes 2–3 weeks from initial scoping to final delivery.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              The exact timeline depends on
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {factors.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Multi-case-study projects usually require additional time because each story involves separate
              research and approval.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Customer approval can also affect the final delivery date. We plan for that review stage rather than
              treating approval as an afterthought.
            </p>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border">
            {cards.map((card) => (
              <article key={card.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
