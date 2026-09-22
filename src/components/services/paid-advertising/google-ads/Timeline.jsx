import { SectionIntro } from '../../../Kinetic'

const timelineStages = [
  {
    period: 'Days 1\u20133',
    body: [
      'Business, account, conversion, keyword, competitor, and landing-page review.',
    ],
  },
  {
    period: 'Week 1',
    body: [
      'Campaign structure, tracking, keyword strategy, ads, assets, and budget planning.',
    ],
  },
  {
    period: 'Week 2',
    body: [
      'Campaign launch, validation, initial search-term review, and early optimization.',
    ],
  },
  {
    period: 'Weeks 3\u20134 and beyond',
    body: [
      'Ongoing testing, bid and budget refinement, search-term optimization, creative improvements, and performance analysis.',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="Google Ads Management Timeline"
        >
          The timeline depends on whether we are launching a new account, restructuring an
          existing one, or managing a complex ecommerce or international campaign.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Most campaigns follow a typical starting timeline, with each stage building on the
              data and structure established earlier.
            </p>
            <p>
              Automated campaign systems may require additional time and conversion data to
              stabilize after launch or significant changes. We therefore focus on disciplined
              iteration rather than constant major adjustments.
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