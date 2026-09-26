import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'SEO blog content can support product discovery, customer education, buying research, category visibility, and the wider ecommerce content journey.',
  },
  {
    title: 'Service Businesses',
    body: 'We create educational and commercial content that can answer customer questions, demonstrate expertise, support service discovery, and guide readers toward relevant services.',
  },
  {
    title: 'B2B & Professional Services',
    body: 'Content can support thought leadership, problem education, service discovery, lead generation, and sales conversations.',
  },
  {
    title: 'SaaS & Technology Companies',
    body: 'We can create educational articles, product-related content, use-case content, comparisons, technical explainers, and supporting topic coverage.',
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'SEO content can help establish a consistent publishing system around priority topics instead of producing disconnected articles without a clear direction.',
  },
  {
    title: 'In-House Marketing Teams',
    body: 'We can work as an extension of your internal team, handling research, briefs, writing, editing, content refreshes, or ongoing article production.',
  },
  {
    title: 'International Businesses',
    body: 'We support businesses targeting international audiences and can adapt research, terminology, examples, and search considerations to the intended market.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we write for"
          title="Who Our SEO &amp; Blog Writing Service Is For"
        >
          The right publishing system depends on your topics, audience, competition, and the resources
          available to produce it well.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {audience.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
