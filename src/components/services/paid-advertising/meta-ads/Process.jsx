import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Audit & Goal Definition',
    body: [
      'We start by understanding the business model, offer, target customer, market, existing data, and desired conversion.',
      'For an existing account, we review historical performance and the current campaign setup before recommending major changes.',
    ],
  },
  {
    title: 'Offer, Audience & Creative Research',
    body: [
      'We study what the customer needs, what objections may prevent action, which messages are likely to resonate, and which creative formats fit the buying journey.',
    ],
    note: 'We also identify the first-party signals and audience inputs available to the account.',
  },
  {
    title: 'Tracking & Campaign Setup',
    body: [
      'We configure campaign objectives, conversion events, audiences, creative, placements, budgets, and measurement before launch.',
    ],
    note: 'Where applicable, this includes Pixel and Conversions API setup or validation.',
  },
  {
    title: 'Launch & Initial Learning',
    body: [
      'After launch, we monitor delivery, conversion signals, spend, creative performance, and early user behavior.',
    ],
    note: 'We avoid making constant major changes before the account has enough useful data to support a decision.',
  },
  {
    title: 'Testing & Creative Refresh',
    body: [
      'We test meaningful variations in the elements that influence performance.',
    ],
    bullets: [
      'Hooks',
      'Offers',
      'Messages',
      'Visuals',
      'Formats',
      'Calls to action',
      'Audiences',
      'Landing pages',
    ],
    note: 'The goal is to learn which combination creates the strongest business outcome.',
  },
  {
    title: 'Reporting & Scaling',
    body: [
      'Once the campaign has clearer performance signals, we identify opportunities to increase budget, expand winning creative themes, introduce additional formats, enter new markets, improve the conversion flow, consolidate fragmented structures, and improve measurement.',
    ],
    note: 'Scaling is based on evidence rather than simply increasing spend because a campaign had a strong short-term result.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Manage Meta Ads"
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