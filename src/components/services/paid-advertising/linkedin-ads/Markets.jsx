import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic market',
    title: 'LinkedIn Ads for Businesses in Bangladesh',
    body: [
      'Framecipher is based in Dhaka and manages LinkedIn campaigns for businesses targeting professional audiences across Bangladesh.',
      'Because LinkedIn audiences can be narrower than broad consumer platforms, we focus on realistic audience sizing and clear ICP definition rather than promising mass reach.',
    ],
    bullets: [
      'Industry-specific audiences',
      'Job functions and seniority',
      'Company size',
      'Dhaka-focused or nationwide targeting',
      'B2B service demand',
      'Professional messaging',
      'Lead qualification',
      'Local sales processes',
    ],
    tail: 'The objective is to identify where LinkedIn can contribute meaningful value to the sales pipeline rather than assuming every B2B business needs the platform.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'Global LinkedIn Ads Campaigns',
    body: [
      'We also manage LinkedIn campaigns for businesses targeting international B2B audiences across markets such as the US, UK, Australia, Canada, UAE, and other regions.',
      'Rather than treating international B2B audiences as one global pool, we assess each market based on target-account availability, audience size, competitive conditions, sales economics, and commercial opportunity.',
    ],
    bullets: [
      'Country-specific ICP research',
      'Industry and company targeting',
      'Job function and seniority',
      'Market-specific creative',
      'Localized offers',
      'Geographic segmentation',
      'Account-based targeting',
      'Regional budget allocation',
      'Market-level conversion tracking',
    ],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="LinkedIn Ads for Bangladesh & Global Markets"
        >
          LinkedIn campaign strategy should reflect the market being targeted. Audience
          availability, industry concentration, professional demographics, competition, and
          sales behavior can differ between Bangladesh and international markets. Framecipher
          manages LinkedIn Ads for businesses targeting Bangladesh as well as global B2B markets.
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

        <div className="mt-10 flex flex-col gap-4 border-2 border-frame-border bg-frame-bg p-7 md:p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm md:text-base font-semibold text-frame-fg">
            Tell us your B2B target market and conversion goal, and we will build the audience
            and campaign structure around that market.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}