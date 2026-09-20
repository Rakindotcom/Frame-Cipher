import { SectionIntro } from '../../Kinetic'

const seoServices = [
  {
    title: 'Technical SEO',
    summary: 'Technical SEO helps search engines crawl, render, understand, and index the pages that matter.',
    body: [
      'We review crawlability, indexation, XML sitemaps, robots.txt, canonical URLs, redirects, site architecture, duplicate content, mobile usability, page performance, Core Web Vitals, JavaScript rendering, and structured data where relevant.',
      'We also investigate issues that can restrict organic performance, such as broken links, incorrect redirects, indexing conflicts, duplicate URLs, rendering problems, and keyword cannibalization.',
    ],
    note: 'If a website experiences a significant traffic or ranking decline, we investigate possible technical, content, indexing, backlink, algorithmic, and other contributing factors instead of automatically assuming that a "Google penalty" is responsible.',
  },
  {
    title: 'On-Page SEO',
    summary: 'On-page SEO makes each important page more relevant to its target search and business objective.',
    body: [
      'We optimize titles, meta descriptions, headings, URLs, page content, image elements, internal links, topical relevance, and other relevant on-page signals.',
    ],
    note: 'Our approach is not to insert keywords wherever possible. We align the page with the searcher\'s intent and make the content useful enough to satisfy the reason behind the search.',
  },
  {
    title: 'Content SEO & Content Strategy',
    summary: 'SEO content should support both search demand and business goals.',
    body: [
      'Our content SEO work can include search-intent analysis, topic research, content briefs, service-page optimization, landing-page creation, blog strategy, content refreshes, topical coverage, internal linking, and content-gap analysis.',
    ],
    note: 'We prioritize topics based on relevance, search intent, competition, business value, and the ability of your website to provide a genuinely useful answer.',
  },
  {
    title: 'Off-Page SEO & Link Building',
    summary: 'Off-page SEO helps establish relevant authority beyond your own website.',
    body: [
      'Our link-building approach can include relevant outreach, editorial opportunities, digital PR, business citations, partnerships, and other appropriate authority-building activities.',
    ],
    note: 'We focus on relevance, quality, and long-term value rather than bulk links, automated placements, or tactics designed primarily to manipulate rankings.',
  },
  {
    title: 'Local SEO',
    summary: 'Local SEO helps businesses appear when customers search for products and services in specific locations.',
    body: [
      'Our local SEO work can include Google Business Profile optimization, local keyword research, service-area pages, location landing pages, citation consistency, review strategy, local content, competitor analysis, and Google Maps visibility.',
      'For businesses serving multiple locations, we can build location-focused search strategies around the areas that actually contribute to the business.',
    ],
  },
  {
    title: 'Ecommerce SEO',
    summary: 'Ecommerce SEO connects search demand with product and category pages that help customers make buying decisions.',
    body: [
      'We optimize product and category architecture, commercial keywords, product content, internal linking, structured data, indexation, filters, and other technical elements that influence ecommerce visibility.',
    ],
    note: 'Where needed, we also investigate duplicate product pages, faceted navigation, thin category pages, out-of-stock URLs, and how search engines discover important products and collections.',
  },
  {
    title: 'International SEO',
    summary: 'International SEO helps businesses target customers across multiple countries or language markets without creating unnecessary technical conflicts.',
    body: [
      'Our work can include country-specific keyword research, localization, international site architecture, hreflang implementation where appropriate, localized content, country targeting, and market-specific authority building.',
    ],
    note: 'We do not treat international SEO as simple translation. We adapt the search strategy to the market, language, customer behavior, and competitive landscape you want to enter.',
  },
  {
    title: 'AI Search Optimization',
    summary: 'Search is expanding beyond traditional search-result pages. AI-assisted search experiences can summarize information, answer questions, compare businesses, and surface sources within generated responses.',
    body: [
      'Our AI search optimization work focuses on making your website\'s information clear, useful, structured, and easy for modern search systems to interpret. This can include answer-focused content, entity clarity, structured information, FAQs, topical coverage, supporting authority, and content designed around conversational search behavior.',
    ],
    note: 'We do not guarantee citations, mentions, or visibility in a particular AI platform. Instead, we improve the underlying content, structure, and authority signals that can help your website be understood and considered across evolving search experiences.',
  },
  {
    title: 'SEO Audit',
    summary: 'An SEO audit identifies the technical, content, on-page, authority, and structural factors that may be limiting organic performance.',
    body: [
      'We review the areas relevant to your website and turn the findings into prioritized recommendations rather than handing you an unfiltered list of technical errors.',
    ],
    note: 'The objective is simple: identify what needs attention first, what can wait, and where the strongest opportunities exist.',
  },
  {
    title: 'SEO Strategy & Consulting',
    summary: 'Not every business needs a full SEO execution team. Some companies already have developers, writers, designers, or marketers and need an experienced SEO strategist to guide the work.',
    body: [
      'Our SEO consulting service can support keyword strategy, technical recommendations, content planning, competitor analysis, prioritization, implementation guidance, SEO audits, and ongoing decision-making.',
    ],
  },
]

const researchAreas = [
  {
    title: 'Search Intent & Keyword Research',
    body: 'We research keywords based on relevance, intent, competition, search behavior, and business value. Depending on the market, we distinguish informational, commercial, transactional, navigational, and local search intent.',
    tail: 'We then map relevant keywords and topics to the pages that should target them. This helps prevent unnecessary keyword overlap and creates a clearer website structure.',
  },
  {
    title: 'Competitor Keyword Gap Analysis',
    body: 'Your SEO competitors are not always the companies you compete with offline. They are often the websites and pages appearing for the searches you want to capture.',
    tail: 'We analyze relevant competitors to identify ranking terms, important landing pages, content coverage, backlink patterns, search intent, and opportunities your website has not addressed.',
  },
  {
    title: 'Content & SERP Gap Analysis',
    body: 'Search results provide useful signals about what users expect from a query. We examine important SERPs to understand ranking page types, common subtopics, questions, content formats, commercial elements, and areas where existing results may not fully satisfy the search.',
    tail: 'These findings can guide new service pages, landing pages, category pages, blog content, content updates, and internal-linking priorities.',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div>
          <SectionIntro
            eyebrow="Capabilities & Scope"
            title="Our Search Engine Optimization Services"
          >
            SEO performs best when technical health, useful content, search intent, authority,
            and user experience work together. Our SEO services cover the core areas required to
            build, improve, and maintain organic search visibility.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((item, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
                    {item.summary}
                  </p>
                  <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                  {item.note && (
                    <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <SectionIntro
            eyebrow="Understanding the search landscape"
            title="Keyword Research & Competitor SEO Analysis"
          >
            Effective SEO starts before changing a title tag or publishing an article. It starts
            with understanding what people search for, what they expect to find, and which pages
            currently satisfy that demand.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Analysis 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {area.body}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {area.tail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}