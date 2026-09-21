import { SectionIntro, PosterButton } from '../../../Kinetic'

const problems = [
  {
    title: 'Search Intent Mismatch',
    body: 'A page can target the correct keyword and still satisfy the wrong intent. For example, someone searching for a service provider wants a different experience than someone looking for general information. If a page answers the wrong question, its relevance is weak no matter how well the keyword targets align.',
  },
  {
    title: 'Weak Search Snippets',
    body: 'Search results present limited space for a title and description. When metadata fails to communicate the page\u2019s purpose, clicks move to competitors regardless of whether the page itself offers better content. We optimize metadata around both relevance and click potential.',
  },
  {
    title: 'Unclear Page Structure',
    body: 'Visitors and search engines rely on headings, section order, and formatting to understand what a page covers. Long, unstructured content hides the important sections and makes the page harder to evaluate. Clear structure helps both understanding and user experience.',
  },
  {
    title: 'Competing Pages & Cannibalization',
    body: 'Large websites often accumulate multiple pages targeting similar keywords. When several pages compete for the same query, search engines may split authority between them, weakening each one. We map the right page to the right query and reduce internal competition.',
  },
  {
    title: 'Outdated or Incomplete Content',
    body: 'Search intent and competitive content change over time. A page that once satisfied a query can become stale as new topics, features, or competitor pages appear. Regular on-page review keeps important pages relevant rather than waiting for the rankings to drop.',
  },
]

export default function Problems() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Hidden limitations"
          title="Why On-Page SEO Matters for Organic Growth"
        >
          On-page issues rarely announce themselves. A page can look fine in a browser while
          underperforming in search because it does not serve the query it is meant to rank for.
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Think a page could rank better?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              An on-page review finds the reason
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We compare what your page offers against what the query actually needs, then
              recommend the content and structural changes that matter most.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Start an On-Page Review &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}