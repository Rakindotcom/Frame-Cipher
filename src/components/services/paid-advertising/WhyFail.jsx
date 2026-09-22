import { SectionIntro } from '../../Kinetic'

const reasons = [
  {
    title: 'Poor Tracking',
    body: 'If conversions are not measured correctly, optimization decisions may be based on incomplete or misleading data. A campaign may appear profitable when it is not, or weak when the platform is simply failing to capture the real outcome.',
  },
  {
    title: 'Wrong Audience or Intent',
    body: 'Even strong creative cannot compensate for targeting the wrong people. Campaigns can underperform when the audience is too broad, too narrow, poorly matched to the offer, or disconnected from the actual buying intent.',
  },
  {
    title: 'Weak Offers',
    body: 'An ad can generate attention without creating enough reason to act. Price, positioning, trust, urgency, product-market fit, guarantees, incentives, or the clarity of the offer can all affect conversion.',
  },
  {
    title: 'Poor Ad Creative',
    body: 'Repeated, generic, or poorly matched creative can limit performance. Strong paid advertising often requires multiple angles, formats, messages, and creative variations so the campaign can learn what actually resonates.',
  },
  {
    title: 'Weak Landing Pages',
    body: 'The ad can do its job and still lose the customer after the click. Common problems include slow page experience, message mismatch, weak calls to action, unclear value proposition, poor mobile usability, too much friction, weak trust signals, and complicated forms or checkout.',
  },
  {
    title: 'Fragmented Platform Strategy',
    body: 'Running Google, Meta, TikTok, LinkedIn, and other platforms independently can make the overall strategy harder to control. Each channel should have a defined role within the customer journey rather than receiving budget simply because it is available.',
  },
  {
    title: 'No Systematic Testing',
    body: 'Campaigns cannot improve consistently without structured testing. We look for opportunities to test audiences, creative, offers, landing pages, campaign structures, and budget allocation based on measurable hypotheses rather than random changes.',
  },
]

export default function WhyFail() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Common limitations"
          title="Why Paid Advertising Campaigns Fail"
        >
          A campaign can fail for reasons that have little to do with the advertising platform
          itself. We look beyond the ad account to identify where the actual problem is.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}