import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic market',
    title: 'Meta Ads for Businesses in Bangladesh',
    body: [
      'Framecipher is based in Dhaka and manages Meta Ads campaigns for businesses targeting customers across Bangladesh.',
      'The campaign strategy is built around the actual market rather than importing assumptions from another country\u2019s advertising environment.',
    ],
    bullets: [
      'Bangla and English creative',
      'Mobile-first user behavior',
      'Local purchasing patterns',
      'Regional targeting',
      'Local offers',
      'Messenger and WhatsApp enquiries',
      'Ecommerce conversion flows',
      'COD and local payment considerations where relevant',
    ],
    tail: 'We can support campaigns for businesses targeting Dhaka, other major cities, specific service areas, or customers nationwide.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Meta Ads Campaigns',
    body: [
      'We also manage Meta campaigns for businesses targeting international customers. Markets may include the US, UK, Australia, Canada, UAE, and other countries where the business has a viable customer acquisition opportunity.',
      'The goal is not simply to increase international reach. It is to determine where demand exists and build campaigns that can convert that demand efficiently.',
    ],
    bullets: [
      'Country-specific audience research',
      'Localized creative',
      'Market-level campaign structure',
      'Language adaptation',
      'Offer localization',
      'Geographic segmentation',
      'Landing-page alignment',
      'Market-specific conversion tracking',
      'Country-level performance analysis',
    ],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Meta Ads for Bangladesh & International Markets"
        >
          Creative, targeting, and conversion flows are adapted to each market rather than copied
          from a single-region plan.
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
            Tell us your target market and conversion goal, and we will build the creative and
            campaign structure around that market.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}