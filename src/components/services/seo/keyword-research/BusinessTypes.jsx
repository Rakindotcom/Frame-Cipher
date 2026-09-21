import { SectionIntro } from '../../../Kinetic'

const types = [
  {
    title: 'Ecommerce Keyword Research',
    body: 'We research keywords across the ecommerce journey, including:',
    points: [
      'Product searches',
      'Category searches',
      'Brand searches',
      'Feature-based queries',
      'Product attributes',
      'Comparison searches',
      'Commercial queries',
      'Buying-intent variations',
      'Long-tail product searches',
    ],
    note: 'We can also organize keywords around category, product, filter, and supporting content structures. This helps ecommerce brands build a keyword architecture that supports both search visibility and product discovery.',
  },
  {
    title: 'Local Keyword Research',
    body: 'Local businesses often depend on searches that combine a service, product, problem, and location. We research:',
    points: [
      'Service + city queries',
      'Service + area queries',
      'Location modifiers',
      'Local problem searches',
      '\u201CNear me\u201D variations where appropriate',
      'Neighborhood terminology',
      'Local commercial queries',
      'Location-specific service opportunities',
    ],
    note: 'For businesses in Bangladesh, this can also include regional terminology and search behavior relevant to cities and service areas.',
  },
  {
    title: 'B2B & SaaS Keyword Research',
    body: 'B2B and SaaS buyers often search around problems and solutions before searching directly for a product. We research:',
    points: [
      'Solution keywords',
      'Problem-based queries',
      'Industry terminology',
      'Use-case searches',
      'Feature searches',
      'Comparison queries',
      'Alternative searches',
      'Integration-related searches',
      'Commercial and informational topics',
    ],
    note: 'This creates opportunities across the full buyer journey, from initial problem discovery to product evaluation.',
  },
  {
    title: 'Service Business Keyword Research',
    body: 'Service businesses need keywords that connect search demand with actual offerings. We research:',
    points: [
      'Core service terms',
      'Specific service variations',
      'Problem-based searches',
      'Pricing queries',
      'Comparison terms',
      'Location modifiers',
      'Industry-specific terms',
      'Supporting informational searches',
    ],
    note: 'The final strategy separates high-intent service pages from supporting content so the website does not rely on blog traffic alone.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Business models" title="Keyword Research for Different Business Types">
          Keyword opportunities vary by business model. Ecommerce, local businesses, B2B companies,
          and SaaS brands do not follow the same search patterns.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {types.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Business 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}