import { SectionIntro, PosterButton } from '../../../Kinetic'

const items = [
  {
    title: 'Bangladesh Ecommerce Site',
    context: 'Organic sessions dropped sharply after a site rebuild left hundreds of pages without correct redirects and canonical tags.',
    recovery: 'We restored the redirect map, corrected canonicals, and re-submitted the affected URL sets.',
    outcome: 'Business-critical pages regained visibility as Google re-crawled the corrected structure.',
  },
  {
    title: 'Unnatural Links Manual Action',
    context: 'A business site received a Search Console manual action for unnatural links after a paid link campaign.',
    recovery: 'We documented the violating links, supported removal outreach, and prepared a reconsideration request using only appropriate disavow steps.',
    outcome: 'The manual action was removed and ranking returned to affected commercial pages.',
  },
  {
    title: 'Content Site After Core Update',
    context: 'A publishing website lost traffic across informational pages following a Google core update.',
    recovery: 'We audited the affected pages against people-first quality guidance, improved thin sections, and removed low-value pages.',
    outcome: 'Recovery was measured through sustained trends across the affected topic clusters.',
  },
  {
    title: 'Thin Product Page Expansion',
    context: 'An ecommerce store ranked poorly for long-tail queries because product pages lacked useful, unique information.',
    recovery: 'We enriched the highest-potential pages with real product detail and original supporting content.',
    outcome: 'Organic traffic to the treated product group increased as the pages became more useful.',
  },
  {
    title: 'Hacked Page Security Issue',
    context: 'A site had injected spam pages and experienced warnings plus heavy traffic loss.',
    recovery: 'We identified the injected pages, supported cleanup, restored access problems, and verified the security issue was resolved.',
    outcome: 'The site became secure again and organic visibility began recovering as Google re-evaluated it.',
  },
  {
    title: 'Migration Noindex Accident',
    context: 'A site lost traffic after a migration where key pages were accidentally excluded from the index.',
    recovery: 'We found the indexing exclusion, corrected the directive, and validated crawlability across the migrated site.',
    outcome: 'Google re-crawled and re-indexed the affected pages, and rankings returned to pre-migration levels.',
  },
  {
    title: 'Low-Value Archive Cleanup',
    context: 'A store had hundreds of nearly identical archive and category pages providing little independent value.',
    recovery: 'We consolidated the pages, redirected the low-value templates, and strengthened the valuable index pages.',
    outcome: 'Crawl budget and relevance improved across the remaining pages.',
  },
  {
    title: 'International Site Structure Fix',
    context: 'An international service site lost rankings after overlapping content and inconsistent internal links confused the site hierarchy.',
    recovery: 'We clarified page grouping and internal linking, and aligned content to each target market.',
    outcome: 'Recovered positions in the markets that mattered most to the business.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Documented results" title="Google Penalty Recovery Results & Case Studies">
          These documented outcomes show how different causes require different recovery paths. We
          list them without earnings claims that cannot apply to every website.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {items.map((item, index) => (
            <div key={item.title} className="flex flex-col bg-frame-muted/30 p-7 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Case 0{index + 1}
                </span>
                <span aria-hidden="true" className="text-frame-muted">
                  →
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  <span className="font-bold text-frame-fg">Situation: </span>
                  {item.context}
                </p>
                <p>
                  <span className="font-bold text-frame-fg">Recovery: </span>
                  {item.recovery}
                </p>
                <p className="border-t-2 border-frame-border/60 pt-3">
                  <span className="font-bold text-frame-fg">Outcome: </span>
                  {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-2 border-frame-accent bg-frame-accent/10 p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Every recovery path is different
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              These case types show why diagnosing the actual cause changes the outcome. Tell us
              what happened on your site and we will apply the same evidence-first approach.
            </p>
          </div>
          <PosterButton href="/case-studies/penalty-recovery" className="w-full whitespace-nowrap md:w-auto">
            View Our Case Studies
          </PosterButton>
        </div>
      </div>
    </section>
  )
}