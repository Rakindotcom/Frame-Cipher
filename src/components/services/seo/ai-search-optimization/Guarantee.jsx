import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'AI visibility assessment',
  'Prompt and query research',
  'Citation and mention analysis',
  'Content and entity gap analysis',
  'AEO recommendations',
  'GEO strategy',
  'Technical recommendations',
  'Source-authority recommendations',
  'Visibility reporting',
  'Ongoing refinement where included',
]

const nonGuarantees = [
  'A specific ChatGPT citation',
  'A specific Gemini result',
  'A specific Perplexity mention',
  'A guaranteed Google AI Overview appearance',
  'A fixed citation frequency',
  'A fixed AI-search traffic increase',
  'A specific ranking or visibility position',
  'Guaranteed leads or revenue',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="What We Can and Can't Guarantee">
          AI Search Optimization should come with clear deliverables without pretending that an
          outside agency controls every AI platform.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              What you receive
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Commitment to the agreed scope
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

          <div className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              We don&apos;t guarantee
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

        <div className="mt-10 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            AI search experiences are controlled by systems and data sources outside any
            agency&apos;s direct control. Our responsibility is to research, implement, measure,
            and refine the factors within the agreed scope.
          </p>
        </div>
      </div>
    </section>
  )
}