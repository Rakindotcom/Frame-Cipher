import { SectionIntro, PosterButton } from '../../../Kinetic'

const services = [
  {
    title: 'Technical SEO Audit',
    body: 'We examine the technical foundation that allows search engines to crawl, understand, and index your website. Our review can include:',
    points: [
      'Crawlability',
      'Indexation',
      'Robots.txt',
      'XML sitemaps',
      'Canonicalization',
      'URL structure',
      'Redirects',
      '404 and status-code issues',
      'Crawl depth',
      'Orphan pages',
      'Duplicate URLs',
      'Index bloat',
      'JavaScript rendering',
      'Mobile performance',
      'Core Web Vitals',
      'Page speed',
      'Structured data',
      'HTTPS and technical configuration',
    ],
    notes: [
      'We do not treat every technical warning as equally important. We identify which issues affect important pages or templates and explain what should be fixed first.',
    ],
  },
  {
    title: 'On-Page SEO Audit',
    body: 'We review how effectively individual pages target and satisfy their intended search queries. Our analysis can include:',
    points: [
      'Title tags',
      'Meta descriptions',
      'H1-H6 structure',
      'Search intent alignment',
      'Keyword targeting',
      'Image optimization',
      'Internal links',
      'Anchor text',
      'Page structure',
      'Calls to action',
      'Structured data',
      'Content relevance',
    ],
    notes: [
      'We assess important pages in their competitive context rather than applying generic on-page checklists to every URL.',
    ],
  },
  {
    title: 'Content & Keyword Audit',
    body: 'Your content needs to target the right topics, keywords, and search intent. We evaluate:',
    points: [
      'Keyword-to-page mapping',
      'Search intent',
      'Keyword cannibalization',
      'Content gaps',
      'Thin or low-value content',
      'Duplicate or overlapping topics',
      'Outdated content',
      'Topic coverage',
      'Content depth',
      'Supporting content',
      'Commercial and informational intent',
      'Competitor content gaps',
    ],
    notes: [
      'We may recommend improving, consolidating, redirecting, removing, or creating content depending on what the data shows.',
      'The goal is not simply to publish more. It is to make the existing content system more useful and strategically aligned.',
    ],
  },
  {
    title: 'Backlink Profile Audit',
    body: 'We review your backlink profile in the context of relevance, authority, anchor text, and competitor strength. Our analysis can include:',
    points: [
      'Link quality',
      'Relevance',
      'Referring domains',
      'Anchor text patterns',
      'Lost links',
      'Suspicious or manipulative patterns',
      'Competitor backlink opportunities',
      'Authority gaps',
      'Link acquisition opportunities',
    ],
    notes: [
      'We distinguish between links that deserve attention and links that are unlikely to have meaningful impact. Where a questionable backlink exists, we assess its context before recommending any action rather than treating every low-quality link as a penalty risk.',
    ],
  },
  {
    title: 'Competitor & SERP Analysis',
    body: 'Your rankings are always relative to the pages competing for the same search demand. We analyze:',
    points: [
      'Organic competitors',
      'Country-specific competitors',
      'Ranking URLs',
      'Keyword gaps',
      'Content gaps',
      'SERP features',
      'Search intent patterns',
      'Page types that rank',
      'Competitor content depth',
      'Competitor authority',
      'Internal-link opportunities',
      'Commercial opportunities',
    ],
    notes: [
      'This helps answer a more useful question: What are the pages that outrank you doing differently?',
    ],
  },
  {
    title: 'Analytics, Search Console & Conversion Audit',
    body: 'Search visibility should be connected to user behavior and business outcomes. Where access is available, we review:',
    points: [
      'Google Search Console',
      'Google Analytics',
      'Organic landing pages',
      'Search queries',
      'Impressions and clicks',
      'Click-through rates',
      'Conversion events',
      'Lead forms',
      'Calls',
      'Ecommerce transactions',
      'Conversion paths',
      'Tracking gaps',
      'Organic traffic anomalies',
    ],
    notes: [
      'This helps identify cases where rankings and traffic appear healthy but important business actions are not being measured or generated.',
    ],
  },
  {
    title: 'AI Search & Visibility Audit',
    body: 'Search behavior is expanding beyond traditional organic results. Where relevant to the project, we assess opportunities related to AI-powered search experiences and answer-focused discovery. Our review can include:',
    points: [
      'AI Overview visibility considerations',
      'AI-search content coverage',
      'Question-based content',
      'Entity clarity',
      'Structured data',
      'Content extractability',
      'E-E-A-T signals',
      'Brand and topic associations',
      'Citation opportunities',
      'Competitor visibility in AI-driven search experiences',
    ],
    notes: [
      'The objective is not to promise visibility in a specific AI platform. It is to identify whether your content and site structure provide strong signals for modern search and answer experiences.',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Scope" title="Our SEO Audit Services">
          Our SEO audit services combine automated data collection with manual analysis so that
          findings are evaluated in the context of your website and business.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Audit Service 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.notes && (
                  <div className="mt-5 space-y-3 border-l-2 border-frame-accent bg-frame-bg p-4">
                    {item.notes.map((note, nIdx) => (
                      <p
                        key={nIdx}
                        className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
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
              We review your website and recommend which audit scope will have the most impact
              first.
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