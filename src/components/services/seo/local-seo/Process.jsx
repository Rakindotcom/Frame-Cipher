import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    title: 'Local Search Audit',
    description: 'We first review the current local search presence. The audit can examine your Google Business Profile, website, local landing pages, business information, citations, reviews, local competitors, search visibility, and technical SEO factors. This gives us a starting point before implementation begins.',
  },
  {
    title: 'Keyword & Competitor Analysis',
    description: 'We identify the searches that matter to your business and study the competitive landscape. We connect search terms with services, products, locations, customer intent, and relevant website pages, then identify gaps that can support the next stage of optimization.',
  },
  {
    title: 'GBP & Website Optimization',
    description: 'Once the research is complete, we optimize the relevant business and website assets. This stage may include profile improvements, website updates, service pages, location pages, internal linking, content improvements, and conversion elements. The objective is to create a clear connection between what your business offers and what local customers search for.',
  },
  {
    title: 'Citation & Reputation Work',
    description: 'We improve important business information and establish a cleaner local presence across relevant platforms. We also help create a sustainable process for collecting and responding to genuine customer feedback. This stage supports trust and information consistency without relying on mass directory submissions.',
  },
  {
    title: 'Local Authority Development',
    description: 'Local authority develops over time. Depending on the business, this can involve relevant local links, industry references, local partnerships, business mentions, community involvement, useful local content, and digital PR opportunities. The focus stays on relevance and genuine business relationships.',
  },
  {
    title: 'Geo-Grid Tracking & Refinement',
    description: 'After implementation, we examine how local visibility changes across the target geographic area. We compare visibility patterns and identify areas that need additional attention. The findings can influence future content, profile improvements, authority work, or location targeting.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="How We Approach Local SEO"
        >
          Our process moves from research and diagnosis to implementation, authority development,
          and ongoing refinement.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}