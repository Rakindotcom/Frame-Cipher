import { SectionIntro } from '../../../Kinetic'

const rows = [
  ['Single landing page', '3\u20135 business days'],
  ['Landing page with deeper research', '5\u20137 business days'],
  ['Multi-page campaign', 'Custom'],
  ['Copy variants', '2\u20133 business days after test requirements are defined'],
]

export default function Timeline() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Timeline" title="Landing Page Copywriting Timeline">
          Typical timelines depend on scope and how quickly the required business information is provided.
        </SectionIntro>

        <div className="border-2 border-frame-border">
          <div className="hidden grid-cols-2 gap-px border-b-2 border-frame-border bg-frame-border md:grid">
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Project
            </span>
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Typical Timeline
            </span>
          </div>

          <div className="grid gap-px bg-frame-border">
            {rows.map((row) => (
              <div key={row[0]} className="grid gap-1 bg-frame-bg p-5 md:grid-cols-2 md:gap-4">
                <span className="font-heading text-sm font-bold uppercase tracking-tight text-frame-fg md:text-base">
                  {row[0]}
                </span>
                <span className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {row[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Complex offers, regulated industries, multiple markets, or extensive stakeholder review may require
          additional time.
        </p>
      </div>
    </section>
  )
}
