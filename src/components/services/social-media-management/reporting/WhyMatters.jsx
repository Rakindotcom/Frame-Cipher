import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'Vanity Metrics Can Hide Real Problems',
    body: 'Follower growth alone does not explain audience quality, engagement, traffic, leads, or revenue. A useful report puts individual metrics into the context of the actual business objective.',
  },
  {
    number: '02',
    title: 'Each Platform Measures Performance Differently',
    body: 'Facebook, Instagram, LinkedIn, TikTok, and YouTube have different audiences, formats, metrics, and reporting structures. Cross-platform analysis needs context rather than simply adding every number together.',
  },
  {
    number: '03',
    title: 'Content Needs a Feedback Loop',
    body: 'Without performance feedback, your content calendar can continue producing the same formats and topics without understanding whether they are helping. Analytics creates a feedback loop between performance, learning, planning, content, and performance again.',
  },
  {
    number: '04',
    title: 'Business Outcomes Matter Beyond Social Metrics',
    body: 'Reach and engagement can matter. But depending on the business, website traffic, qualified inquiries, purchases, bookings, or other business actions may matter more. The reporting framework should reflect that difference.',
  },
]

export default function WhyMatters() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Beyond platform dashboards"
          title="Why Your Business Needs More Than Platform Dashboards"
        >
          Native analytics dashboards are useful sources of data. But businesses often need more than a
          collection of platform-specific numbers.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
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

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Analytics creates a feedback loop: performance &rarr; learning &rarr; planning &rarr; content
            &rarr; performance.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              See How Reporting Can Improve Your Next Content Cycle &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
