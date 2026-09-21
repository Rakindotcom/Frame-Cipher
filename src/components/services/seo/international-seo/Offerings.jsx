import { SectionIntro, PosterButton } from '../../../Kinetic'

const services = [
  {
    title: 'International Market Research & Prioritization',
    description: 'Not every possible country deserves the same level of SEO investment. We research potential markets based on search demand, competition, commercial opportunity, product or service relevance, and your broader expansion goals. Our analysis can include:',
    points: [
      'Country-level search demand',
      'Keyword opportunities',
      'Search competition',
      'Commercial intent',
      'Market trends',
      'Existing organic visibility',
      'Product or service relevance',
      'Localization requirements',
      'Market entry considerations',
    ],
    note: 'The result is a practical market-priority roadmap rather than a one-size-fits-all international SEO plan.',
  },
  {
    title: 'International Competitor & SERP Analysis',
    description: 'Your competitors can change from one country to another. A company with strong visibility in one market may have little presence in another. Search results can also favor different brands, page types, content formats, and SERP features depending on the market and query. We analyze:',
    points: [
      'Country-specific SERPs',
      'Organic competitors',
      'Keyword gaps',
      'Content gaps',
      'Ranking page types',
      'SERP features',
      'Competitor backlink profiles',
      'Market-level authority',
      'Content positioning',
      'Commercial opportunities',
    ],
    note: 'This gives each market a strategy based on its actual search environment rather than assumptions carried over from another country.',
  },
  {
    title: 'International Site Structure Strategy',
    description: 'Your website structure influences how regional and language versions are organized, crawled, indexed, linked, and maintained.',
    groups: [
      {
        label: 'We evaluate:',
        points: [
          'ccTLDs',
          'Subdirectories',
          'Subdomains',
          'Language folders',
          'Country-language combinations',
        ],
      },
      {
        label: 'We also review the impact on:',
        points: [
          'URL management',
          'Internal linking',
          'Crawlability',
          'Indexation',
          'Content maintenance',
          'Hreflang implementation',
          'Future market additions',
          'Migration requirements',
        ],
      },
    ],
    note: 'The goal is to establish an architecture that works for your current markets without creating unnecessary limitations for future expansion.',
  },
  {
    title: 'Hreflang Implementation & Validation',
    description: 'Hreflang helps search engines understand the relationship between alternate regional or language versions of a page. We support implementation through the technical method appropriate to your website and platform. Our work can include:',
    points: [
      'Hreflang mapping',
      'Language and region code validation',
      'Self-reference checks',
      'Return-reference checks',
      'URL consistency checks',
      'Missing annotation detection',
      'Incorrect annotation detection',
      'XML sitemap implementation where appropriate',
      'Validation after website changes',
    ],
    note: 'We also assess hreflang alongside canonicals, redirects, internal links, and indexation because these signals need to work together as part of the broader international setup.',
  },
  {
    title: 'International Technical SEO',
    description: 'International websites need a technical foundation that works consistently across every target market. We review:',
    points: [
      'Crawlability and indexation',
      'Canonicalization',
      'XML sitemaps',
      'Robots directives',
      'URL structures',
      'Page speed',
      'Core Web Vitals',
      'Mobile performance',
      'Redirect chains',
      'JavaScript rendering',
      'Structured data',
      'Regional URL consistency',
    ],
    note: 'Where relevant, we can also review CDN and infrastructure considerations. The goal is a website that is accessible, understandable, technically consistent, and scalable across countries and languages.',
  },
  {
    title: 'Market-Specific Keyword Research',
    description: 'International keyword research should not rely on direct translation. The same language can have different terminology, spelling, phrasing, and commercial intent across countries. We research how people actually search in each target market. This can include:',
    points: [
      'Country-specific keyword variations',
      'Language differences',
      'Regional terminology',
      'Spelling differences',
      'Product terminology',
      'Service terminology',
      'Commercial intent',
      'Transactional searches',
      'Informational searches',
      'Local modifiers',
      'Search trends',
      'Competitor keyword gaps',
    ],
    note: 'We then map those opportunities to the appropriate country, language, product, service, and supporting content pages.',
  },
  {
    title: 'Content Localization & On-Page SEO',
    description: 'Translation changes the language. Localization changes how the content works for the target market. We adapt content based on:',
    points: [
      'Page titles',
      'Meta descriptions',
      'Headings',
      'Local terminology',
      'Search intent',
      'Language conventions',
      'Currency',
      'Measurement units',
      'Calls to action',
      'FAQs',
      'Internal links',
      'Local trust information',
      'Market-specific examples',
      'User expectations',
    ],
    note: 'The goal is to create content that feels relevant to the market while remaining consistent with the wider international website structure.',
  },
  {
    title: 'International Internal Linking & Navigation',
    description: 'Adding countries and languages can make a website harder to navigate, crawl, and maintain. We review how users and search engines move between:',
    points: [
      'Country pages',
      'Language pages',
      'Products',
      'Services',
      'Categories',
      'Supporting content',
      'Regional resources',
    ],
    note: 'We also look for orphaned pages, unnecessary redirects, weak page relationships, confusing regional navigation, and inconsistent internal-link patterns. A clear internal structure helps users find the right version of the site while giving search engines stronger context around the relationship between pages.',
  },
  {
    title: 'International Link Building & Local Authority',
    description: 'International SEO may require authority-building strategies that reflect the target market rather than repeating the same backlink approach across every country. Our strategy can focus on opportunities such as:',
    points: [
      'Local publications',
      'Industry websites',
      'Relevant directories',
      'Regional resources',
      'Digital PR',
      'Expert contributions',
      'Partnerships',
      'Market-specific outreach',
      'Competitor backlink gaps',
      'Content promotion',
    ],
    note: 'The focus is relevance, credibility, and market fit rather than acquiring links simply because they are easy to obtain.',
  },
  {
    title: 'International SEO Migration & Restructuring',
    description: 'International migrations can affect large numbers of URLs and technical relationships at the same time. We can support:',
    groups: [
      {
        label: 'Migration types we support:',
        points: [
          'New country directories',
          'New language directories',
          'Domain consolidation',
          'Regional URL restructuring',
          'ccTLD changes',
          'Subdomain restructuring',
          'CMS changes',
          'Platform migrations',
          'International redesigns',
        ],
      },
      {
        label: 'Migration planning can include:',
        points: [
          'URL mapping',
          'Redirect planning',
          'Canonical review',
          'Hreflang remapping',
          'Sitemap updates',
          'Internal-link review',
          'Pre-launch validation',
          'Post-launch monitoring',
        ],
      },
    ],
    note: 'The objective is to expand or restructure the website while reducing avoidable losses in visibility, indexation, and existing SEO equity.',
  },
  {
    title: 'Per-Market Tracking & Ongoing SEO Management',
    description: 'International SEO should not be measured as one combined traffic number. A strong result in one country can hide declining visibility in another. We therefore track performance at the market level wherever reliable data is available. Reporting can include:',
    points: [
      'Country-level rankings',
      'Organic traffic',
      'Search impressions',
      'Click-through rates',
      'Indexed pages',
      'Hreflang health',
      'Technical issues',
      'Content performance',
      'Leads and conversions',
      'New market opportunities',
    ],
    note: 'This makes it easier to identify which markets are gaining traction, which need further optimization, and where additional investment may be justified.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Scope" title="Our International SEO Services">
          Our international SEO services combine market strategy, technical SEO, keyword research,
          content localization, authority building, and ongoing performance analysis.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Capability 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                )}
                {item.points ? (
                  <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                    {item.points.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  item.groups.map((group, gIdx) => (
                    <div key={gIdx} className="mt-5">
                      <p className="border-t-2 border-frame-border/60 pt-4 text-sm font-bold text-frame-fg">
                        {group.label}
                      </p>
                      <ul className="mt-2.5 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                        {group.points.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where to start?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your current international setup and recommend which services will have the
              most impact first.
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