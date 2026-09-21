import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Technical SEO Audit',
    description: 'We perform a structured review of the technical factors that may affect organic performance.',
    bullets: [
      'Crawlability, indexation, redirects, canonicals, and site architecture',
      'Performance, Core Web Vitals, structured data, and JavaScript rendering',
      'Mobile usability, XML sitemaps, robots.txt, and other relevant areas',
      'A prioritized report that explains the issue, its potential impact, and the recommended action',
    ],
  },
  {
    title: 'Crawlability & Indexation',
    description: 'We help search engines discover and access the pages that matter.',
    bullets: [
      'XML sitemap optimization and robots.txt review',
      'Crawl-budget analysis and orphan-page discovery',
      'Broken-link fixes and status-code analysis',
      'Indexing directives and Search Console investigation',
      'Server-log analysis of crawler activity where available',
    ],
  },
  {
    title: 'Site Architecture & Internal Linking',
    description: 'We review how pages are organized and connected across your website.',
    bullets: [
      'URL hierarchy and navigation review',
      'Internal linking and category structures',
      'Crawl-depth and orphan-page detection',
      'Relationships between important pages',
    ],
  },
  {
    title: 'Core Web Vitals & Technical Performance',
    description: 'We identify performance issues that affect important pages and user experience.',
    bullets: [
      'Core Web Vitals analysis',
      'Image and resource-loading optimization',
      'JavaScript and CSS issues',
      'Caching, server response time, and mobile performance',
      'Developer coordination to implement and validate improvements',
    ],
  },
  {
    title: 'JavaScript SEO & Rendering',
    description: 'JavaScript-heavy websites require additional technical checks because important content, links, or page elements may depend on rendering.',
    bullets: [
      'Rendered content and JavaScript-generated links',
      'Client-side versus server-side rendering',
      'Dynamic pages and indexability',
      'React, Next.js, and other modern frameworks',
    ],
  },
  {
    title: 'Structured Data & Schema',
    description: 'Structured data gives search engines additional context about eligible content on a page.',
    bullets: [
      'Organization, LocalBusiness, Product, Article, and Breadcrumb schema',
      'Validation for errors, conflicts, and accuracy',
      'Markup that accurately represents the visible page content',
      'Eligibility for certain enhanced search features where supported',
    ],
  },
  {
    title: 'Canonicalization, Redirects & Duplicate URLs',
    description: 'We manage technical signals that help search engines understand which URL should represent a piece of content.',
    bullets: [
      'Canonical tags and 301 redirects',
      'Redirect chains, loops, and HTTP-to-HTTPS redirects',
      'Duplicate URLs and URL parameters',
      'Preserving search equity while keeping URL structure maintainable',
    ],
  },
  {
    title: 'Mobile & Technical Usability',
    description: 'Search engines need to access and evaluate websites effectively across mobile devices.',
    bullets: [
      'Mobile rendering and responsive behavior',
      'Page performance and navigation',
      'Content accessibility and layout issues',
      'Other problems that affect mobile users and search visibility',
    ],
  },
  {
    title: 'SEO Migration & Redirect Management',
    description: 'Website redesigns, domain changes, CMS migrations, and major URL changes can create SEO risks if technical signals are not transferred correctly.',
    bullets: [
      'URL mapping and redirect planning',
      'Canonical updates and internal-link reviews',
      'XML sitemap updates and staging checks',
      'Pre-launch audits and post-launch monitoring',
    ],
  },
  {
    title: 'Ongoing Technical Monitoring',
    description: 'Technical SEO can change as websites grow and developers publish new updates.',
    bullets: [
      'Crawl health, indexation, and Core Web Vitals',
      'Search Console issues and broken links',
      'Redirects, structured data, and technical regressions',
      'Identifying new problems before they become larger visibility issues',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="Our Technical SEO Services"
        >
          Our technical SEO services cover the infrastructure and technical signals that support
          search visibility. The exact scope depends on your website, platform, size, and existing
          technical condition.
        </SectionIntro>

        <div className="grid sm:grid-cols-2">
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
              Not sure where to start?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a technical SEO audit
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review the actual technical condition of your website and tell you which fixes
              matter most before any implementation work begins.
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