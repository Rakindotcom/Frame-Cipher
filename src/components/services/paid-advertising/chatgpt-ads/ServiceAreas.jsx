import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Eligibility first',
    title: 'Advertising From Bangladesh',
    body: 'OpenAI\u2019s Ads Manager is not yet available directly in Bangladesh. Bangladeshi businesses can still run ChatGPT Ads in specific supported cases, such as where they have access to an eligible advertiser setup like a business in an eligible country or an advertiser representative arrangement. We confirm eligibility before planning anything else.',
    bullets: [
      'Eligible advertiser account or representative setup',
      'Campaign management for eligible Bangladeshi advertisers',
      'Honest readiness assessment before commitment',
    ],
  },
  {
    eyebrow: 'Eligible markets',
    title: 'Global Campaign Delivery',
    body: 'We manage ChatGPT Ads for businesses targeting eligible international markets, including the US, UK, Canada, Australia, India, Saudi Arabia, UAE, and other markets where the advertiser setup qualifies under OpenAI\u2019s current requirements. Campaign strategy is adapted to the target market rather than copied from a single-region plan.',
    bullets: [
      'Single-country campaigns',
      'Multi-market campaign structure',
      'Market-specific creative and context',
      'International conversion tracking',
      'Market-level performance reporting',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Service Areas"
        >
          ChatGPT Ads management is delivered from Dhaka, Bangladesh for advertisers in eligible
          markets. Every engagement starts with a confirmation that the advertiser setup and
          target market qualify under OpenAI&apos;s current requirements.
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
                <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {area.body}
                </p>
                {area.bullets?.length > 0 && (
                  <ul className="mt-5 grid gap-2 text-xs font-semibold text-frame-fg/90">
                    {area.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <PosterButton href="/contact">Check ChatGPT Ads Eligibility &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}