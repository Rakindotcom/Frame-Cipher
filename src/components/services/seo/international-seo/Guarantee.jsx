import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'A defined international SEO scope',
  'Market research and keyword strategy',
  'Technical recommendations',
  'Structure recommendations and implementation planning',
  'Content and localization support',
  'Implementation within the agreed scope',
  'Transparent market-level reporting',
  'Data-based recommendations',
  'Review and approval before agreed changes go live',
]

const nonGuarantees = [
  '#1 rankings in any country',
  'A specific ranking position',
  'A fixed traffic increase',
  'A fixed number of leads',
  'Guaranteed revenue',
  'A specific market-entry ranking date',
  'Permanent rankings for individual keywords',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="What International SEO Can and Can't Guarantee">
          International SEO performance depends on many factors outside an agency&apos;s direct
          control. Search algorithms, competitors, market demand, product quality, pricing,
          localization quality, and website conversion rates can all affect results across
          different markets.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              We can guarantee
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              What we commit to
            </h3>
            <ul className="mt-6 space-y-3.5">
              {commitments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent text-frame-accent-fg">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              We don&apos;t guarantee
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              What we cannot guarantee
            </h3>
            <ul className="mt-6 space-y-3.5">
              {nonGuarantees.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-border text-frame-muted-fg">
                    <span className="font-bold">&ndash;</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-frame-accent bg-frame-bg p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            For international SEO, our focus is on work that can be planned, implemented,
            measured, and improved.
          </p>
        </div>
      </div>
    </section>
  )
}