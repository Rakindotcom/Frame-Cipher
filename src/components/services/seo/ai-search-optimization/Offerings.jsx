import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'AI Visibility Baseline & Prompt Research',
    body: 'We begin by establishing where your brand stands today.',
    lead: 'We develop a relevant query and prompt set covering areas such as:',
    points: [
      'Brand searches',
      'Product and service queries',
      'Informational questions',
      'Commercial comparisons',
      'Recommendation prompts',
      'Problem-solving queries',
      'Local queries',
      'Competitor comparisons',
    ],
    closing:
      'We then assess which AI search experiences mention your brand, which competitors appear, what sources are cited, and how accurately your business is represented. This creates a baseline for future optimization and measurement.',
  },
  {
    title: 'Answer Engine Optimization (AEO)',
    body: 'AEO focuses on making important information clearer and easier to surface in answer-driven search experiences.',
    lead: 'We optimize relevant pages for:',
    points: [
      'Direct-answer sections',
      'Definitions',
      'Frequently asked questions',
      'Question-based content',
      'Clear explanations',
      'Comparison information',
      'Step-by-step answers',
      'Supporting evidence',
      'Concise, self-contained passages',
    ],
    closing:
      'The objective is not to write unnaturally for machines. It is to make useful answers easier for both users and modern search systems to understand.',
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    body: 'GEO focuses on broader visibility across generative search experiences.',
    lead: 'We strengthen:',
    points: [
      'Topical authority',
      'Content depth',
      'Entity relationships',
      'Brand context',
      'Supporting evidence',
      'Source consistency',
      'Competitive coverage',
      'Market-specific relevance',
    ],
    closing:
      'Instead of optimizing one isolated answer, GEO looks at how the wider content and authority ecosystem supports your brand\u2019s visibility across generative search.',
  },
  {
    title: 'AI-Ready Content & Answer Architecture',
    body: 'Content should remain useful to people first, while presenting important information clearly.',
    lead: 'We improve:',
    points: [
      'Heading structure',
      'Definitions',
      'Question-and-answer sections',
      'Summary statements',
      'Lists and tables where useful',
      'Supporting evidence',
      'Content hierarchy',
      'Internal linking',
      'Topic relationships',
      'Clear entity references',
    ],
    closing:
      'We do not apply arbitrary \u201CAI formatting\u201D rules. The goal is well-organized content that communicates important information clearly and supports both traditional search and AI-assisted discovery.',
  },
  {
    title: 'Entity & Knowledge Graph Optimization',
    body: 'AI systems need to understand what a business, product, service, person, or organization actually represents.',
    lead: 'We strengthen relationships between relevant entities such as:',
    points: [
      'Brand',
      'Organization',
      'Founder or experts',
      'Products',
      'Services',
      'Locations',
      'Industries',
      'Partners',
      'Publications',
      'Relevant topics',
    ],
    closing:
      'Where appropriate, we review structured data, organization information, author information, and related sources to improve the clarity and consistency of those relationships.',
  },
  {
    title: 'Technical Foundations for AI Search',
    body: 'AI Search Optimization still depends on a technically accessible, indexable, and well-structured website.',
    lead: 'We review relevant foundations such as:',
    points: [
      'Crawlability',
      'Indexation',
      'Internal linking',
      'Page accessibility',
      'Structured data',
      'Canonicals',
      'XML sitemaps',
      'Page performance',
      'Mobile usability',
      'JavaScript rendering',
      'Content accessibility',
    ],
    closing:
      'Structured data is implemented where appropriate as part of the broader search strategy. We do not treat schema as a separate AI ranking mechanism.',
  },
  {
    title: 'Third-Party Source & Brand Authority',
    body: 'Your own website is not the only source that can shape how your business is understood.',
    lead: 'We review relevant external sources such as:',
    points: [
      'Industry publications',
      'Professional profiles',
      'Business directories',
      'Review platforms',
      'Expert profiles',
      'Digital PR',
      'Relevant partnerships',
      'Trusted industry references',
    ],
    closing:
      'The objective is to strengthen credible and consistent information about your business rather than generate mentions simply for volume.',
  },
  {
    title: 'AI Citation & Visibility Monitoring',
    body: 'AI visibility needs to be measured rather than assumed.',
    lead: 'We can monitor:',
    points: [
      'Brand mentions',
      'Citation frequency',
      'Prompt-level visibility',
      'Competitor presence',
      'Frequently cited sources',
      'Accuracy of business information',
      'Changes in visibility over time',
      'Relevant Google generative-search performance data where available',
    ],
    closing:
      'The results are used to refine content, entity signals, source strategy, and future prompt testing.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What we cover" title="Our AI Search Optimization Services">
          Our AI Search Optimization services combine content strategy, technical SEO, entity
          work, source authority, and visibility measurement.
        </SectionIntro>

        <div className="space-y-10 md:space-y-14">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-6 border-2 border-frame-border bg-frame-bg p-7 md:p-10 lg:grid-cols-[1fr_1.6fr]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Offer 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <span className="mt-2 block h-1 w-8 bg-frame-accent" />
              </div>
              <div>
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                  {item.lead}
                </p>
                <ul className="mt-5 space-y-2.5 border-l-2 border-frame-accent pl-5 text-sm md:text-base font-medium text-frame-fg">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 leading-snug">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.closing}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-4xl text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            The objective is to improve visibility across AI-driven search while strengthening the
            same content, technical, and authority foundations that matter to traditional search.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="w-full whitespace-nowrap self-center">
              Request an AI Search Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}