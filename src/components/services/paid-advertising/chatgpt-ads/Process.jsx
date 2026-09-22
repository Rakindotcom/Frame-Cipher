import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Discovery & Readiness Assessment',
    body: 'We begin by reviewing your business goals, offer, target markets, and the current state of your landing pages. We also confirm whether the account setup and market are eligible for ChatGPT Ads before anything moves forward.',
    bullets: [
      'Review goals, offer, and target markets',
      'Confirm eligibility for ChatGPT Ads',
      'Define the campaign structure',
      'Set up the measurement plan',
    ],
  },
  {
    title: 'Account & Tracking Setup',
    body: 'The correct account setups belong inside the campaign preparation stage, not after launch. We connect the right advertiser account, prepare the campaign settings, set up conversions, and build the measurement foundation before the first ad goes live.',
    bullets: [
      'Connect the advertiser account',
      'Approve domains and prepare campaigns',
      'Create or connect conversion events',
    ],
  },
  {
    title: 'Campaign & Creative Development',
    body: 'We develop campaign objectives, ad-group structure, context hints, creative variations, and landing-page alignment. A ChatGPT Ads campaign should reach the right conversation with the right message and the right landing page.',
    bullets: [
      'Campaign, ad-group, and creative structure',
      'Context and intent targeting',
      'Alignment with landing pages',
    ],
  },
  {
    title: 'Launch & Data Collection',
    body: 'We launch the campaign in a structured way and monitor early delivery. Early data in a new channel can be limited, so we focus on detecting real problems such as tracking issues or delivery problems rather than reacting to normal performance variation.',
    bullets: [
      'Structured launch',
      'Issue detection',
      'Performance monitoring against baseline targets, if applicable',
    ],
  },
  {
    title: 'Optimization & Reporting',
    body: 'We review performance, refine context, test creative, and adjust budgets based on data. Reporting connects the numbers back to your original business objectives, so you always know what you are paying for and why.',
    bullets: [
      'Creative, context, and budget refinement',
      'Testing roadmap',
      'Reporting progress against objectives',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How we work"
          title="Our ChatGPT Ads Management Process"
        >
          A clear process protects your budget and your decision-making, especially on a channel
          that is still maturing.
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