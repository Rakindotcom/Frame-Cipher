import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '1',
    title: 'Catalog & Product Audit',
    description:
      'We review the catalog, existing descriptions, product information, and project requirements. For larger catalogs, we can identify priority products based on factors such as business importance, content quality, product demand, and duplication concerns.',
  },
  {
    number: '2',
    title: 'Research & Content Structure',
    description:
      'We research the product and buyer context, then establish the information structure needed for the specific product or category.',
  },
  {
    number: '3',
    title: 'Drafting & Optimization',
    description:
      'We write the product copy around verified information, buyer needs, platform requirements, and the agreed SEO scope.',
  },
  {
    number: '4',
    title: 'Quality Review',
    description:
      'The content is reviewed for accuracy, readability, brand consistency, originality, product differentiation, SEO implementation, and platform formatting.',
  },
  {
    number: '5',
    title: 'Client Review & Delivery',
    description:
      'You review the agreed batch and provide feedback. We make the included revision and deliver the final copy in the agreed format.',
  },
  {
    number: '6',
    title: 'Ongoing Catalog Support',
    description:
      'For growing ecommerce stores, we can continue supporting new products, catalog updates, and product-copy refreshes.',
  },
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow" title="Our Product Description Writing Process">
          The same structure works for a single product and for a large catalog, with the depth changing based on
          the project.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Once the scope is agreed, we can start with a small priority batch so you can review the direction
            before the full catalog is written.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start a Product Copy Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
