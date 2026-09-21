import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Content Optimization',
    description: 'We match existing content to the query\u2019s real search intent: what should be covered, what should be cut, what needs depth, and what belongs on the page. This goes beyond keyword counts to topic coverage, structure, and value to the reader.',
    bullets: [
      'Existing content reviewed against search intent',
      'Topic coverage and content gaps identified',
      'Heading structure and section order improved',
      'Readability, clarity, and usefulness increased',
      'Duplicate or weak sections pruned or consolidated',
    ],
  },
  {
    title: 'Keyword Mapping & Cannibalization Control',
    description: 'We decide which page should target which query so important terms are not left orphaned or fought over by competing URLs of your own website.',
    bullets: [
      'Keywords grouped by page and search intent',
      'Primary and secondary keyword assignment',
      'Conflicting or overlapping pages identified',
      'Consolidation or differentiation recommendations',
    ],
  },
  {
    title: 'Metadata & Heading Optimization',
    description: 'Titles, descriptions, and headings are the first and most direct on-page signals of what a page covers. We write them to reflect the query, the page\u2019s value, and what a searcher actually needs to know.',
    bullets: [
      'Title tags written for relevance and click-through',
      'Meta descriptions that summarize real value',
      'H1/H2/H3 hierarchy that reflects content order',
      'Open Graph and social sharing metadata',
    ],
  },
  {
    title: 'Internal Linking & Site Structure',
    description: 'Internal links help visitors navigate and help search engines understand the relationships between pages. We build contextual links that pass relevance and authority where they matter.',
    bullets: [
      'Contextual anchors on important pages',
      'Links from supporting content to key pages',
      'Site structure and page hierarchy review',
      'Opportunities to recover reach for older content',
    ],
  },
  {
    title: 'Image, URL & On-Page Technical Elements',
    description: 'The on-page environment extends beyond text. Images, URLs, and small technical details affect how a page performs and how clearly search engines understand it.',
    bullets: [
      'Alt text and image filename optimization',
      'File compression for faster loading',
      'Clean, readable URL structures',
      'Page-level structured data where relevant',
    ],
  },
  {
    title: 'Semantic SEO & Topic Relevance',
    description: 'Search engines evaluate a page\u2019s meaning, not only its exact keyword matches. We build supporting topics, entities, and related concepts so a page covers the subject a query actually involves.',
    bullets: [
      'Supporting topics and related entities included',
      'Natural keyword variations and synonyms',
      'Answers incorporated for real question patterns',
      'Consistent relevance at every level of the page',
    ],
  },
  {
    title: 'Conversion-Focused Content Layout',
    description: 'A page that ranks is worth little if it does not move the visitor forward. We shape content and calls to action so each page supports the business outcome it is meant to drive.',
    bullets: [
      'Clear next steps and calls to action',
      'Content arranged around the buyer\u2019s decision',
      'Trust and proof elements positioned well',
      'Page experience aligned with the offer',
    ],
  },
  {
    title: 'On-Page Audit & Reporting',
    description: 'We document the current state of important pages, what was changed, and how performance shifts afterward. Every recommendation is tied to evidence rather than a generic checklist.',
    bullets: [
      'Before and after page structure documentation',
      'Search Console data used to guide priorities',
      'Tracking weak points before and after changes',
      'Clear explanation of what changed and why',
    ],
  },
  {
    title: 'Ongoing On-Page Optimization',
    description: 'Search intent and competitor content change. Ongoing optimization keeps important pages aligned as queries evolve, new topics appear, and older content loses freshness.',
    bullets: [
      'Regular re-review of target pages',
      'Content refresh when intent or competition shifts',
      'New internal linking opportunities captured',
      'Performance monitoring against pre-change baselines',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="Our On-Page SEO Services"
        >
          Our on-page SEO services cover the content, structure, metadata, and page-level
          elements that determine how well a page matches the query it targets. The exact scope
          depends on your website, page types, content quality, and goals.
        </SectionIntro>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service 0{String(index + 1).padStart(1, '0')}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure what your pages need?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review how your important pages stand against the queries they target and tell
              you which on-page changes would help most.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}