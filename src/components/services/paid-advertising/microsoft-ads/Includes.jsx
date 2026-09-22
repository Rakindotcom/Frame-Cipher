import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Campaign Strategy & Account Setup',
    body: 'Effective Microsoft Ads management starts with understanding the business, market, offer, conversion path, and available search demand. We review the account structure and build campaigns around the actual business objective rather than defaulting to a copied Google Ads setup.',
    items: [
      'Campaign objective and account structure',
      'Search, Shopping, Audience, and other campaign-type selection',
      'Budget and bidding strategy',
      'Geographic and market planning',
      'Keyword and match-type strategy',
      'Audience strategy',
      'Landing-page review',
      'Conversion tracking plan',
      'Competitor and search-term research',
      'Initial reporting framework',
    ],
    note: 'The right structure depends on whether the campaign is designed for qualified leads, ecommerce purchases, traffic, remarketing, or another measurable business outcome.',
  },
  {
    title: 'Search Ads Management',
    body: 'Search is often the core of a Microsoft Ads account. We build and manage Search campaigns around the queries, offers, and conversion goals that matter to the business.',
    items: [
      'Keyword research',
      'Match-type planning',
      'Search campaign structure',
      'Ad group organization',
      'Search ad copy',
      'Responsive search ad development',
      'Negative keyword management',
      'Search-term analysis',
      'Bid and budget optimization',
      'Ad asset management',
      'Landing-page alignment',
    ],
    note: 'We do not assume that keywords or ad copy that work on Google will perform identically on Microsoft Ads.',
  },
  {
    title: 'Microsoft Shopping & Ecommerce Ads',
    body: 'Microsoft Shopping can help ecommerce businesses capture product-focused search demand and connect product data with advertising campaigns.',
    items: [
      'Microsoft Merchant Center setup support',
      'Product-feed review',
      'Product-group organization',
      'Shopping campaign setup',
      'Product title and data review',
      'Ecommerce conversion tracking',
      'Budget and bid optimization',
      'Search-term analysis',
      'Product performance monitoring',
      'Remarketing where supported',
    ],
    note: 'The goal is to connect product visibility with measurable commercial outcomes rather than treating Shopping as a separate feed-management task.',
  },
  {
    title: 'LinkedIn Profile Targeting & Audience Strategy',
    body: 'LinkedIn Profile Targeting is one of Microsoft Advertising\u2019s distinctive audience capabilities. Advertisers can use professional information such as company, industry, and job function, with additional professional targeting options available in supported campaigns and markets. We use these signals where they add meaningful value to the campaign.',
    items: [
      'LinkedIn Profile Targeting setup',
      'Company targeting',
      'Industry targeting',
      'Job function targeting',
      'Job Seniority targeting where available',
      'In-market audience strategy',
      'Custom audience planning',
      'Remarketing',
      'Similar audiences were available',
      'Audience exclusions',
      'Search and audience-layer testing',
    ],
    note: 'For B2B accounts, professional audience signals can help refine who sees the campaign without replacing keyword intent or conversion data.',
  },
  {
    title: 'Microsoft Audience Ads & Remarketing',
    body: 'Audience advertising can extend beyond active search and support remarketing or broader audience development. Microsoft supports remarketing and additional audience capabilities, including predictive targeting and similar audiences where available.',
    items: [
      'Audience campaign setup',
      'Remarketing lists',
      'Customer-list audiences',
      'Audience exclusions',
      'Predictive audience options where available',
      'Similar audience strategies where available',
      'Creative and asset testing',
      'Performance monitoring',
      'Budget optimization',
    ],
    note: 'We use audience campaigns when they support the overall acquisition strategy rather than adding display inventory simply to increase reach.',
  },
  {
    title: 'Performance Max, AI Max & Dynamic Search',
    body: 'Automation can help manage broader campaign coverage, but it still needs the right inputs. Microsoft Performance Max is designed to use automation across Microsoft inventory, while AI Max for Search adds AI-powered functionality to Search campaigns. We assess automated campaign types based on data quality, conversion volume, creative assets, product or service coverage, and the level of control required.',
    items: [
      'Performance Max setup',
      'AI Max for Search evaluation and setup where available',
      'Dynamic Search strategy',
      'Feed and asset configuration',
      'Conversion-goal alignment',
      'Audience-signal planning',
      'Budget and bidding configuration',
      'Exclusions and controls',
      'Search-term and landing-page review',
      'Performance analysis',
    ],
    note: 'For large websites or frequently changing inventories, Dynamic Search can also help expand query coverage where manual keyword management becomes difficult.',
  },
  {
    title: 'Conversion Tracking & UET',
    body: 'Reliable tracking is essential for optimizing Microsoft Ads against actual business outcomes. Microsoft\u2019s Universal Event Tracking system can collect website activity for conversion tracking and remarketing. A UET setup can support conversion goals and audience strategies such as remarketing.',
    items: [
      'UET tag setup',
      'Conversion goal configuration',
      'Event tracking',
      'Purchase tracking',
      'Lead tracking',
      'Revenue measurement',
      'Remarketing audience setup',
      'Tracking QA',
      'Conversion troubleshooting',
    ],
    note: 'Where needed, we also connect campaign reporting with GA4, CRM data, and broader business reporting.',
  },
  {
    title: 'Google Ads to Microsoft Ads Migration',
    body: 'Microsoft provides an official Google Ads import workflow, making it possible to transfer supported campaign structures into Microsoft Advertising. The import itself is only the starting point.',
    items: [
      'Google Ads campaign import',
      'Campaign and ad review',
      'Keyword cleanup',
      'Match-type review',
      'Bid-strategy adjustment',
      'Budget review',
      'Conversion-goal verification',
      'Network-setting review',
      'Duplicate and irrelevant campaign removal',
      'Post-import audit',
      'Relaunch and optimization',
    ],
    note: 'We do not treat a one-click import as a finished campaign.',
    cta: { text: 'Plan Your Microsoft Ads Migration', href: '#pricing' },
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Services" title="Microsoft Ads Management Services" />
        <p className="mb-12 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Everything required to launch, track, and optimize Microsoft Advertising campaigns around
          a measurable business objective.
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border-2 border-frame-border bg-frame-bg p-8 md:p-12 transition-colors hover:border-frame-accent"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {service.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    What We Do
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {service.note}
                  </p>
                  {service.cta && (
                    <a
                      href={service.cta.href}
                      className="mt-8 inline-flex border-2 border-frame-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-bg"
                    >
                      {service.cta.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}