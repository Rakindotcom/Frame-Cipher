import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Account Audit & Campaign Strategy',
    body: [
      'We begin by understanding the account before making changes.',
      'For an existing account, we review the campaign and account structure, conversion goals, tracking configuration, keyword targeting, search terms, bidding strategies, budget allocation, ad quality and relevance, landing-page alignment, Shopping and Merchant Center setup where relevant, and existing performance trends. For a new account, we build the strategy around your offer, audience, market, buying journey, and commercial goals.',
    ],
    bullets: [
      'Campaign and account structure',
      'Conversion goals',
      'Tracking configuration',
      'Keyword targeting',
      'Search terms',
      'Bidding strategies',
      'Budget allocation',
      'Ad quality and relevance',
      'Landing-page alignment',
      'Shopping and Merchant Center setup where relevant',
      'Existing performance trends',
    ],
    note: 'The result is a clear account structure designed to make optimization easier as data accumulates.',
  },
  {
    title: 'Keyword Research & Search Intent',
    body: [
      'Keyword volume alone does not tell us whether a search is valuable. We examine the intent behind the search and separate commercially meaningful queries from traffic that is unlikely to produce a useful business outcome.',
    ],
    bullets: [
      'Commercial keyword research',
      'Buyer-intent analysis',
      'Competitor search analysis',
      'Match-type strategy',
      'Negative keyword development',
      'Search-term review',
      'Location-specific keyword research',
      'Bangla-English and local-language considerations where relevant',
    ],
    note: 'We continually review search terms after launch because real user queries can reveal opportunities and sources of wasted spend that initial keyword research cannot fully predict.',
  },
  {
    title: 'Campaign Structure & Targeting',
    body: [
      'Campaign structure determines how clearly we can control budgets, messaging, targeting, bidding, and performance analysis. We organize campaigns around meaningful business and search themes instead of creating unnecessary complexity.',
    ],
    bullets: [
      'Location',
      'Language',
      'Audience signals',
      'Search intent',
      'Products',
      'Services',
      'Customer segments',
      'Device considerations',
      'New versus returning users',
      'Market-specific campaign structures',
    ],
    note: 'The goal is to create enough control for useful optimization without splitting campaigns into structures that are too fragmented to gather meaningful data.',
  },
  {
    title: 'Ad Copy & Asset Optimization',
    body: [
      'Your ad is part of the conversion journey, not simply a vehicle for gaining the click. We create and refine ad messaging around search intent, customer problems, product or service benefits, differentiators, offers, calls to action, geographic relevance, and landing-page alignment.',
      'For Search campaigns, this includes Responsive Search Ads and relevant ad assets such as sitelinks, callouts, structured snippets, calls, and other applicable assets.',
    ],
    bullets: [
      'Search intent',
      'Customer problems',
      'Product or service benefits',
      'Differentiators',
      'Offers',
      'Calls to action',
      'Geographic relevance',
      'Landing-page alignment',
    ],
    note: 'We test messaging based on actual performance rather than relying on assumptions about which headline or benefit "sounds better."',
  },
  {
    title: 'Conversion Tracking & Measurement',
    body: [
      'Good optimization depends on reliable measurement. We configure and review conversion tracking for the actions that matter to your business, including purchases, lead forms, phone calls, appointment requests, quote requests, downloads, and ecommerce events.',
      'Where appropriate, we connect Google Ads with Google Analytics, Google Tag Manager, and other measurement systems used in your setup. We can also review Enhanced Conversions where supported. For businesses with a suitable CRM or sales pipeline, we can also support qualified-lead measurement and offline conversion imports so campaigns can be evaluated beyond the initial form submission.',
    ],
    bullets: [
      'Purchases',
      'Lead forms',
      'Phone calls',
      'Appointment requests',
      'Quote requests',
      'Downloads',
      'Ecommerce events',
      'Other qualified actions',
    ],
    note: 'Google describes Enhanced Conversions as a measurement feature that can improve conversion measurement accuracy and support stronger bidding by using hashed first-party customer data in a privacy-conscious way.',
  },
  {
    title: 'Bid, Budget & Performance Optimization',
    body: [
      'Once campaigns are collecting reliable data, we manage the factors that influence how the budget is allocated and how campaigns respond to performance.',
    ],
    bullets: [
      'Bid strategy review',
      'Budget allocation',
      'Budget pacing',
      'Cost-per-conversion analysis',
      'Conversion-value analysis',
      'Search-term optimization',
      'Negative keyword expansion',
      'Campaign and ad-level performance review',
      'Geographic performance analysis',
      'Audience performance analysis',
      'Creative testing',
      'Scaling or restructuring where justified',
    ],
    note: 'Automated bidding can require time and sufficient data to stabilize after launch or major changes. We avoid unnecessary changes that make it harder to understand what actually influenced performance.',
  },
  {
    title: 'Landing Page & CRO Alignment',
    body: [
      'A strong ad cannot compensate for a poor post-click experience. We review whether the landing page matches the ad\u2019s promise, makes the offer immediately clear, supports the intended conversion, loads effectively, works well on mobile, uses a relevant call to action, reduces unnecessary friction, and supports trust before the conversion.',
    ],
    bullets: [
      'Matches the ad\u2019s promise',
      'Makes the offer immediately clear',
      'Supports the intended conversion',
      'Loads effectively',
      'Works well on mobile',
      'Uses a relevant call to action',
      'Reduces unnecessary friction',
      'Supports trust before the conversion',
    ],
    note: 'Where needed, our advertising team can collaborate with the web team on landing-page recommendations, CRO improvements, tracking requirements, and campaign-to-page alignment.',
  },
  {
    title: 'Shopping & Merchant Center Management',
    body: [
      'For ecommerce accounts, Google Ads performance depends heavily on the quality of the underlying product information.',
      'Google states that Merchant Center product data is used to help match products to relevant searches and support product advertising across Google\u2019s channels. This means Shopping optimization cannot be treated as an isolated ad-setting exercise. Product data, campaign structure, product pages, and the overall buying experience need to work together.',
    ],
    bullets: [
      'Merchant Center configuration',
      'Product data',
      'Product titles',
      'Descriptions and attributes',
      'Product categorization',
      'Availability and pricing',
      'Feed issues',
      'Product disapprovals',
      'Product segmentation',
      'Campaign structure',
      'Product-level performance',
    ],
    note: 'Product data, campaign structure, product pages, and the overall buying experience need to work together for sustainable Shopping performance.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="What Our Google Ads Management Service Includes"
        >
          Google Ads management covers strategy, structure, tracking, ad messaging, landing-page
          alignment, and ongoing optimization. Each part is managed as one connected process.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.note && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}