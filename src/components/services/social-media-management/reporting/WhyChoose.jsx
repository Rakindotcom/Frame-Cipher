import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Reporting can be connected with the same broader team handling content, social media, community management, and strategy where those services are included. That provides more context when interpreting performance.',
  },
  {
    number: '02',
    title: 'Context Behind the Numbers',
    body: 'We focus on what the numbers mean for your business rather than simply presenting a larger collection of charts.',
  },
  {
    number: '03',
    title: 'We Report What Didn\u2019t Work',
    body: 'Underperforming content is part of the learning process. Our reporting should identify weak results as well as strong ones.',
  },
  {
    number: '04',
    title: 'Business-Focused KPI Selection',
    body: 'Not every business needs the same metrics. We build the reporting framework around your objectives, available data, and measurement requirements.',
  },
  {
    number: '05',
    title: 'Actionable Recommendations',
    body: 'Every report should provide a practical direction for the next planning cycle.',
  },
  {
    number: '06',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Because a report is only as useful as the decisions it changes.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {reason.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
