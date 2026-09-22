import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    market: 'Bangladesh',
    body: 'We manage TikTok advertising for businesses targeting customers across Bangladesh. Campaign planning can account for Bangla or English creative, local consumer behavior, Bangladesh-specific offers, geographic targeting, local landing pages, lead-generation requirements, and website and ecommerce conversions.',
    label: 'Campaign planning can account for',
    bullets: [
      'Bangla or English creative',
      'Local consumer behavior',
      'Bangladesh-specific offers',
      'Geographic targeting',
      'Local landing pages',
      'Lead-generation requirements',
      'Website and ecommerce conversions',
    ],
    note: 'TikTok advertising availability and targeting options depend on the advertising account and market configuration, so we verify the available setup before launch.',
    featured: true,
  },
  {
    market: 'US',
    body: 'For US campaigns, we adapt creative offers, landing pages, audience strategy, and conversion tracking around the specific customer segment and business model.',
  },
  {
    market: 'UK',
    body: 'UK campaigns require market-specific creative and offer considerations rather than simply reusing Bangladesh advertising assets. For eligible ecommerce businesses, TikTok Shop advertising may also be available in the UK.',
  },
  {
    market: 'Australia',
    body: 'We can manage campaigns targeting Australian audiences with market-specific creative, geographic targeting, and conversion tracking.',
  },
  {
    market: 'Canada',
    body: 'For Canadian campaigns, we build audience and creative strategies around the business\u2019s specific customer segments and acquisition goals.',
  },
  {
    market: 'UAE',
    body: 'We can adapt TikTok advertising for UAE audiences with consideration for language, location, customer behavior, offer structure, and conversion goals.',
  },
  {
    market: 'Other Eligible Markets',
    body: 'Framecipher can support campaigns beyond these markets where TikTok advertising features, account eligibility, targeting, and relevant campaign objectives are available. We confirm market and feature availability before promising a specific TikTok advertising workflow.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="TikTok Ads Management for Bangladesh and Global Markets"
        >
          Campaign structure, creative, targeting, offers, and measurement are adapted to the
          target market rather than copied from a single-region setup.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((item, index) => (
            <div
              key={index}
              className={
                item.featured
                  ? 'flex flex-col border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-8 xl:col-span-2'
                  : 'flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8'
              }
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Market 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.market}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.bullets?.length > 0 && (
                <div className="mt-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {item.label}:
                  </span>
                  <ul className="mt-3 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.note && (
                <p className="mt-5 border-t border-frame-accent/40 pt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}