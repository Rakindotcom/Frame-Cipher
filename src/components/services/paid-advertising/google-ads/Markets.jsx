import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic market',
    title: 'Google Ads for Businesses in Bangladesh',
    body: [
      'Framecipher is based in Dhaka and provides Google Ads management for businesses across Bangladesh.',
      'Campaign strategy can account for local search behavior, Bangla-English language use where relevant, mobile-heavy browsing, regional demand, local competition, and the economics of the Bangladeshi market.',
    ],
    bullets: [
      'Dhaka businesses',
      'Nationwide services',
      'Local businesses',
      'Ecommerce brands',
      'B2B companies',
      'Professional services',
      'Businesses expanding beyond Bangladesh',
    ],
    tail: 'The campaign structure, targeting, budget, and conversion goals are built around the actual market rather than imported assumptions from another country.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Google Ads Campaigns',
    body: [
      'We also manage Google Ads campaigns for businesses targeting international customers. Markets may include the US, UK, Australia, Canada, UAE, and other countries where the business has a viable commercial opportunity.',
      'The objective is not simply to expand reach. It is to understand where demand exists, how customers search, and whether the economics support profitable acquisition in each target market.',
    ],
    bullets: [
      'Country-by-country campaign planning',
      'Market-specific keyword research',
      'Geographic segmentation',
      'Language considerations',
      'Currency and commercial considerations',
      'Localized landing pages',
      'Market-specific offers',
      'Competition analysis',
      'Time-zone planning',
      'Conversion tracking by market',
    ],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Google Ads for Bangladesh & International Markets"
        >
          Campaign structure, targeting, budget, and conversion goals are adapted to each market
          rather than copied from a single-region plan.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  {area.eyebrow}
                </span>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </h3>
                <div className="mt-5 space-y-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {area.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {area.bullets?.length > 0 && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-xs font-semibold text-frame-fg/90">
                    {area.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {area.tail && (
                  <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {area.tail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8">
          <p className="text-sm md:text-base font-semibold text-frame-fg max-w-2xl">
            Tell us your target market and conversion goal, and we will structure the campaign
            around the economics of that market.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}