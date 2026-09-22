import { SectionIntro } from '../../../Kinetic'

const campaigns = [
  {
    title: 'Google Search Ads',
    label: 'Capture commercial intent',
    body: [
      'Google Search campaigns target people actively searching for products, services, solutions, or information related to your offer.',
      'We structure Search campaigns around commercial intent, relevant keyword themes, geographic targeting, negative keywords, ad messaging, and conversion goals.',
    ],
    listLabel: 'Our Search campaign management includes',
    bullets: [
      'Keyword and search-intent research',
      'Match-type strategy',
      'Negative keyword management',
      'Responsive Search Ads',
      'Ad asset optimization',
      'Location targeting',
      'Audience observation and targeting where appropriate',
      'Bid and budget management',
      'Search-term analysis',
      'Conversion-focused landing-page alignment',
    ],
    tail: 'The objective is not to generate the largest possible volume of traffic. It is to increase the amount of relevant traffic that has a realistic path to conversion.',
  },
  {
    title: 'Google Shopping Ads',
    label: 'Built around your product data',
    body: [
      'Google Shopping campaigns are built around product information rather than traditional keyword-based ad copy alone.',
      'For ecommerce businesses, we manage the relationship between product data, Merchant Center, Google Ads, campaign structure, and the buying experience.',
    ],
    listLabel: 'Our Shopping management can include',
    bullets: [
      'Merchant Center setup and review',
      'Product feed management',
      'Product title and attribute optimization',
      'Product categorization',
      'Feed error and disapproval review',
      'Product segmentation',
      'Shopping campaign structure',
      'Budget allocation',
      'Conversion-value optimization',
      'Landing-page and product-page relevance',
    ],
    tail: 'Accurate product data matters because Google uses information such as product titles, prices, images, availability, and other attributes to understand and match products to relevant searches.',
  },
  {
    title: 'Performance Max Campaigns',
    label: 'Goal-based automation',
    body: [
      'Performance Max is a goal-based campaign type that uses automation to access Google\u2019s advertising inventory across multiple surfaces, including Search, YouTube, Display, Discover, Gmail, and Maps. It is designed around defined conversion or conversion-value goals rather than operating as a traditional keyword-only campaign.',
    ],
    listLabel: 'We manage Performance Max with attention to the inputs that influence performance',
    bullets: [
      'Conversion goals',
      'Campaign structure',
      'Asset groups',
      'Creative assets',
      'Product feeds where relevant',
      'Audience signals',
      'Budget allocation',
      'Location and market targeting',
      'Conversion values',
      'Performance analysis',
    ],
    tail: 'Performance Max is not something we switch on simply because it is automated. We assess whether it fits the account, what role it should play alongside Search, and which business outcomes the campaign should optimize toward.',
  },
  {
    title: 'Display & YouTube Ads',
    label: 'Support the journey',
    body: [
      'Display and YouTube campaigns can support different parts of the customer journey, from brand exposure and consideration to remarketing and conversion activity.',
    ],
    listLabel: 'Depending on your goals, we can manage',
    bullets: [
      'Audience targeting',
      'Remarketing',
      'Video campaigns',
      'Display creative',
      'Geographic targeting',
      'Frequency considerations',
      'Conversion tracking',
      'Creative testing',
      'Landing-page alignment',
    ],
    tail: 'These campaigns are particularly useful when your customers need more than one interaction before they are ready to purchase or enquire.',
  },
  {
    title: 'Remarketing Campaigns',
    label: 'Reconnect with interested visitors',
    body: [
      'Not every visitor converts during their first session. Remarketing helps you reconnect with people who have already interacted with your website, products, content, or other digital touchpoints.',
    ],
    listLabel: 'We can structure remarketing around actions such as',
    bullets: [
      'Viewed a product but did not purchase',
      'Visited a service page',
      'Started but did not complete a form',
      'Added products to cart',
      'Engaged with key website content',
      'Previously became a lead or customer',
    ],
    tail: 'Remarketing strategy depends on the audience, buying cycle, privacy requirements, and business objective. We focus on useful audience segmentation rather than repeatedly showing the same ad to everyone.',
  },
]

export default function Campaigns() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Campaign types"
          title="Google Ads Campaigns We Manage"
        >
          Different campaign types solve different advertising problems. We select campaign
          types based on your business model, buying journey, conversion data, product catalog,
          and market.
        </SectionIntro>

        <div className="space-y-6 border-t-2 border-frame-border pt-12">
          {campaigns.map((campaign, index) => (
            <div key={campaign.title} className="border-2 border-frame-border bg-frame-bg">
              <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Campaign 0{index + 1} / {campaign.label}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    {campaign.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {campaign.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="border-t-2 border-frame-border/60 pt-6 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {campaign.listLabel}:
                  </span>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs md:text-sm font-semibold text-frame-fg/90">
                    {campaign.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {campaign.tail && (
                <div className="border-t-2 border-frame-border bg-frame-muted/10 px-7 py-5 md:px-10">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
                    {campaign.tail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}