import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'The scope we agree on: the targets pursued, the outreach performed, and the content developed',
  'Placement verification for everything we claim',
  'Transparent reporting of what was pursued and what actually happened',
  'The plan you approve is the plan we execute',
]

const nonGuarantees = [
  'Fixed placements, specific publications, or set numbers of links \u2014 publisher decisions (editorial calendars, topic interest, final approval) sit outside our control',
  'Rankings, traffic, or leads \u2014 link building supports visibility, but outcomes also depend on competition, site quality, content, and conversion behavior',
  'Unqualified disavow actions \u2014 Google\u2019s guidance recommends using disavow carefully, cutting off genuinely harmful links rather than unrelated ones that are not causing real damage',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Clear expectations"
          title="What We Can and Can't Guarantee"
        >
          Link building depends on factors outside the agency&apos;s control, so we are explicit
          about what is promised and what is not.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              We can guarantee
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Commitment to the agreed scope
            </h3>
            <ul className="mt-6 space-y-3.5">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg">
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
              We don't guarantee
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Outcomes we don't control
            </h3>
            <ul className="mt-6 space-y-3.5">
              {nonGuarantees.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-border text-frame-muted-fg">
                    <span className="font-bold">&ndash;</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}