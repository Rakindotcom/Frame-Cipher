import { SectionIntro } from '../../../Kinetic'

const controls = ['Research', 'Messaging', 'Writing', 'Editing', 'Structure', 'Agreed revisions']

const aims = [
  'Clear',
  'Specific',
  'Audience-aware',
  'Offer-focused',
  'Persuasive without being misleading',
  'Consistent with the brand',
  'Easy to scan',
  'Structured around the conversion goal',
  'Supported by genuine evidence',
  'Ready for design or implementation',
]

const nonGuarantees = [
  'A specific conversion rate',
  'A specific number of leads',
  'Sales volume',
  'Cost per lead',
  'ROAS',
  'Revenue',
  'Ranking position',
]

export default function QualityStandard() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Quality standard" title="Content Quality Standards">
          We control the quality of the work we deliver. Conversion outcomes depend on factors beyond copy alone.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-3 lg:gap-8">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              What We Control
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {controls.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border/80 bg-frame-bg px-2.5 py-1 text-xs font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Our Aim Is Copy That Is
            </h3>
            <ul className="mt-5 space-y-2.5">
              {aims.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              What We Do Not Guarantee
            </h3>
            <ul className="mt-5 space-y-2.5">
              {nonGuarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-muted-fg"
                >
                  <span aria-hidden="true" className="mt-1 text-frame-accent">
                    &times;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-5xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Landing page performance depends on the offer, pricing, traffic quality, targeting, campaign creative,
          page experience, technical performance, competition, brand trust, and market conditions. Copy is one
          part of that, and an important one, but it is not the only part.
        </p>
      </div>
    </section>
  )
}
