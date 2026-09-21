import { SectionIntro, PosterButton } from '../../../Kinetic'

const problems = [
  {
    title: 'Crawl & Indexation Problems',
    body: 'Search engines need to discover and access your important URLs before they can consider them for search results. Incorrect robots.txt rules, XML sitemaps, internal linking, status codes, orphan pages, and indexing directives can interfere with that process.',
    bullets: [
      'Crawl waste and blocked resources',
      'Broken links and orphan pages',
      'Indexing conflicts and directives',
    ],
  },
  {
    title: 'Performance & Core Web Vitals Issues',
    body: 'Website performance affects both the search experience and how users interact with your pages. We investigate Core Web Vitals, page loading, server response time, image weight, JavaScript execution, CSS, caching, and other performance factors.',
    bullets: [
      'Underlying causes, not just scores',
      'Worked with your development team to fix',
    ],
  },
  {
    title: 'Duplicate & Canonical Conflicts',
    body: 'Search engines can encounter multiple URLs containing the same or very similar content. We review canonical tags, URL variations, redirects, duplicate pages, parameter URLs, and other signals to help search engines identify the preferred version of important content.',
  },
  {
    title: 'JavaScript & Rendering Issues',
    body: 'JavaScript can affect how search engines access and understand dynamically generated content. We investigate rendering issues, JavaScript-generated content and links, client-side applications, and other implementation problems that may affect crawlability or indexation.',
    bullets: [
      'Particularly relevant for React and Next.js',
      'Other JavaScript-heavy websites covered',
    ],
  },
  {
    title: 'Site Architecture Problems',
    body: 'A clear website structure helps search engines discover important pages and understand relationships between URLs. We review URL hierarchy, navigation, internal links, category structures, crawl paths, and other architectural elements to identify unnecessary complexity or weak connections between important pages.',
  },
]

export default function Problems() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Hidden limitations"
          title="What Technical Problems Can Limit Search Visibility"
        >
          Technical SEO problems are not always visible to visitors. A website can look completely
          normal while search engines encounter problems accessing or understanding important
          content.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {problem.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {problem.body}
                </p>
                {problem.bullets?.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4">
                    {problem.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs md:text-sm font-medium text-frame-fg/90">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure what&apos;s limiting your site?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              A technical SEO audit finds the answers
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We investigate the actual condition of your website, prioritize the issues that
              matter, and recommend fixes based on evidence.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Start a Technical Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}