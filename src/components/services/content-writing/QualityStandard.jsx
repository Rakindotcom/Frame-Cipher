import { SectionIntro } from '../../Kinetic'

const aims = [
  'Clear',
  'Useful',
  'Well structured',
  'Audience-focused',
  'Natural to read',
  'Aligned with its purpose',
  'Consistent with the agreed brand voice',
  'Properly researched for the agreed scope',
  'Free from unnecessary filler',
  'Ready for the intended publishing environment',
]

const controls = [
  'The writing process',
  'Research approach within the agreed scope',
  'Structure',
  'Readability',
  'Brand alignment',
  'SEO requirements where included',
  'Editing',
  'Agreed revisions',
]

const nonGuarantees = [
  'A specific Google ranking',
  'A specific amount of organic traffic',
  'A specific conversion rate',
  'A specific number of leads',
  'A specific sales volume',
  'Viral performance',
  'AI search visibility',
  'A specific ROI',
]

export default function QualityStandard() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Quality standard" title="Our Content Quality Standard">
          Content can support search visibility, engagement, leads, and sales, but writing alone does not
          control the final outcome.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-accent/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              What We Control
            </h3>
            <ul className="mt-5 space-y-3">
              {controls.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-frame-border/50 pb-3 text-sm font-medium leading-relaxed text-frame-muted-fg last:border-b-0 md:text-base"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg md:text-base">
              We aim to deliver content that is
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {aims.map((aim) => (
                <li
                  key={aim}
                  className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {aim}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-frame-bg p-7 md:p-8">
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

            <p className="mt-7 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Those outcomes can also depend on website quality, technical SEO, competition, authority,
              backlinks, offer strength, design, distribution, advertising, tracking, market conditions, and
              many other factors.
            </p>
          </article>
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-semibold leading-relaxed text-frame-fg">
          Our commitment is to produce content according to the agreed brief, scope, quality standards, and
          revision process.
        </p>
      </div>
    </section>
  )
}
