import { SectionIntro, PosterButton } from '../../../Kinetic'

const bangladeshFactors = [
  'Local seasonal campaigns',
  'Bangladesh-specific offers',
  'Bengali content',
  'Local customer questions',
  'Local creator opportunities',
  'Dhaka-focused campaigns',
  'Bangladesh audience behavior',
]

const internationalFactors = [
  'Audience research',
  'Content topics',
  'Messaging',
  'Language considerations',
  'Cultural context',
  'Publishing schedules',
  'Competitor research',
  'Content trends',
  'Creator opportunities',
  'Campaign planning',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Instagram Management Service Areas"
        >
          Framecipher provides Instagram management for businesses in Bangladesh and international
          markets.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Local
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Instagram Management In Bangladesh
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                For Bangladeshi businesses, we can adapt Instagram planning to local audiences,
                customer behavior, language preferences, cultural context, seasonal campaigns, and
                market-specific opportunities. Depending on the brand, content can be developed in
                English, Bangla, or a suitable combination of both.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                For relevant businesses, we can also account for
              </span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {bangladeshFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                International Instagram Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We also support businesses targeting audiences outside Bangladesh. International
                Instagram management can include market-specific planning across the following areas.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                Market-specific
              </span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {internationalFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strategy is adapted to the target market rather than treating every audience as one
            global group.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Instagram Strategy &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
