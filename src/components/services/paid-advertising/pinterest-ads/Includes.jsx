import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Campaign Strategy & Account Setup',
    body: [
      'The right campaign structure starts with the business objective. We review your offer, market, audience, website, existing Pinterest presence, budget, and conversion path before deciding how the account should be structured.',
    ],
    label: 'What we do',
    bullets: [
      'Campaign and ad-group structure',
      'Objective selection',
      'Budget and schedule planning',
      'Geographic targeting',
      'Product or service segmentation',
      'Account setup and readiness checks',
      'Landing-page alignment',
      'Campaign naming and organization',
      'Pre-launch review',
      'Initial testing plan',
    ],
    note: 'Pinterest\u2019s current Ads Manager structure supports objectives such as Consideration, Leads, and Sales, while older Conversions and Catalog Sales objectives are being phased into the updated framework. We build new campaigns around the current system rather than relying on outdated campaign structures.',
  },
  {
    title: 'Audience, Keyword & Performance+ Targeting',
    body: [
      'Pinterest combines search behavior, interests, audience data, and automated optimization. Our targeting strategy reflects how people search, save, and plan on the platform.',
    ],
    label: 'Our targeting strategy can include',
    bullets: [
      'Keyword targeting',
      'Interest targeting',
      'Site visitor audiences',
      'Customer lists',
      'Engagement audiences',
      'Actalike audiences',
      'Geographic targeting',
      'Age and language targeting',
      'Placement considerations',
      'Pinterest Performance+',
    ],
    note: 'We treat Pinterest search differently from a broad social audience. Keyword research helps us understand what people actively look for, while audience targeting can expand reach beyond direct search behavior. Pinterest Performance+ adds automation across targeting, bidding, and campaign setup. Its targeting can use additional visual and written signals, while audience lists such as customer lists, site visitors, engagement audiences, and Actalike audiences can be incorporated where supported. We use automation where it makes sense rather than assuming every campaign should be fully automated.',
  },
  {
    title: 'Pin Creative & Ad Formats',
    body: [
      'Pinterest advertising starts with the Pin. A user should understand the idea, product, benefit, or inspiration quickly enough to want to stop, save, explore, or click.',
    ],
    label: 'We create and test',
    bullets: [
      'Static Pins',
      'Video Pins',
      'Carousel Ads',
      'Collection Ads',
      'Idea Ads',
      'Product-led creative',
      'On-Pin text and overlays',
      'Pin titles and descriptions',
      'Calls to action',
      'Seasonal creative variations',
    ],
    note: 'We do not simply resize Facebook or Instagram ads for Pinterest. The creative needs to match the platform, the search or discovery intent, and the destination experience. We also build creative variations around different product benefits, use cases, visual hooks, and messages so testing produces useful learning rather than minor wording changes. For Performance+ campaigns, Pinterest recommends providing a variety of creative and says that around 10 ads per ad group can help the system identify stronger performers.',
  },
  {
    title: 'Shopping & Catalog Ads',
    body: [
      'For ecommerce brands, Pinterest can connect discovery with product consideration and purchase. We manage the product catalog as a campaign asset rather than a disconnected feed.',
    ],
    label: 'We help manage',
    bullets: [
      'Product catalog setup',
      'Product feed preparation',
      'Catalog health checks',
      'Product Group organization',
      'Product titles and data review',
      'Shopping campaign setup',
      'Collection campaigns',
      'Dynamic retargeting',
      'Product-focused creative',
      'Catalog performance monitoring',
    ],
    note: 'Pinterest supports Product Catalog as a creative source for applicable Consideration and Sales campaigns. Product Groups can then organize products from the catalog for promotion. We can structure product groups around commercially meaningful categories such as product type, collection, season, price range, or other business priorities. The goal is to make the catalog useful for campaign management, not simply connected.',
  },
  {
    title: 'Conversion Tracking & Measurement',
    body: [
      'Pinterest advertising needs reliable conversion data. Framecipher can help implement and validate the measurement foundation before using conversion data to make major optimization decisions.',
    ],
    label: 'We can help implement and validate',
    bullets: [
      'Pinterest Tag',
      'Pinterest Conversions API',
      'Conversion events',
      'Event mapping',
      'Event testing',
      'Event deduplication',
      'UTM tracking',
      'Google Analytics alignment',
      'Conversion reporting',
      'Data-quality checks',
    ],
    note: 'Pinterest supports both browser-based Tag tracking and server-side Conversions API measurement. When the same event is sent through both systems, appropriate deduplication is required. We establish the measurement foundation before using conversion data to make major optimization decisions. That gives you a clearer picture of what Pinterest traffic is actually doing after the click.',
  },
  {
    title: 'Landing Page & Conversion Alignment',
    body: [
      'The Pin gets the click. The landing page has to earn the conversion. We review the relationship between your creative, offer, destination page, and conversion action.',
    ],
    label: 'This can include',
    bullets: [
      'Message match',
      'Product or service relevance',
      'Mobile experience',
      'CTA clarity',
      'Offer visibility',
      'Checkout or enquiry flow',
      'Landing-page friction',
      'Destination consistency',
      'Conversion tracking',
    ],
    note: 'The experience should feel continuous. If a Pin promotes a product, the visitor should land on the relevant product rather than a generic homepage. If an ad promotes a service or offer, the destination should make the next step obvious.',
  },
  {
    title: 'Campaign Management, Bidding & Optimization',
    body: [
      'Launching a campaign is only the start. We monitor performance and make controlled changes based on the campaign objective and available data.',
    ],
    label: 'Optimization can include',
    bullets: [
      'Budget adjustments',
      'Audience refinement',
      'Keyword refinement',
      'Creative testing',
      'Performance+ evaluation',
      'Bid strategy review',
      'Product-group optimization',
      'Campaign structure changes',
      'Landing-page recommendations',
      'Conversion optimization',
    ],
    note: 'Pinterest currently supports Performance+ bidding as well as custom bidding options across eligible campaign objectives. Some conversion and ROAS optimization features require sufficient conversion data and appropriate event tracking. We do not make constant changes simply to show activity. The goal is to identify meaningful signals, protect useful learning, and scale what the data supports.',
  },
  {
    title: 'Seasonal Campaign Planning',
    body: [
      'Seasonality can matter significantly on Pinterest. People often plan around occasions, seasons, projects, and purchases before the actual decision date.',
    ],
    label: 'We build campaign calendars around',
    bullets: [
      'Seasonal demand',
      'Pinterest Trends',
      'Holidays and occasions',
      'Product launches',
      'Evergreen campaigns',
      'Planning windows',
      'Budget pacing',
      'Post-season analysis',
    ],
    note: 'The aim is to enter the planning journey early enough to build awareness and consideration before peak demand. Pinterest also recommends allowing campaigns sufficient time to learn rather than making frequent early changes. Its Quick Create documentation, for example, recommends letting campaigns run for at least 10 days for optimal results.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="Our Pinterest Ads Management Services"
        >
          Pinterest Ads management covers strategy, targeting, Pin creative, catalog and Shopping
          Ads, conversion tracking, landing-page alignment, optimization, and seasonal planning.
          Each part is managed as one connected process.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col bg-frame-bg p-7 md:p-8">
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
                <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}