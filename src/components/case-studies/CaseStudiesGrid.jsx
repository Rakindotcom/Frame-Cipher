import CaseStudyPortfolioCard from './CaseStudyPortfolioCard'
import { ArrowRight } from 'lucide-react'

export default function CaseStudiesGrid({
  caseStudies,
  activeFilter,
  searchQuery,
  onResetFilters,
}) {
  if (caseStudies.length === 0) {
    return (
      <div className="mx-auto my-16 max-w-2xl rounded-2xl border border-white/[0.08] bg-[#121214] p-8 text-center sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <span className="inline-block rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-purple-300">
          No matches found
        </span>
        <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight text-white md:text-3xl">
          No case studies found matching &ldquo;{searchQuery}&rdquo;
        </h3>
        <p className="mt-3 text-sm text-zinc-400">
          Try searching for another client name, industry, service, metric, or keyword, or reset the filters.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="group mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#FAFAFA] px-8 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation cursor-pointer"
        >
          <span>Reset filters &amp; search</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    )
  }

  const isOrganized = activeFilter === 'All' && !searchQuery

  if (!isOrganized) {
    return (
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
                {activeFilter === 'All' ? `Showing matches for "${searchQuery}"` : `${activeFilter} Case Studies`}
              </h2>
            </div>
            <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-xs tabular-nums text-zinc-400">
              {caseStudies.length} {caseStudies.length === 1 ? 'Study' : 'Studies'}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="mx-auto max-w-7xl space-y-20">
        {sections.map((sec) => (
          <section key={sec.category} id={`section-${sec.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="mb-8 flex flex-col gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  <span>{sec.category} Systems</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                  {sec.title}
                </h2>
                <p className="mt-1 text-sm font-normal text-zinc-400">
                  {sec.subtitle}
                </p>
              </div>
              <span className="self-start sm:self-auto rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-xs tabular-nums text-zinc-400">
                {sec.items.length} {sec.items.length === 1 ? 'Study' : 'Studies'}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
