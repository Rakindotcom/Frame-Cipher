import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'You receive a defined review and preparation process based on the scope of your project.',
  'That includes documented findings, prioritized recommendations, agreed implementation work, and a pre-application check where included in your package.',
  'We also commit to giving you a clear assessment rather than telling you to apply simply because you have paid for the service.',
]

const nonGuarantees = [
  'We cannot guarantee AdSense approval, a specific review time, a particular revenue level, or a specific advertising outcome.',
  'Google makes the final eligibility and site-review decisions, and publishers remain responsible for complying with Google\u2019s policies.',
  'We also cannot guarantee approval based on a fixed number of articles, traffic level, domain age, or any other unofficial formula because Google does not publish such a universal approval formula.',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="What We Guarantee">
          We are explicit about what is promised and what isn&apos;t, so deliverables match
          expectations rather than promoting an unsupported outcome.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              What we deliver
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              A defined preparation process
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
              What we cannot guarantee
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

        <div className="mt-10 border-l-2 border-frame-accent bg-frame-bg p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            Google&apos;s review process sits outside any provider&apos;s control. Our responsibility
            is to prepare your site as thoroughly as possible, document the work, and check it again
            before you submit.
          </p>
        </div>
      </div>
    </section>
  )
}