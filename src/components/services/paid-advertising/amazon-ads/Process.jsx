import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Account & Product Audit',
    body: 'We begin with the advertising account, the product catalog, and the current campaign setup to understand where the account stands before changing anything.',
    items: [
      'Amazon advertising account',
      'Product catalog and eligibility',
      'Account health and status',
      'Amazon Brand Registry status where relevant',
      'Current campaign structure',
      'Current targeting and bidding',
      'Current Ad Groups and products',
      'Listing and retail readiness',
      'Data and reporting setup',
    ],
  },
  {
    title: 'Marketplace & Profitability Assessment',
    body: 'Advertising performs differently by marketplace, category, and product economics. We assess where the realistic opportunity sits before committing spend.',
    items: [
      'Estimated marketplace opportunity and competition',
      'Product economics and margins where available',
      'Break-even and target ACOS',
      'Amazon fees and fulfillment implications',
      'Pricing strategy',
      'Inventory availability',
      'Availability of relevant Amazon advertising features',
      'Realistic expectations based on category and stage',
    ],
  },
  {
    title: 'Campaign Strategy & Planning',
    body: 'A plan is built around the products, the marketplace, the budget, and the target outcome rather than a generic template.',
    items: [
      'Account structure and hierarchy',
      'Product selection for advertising',
      'Keyword and product-targeting research',
      'Campaign types and targeting approach',
      'Budget planning and allocation',
      'ACOS and TACOS targets',
      'Reporting scope',
      'Creative and asset coordination where relevant',
      'Timeline and milestones',
      'Measurement approach',
    ],
  },
  {
    title: 'Setup & Launch',
    body: 'Campaigns are built, checked, and launched in a structured sequence so the release is controlled and measurable.',
    items: [
      'Campaign creation and organization',
      'Targeting setup',
      'Bids and budgets',
      'Product and negative targeting',
      'Conversion and reporting checks',
      'Pre-launch quality review',
      'Structured launch',
    ],
  },
  {
    title: 'Search-Term & Bid Optimization',
    body: 'Ongoing review of search terms, targeting, bids, and budgets keeps the account moving in the right direction.',
    items: [
      'Search-term review',
      'Negative keyword and product management',
      'Keyword discovery and harvesting',
      'Bid adjustments',
      'Placement analysis',
      'Budget allocation',
      'Product-level performance analysis',
      'Ongoing optimization',
    ],
  },
  {
    title: 'Listing & Inventory Monitoring',
    body: 'Amazon advertising depends on products remaining available and eligible. We monitor the retail signals that can affect campaign performance.',
    items: [
      'Product availability checks',
      'Featured Offer eligibility review',
      'Pricing and competitive positioning',
      'Review and rating changes',
      'Inventory alerts',
      'Retail readiness coordination',
    ],
  },
  {
    title: 'Ongoing Management & Reporting',
    body: 'Management continues after launch in structured cycles with transparent reporting.',
    items: [
      'Weekly campaign monitoring',
      'Search-term review',
      'Bid and budget adjustments',
      'Product and keyword analysis',
      'ACOS and TACOS reporting',
      'Conversion and sales analysis',
      'Marketplace visibility checks',
      'Account health review',
      'Campaign structure review',
      'New-to-brand reporting where available',
      'Competitor movement',
      'Prime Day and seasonal event planning',
      'Transparent monthly reporting',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Process" title="Our Amazon Ads Management Process">
          We do not apply one identical workflow to every brand.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          The process is structured around the product, the marketplace, the advertising account,
          and the available data.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-2 border-frame-border bg-frame-bg p-8 md:p-12"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {step.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    We&apos;re focusing on
                  </p>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {step.items.map((item) => (
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