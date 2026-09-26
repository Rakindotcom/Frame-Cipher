import { SectionIntro } from '../../../Kinetic'

const checks = [
  'Accuracy',
  'Clarity',
  'Offer consistency',
  'Audience relevance',
  'Logical argument flow',
  'Proof placement',
  'Objection handling',
  'CTA clarity',
  'Brand voice',
  'Unsupported claims',
  'Manufactured urgency',
  'Formatting and readability',
]

const nonGuarantees = [
  'A specific conversion rate',
  'A specific close rate',
  'A specific revenue figure',
  'A specific sales volume',
]

const externalFactors = [
  'The offer',
  'Price',
  'Audience',
  'Traffic quality',
  'Competition',
  'Sales process',
  'Page experience',
  'Product quality',
  'Market conditions',
]

export default function QualityCommitments() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Quality standard"
          title="Quality Commitments &amp; Performance Expectations"
        >
          Every project goes through a quality review before final delivery.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-accent/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              We Check For
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {checks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-semibold leading-relaxed text-frame-fg">
              Our commitment is to deliver a researched, structured, clear, and evidence-based sales argument
              within the agreed scope.
            </p>
          </article>

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              What We Don&rsquo;t Guarantee
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We do not guarantee:
            </p>
            <ul className="mt-4 space-y-3">
              {nonGuarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-frame-border/50 pb-3 text-sm font-medium leading-relaxed text-frame-muted-fg last:border-b-0 md:text-base"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-muted" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Those outcomes depend on factors beyond copywriting, including:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {externalFactors.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
