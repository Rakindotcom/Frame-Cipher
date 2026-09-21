import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Initial Store Audit',
    body: 'We begin by understanding your store\u2019s current SEO condition.',
    points: [
      'Technical SEO',
      'Indexation',
      'Product pages',
      'Category pages',
      'Site architecture',
      'Internal linking',
      'Search intent',
      'Content',
      'Structured data',
      'Performance',
      'Competitor visibility',
    ],
    note: 'We then prioritize the issues based on potential impact and implementation requirements.',
  },
  {
    title: 'Keyword & Product-Catalog Mapping',
    body: 'We connect search demand with your actual catalog. We determine:',
    points: [
      'Which keywords belong to categories',
      'Which keywords belong to products',
      'Which topics need supporting content',
      'Which searches need dedicated landing pages',
      'Which pages should target commercial intent',
      'Which pages may compete with each other',
    ],
    note: 'This creates a practical keyword-to-page roadmap.',
  },
  {
    title: 'Technical & Architecture Fixes',
    body: 'We address technical and structural issues based on priority.',
    points: [
      'Canonical fixes',
      'Indexation controls',
      'Duplicate URL management',
      'Faceted navigation',
      'Internal linking',
      'XML sitemaps',
      'Redirects',
      'Performance',
      'Site architecture',
    ],
    note: 'Development support may be required for complex changes.',
  },
  {
    title: 'Product & Category Optimization',
    body: 'We optimize the pages that matter most to your search strategy. This includes priority products, categories, collections, and other commercial landing pages. We focus on relevance, usefulness, internal relationships, and customer intent.',
    points: [],
  },
  {
    title: 'Content & Authority Development',
    body: 'Once your core pages are structured properly, we develop supporting content and authority where needed.',
    points: [
      'Buying guides',
      'Comparison content',
      'FAQs',
      'Supporting commercial content',
      'Internal linking',
      'Relevant link acquisition',
      'Content updates',
    ],
    note: 'This creates additional entry points into your store.',
  },
  {
    title: 'Measurement & Continuous Optimization',
    body: 'SEO performance provides data for the next round of decisions. We review:',
    points: [
      'Ranking movement',
      'Search visibility',
      'Organic clicks',
      'CTR',
      'Product performance',
      'Category performance',
      'Organic conversions',
      'Revenue data',
    ],
    note: 'We use these insights to identify what needs to be improved, expanded, updated, or prioritized next.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Execution Framework" title="How We Approach Ecommerce SEO">
          Our process moves from diagnosis and research through implementation, content and
          authority development, and ongoing optimization.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                {step.points.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {step.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}