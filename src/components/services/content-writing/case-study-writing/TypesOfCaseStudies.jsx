import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'B2B Service Case Studies',
    text: 'Show how your professional service helped another business solve a specific problem or achieve a measurable result. These can work well for agencies, consultants, professional service providers, and other B2B businesses.',
  },
  {
    number: '02',
    title: 'SaaS & Technology Case Studies',
    text: 'Explain how a software product or technology solution was adopted, implemented, and used to achieve a business outcome. We can simplify technical information without removing the details that matter to technical or business buyers.',
  },
  {
    number: '03',
    title: 'Product & Customer Success Stories',
    text: 'Show how a customer used your product to address a specific need and what changed after adoption. These stories can support product pages, sales conversations, campaigns, and customer marketing.',
  },
  {
    number: '04',
    title: 'Ecommerce & Growth Case Studies',
    text: "Document measurable changes related to ecommerce performance, marketing, conversion, customer acquisition, operations, or revenue. The narrative stays focused on the customer's actual situation and available evidence.",
  },
  {
    number: '05',
    title: 'Technical & Implementation Case Studies',
    lead: 'Useful for businesses selling complex solutions where prospects need to understand how the implementation actually worked. These case studies can cover:',
    items: [
      'Implementation challenges',
      'Integration work',
      'Technical decisions',
      'Process changes',
      'Performance improvements',
      'Adoption',
      'Operational outcomes',
    ],
  },
  {
    number: '06',
    title: 'ROI & Business Transformation Case Studies',
    text: 'For higher-consideration purchases, prospects often need to understand business impact. These case studies focus on measurable outcomes such as efficiency, cost savings, revenue contribution, productivity, growth, or other relevant performance indicators.',
  },
]

export default function TypesOfCaseStudies() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Case study types" title="Types of Case Studies We Write">
          Different businesses need different kinds of proof. Our case study writing can be structured around the
          type of customer, solution, or outcome you need to communicate.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                {block.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {block.title}
              </h3>

              {block.text && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{block.text}</p>
              )}

              {block.lead && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{block.lead}</p>
              )}

              {block.items && (
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
