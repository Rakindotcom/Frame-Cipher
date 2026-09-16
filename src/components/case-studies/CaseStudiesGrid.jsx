import CaseStudyPortfolioCard from './CaseStudyPortfolioCard'

export default function CaseStudiesGrid({
  caseStudies,
  activeFilter,
  searchQuery,
  onResetFilters,
}) {
  if (caseStudies.length === 0) {
    return (
      <div className="mx-auto my-16 max-w-[95vw] border-2 border-frame-border bg-frame-muted p-12 text-center">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">No matches</p>
        <h3 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg md:text-5xl">
          No case studies found matching &ldquo;{searchQuery}&rdquo;
        </h3>
        <p className="mt-4 text-base font-medium text-frame-muted-fg">
          Try searching for another client name, industry, service, metric, or keyword, or reset the filters.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="mt-6 inline-flex border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent cursor-pointer"
        >
          Reset filters & search
        </button>
      </div>
    )
  }

  // If viewing a specific category or searching, display a flat clean grid
  // If viewing All without search, we can organize by category sections with clear headings
  const isOrganized = activeFilter === 'All' && !searchQuery

  if (!isOrganized) {
    return (
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-8 flex items-center justify-between border-b-2 border-frame-border pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {activeFilter === 'All' ? 'Search Results' : activeFilter}
              </p>
              <h2 className="mt-1 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                {activeFilter === 'All' ? `Showing matches for "${searchQuery}"` : `${activeFilter} Case Studies`}
              </h2>
            </div>
            <span className="border border-frame-border bg-frame-muted px-3 py-1 text-xs font-mono font-bold text-frame-fg">
              {caseStudies.length} {caseStudies.length === 1 ? 'Study' : 'Studies'}
            </span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // When All is selected without search, group into logical category sections
  const personalBrandStudies = caseStudies.filter((s) => s.category === 'Personal Brand')
  const paidAdsStudies = caseStudies.filter((s) => s.category === 'Paid Ads')
  const seoStudies = caseStudies.filter((s) => s.category === 'SEO')

  const sections = [
    {
      title: 'Personal Brand & Content Systems',
      subtitle: 'Authority-led short-form video systems and creator scale',
      category: 'Personal Brand',
      items: personalBrandStudies,
    },
    {
      title: 'Paid Ads & Meta Performance',
      subtitle: 'Creative velocity, Messenger conversion, and Andromeda-aligned acquisition',
      category: 'Paid Ads',
      items: paidAdsStudies,
    },
    {
      title: 'Search & Topical SEO Growth',
      subtitle: 'Local rankings, vertical architecture, and global search dominance',
      category: 'SEO',
      items: seoStudies,
    },
  ].filter((sec) => sec.items.length > 0)

  return (
    <div className="px-4 py-12 md:px-8 md:py-16 space-y-20">
      <div className="mx-auto max-w-[95vw] space-y-20">
        {sections.map((sec) => (
          <section key={sec.category} id={`section-${sec.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="mb-8 flex flex-col gap-2 border-b-2 border-frame-border pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {sec.category} Case Studies
                </p>
                <h2 className="mt-1 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                  {sec.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-frame-muted-fg">
                  {sec.subtitle}
                </p>
              </div>
              <span className="self-start sm:self-auto border border-frame-border bg-frame-muted px-3 py-1 text-xs font-mono font-bold text-frame-fg">
                {sec.items.length} {sec.items.length === 1 ? 'Study' : 'Studies'}
              </span>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((study) => (
                <CaseStudyPortfolioCard
                  key={study.slug}
                  study={study}
                  index={caseStudies.indexOf(study)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
