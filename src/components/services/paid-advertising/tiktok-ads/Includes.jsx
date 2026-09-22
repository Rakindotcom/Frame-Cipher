import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Campaign Strategy & Account Setup',
    body: [
      'Every campaign starts with the business goal rather than the ad format. We review your offer, audience, sales funnel, landing pages, conversion events, budget, and market before deciding how the account should be structured.',
    ],
    label: 'What we do',
    bullets: [
      'Campaign objective and conversion goal selection',
      'TikTok Ads Manager setup and account configuration',
      'Business Center and advertising asset setup where required',
      'Campaign and ad group structure',
      'Budget and bidding strategy',
      'Geographic and audience planning',
      'Landing-page and funnel review',
      'Competitor and creative research',
      'Initial measurement plan',
    ],
    note: 'The objective may differ by business. A campaign designed to generate website traffic needs a different optimization approach from one designed to generate purchases or qualified leads.',
  },
  {
    title: 'TikTok Ads Creative Strategy',
    body: [
      'TikTok users scroll through a continuous stream of content, so the creative needs to earn attention quickly. We develop creative concepts around the audience, offer, product, and campaign objective rather than simply resizing existing advertisements from another platform.',
    ],
    label: 'What we do',
    bullets: [
      'Creative concept development',
      'Hook and opening-frame testing',
      'Short-form video scripting',
      'Native-style ad concepts',
      'Product demonstrations',
      'Problem\u2013solution videos',
      'Testimonial and UGC concepts',
      'Offer-led creative',
      'Creative variation planning',
      'Performance-based creative refreshes',
    ],
    note: 'The goal is not to make every ad look the same. We build enough meaningful variation to learn which messages, hooks, formats, and offers resonate with the target audience.',
  },
  {
    title: 'UGC & Creator Content',
    body: [
      'User-generated and creator-led content can help brands communicate in a more natural format. Framecipher can help plan creator briefs, content requirements, scripts, hooks, and paid usage requirements. We focus on finding content that supports the campaign objective rather than selecting creators based only on follower count.',
    ],
    label: 'What we do',
    bullets: [
      'UGC concept development',
      'Creator briefing',
      'Script and hook guidance',
      'Product demonstration briefs',
      'Creator content review',
      'Usage-rights coordination',
      'Paid media adaptation',
      'Performance-based creative selection',
    ],
    note: 'Creator content should still be evaluated as advertising creative. A large audience does not automatically mean a creator\u2019s content will produce qualified traffic or conversions.',
  },
  {
    title: 'Spark Ads',
    body: [
      'Spark Ads allow eligible organic TikTok content to be used in advertising while retaining the original post identity and engagement elements. We use Spark Ads when existing organic or creator content provides a strong foundation for paid distribution.',
    ],
    label: 'What we do',
    bullets: [
      'Spark Ads campaign setup',
      'Organic-content selection',
      'Creator authorization coordination',
      'Spark code and authorization workflow support',
      'Creator content testing',
      'Paid amplification',
      'Performance monitoring',
      'Creative scaling and refresh',
    ],
    note: 'The decision to scale a Spark Ad is based on campaign performance, creative quality, audience response, and business results rather than engagement alone.',
  },
  {
    title: 'Audience Strategy & Retargeting',
    body: [
      'TikTok audience strategy can combine broad delivery, interest and behavior signals, custom audiences, lookalike audiences, and automated optimization. We build the audience strategy around the campaign objective and available first-party data.',
    ],
    label: 'What we do',
    bullets: [
      'Geographic targeting',
      'Interest and behavior targeting',
      'Custom audiences',
      'Website visitor audiences',
      'Customer-list audiences',
      'Video engagement audiences',
      'Lookalike audiences',
      'Retargeting sequences',
      'Broad audience testing',
      'Audience exclusions where appropriate',
    ],
    note: 'We do not assume that narrower targeting is always better. In some campaigns, broader delivery can give TikTok more room to identify potential customers. In others, first-party audience signals can provide useful direction.',
  },
  {
    title: 'Smart+ Campaign Management',
    body: [
      'TikTok\u2019s Smart+ solutions use automation to simplify campaign setup and optimize parts of delivery across performance objectives. TikTok currently supports Smart+ workflows across areas including Traffic, App Promotion, Lead Generation, and Sales. Framecipher can evaluate when Smart+ makes sense and when more manual control is useful.',
    ],
    label: 'What we do',
    bullets: [
      'Smart+ campaign setup',
      'Objective and conversion configuration',
      'Creative selection and testing',
      'Audience signal planning',
      'Budget and bidding configuration',
      'Performance monitoring',
      'Manual-versus-automated campaign evaluation',
      'Scaling and optimization',
    ],
    note: 'Automation does not remove the need for strategy. The quality of the conversion signals, creative assets, offer, landing page, and measurement setup still matters.',
  },
  {
    title: 'TikTok Catalog & Ecommerce Ads',
    body: [
      'For ecommerce brands, TikTok can connect product information and catalog data with advertising campaigns. We help businesses structure product catalogs, connect ecommerce data, and build campaigns around product discovery, consideration, and conversion.',
    ],
    label: 'What we do',
    bullets: [
      'Product catalog setup',
      'Catalog connection',
      'Product-set organization',
      'Ecommerce event tracking',
      'Dynamic product advertising',
      'Catalog-based retargeting',
      'Product creative testing',
      'Website sales campaigns',
    ],
    note: 'TikTok currently supports catalog-based advertising and Smart+ Catalog workflows, including ecommerce and app-retargeting use cases.',
  },
  {
    title: 'TikTok Shop Advertising Where Available',
    body: [
      'TikTok Shop provides an in-platform shopping experience where eligible businesses can sell products through TikTok. However, TikTok Shop is not available in every market. TikTok currently lists specific supported markets, including the United States, United Kingdom, and several Southeast Asian and European markets. Bangladesh is not currently listed among the supported TikTok Shop markets.',
    ],
    label: 'For eligible international clients, we can support',
    bullets: [
      'TikTok Shop advertising setup',
      'Product and catalog coordination',
      'Video Shopping Ads',
      'LIVE Shopping Ads',
      'Product Shopping Ads',
      'Creator-led commerce campaigns',
      'Shop-focused performance optimization',
    ],
    note: 'For Bangladesh-based businesses without TikTok Shop eligibility, we can instead structure campaigns around supported websites, catalog, lead, or app destinations.',
  },
  {
    title: 'Lead Generation & App Campaigns',
    body: [
      'TikTok Ads can support more than ecommerce. We manage campaigns for businesses that need leads, app installs, app re-engagement, or other measurable acquisition actions.',
    ],
    groups: [
      {
        label: 'Lead generation',
        bullets: [
          'Lead campaign setup',
          'Lead form configuration',
          'Lead qualification strategy',
          'CRM handoff planning',
          'Lead-quality measurement',
          'Retargeting',
        ],
      },
      {
        label: 'App promotion',
        bullets: [
          'App acquisition campaigns',
          'App retargeting',
          'Conversion event setup',
          'Mobile measurement integration',
          'Creative testing',
          'Cost-per-acquisition monitoring',
        ],
      },
    ],
    note: 'TikTok currently supports Smart+ App campaigns and app-retargeting workflows, including catalog-based app campaigns.',
  },
  {
    title: 'TikTok Pixel & Events API',
    body: [
      'Reliable measurement starts with a reliable data connection. We configure TikTok Pixel and Events API based on the website, app, CRM, and conversion setup.',
    ],
    label: 'What we do',
    bullets: [
      'TikTok Pixel installation',
      'Standard event configuration',
      'Event parameter setup',
      'Events API implementation',
      'Event deduplication',
      'Purchase and revenue tracking',
      'Lead conversion tracking',
      'Data connection testing',
    ],
    note: 'TikTok recommends Pixel and Events API together where appropriate because the combination can improve data reliability, measurement, audience creation, and optimization. Events API can also connect web, app, and offline or CRM data sources.',
  },
  {
    title: 'Conversion Tracking & Attribution',
    body: [
      'Ad-platform metrics are only part of the picture. We connect TikTok campaign data with the broader conversion journey so you can understand what happens after the click.',
    ],
    label: 'What we track',
    bullets: [
      'Landing-page visits',
      'Product views',
      'Add-to-cart actions',
      'Checkout activity',
      'Purchases',
      'Lead submissions',
      'App events',
      'Revenue',
      'Cost per acquisition',
      'ROAS where sufficient data exists',
    ],
    note: 'Where appropriate, we also use UTM parameters, GA4, CRM data, and other available first-party signals to improve campaign analysis.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & scope"
          title="What TikTok Ads Management Includes"
        >
          TikTok Ads management covers strategy, native creative, UGC and creator content, Spark
          Ads, audience strategy, Smart+ automation, catalog and ecommerce advertising, TikTok
          Shop where available, tracking, and ongoing optimization.
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
              {item.groups?.length > 0 && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {item.groups.map((group, gIdx) => (
                    <div key={gIdx}>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                        {group.label}:
                      </span>
                      <ul className="mt-3 space-y-2 text-xs font-semibold text-frame-fg/90">
                        {group.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-frame-accent font-bold">✓</span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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