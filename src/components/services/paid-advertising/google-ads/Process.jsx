import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Audit & Goal Definition',
    body: [
      'We begin with your business model, offer, target customer, market, and conversion goals.',
      'For an existing account, we review the current setup before recommending changes. For a new account, we define the measurement framework and campaign direction before launch.',
    ],
  },
  {
    title: 'Research & Campaign Planning',
    body: [
      'We research search intent, keyword themes, competitors, audiences, products or services, geographic markets, and the expected customer journey.',
    ],
    note: 'The result is a campaign plan that connects advertising activity with the business outcome you actually want.',
  },
  {
    title: 'Setup & Tracking Validation',
    body: [
      'We build or restructure campaigns, configure targeting, create ad assets, connect relevant conversion tracking, and review the account before launch.',
    ],
    note: 'Tracking is validated before significant optimization decisions are made.',
  },
  {
    title: 'Launch & Initial Optimization',
    body: [
      'After launch, we monitor early traffic, search terms, conversions, spend distribution, ad performance, and tracking behavior.',
    ],
    note: 'The first stage is about validating the setup and identifying meaningful signals rather than making large changes simply to create activity.',
  },
  {
    title: 'Testing & Ongoing Optimization',
    body: [
      'As performance data develops, we test and refine the areas that influence campaign results.',
    ],
    bullets: [
      'Keywords',
      'Search terms',
      'Negative keywords',
      'Ads and assets',
      'Landing pages',
      'Bids',
      'Budgets',
      'Audiences',
      'Geographic targeting',
      'Product segments',
    ],
    note: 'Optimization is guided by performance data and business value.',
  },
  {
    title: 'Reporting & Scaling',
    body: [
      'Reporting focuses on the metrics that make campaign decisions possible.',
    ],
    bullets: [
      'Spend',
      'Conversions',
      'Cost per conversion',
      'Conversion value',
      'Revenue where measurable',
      'Search-term trends',
      'Campaign-level performance',
      'Market performance',
      'Key changes and next actions',
    ],
    note: 'When the data supports further growth, we look for opportunities to scale the budget, expand winning themes, enter new markets, or introduce additional campaign types without losing measurement discipline.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Manage Google Ads"
        >
          Campaigns are built, launched, tracked, tested, and scaled through a structured
          process so decisions are driven by evidence rather than assumptions.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {step.bullets?.length > 0 && (
                  <ul className="mt-4 grid gap-1.5 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {step.note && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.note}
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