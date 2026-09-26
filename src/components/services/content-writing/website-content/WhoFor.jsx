import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Service Businesses',
    body: 'We write website content that explains services, communicates value, addresses customer concerns, and guides visitors toward inquiries, consultations, bookings, or quotes.',
  },
  {
    title: 'Ecommerce & Product Brands',
    body: 'Website content can support category pages, product education, brand positioning, buying guidance, and other parts of the customer journey.',
  },
  {
    title: 'B2B & Professional Services',
    body: 'B2B websites often need more than a list of services. Content may need to explain expertise, processes, outcomes, industries served, differentiators, and the business case for working together.',
  },
  {
    title: 'SaaS & Technology Companies',
    body: 'Technology businesses often need help explaining complex products without overwhelming the visitor.',
    bullets: [
      'Product value',
      'Use cases',
      'Features and benefits',
      'Industries',
      'Integrations',
      'Processes',
      'Common questions',
      'Conversion paths',
    ],
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'Startups often change their positioning as their product, audience, and market develop. Website content can be structured to communicate the current offer clearly while creating a foundation for future expansion.',
  },
  {
    title: 'Established & Corporate Websites',
    body: 'Larger websites often need consistency across multiple services, departments, products, teams, and markets. We can support structured content projects where cross-page messaging and terminology need to remain consistent.',
  },
  {
    title: 'International Businesses',
    body: 'We support businesses targeting international audiences and adapt website content to the intended market, audience, terminology, and communication expectations.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we write for"
          title="Website Content for Different Business Types"
        >
          The pages a business needs most depend on how customers evaluate it and what they need to understand
          before getting in touch.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {audience.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {audience.body}
                </p>

                {audience.bullets && (
                  <ul className="mt-4 space-y-2">
                    {audience.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1 text-frame-accent">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
