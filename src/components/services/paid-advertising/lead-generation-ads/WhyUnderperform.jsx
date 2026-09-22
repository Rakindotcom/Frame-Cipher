import { SectionIntro } from '../../../Kinetic'

const mistakes = [
  {
    title: 'Volume Without Qualification',
    body: 'A campaign can generate hundreds of leads while producing very few qualified opportunities. We therefore look beyond raw lead volume and measure what happens after submission.',
  },
  {
    title: 'Weak Offers Attract the Wrong People',
    body: 'An incentive that is too broad can attract people interested in the offer itself rather than the product or service behind it. We structure lead offers around the level of buyer intent you actually want.',
  },
  {
    title: 'The Wrong Lead Destination Creates Friction',
    body: 'Some businesses perform better with a website landing page. Others benefit from a native platform form, phone call, messaging flow, or consultation booking. We select the destination based on the offer, market, qualification requirements, and customer journey.',
  },
  {
    title: 'Slow Lead Routing Wastes Fresh Demand',
    body: 'A well-targeted campaign can lose value when new inquiries sit in an inbox, spreadsheet, or disconnected form notification. We review how leads move from advertising into the sales process.',
  },
  {
    title: 'No CRM Feedback Means Limited Optimization',
    body: 'If the advertising platform only sees a form submission, it may not know which leads became qualified opportunities or customers. Where the required integrations are available, we connect downstream sales signals back to campaign reporting and optimization.',
  },
  {
    title: 'The Wrong Platform Mix Limits Opportunity',
    body: 'Google, Meta, and LinkedIn can reach buyers in different situations. We select channels based on where your customers are and how they make purchasing decisions rather than defaulting to one familiar platform.',
  },
]

export default function WhyUnderperform() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Context" title="Why Lead Generation Ads Underperform">
          Many lead campaigns are optimized around the easiest number to increase: submissions.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          That can hide problems deeper in the funnel.
        </p>

        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <div
              key={mistake.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent md:p-12"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="font-heading text-3xl font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-1.5 w-10 bg-frame-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl lg:max-w-2xl">
                {mistake.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {mistake.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}