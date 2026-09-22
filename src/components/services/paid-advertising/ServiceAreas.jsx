import { SectionIntro, PosterButton } from '../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic market',
    title: 'Paid Advertising Services in Bangladesh',
    body: 'Framecipher helps businesses across Bangladesh plan, launch, manage, and optimize paid advertising campaigns around measurable business goals. Campaign strategy can account for local customer behavior, Bangladeshi search demand, local competition, geographic targeting, local offers, and conversion paths suited to the market.',
    tail: 'For ecommerce businesses, campaigns can also be aligned with local purchasing behavior, delivery models, pricing, and payment options where relevant.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Paid Advertising',
    body: 'We support businesses targeting international markets, including the US, UK, Australia, Canada, UAE, and other markets. International campaigns require more than translating an existing campaign. We consider country-specific search behavior, audience characteristics, competition, pricing, offers, platform availability, creative messaging, conversion expectations, and market-level performance.',
    bullets: [
      'Single-country expansion',
      'Multiple international markets',
      'Regional campaigns',
      'Country-specific landing pages',
      'Multi-market ecommerce',
      'International lead generation',
      'B2B campaigns across different countries',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Paid Advertising for Bangladesh & Global Markets"
        >
          Campaign strategy is adapted to the target market rather than copied from a
          single-region plan. We support businesses across Bangladesh and international markets.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  {area.eyebrow}
                </span>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </h3>
                <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {area.body}
                </p>
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

        <div className="mt-10">
          <PosterButton href="/contact">Start With a Free Ad Account Audit &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}