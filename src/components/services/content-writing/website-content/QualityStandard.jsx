import { SectionIntro } from '../../../Kinetic'

const aims = [
  'Clear',
  'Relevant',
  'Specific to the business',
  'Audience-aware',
  'Consistent in tone',
  'Well structured',
  'Naturally written',
  'Appropriate to the page’s purpose',
  'Search-aware where relevant',
  'Ready for the agreed implementation workflow',
]

const controls = [
  'The agreed research',
  'Messaging',
  'Writing',
  'Editing',
  'Formatting',
  'Revision process',
]

const nonGuarantees = [
  'A specific Google ranking',
  'A specific conversion rate',
  'A specific amount of traffic',
  'A specific number of leads',
  'A specific revenue increase',
  'A specific return on investment',
]

export default function QualityStandard() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Quality standard" title="Content Quality Standards">
          Website content is within our control. The results it produces are not.
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
              Our goal is to deliver website content that is
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

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              What We Don&rsquo;t Guarantee
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Website content alone cannot guarantee:
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
              Website performance also depends on factors such as the offer, pricing, design, UX, traffic
              quality, technical SEO, competition, brand reputation, market demand, and the wider website.
            </p>
          </article>
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-semibold leading-relaxed text-frame-fg">
          Our commitment is to provide the agreed content according to the approved scope, quality standards,
          and revision process.
        </p>
      </div>
    </section>
  )
}
