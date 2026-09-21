import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'A structured SEO audit report',
  'Prioritized findings',
  'Evidence and explanations',
  'Recommended actions',
  'Effort and implementation guidance',
  'Relevant competitive insights',
  'A findings walkthrough',
  'Next-step recommendations',
]

const nonGuarantees = [
  '#1 rankings',
  'A specific ranking position',
  'A fixed traffic increase',
  'A fixed number of leads',
  'Guaranteed revenue',
  'A specific recovery date',
  'Permanent rankings',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="What We Guarantee">
          An SEO audit should provide clear, documented findings within the agreed scope.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              What you receive
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Depending on the selected scope
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
            <p className="mt-6 border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We aim to make the report useful to both technical and non-technical stakeholders.
            </p>
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
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              SEO performance depends on many factors beyond an audit alone, including competition,
              implementation quality, search demand, content, authority, user behavior, and changes
              in search systems.
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-frame-accent bg-frame-bg p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our responsibility is to provide an honest diagnosis, clear evidence, and practical
            priorities within the agreed scope.
          </p>
        </div>
      </div>
    </section>
  )
}