import { SectionIntro } from '../../../Kinetic'

const timelineStages = [
  {
    period: 'Days 1\u20133',
    body: [
      'Business, account, audience, offer, creative, and tracking review.',
    ],
  },
  {
    period: 'Week 1',
    body: [
      'Campaign strategy, creative direction, audience setup, tracking, and campaign build.',
    ],
  },
  {
    period: 'Week 2',
    body: [
      'Launch, delivery validation, initial performance monitoring, and early optimization.',
    ],
  },
  {
    period: 'Weeks 3\u20134 and beyond',
    body: [
      'Creative testing, audience and delivery refinement, budget optimization, retargeting development, and reporting.',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="Meta Ads Management Timeline"
        >
          Meta Ads timelines vary based on account condition, campaign complexity, creative
          requirements, tracking setup, and approval time.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              The amount of time needed to reach useful performance signals varies by campaign
              objective, conversion volume, spend level, audience size, and sales cycle.
            </p>
            <p>
              We therefore avoid promising a universal &ldquo;results in seven days&rdquo;
              timeline.
            </p>
          </div>

          <div className="space-y-4">
            {timelineStages.map((stage, index) => (
              <div key={index} className="border-2 border-frame-border bg-frame-muted/5 p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {stage.period}
                    </h3>
                    {stage.body.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}