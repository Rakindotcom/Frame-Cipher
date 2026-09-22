import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Audit & Opportunity Assessment',
    body: 'We begin by reviewing your business, market, current advertising activity, search demand, website or ecommerce setup, tracking, and conversion goals. If you already use Google Ads, we also assess which campaigns are worth importing and which should be rebuilt or excluded.',
  },
  {
    title: 'Strategy & Campaign Planning',
    body: 'We define campaign objectives, market and location targeting, keyword structure, audience strategy, budget allocation, conversion goals, network settings, measurement requirements, and the reporting framework.',
  },
  {
    title: 'Setup or Migration',
    body: 'We either build the account from the ground up or use Microsoft\u2019s Google Ads import workflow as a starting point. Imported campaigns are reviewed before launch.',
  },
  {
    title: 'Tracking & QA',
    body: 'Before launch, we verify UET, conversion goals, event tracking, URLs, ad assets, product feeds where applicable, audience settings, campaign budgets, and network settings.',
  },
  {
    title: 'Launch & Early Optimization',
    body: 'We launch the agreed campaign structure and monitor early delivery closely. Early data is used to identify search-term patterns, conversion issues, audience opportunities, traffic-quality concerns, budget inefficiencies, and creative or landing-page problems.',
  },
  {
    title: 'Ongoing Management & Scaling',
    body: 'Once the account produces reliable signals, we optimize budgets, bids, audiences, keywords, search terms, assets, and campaign structure based on evidence. Scaling is based on repeatable performance rather than simply increasing spend.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Process" title="Our Microsoft Ads Management Process">
          A structured path from audit to ongoing management, with every stage tied to the actual
          business objective.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="font-heading text-4xl font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-1.5 flex-1 bg-frame-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}