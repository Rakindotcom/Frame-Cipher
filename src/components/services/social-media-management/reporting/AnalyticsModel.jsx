import { SectionIntro } from '../../../Kinetic'

const layers = [
  {
    number: '01',
    title: 'What Happened?',
    body: [
      'The first layer is performance data.',
      'What changed this month? What increased? What declined? Which content performed differently?',
    ],
  },
  {
    number: '02',
    title: 'Why Did It Happen?',
    body: [
      'The second layer is interpretation.',
      'Was the change connected to content format, topic, campaign, audience, publishing pattern, paid activity, seasonality, external events, or platform-specific conditions?',
    ],
    note: 'Not every change has one provable cause, so analysis should distinguish evidence from interpretation.',
  },
  {
    number: '03',
    title: 'What Does It Mean?',
    body: [
      'A metric becomes useful when it changes your understanding of the account.',
      'A post receiving high reach may show strong distribution but weak conversion intent. A smaller post with fewer views may generate more meaningful clicks or inquiries. The right conclusion depends on the business objective.',
    ],
  },
  {
    number: '04',
    title: 'What Should Change Next?',
    body: [
      'The final layer is action.',
      'The report should help determine what to continue, improve, test, reduce, replace, or investigate.',
    ],
  },
]

export default function AnalyticsModel() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The analytics model"
          title="What Good Social Media Analytics Actually Tells You"
        >
          A useful report should move through four questions.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {layers.map((layer) => (
            <article key={layer.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {layer.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {layer.title}
                </h3>
                {layer.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {layer.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {layer.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
          That is the difference between reporting and analytics.
        </p>
      </div>
    </section>
  )
}
