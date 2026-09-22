import { SectionIntro } from '../../Kinetic'

const platforms = [
  {
    title: 'Google Ads',
    body: 'Google Ads helps businesses capture demand when people are actively searching for products, services, solutions, or information related to what they offer.',
    bullets: [
      'Search campaigns',
      'Shopping campaigns',
      'Performance Max',
      'Display',
      'YouTube',
      'Remarketing',
    ],
    note: 'Campaign structure is built around intent, conversion goals, product or service categories, geographic markets, and available first-party data.',
  },
  {
    title: 'Meta Ads',
    body: 'Meta Ads across Facebook and Instagram can support demand generation, lead generation, ecommerce, remarketing, and customer acquisition. We build campaigns around audience behavior, creative angles, offers, product or service categories, and funnel stage.',
    note: 'For ecommerce, this can include catalog-based advertising and product-focused campaigns. For service businesses, the focus may be lead generation, website conversions, or qualified inquiry acquisition.',
  },
  {
    title: 'Microsoft Ads',
    body: 'Microsoft Advertising provides search and other advertising opportunities across the Microsoft network and partner environments. We can use Microsoft Ads where its audience, competition, market coverage, or incremental search demand makes it commercially relevant.',
    note: 'Campaigns can include search, shopping, and other applicable Microsoft Advertising formats based on the account and business objective.',
  },
  {
    title: 'LinkedIn Ads',
    body: 'LinkedIn is particularly useful when the audience is defined by professional or company attributes.',
    bullets: [
      'Job roles',
      'Industries',
      'Company characteristics',
      'Professional audiences',
      'Seniority',
      'Account-based audience strategies where appropriate',
    ],
    note: 'The emphasis is not simply on generating clicks. It is on reaching the people and organizations relevant to a higher-consideration buying process.',
  },
  {
    title: 'TikTok Ads',
    body: 'TikTok can support awareness, demand generation, traffic, lead generation, ecommerce, and conversion campaigns where the audience and creative format are a strong fit.',
    note: 'Successful TikTok advertising usually requires creative designed for the platform rather than simply resizing or reposting another channel\'s ads. We coordinate short-form creative, audience strategy, offers, testing, and conversion tracking around the campaign objective.',
  },
  {
    title: 'Pinterest Ads',
    body: 'Pinterest can be useful for products, services, and content connected to discovery, planning, inspiration, and purchase consideration.',
    note: 'We assess whether the platform fits your product category, audience behavior, creative assets, and commercial goals before allocating budget.',
  },
  {
    title: 'Amazon Ads',
    body: 'Amazon Ads can help ecommerce sellers reach shoppers within a marketplace where users are already browsing products and comparing purchase options.',
    bullets: [
      'Sponsored product campaigns',
      'Sponsored brand campaigns',
      'Product and keyword targeting',
      'Search-term analysis',
      'Budget optimization',
      'Product visibility analysis',
      'Campaign performance monitoring',
    ],
    note: 'The strategy is built around the marketplace environment rather than treating Amazon like a standard social or search channel.',
  },
  {
    title: 'ChatGPT Ads - Where Available',
    body: 'AI advertising is becoming a new paid-media environment built around conversational discovery, contextual intent, and decision-making. Where advertiser access is available for the relevant market and account, ChatGPT Ads can be evaluated as part of a broader media strategy rather than treated as a replacement for established channels.',
    note: 'Because availability, account eligibility, and capabilities can change, we assess access and suitability before including this channel in a campaign plan.',
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Channels we manage"
          title="Paid Advertising Platforms We Manage"
        >
          We choose platforms according to your buyers, offer, market, funnel, and commercial
          objective rather than running every available channel by default.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Platform 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {platform.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {platform.body}
                </p>
                {platform.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs font-semibold text-frame-fg/90">
                    {platform.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {platform.note && (
                  <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {platform.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}