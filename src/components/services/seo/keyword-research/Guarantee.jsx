import { SectionIntro } from '../../../Kinetic'

const received = [
  'Structured keyword research',
  'Search-intent classification',
  'Competitive analysis',
  'Keyword clusters',
  'Keyword-to-URL mapping',
  'Priority opportunities',
  'Content planning inputs',
  'Market-specific keyword recommendations',
  'A clear final delivery suitable for SEO and content execution',
]

const nonGuarantees = [
  'A #1 ranking for any keyword',
  'A specific ranking position',
  'A fixed traffic increase',
  'A fixed number of leads',
  'Guaranteed revenue',
  'A specific ranking timeframe',
  'Permanent search visibility',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="What We Guarantee">
          Keyword research should give your team a structured and defensible search strategy within
          the agreed scope.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              What you receive
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Depending on the selected project
            </h3>
            <ul className="mt-6 space-y-3.5">
              {received.map((item, index) => (
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

          <div className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              What we don&apos;t guarantee
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Outcomes we don&apos;t control
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

        <p className="mt-10 max-w-4xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Keyword research identifies opportunities. Actual performance depends on content quality,
          technical implementation, authority, competition, search demand, user behavior, and
          ongoing optimization. Our responsibility is to provide a well-researched, relevant,
          organized, and strategically prioritized keyword framework.
        </p>
      </div>
    </section>
  )
}