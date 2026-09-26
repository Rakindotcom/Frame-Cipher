import { SectionIntro } from '../../../Kinetic'

const outcomes = [
  {
    number: '01',
    title: 'Consistent Brand Messaging',
    body: 'Keep important messages, positioning, offers, and campaign information aligned across the platforms your business uses.',
  },
  {
    number: '02',
    title: 'Better Campaign Coordination',
    body: 'Plan the supporting content around launches, promotions, events, seasonal opportunities, and other important business dates.',
  },
  {
    number: '03',
    title: 'More Efficient Content Production',
    body: 'Identify repurposing opportunities early so one strong source asset can support multiple relevant content pieces.',
  },
  {
    number: '04',
    title: 'Stronger Content Coverage',
    body: 'Create a more balanced mix of educational, promotional, trust-building, proof-based, community, and product or service content where appropriate.',
  },
  {
    number: '05',
    title: 'Clearer Calls to Action',
    body: 'Give content a relevant next step based on its purpose. Depending on the content, that may include:',
    points: [
      'Reading a resource',
      'Visiting a website',
      'Viewing a product',
      'Requesting a consultation',
      'Watching another video',
      'Sending an enquiry',
      'Making a purchase',
      'Engaging with the brand',
    ],
  },
  {
    number: '06',
    title: 'Better Cross-Platform Visibility',
    body: 'Coordinate related content across multiple platforms so audiences have more opportunities to discover your brand, campaigns, products, and expertise.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic outcomes"
          title="What a Strategic Content Calendar Can Help Your Business Achieve"
        >
          A well-structured content calendar is not a guarantee of specific business results. Its role is
          to create a stronger planning and execution system that supports your wider marketing objectives.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {item.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-base">
                  {item.body}
                </p>
              </div>

              {item.points && (
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg"
                      />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
