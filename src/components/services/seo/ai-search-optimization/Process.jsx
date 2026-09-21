import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Business & AI Search Discovery',
    body: 'We start by understanding:',
    points: [
      'Your business',
      'Products and services',
      'Target customers',
      'Priority markets',
      'Important competitors',
      'Business goals',
      'Existing SEO performance',
      'AI-search objectives',
    ],
    closing:
      'This provides the context for determining which AI-search opportunities actually matter.',
  },
  {
    title: 'Prompt & Visibility Assessment',
    body: 'We build a relevant prompt and query set around your business.',
    lead: 'We assess:',
    points: [
      'Whether your brand appears',
      'Which competitors appear',
      'Which sources are cited',
      'How your business is described',
      'Where important queries produce no visibility',
      'Which topics show clear opportunities',
    ],
    closing: 'This creates a baseline before implementation begins.',
  },
  {
    title: 'Content, Entity & Source Analysis',
    body: 'Next, we review the information available about your brand.',
    lead: 'This can include:',
    points: [
      'Website content',
      'Author information',
      'Structured data',
      'Service pages',
      'Product pages',
      'External references',
      'Industry profiles',
      'Third-party mentions',
      'Competitor sources',
    ],
    closing:
      'We then identify the gaps that could affect how clearly your brand and expertise are understood.',
  },
  {
    title: 'AEO & Content Implementation',
    body: 'We improve priority content based on actual query and SERP requirements.',
    lead: 'This can include:',
    points: [
      'Direct answers',
      'Definitions',
      'FAQ sections',
      'Clear headings',
      'Supporting evidence',
      'Content restructuring',
      'Better internal linking',
      'Search-intent alignment',
    ],
    closing:
      'The goal is to improve clarity and usefulness without forcing unnatural AI-focused writing.',
  },
  {
    title: 'GEO & Authority Development',
    body: 'We strengthen broader topical and entity signals through:',
    points: [
      'Topic coverage',
      'Supporting content',
      'Entity relationships',
      'Author/expert information',
      'Third-party source opportunities',
      'Brand consistency',
      'Digital PR where appropriate',
    ],
    closing:
      'This helps build a stronger information footprint around the business.',
  },
  {
    title: 'Measurement & Iteration',
    body: 'AI search is evolving, so the strategy needs to evolve with it.',
    closing:
      'We repeat relevant prompt testing, monitor citations and mentions, compare competitors, review performance data, and refine the content and source strategy based on observed results.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="How we work" title="How We Approach AI Search Optimization">
          Our process combines business context, prompt research, SEO fundamentals, content
          analysis, entity work, source evaluation, and ongoing measurement.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                {step.lead && (
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-frame-fg">
                    {step.lead}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-xs font-medium leading-snug text-frame-fg/90">
                  {step.points?.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {step.closing && (
                  <p className="mt-4 border-l-2 border-frame-accent pl-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {step.closing}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent p-7 md:p-8">
            <p className="text-sm md:text-base font-black uppercase leading-tight tracking-tight text-frame-accent-fg">
              Measurable AI visibility built on clear, credible, and structured search foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}