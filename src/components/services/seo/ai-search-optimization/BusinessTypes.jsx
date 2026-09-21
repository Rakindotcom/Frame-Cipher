import { SectionIntro } from '../../../Kinetic'

const businessTypes = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'AI-driven product discovery can involve:',
    points: [
      'Product recommendations',
      'Product comparisons',
      'Feature questions',
      'Buying guides',
      'Alternatives',
      'Use cases',
      'Category recommendations',
    ],
    closing:
      'We can optimize product, category, comparison, and supporting content so important product information is easier to understand and reference.',
  },
  {
    title: 'B2B & SaaS Companies',
    body: 'B2B buyers often use AI tools to research solutions before contacting a vendor.',
    lead: 'We can support visibility across:',
    points: [
      'Problem-based queries',
      'Software comparisons',
      'Alternatives',
      'Use cases',
      'Feature questions',
      'Industry solutions',
      'Integration questions',
      'Expert content',
      'Buyer education',
    ],
    closing:
      'The goal is to make your expertise visible throughout the research and evaluation process.',
  },
  {
    title: 'Local & Service Businesses',
    body: 'Local and service businesses can appear in AI-assisted recommendations, comparisons, and problem-solving searches.',
    lead: 'We assess:',
    points: [
      'Service descriptions',
      'Location information',
      'Expertise',
      'Reviews and reputation',
      'Local content',
      'Business profiles',
      'Relevant third-party sources',
      'Local query visibility',
    ],
    closing:
      'This helps establish clearer signals around what the business does, where it operates, and which customers it serves.',
  },
  {
    title: 'Professional & Expert Brands',
    body: 'Professionals and expert-led businesses can benefit from stronger connections between their name, expertise, work, publications, and business.',
    lead: 'We can improve:',
    points: [
      'Author information',
      'Expertise pages',
      'Professional profiles',
      'Published work',
      'Topic coverage',
      'Expert contributions',
      'Entity relationships',
      'Brand consistency',
    ],
    closing:
      'The objective is to strengthen the connection between the expert, the subject they cover, and the organization they represent.',
  },
  {
    title: 'International & Multi-Market Businesses',
    body: 'Businesses operating across countries need AI-search visibility that accounts for regional differences.',
    lead: 'We can evaluate:',
    points: [
      'Country-specific queries',
      'Regional terminology',
      'Localized content',
      'Market-specific competitors',
      'International brand information',
      'Country-level entity signals',
      'Regional source authority',
    ],
    closing:
      'This helps businesses maintain a consistent core identity while adapting to different markets and languages.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Business types" title="AI Search Optimization for Different Business Types">
          AI search behavior varies by business model, audience, query type, and purchase journey.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {businessTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8"
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
              {item.lead && (
                <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                  {item.lead}
                </p>
              )}
              <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.closing}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}