import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Seed Keyword & Topic Discovery',
    body: "We start with your business, products, services, audience, and market rather than opening a keyword tool and exporting a list.",
    pointsHead: 'We identify:',
    points: [
      'Core business terms',
      'Product and service terminology',
      'Industry topics',
      'Customer problems',
      'Category-level topics',
      'Related concepts',
      'Question themes',
      'Initial competitor terms',
    ],
    note: 'The starting set becomes the foundation for broader keyword expansion.',
  },
  {
    title: 'Customer Language & Query Research',
    body: 'Customers do not always use the same language that businesses use internally. We investigate how real users describe:',
    pointsHead: '',
    points: [
      'Problems',
      'Products',
      'Services',
      'Features',
      'Solutions',
      'Use cases',
      'Comparisons',
      'Questions',
    ],
    note: 'Depending on the project, research can include search-query data, autocomplete suggestions, related searches, SERP results, customer language patterns, and other relevant sources. This helps uncover terminology your internal team may not have considered.',
  },
  {
    title: 'Search Volume, Competition & Opportunity Analysis',
    body: 'Search volume is useful, but it should not be the only decision-making factor. We evaluate keywords using a broader set of signals:',
    pointsHead: '',
    points: [
      'Search demand',
      'Ranking difficulty',
      'SERP competition',
      'Domain and page strength',
      'Search intent',
      'Business relevance',
      'Current website authority',
      'Conversion potential',
      'Content requirements',
    ],
    note: 'A high-volume term dominated by highly established websites may be a weaker short-term opportunity than a lower-volume term with strong relevance and achievable competition. We therefore use search volume as part of the decision, not the entire strategy.',
  },
  {
    title: 'Search Intent & SERP Analysis',
    body: 'A keyword cannot be evaluated properly without understanding what users expect to see. We classify terms by intent and examine the current SERP to understand:',
    pointsHead: '',
    points: [
      'Informational intent',
      'Commercial investigation',
      'Transactional intent',
      'Navigational intent',
      'Local intent where relevant',
      'Ranking page types',
      'Content formats',
      'SERP features',
      'Search-result patterns',
      'User expectations',
    ],
    note: 'We then recommend the page type most appropriate for the query. A service page, product page, category page, comparison page, or informational article should not automatically target the same type of keyword.',
  },
  {
    title: 'Competitor Keyword Gap Analysis',
    body: 'Your competitors can reveal search opportunities that your website currently misses. We identify:',
    pointsHead: '',
    points: [
      'Keywords competitors rank for',
      'Pages driving their visibility',
      'Shared ranking opportunities',
      'Missing topics',
      'Content gaps',
      'Commercial keyword gaps',
      'Long-tail gaps',
      'Supporting-topic opportunities',
    ],
    note: 'We then filter those findings through your own business relevance and ranking potential. The objective is not to copy competitors. It is to understand where they have search visibility and determine which opportunities make sense for your website.',
  },
  {
    title: 'Long-Tail & Question Keyword Research',
    body: 'Long-tail queries often reveal specific problems, use cases, buying questions, and lower-volume opportunities. We research:',
    pointsHead: '',
    points: [
      'Specific product queries',
      'Detailed service searches',
      'Question keywords',
      'Problem-based searches',
      'Comparison queries',
      'Feature-related searches',
      'Location modifiers',
      'Audience-specific searches',
      'High-intent niche queries',
    ],
    note: 'These terms can help newer or less authoritative websites build visibility without relying entirely on highly competitive head terms.',
  },
  {
    title: 'Semantic Keyword & Entity Research',
    body: 'Search engines increasingly understand topics through relationships between terms, concepts, entities, and user intent. We identify:',
    pointsHead: '',
    points: [
      'Related terms',
      'Semantic variations',
      'Entities',
      'Subtopics',
      'Supporting concepts',
      'Related questions',
      'Topic relationships',
      'Contextual terminology',
    ],
    note: 'This helps create broader topic coverage without forcing the same keyword into every section of a page. The goal is a content structure that fully addresses the subject rather than a list of disconnected keyword variations.',
  },
  {
    title: 'Keyword Mapping & Cannibalization Analysis',
    body: 'Keyword research becomes much more useful when every important keyword has a clear place on the website. We map keyword groups to appropriate:',
    pointsHead: '',
    points: [
      'Service pages',
      'Product pages',
      'Category pages',
      'Location pages',
      'Blog content',
      'Guides',
      'Comparison pages',
      'Supporting resources',
    ],
    note: 'We also look for keyword cannibalization, where multiple URLs target similar search intent. This can include competing service pages, blog and service-page overlap, duplicate keyword targeting, multiple URLs ranking for the same intent, unclear primary pages, and consolidation opportunities. The objective is to create a clearer relationship between keyword to intent to page to URL.',
  },
  {
    title: 'Existing Ranking & Search Console Opportunity Research',
    body: "Existing search data can reveal some of the fastest opportunities for improving a website's keyword strategy. Where Search Console or equivalent data is available, we can identify:",
    pointsHead: '',
    points: [
      'Queries already generating impressions',
      'Page-two ranking opportunities',
      'Keywords with high impressions but low CTR',
      'Queries ranking with the wrong URL',
      'Emerging search terms',
      'Under-optimized pages',
      'Commercial queries with limited visibility',
      'Existing pages that can be improved instead of creating new ones',
    ],
    note: 'This helps combine new keyword discovery with opportunities the website already has.',
  },
  {
    title: 'Content Brief & Page Planning',
    body: 'Keyword research should lead naturally into content execution. We organize research into planning inputs such as:',
    pointsHead: '',
    points: [
      'Primary keyword',
      'Secondary terms',
      'Search intent',
      'Target audience',
      'Page type',
      'Topic cluster',
      'Supporting questions',
      'Recommended content angle',
      'Internal-link opportunities',
      'Competitor observations',
    ],
    note: 'This gives writers and SEO teams a clearer starting point for creating or optimizing the right page.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Scope" title="Our Keyword Research Services">
          Our keyword research process combines data analysis, SERP research, competitor
          intelligence, search-intent classification, and manual evaluation.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <p className="mt-6 border-t-2 border-frame-border/60 pt-4 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  What We Do
                </p>
                <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}