import { SectionIntro } from '../../Kinetic'

const timelineStages = [
  {
    title: 'Campaign Planning & Setup',
    body: 'Approximately 1\u20132 weeks, depending on platform mix, creative, tracking access, landing-page requirements, and approval cycles.',
  },
  {
    title: 'Initial Optimization',
    body: 'Typically begins immediately after launch and becomes more informed as conversion data accumulates.',
  },
  {
    title: 'Ongoing Management',
    body: 'Continues throughout the engagement, with testing, optimization, reporting, and budget decisions based on campaign performance.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="Paid Advertising Timeline"
        >
          Paid advertising can launch much faster than SEO, but meaningful optimization still
          requires enough data to make reliable decisions. A typical engagement may follow this
          pattern.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Early clicks and traffic can appear soon after launch. That does not automatically
              mean the campaign has proven its economics.
            </p>
            <p>
              We focus on gathering enough relevant data to make better decisions rather than
              declaring success or failure from the first few days of activity.
            </p>
          </div>

          <div className="space-y-4">
            {timelineStages.map((stage, index) => (
              <div key={index} className="border-2 border-frame-border bg-frame-bg p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {stage.body}
                    </p>
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