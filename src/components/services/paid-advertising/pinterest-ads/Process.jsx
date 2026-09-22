import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Account & Campaign Audit',
    body: 'We start by reviewing the Pinterest Business account, existing campaigns, tracking, creative, website, catalog, Product Groups, and current performance. We also assess whether Pinterest is a sensible channel for the business before recommending additional spend.',
    bullets: [
      'Account and tracking review',
      'Creative and catalog assessment',
      'Channel-fit evaluation',
    ],
  },
  {
    title: 'Strategy & Calendar Planning',
    body: 'We define the campaign objective, target markets, audiences, keywords, creative direction, product priorities, budget structure, and seasonal opportunities. The result is a campaign plan built around the business rather than a standard Pinterest template.',
    bullets: [
      'Objective and audience definition',
      'Keyword and creative direction',
      'Seasonal and budget planning',
    ],
  },
  {
    title: 'Tracking & Campaign Setup',
    body: 'We prepare the campaign structure and measurement foundation. Depending on the account, this can include Tag, Conversions API, conversion events, UTM parameters, catalog and Product Groups, campaign and ad-group structure, audience setup, and landing-page alignment. Tracking is validated before conversion data becomes the basis for major optimization decisions.',
    bullets: [
      'Pinterest Tag',
      'Conversions API',
      'Conversion events',
      'UTM parameters',
      'Catalog and Product Groups',
      'Campaign and ad-group structure',
      'Audience setup',
      'Landing-page alignment',
    ],
  },
  {
    title: 'Creative Production',
    body: 'We create the required Pin and ad assets based on the campaign objective, audience, offer, product or service, and destination page. Creative can include static, video, carousel, collection, Idea, or catalog-driven formats depending on the campaign.',
    bullets: [
      'Static, video, carousel, and collection assets',
      'Idea and catalog-driven formats',
      'Format matched to objective and destination',
    ],
  },
  {
    title: 'Launch & Learning',
    body: 'Once the account, tracking, creative, and campaign structure are ready, we launch and monitor delivery. We focus on early data quality, creative performance, audience response, conversion activity, and campaign stability. We avoid unnecessary changes while campaigns are still learning.',
    bullets: [
      'Delivery and data quality checks',
      'Creative and audience response monitoring',
      'Stable learning period respected',
    ],
  },
  {
    title: 'Ongoing Management & Optimization',
    body: 'We review campaign performance against the agreed objective and make controlled improvements. Reporting then documents what changed, what the data suggests, and what should happen next.',
    bullets: [
      'Creative refreshes',
      'Audience refinement',
      'Keyword changes',
      'Budget adjustments',
      'Product-group updates',
      'Bid strategy review',
      'Landing-page recommendations',
      'Conversion optimization',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How we work"
          title="Our Pinterest Ads Management Process"
        >
          A clear process protects your budget and keeps the campaign connected to the business
          outcome from audit to ongoing optimization.
        </SectionIntro>

        <div className="space-y-6 border-t-2 border-frame-border pt-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-8 border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-frame-accent bg-frame-accent/10 font-mono text-base font-black text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
              </div>
              <div className="border-t-2 border-frame-border/60 pt-5 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}