import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Strategy, advertising management, creative coordination, tracking, and reporting are handled through one in-house team. You do not need to coordinate separate media buyers, creative vendors, and tracking teams for every campaign requirement.',
  },
  {
    title: 'Creative + Media Buying Together',
    body: 'TikTok performance depends on both the media strategy and the creative entering the account. We connect creative planning with campaign data so performance insights can influence the next round of creative.',
  },
  {
    title: 'Client-Owned Accounts & Assets',
    body: 'Your advertising accounts, pixels, catalogs, business assets, and campaign data remain under your ownership. We work inside the appropriate client-owned advertising environment rather than building your business around an agency-controlled account.',
  },
  {
    title: 'Bangladesh + International Campaign Experience',
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh as well as international markets. We adapt campaign structure, creative, targeting, language, offers, and measurement to the market rather than assuming one campaign setup works everywhere.',
  },
  {
    title: 'Transparent Reporting',
    body: 'You receive reporting based on the metrics that matter to the campaign. Depending on the objective, reporting can include the metrics below.',
    metrics: [
      'Spend',
      'Impressions',
      'Reach',
      'Video engagement',
      'Click-through rate',
      'Cost per click',
      'Leads',
      'Cost per lead',
      'Purchases',
      'Conversion rate',
      'Revenue',
      'ROAS',
      'Creative performance',
    ],
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Businesses Choose Framecipher for TikTok Ads"
        >
          TikTok rewards a system that connects creative, data, and business outcomes inside one
          accountable team.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.metrics?.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{metric}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}