import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Campaign Strategy & Account Setup',
    body: 'The account structure affects how easily performance can be understood and optimized later. We begin with the products, marketplace, business objectives, margins, and available data.',
    items: [
      'Campaign and product structure',
      'Marketplace and category assessment',
      'Budget planning',
      'ACOS target planning',
      'Break-even ACOS assessment',
      'Keyword and product-targeting strategy',
      'Account and campaign organization',
      'Brand Registry and feature eligibility review',
      'Conversion and reporting setup',
      'Competitor and product research',
    ],
    note: 'Targets are set according to product economics and growth objectives rather than applying one ACOS target across every ASIN.',
  },
  {
    title: 'Automatic & Manual Campaign Structure',
    body: 'Amazon campaigns can use different approaches for discovery, control, and scaling. Automatic campaigns can help discover relevant search and product-targeting opportunities, while manual campaigns provide more control over proven targets.',
    lead: 'We can structure',
    items: [
      'Automatic targeting campaigns',
      'Manual keyword campaigns',
      'Exact-match campaigns',
      'Phrase-match campaigns',
      'Broad-match campaigns',
      'Product-targeting campaigns',
      'Category targeting',
      'Search-term harvesting campaigns',
      'Negative keyword and product targeting',
    ],
    note: 'We use the mix that fits the product, budget, marketplace, and stage of the account.',
  },
  {
    title: 'Sponsored Products & Keyword Management',
    body: 'Sponsored Products are often a central part of Amazon PPC management. We manage targeting, search terms, bids, placements, budgets, and product-level performance.',
    items: [
      'Keyword research',
      'Keyword and product targeting',
      'Automatic campaign management',
      'Exact, phrase, and broad match strategy',
      'Search-term analysis',
      'Negative keyword management',
      'Product targeting',
      'Bid optimization',
      'Placement analysis',
      'Budget allocation',
      'Product-level performance review',
    ],
    note: 'The objective is not simply to generate more traffic. It is to identify traffic that has a commercial reason to convert.',
  },
  {
    title: 'Sponsored Brands & Brand Store Coordination',
    body: 'For eligible brands, Sponsored Brands can support awareness, consideration, customer acquisition, and brand discovery across Amazon shopping experiences.',
    items: [
      'Sponsored Brands campaign strategy',
      'Keyword and product targeting',
      'Sponsored Brands Video coordination',
      'Brand Store destination planning',
      'Product collection campaigns',
      'Brand-level campaign structure',
      'New-to-brand reporting where available',
      'Bid and budget optimization',
      'Performance analysis',
    ],
    note: 'We coordinate the advertising experience with the Brand Store or product destination rather than treating the destination as a separate concern.',
  },
  {
    title: 'Amazon Display Ads & Retargeting',
    body: 'Amazon Display Ads can help reach audiences across Amazon and beyond, depending on the campaign setup. Amazon\u2019s current display offering includes self-service display advertising through sponsored ads and broader programmatic options through Amazon DSP.',
    items: [
      'Display campaign planning',
      'Product and audience targeting',
      'Remarketing strategies',
      'Customer audience planning',
      'Audience exclusions',
      'Product-viewer targeting',
      'Creative and asset coordination',
      'Budget management',
      'Performance monitoring',
    ],
    note: 'We use display advertising where it supports the wider customer journey instead of adding display spend simply to increase impressions.',
  },
  {
    title: 'Amazon DSP & Programmatic Advertising',
    body: 'Amazon DSP is designed for advertisers that want to buy display and video inventory programmatically at scale. It can be used across Amazon-owned properties and third-party destinations.',
    items: [
      'DSP opportunity assessment',
      'Audience strategy',
      'Prospecting',
      'Retargeting',
      'Product-viewer audiences',
      'Customer audiences',
      'Cross-device audience planning',
      'Creative coordination',
      'Budget and bid management',
      'DSP reporting',
    ],
    note: 'We assess whether DSP is appropriate before adding programmatic spend to an account.',
  },
  {
    title: 'Listing & Retail Readiness Coordination',
    body: 'Ads cannot compensate for every listing problem. We identify retail-readiness issues that could limit advertising performance and coordinate with the relevant listing or ecommerce team.',
    lead: 'What We Review',
    items: [
      'Product images',
      'Titles',
      'Bullet points',
      'Product descriptions',
      'A+ Content where eligible',
      'Reviews and ratings',
      'Pricing',
      'Featured Offer eligibility',
      'Inventory',
      'Product variation structure',
      'Promotional readiness',
    ],
    note: 'Amazon identifies product detail page quality, inventory, pricing, and Featured Offer eligibility as important considerations for advertising readiness. Full listing optimization, design, copywriting, or catalog-management work can be scoped separately when required.',
  },
  {
    title: 'Bid, Budget & Placement Optimization',
    body: 'Amazon advertising performance changes as search behavior, competition, inventory, and product-level conversion data change.',
    lead: 'We regularly review',
    items: [
      'Keyword bids',
      'Product-targeting bids',
      'Placement performance',
      'Campaign budgets',
      'Search-term performance',
      'Conversion rate',
      'ACOS',
      'Sales',
      'Product-level profitability',
    ],
    note: 'Budget changes are based on performance signals rather than simply spending the assigned monthly amount.',
  },
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Services" title="Amazon Ads Management Services">
          Everything required to run and improve Amazon advertising around a measurable business
          outcome.
        </SectionIntro>

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
                  {service.note && (
                    <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-5">
                      <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {service.note}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {service.lead || 'What We Do'}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}