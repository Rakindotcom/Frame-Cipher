import { SectionIntro } from '../../../Kinetic'

const outcomes = [
  {
    number: '01',
    title: 'Increase Brand Discovery',
    body: 'Consistent, relevant content can introduce your business to people who have not encountered your brand before. We build content around topics and formats that give relevant audiences a reason to discover your account.',
  },
  {
    number: '02',
    title: 'Build a Relevant Audience',
    body: 'A large follower count is not useful if the audience has no connection to your business. We consider audience quality alongside follower growth. Depending on your business, useful signals can include:',
    points: [
      'Relevant profile visits',
      'Repeat engagement',
      'Website actions',
      'Product interest',
      'Inquiries',
      'Leads',
      'Conversions',
    ],
  },
  {
    number: '03',
    title: 'Strengthen Brand Personality',
    body: 'TikTok gives businesses more room to show:',
    points: ['People', 'Processes', 'Expertise', 'Personality', 'Products', 'Behind-the-scenes activity'],
    note: 'We help develop a recognizable content style that fits your brand without forcing an artificial personality.',
  },
  {
    number: '04',
    title: 'Generate Product Interest',
    body: 'Product content can answer questions before a potential customer contacts you. Depending on the business, this may include:',
    points: [
      'Demonstrations',
      'Tutorials',
      'Product use cases',
      'Comparisons',
      'Features',
      'Benefits',
      'Customer questions',
      'Reviews',
      'UGC',
      'Behind-the-scenes content',
    ],
    note: 'The objective is to help viewers understand the product and its relevance to them.',
  },
  {
    number: '05',
    title: 'Support Website Traffic & Inquiries',
    body: 'TikTok can become part of a wider customer journey. Where appropriate, we connect content with:',
    points: [
      'Websites',
      'Landing pages',
      'Product pages',
      'Inquiry channels',
      'Booking pages',
      'Other agreed destinations',
    ],
    note: 'Where reliable tracking is available, we can monitor relevant actions beyond views and followers.',
  },
  {
    number: '06',
    title: 'Build Community',
    body: 'A strong account should give people a reason to participate. Questions, discussions, customer feedback, educational content, and recurring topics can help create a stronger relationship between the brand and its audience.',
  },
  {
    number: '07',
    title: 'Support Ecommerce Discovery',
    body: 'For ecommerce brands, TikTok content can introduce products through:',
    points: [
      'Demonstrations',
      'Education',
      'Lifestyle content',
      'Reviews',
      'Creator content',
      'UGC',
      'Product comparisons',
      'Promotional content',
    ],
    note: 'Where TikTok Shop is available and relevant, we can incorporate Shop-focused content and creator or affiliate activities into the broader strategy. The exact Shop scope depends on market availability, account eligibility, product requirements, and the agreed service.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic outcomes"
          title="What TikTok Management Can Help Your Business Achieve"
        >
          TikTok should have a business purpose beyond collecting views. The exact outcome depends on your
          market, offer, audience, content quality, conversion system, and other business factors.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {item.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
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

              {item.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {item.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
