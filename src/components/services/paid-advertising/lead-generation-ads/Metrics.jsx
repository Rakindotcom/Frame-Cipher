import { SectionIntro } from '../../../Kinetic'

const metrics = [
  {
    title: 'Cost Per Lead',
    body: 'Useful for understanding the cost of generating inquiries, but it does not tell you whether those inquiries are valuable.',
  },
  {
    title: 'Cost Per Qualified Lead',
    body: 'Measures the acquisition cost of leads that meet agreed qualification criteria. This is often more useful for businesses with meaningful differences between raw leads and sales-ready prospects.',
  },
  {
    title: 'Cost Per Opportunity',
    body: 'Where CRM data is available, we can track the cost of moving a lead into a genuine sales opportunity.',
  },
  {
    title: 'Customer Acquisition Cost',
    body: 'Customer acquisition cost brings advertising and sales outcomes closer to the actual business result.',
  },
  {
    title: 'Lead-to-Customer Rate',
    body: 'We can compare the percentage of leads that become customers.',
    label: 'Become customers by',
    items: ['Platform', 'Campaign', 'Ad group', 'Audience', 'Creative', 'Offer', 'Market'],
  },
  {
    title: 'Revenue & Return',
    body: 'For businesses with sufficient sales and revenue data, reporting can connect advertising activity with downstream revenue. The exact measurement approach depends on the sales cycle, CRM, attribution model, and available conversion data.',
  },
]

export default function Metrics() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Measurement" title="Lead Quality Measurement: From Lead to Customer">
          Lead generation reporting should reflect the sales journey.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-1.5 w-10 bg-frame-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {metric.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {metric.body}
              </p>
              {metric.items && (
                <>
                  <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {metric.label}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 border-t border-frame-border pt-4">
                    {metric.items.map((item) => (
                      <span key={item} className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}