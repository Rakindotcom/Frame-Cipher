import { SectionIntro, PosterButton } from '../../../Kinetic'

const models = [
  {
    title: 'B2B & Professional Services',
    lead: 'B2B buyers often need more information before committing. Sales copy can help explain the business problem, solution, commercial value, proof, implementation process, and next step. This can support:',
    items: [
      'Service firms',
      'Agencies',
      'Consultants',
      'Technology companies',
      'Professional services',
      'Enterprise solutions',
    ],
  },
  {
    title: 'Ecommerce & Product Offers',
    lead: 'Ecommerce sales copy needs to communicate value quickly while supporting the product decision. Depending on the offer, this can include:',
    items: [
      'Product benefits',
      'Offer framing',
      'Promotional messaging',
      'Bundle positioning',
      'Buyer objections',
      'Trust messaging',
      'Sales-page copy',
      'Campaign-specific copy',
    ],
    note: 'Product descriptions remain a separate specialist service when the requirement is catalog-scale product content.',
    link: { label: 'Explore Product Description Writing', href: '/services/content-writing/product-descriptions' },
  },
  {
    title: 'SaaS & Digital Products',
    lead: 'Software and digital products can be difficult to explain without overwhelming the buyer. Sales copy can simplify:',
    items: [
      'The problem',
      'Product value',
      'Key capabilities',
      'Use cases',
      'Differentiation',
      'Pricing context',
      'Objections',
      'Demo or trial CTA',
    ],
    note: 'The copy should explain what the product helps the buyer accomplish, not simply repeat a feature list.',
  },
  {
    title: 'High-Ticket & Considered Purchases',
    lead: 'Higher-consideration purchases often involve more questions, more risk, and more stakeholders. Sales copy can support the decision by giving prospects enough context to understand the offer before a call, consultation, proposal, or purchase.',
  },
  {
    title: 'Startups & New Offers',
    lead: 'New offers often have an additional messaging problem. The market may not immediately understand what the product is, who it is for, or why it exists. Sales copy can help establish:',
    items: [
      'The category or problem',
      'The target customer',
      'The value proposition',
      'The differentiation',
      'The offer',
      'The proof available',
      'The next step',
    ],
  },
]

export default function BusinessModels() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Business models"
          title="Sales Copywriting for Different Business Models"
        >
          The same argument structure has to flex for very different buying decisions, from a considered
          enterprise purchase to a product launched last week.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.title}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {model.lead}
                </p>

                {model.items && (
                  <ul className="mt-4 space-y-2">
                    {model.items.map((item) => (
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

              {model.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {model.note}
                </p>
              )}

              {model.link && (
                <div className="mt-5 border-t-2 border-frame-border pt-4">
                  <PosterButton href={model.link.href} variant="outline">
                    {model.link.label} &rarr;
                  </PosterButton>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
