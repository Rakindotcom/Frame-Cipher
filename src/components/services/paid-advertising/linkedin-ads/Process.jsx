import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'ICP, Sales Process & Goal Definition',
    body: [
      'We begin with the customer you want to acquire, how they buy, who influences the decision, and what your sales team considers a qualified opportunity.',
      'For existing accounts, we review campaign history, targeting, conversion data, creative, spend, and lead quality before recommending major changes.',
    ],
  },
  {
    title: 'Audience, Account & Buying Committee Research',
    body: [
      'We map the target industries, companies, job functions, seniority, locations, buying-committee roles, target-account lists, existing customer data, and retargeting audiences.',
    ],
    note: 'Where appropriate, we evaluate Matched Audiences, Auto-Targeting, Buyer Groups, Predictive Audiences, and other available targeting capabilities.',
  },
  {
    title: 'Campaign & Creative Planning',
    body: [
      'We define the campaign objective, audience, format, offer, creative direction, conversion path, and budget around the sales stage being targeted.',
    ],
    note: 'A cold audience may need educational content or industry insight. A warmer audience may be ready for a case study, demo, consultation, or product-specific offer.',
  },
  {
    title: 'Tracking & CRM Setup',
    body: [
      'We configure or validate the tracking systems that connect advertising to business outcomes.',
    ],
    bullets: [
      'Insight Tag',
      'Conversion tracking',
      'Conversions API',
      'Lead Gen Forms',
      'CRM connections',
      'UTM parameters',
      'Qualified-lead events',
      'Conversion definitions',
    ],
    note: 'Where supported, the goal is to create a measurement loop between advertising activity and sales outcomes.',
  },
  {
    title: 'Launch & Initial Learning',
    body: [
      'After launch, we monitor delivery, audience size, engagement, conversions, lead quality, and budget utilization.',
    ],
    note: 'We avoid making frequent structural changes before sufficient data is available to support a decision.',
  },
  {
    title: 'Testing & Lead Quality Optimization',
    body: [
      'We test meaningful variables across the campaign.',
    ],
    bullets: [
      'Audience segments',
      'Offers',
      'Creative angles',
      'Ad formats',
      'CTAs',
      'Form structure',
      'Landing pages',
      'Retargeting approaches',
    ],
    note: 'Where qualified-lead or CRM data is available, we use it to understand whether campaigns are producing prospects that actually fit the sales pipeline.',
  },
  {
    title: 'Reporting, Sales Feedback & Scaling',
    body: [
      'Reporting is connected to what the sales team can use. We review lead quality and sales feedback alongside campaign performance, then identify opportunities to scale qualified audiences, expand target accounts, improve creative, strengthen retargeting, enter new markets, improve measurement, and reallocate budget.',
    ],
    note: 'Scaling follows evidence rather than raw lead volume.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Manage LinkedIn Ads"
        >
          Campaigns are built, launched, measured, and scaled through a structured process so
          decisions are driven by evidence rather than assumptions.
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