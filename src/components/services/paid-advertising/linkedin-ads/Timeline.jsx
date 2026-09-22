import { SectionIntro } from '../../../Kinetic'

const timelineStages = [
  {
    period: 'Days 1\u20134',
    body: [
      'Business, ICP, buying committee, account structure, conversion goals, and tracking review.',
    ],
  },
  {
    period: 'Week 1',
    body: [
      'Audience research, campaign strategy, creative direction, Lead Gen Forms, and tracking setup.',
    ],
  },
  {
    period: 'Week 2',
    body: [
      'Campaign build, review, launch, and initial delivery validation.',
    ],
  },
  {
    period: 'Weeks 3\u20136 and beyond',
    body: [
      'Audience refinement, creative testing, budget optimization, retargeting, lead-quality review, and sales feedback.',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="LinkedIn Ads Management Timeline"
        >
          LinkedIn campaign timelines depend on account condition, audience size, creative
          requirements, tracking setup, approval time, and sales-cycle complexity.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              B2B campaigns can require longer observation periods because the first lead is not
              necessarily the final business outcome.
            </p>
            <p>
              Where CRM or qualified-lead data is available, we use that information to
              understand campaign performance beyond the initial conversion.
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