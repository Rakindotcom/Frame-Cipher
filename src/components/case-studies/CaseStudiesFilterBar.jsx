'use client'

export default function CaseStudiesFilterBar({
  filterTabs,
  activeFilter,
  onFilterSelect,
  searchQuery,
  onSearchChange,
}) {
  return (
    <nav
      id="case-studies-controls"
      aria-label="Case study filters and search"
      className="sticky top-[74px] z-40 scroll-mt-[74px] border-b border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl px-4 py-3.5  md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Filter Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterSelect(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                  isActive
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'border border-white/[0.08] bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] font-mono tabular-nums ${
                      isActive ? 'text-zinc-600' : 'text-zinc-500'
                    }`}
                  >
                    ({String(tab.count).padStart(2, '0')})
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Search Box */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80 shrink-0">
            <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-zinc-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by client, metric, SEO…"
              aria-label="Search case studies"
              className="w-full rounded-full border border-white/[0.12] bg-white/[0.04] py-2 pl-9 pr-9 font-mono text-[16px] sm:text-xs text-white placeholder:text-zinc-500 focus:border-frame-accent focus:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-2 flex items-center justify-center p-2 text-xs font-bold text-zinc-400 hover:text-white min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer"
                aria-label="Clear search"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m4 4 8 8M12 4l-8 8" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
