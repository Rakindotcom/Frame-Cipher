import { SectionIntro } from '../../../Kinetic'

const principles = [
  {
    number: '01',
    title: 'Manufactured Urgency',
    body: [
      'We can write genuine deadlines, limited availability, or time-sensitive offers when they are real.',
    ],
    rule: 'We do not create false scarcity or fake countdowns simply to pressure someone into acting.',
  },
  {
    number: '02',
    title: 'Unsupported Claims',
    body: [
      'If a statistic, performance claim, guarantee, certification, or result cannot be supported, it should not become part of the sales argument.',
    ],
    rule: 'We flag those claims instead of dressing them up.',
  },
  {
    number: '03',
    title: 'Invented Proof',
    body: [
      'Testimonials, customer results, case studies, and numbers should come from real sources.',
    ],
    rule: 'We do not manufacture social proof because the page needs more of it.',
  },
  {
    number: '04',
    title: 'Fear Without a Real Basis',
    body: [
      'Real consequences can be explained. Artificial fear designed to make the buyer panic is a different approach.',
    ],
    rule: 'Our goal is to make the case stronger without damaging the trust the business needs after the sale.',
  },
]

export default function NoManufacturedSales() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Our limits" title="What We Won’t Use to Manufacture a Sale">
          Persuasion does not require misleading the buyer.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {principles.map((item) => (
            <article key={item.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                    {item.title}
                  </h3>
                </div>

                {item.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="mt-5 border-l-2 border-frame-accent bg-frame-accent/5 p-3 text-xs font-semibold leading-relaxed text-frame-fg">
                {item.rule}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
