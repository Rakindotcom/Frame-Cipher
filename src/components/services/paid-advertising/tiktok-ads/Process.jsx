import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Audit & Discovery',
    body: 'We start by reviewing your business, offer, audience, website or app, existing advertising account, creative assets, tracking, and competitors. This gives us a clearer view of what needs to be fixed before scaling spend.',
    bullets: [
      'Business, offer, and audience review',
      'Account, creative, and tracking audit',
      'Website or app and funnel assessment',
    ],
  },
  {
    title: 'Strategy & Measurement Plan',
    body: 'We define the campaign objectives, conversion events, audience approach, budget allocation, creative testing plan, tracking requirements, and reporting framework. The strategy is built around the business outcome rather than vanity metrics.',
    bullets: [
      'Campaign objectives',
      'Conversion events',
      'Audience approach',
      'Budget allocation',
      'Creative testing plan',
      'Tracking requirements',
      'Reporting framework',
    ],
  },
  {
    title: 'Creative Planning & Production',
    body: 'We develop the initial creative plan and identify the concepts, hooks, formats, UGC requirements, and variations needed for testing. Where creator content is required, we coordinate briefs and usage requirements.',
    bullets: [
      'Concept and hook development',
      'Format and variation planning',
      'UGC and creator coordination',
    ],
  },
  {
    title: 'Campaign Launch',
    body: 'After tracking and creative are reviewed, we launch the initial campaigns with the agreed audience, budget, bidding, placements, and optimization settings.',
    bullets: [
      'Tracking and creative review',
      'Audience, budget, and bidding configuration',
      'Controlled initial launch',
    ],
  },
  {
    title: 'Testing & Optimization',
    body: 'We monitor campaign performance and evaluate creative response, audience performance, conversion rates, acquisition costs, budget efficiency, and funnel behavior. We then reallocate the budget and develop new tests based on the data.',
    bullets: [
      'Creative response',
      'Audience performance',
      'Conversion rates',
      'Acquisition costs',
      'Budget efficiency',
      'Funnel behavior',
    ],
  },
  {
    title: 'Scaling & Creative Refresh',
    body: 'When the account produces repeatable signals, we scale carefully rather than increasing spend without a clear reason. We continue refreshing creative, testing new angles, and reviewing the conversion funnel as the campaign develops.',
    bullets: [
      'Evidence-based budget scaling',
      'Ongoing creative refresh and testing',
      'Conversion funnel review',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How we work"
          title="Our TikTok Ads Management Process"
        >
          A process built around testing gives the account the data it needs to improve delivery
          and scale with evidence.
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