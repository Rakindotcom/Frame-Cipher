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
      className="sticky top-[74px] z-40 scroll-mt-[74px] border-y-2 border-frame-border bg-frame-bg/95 backdrop-blur-xl px-4 py-3.5 shadow-lg md:px-8"
    >
      <div className="mx-auto flex max-w-[95vw] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Filter Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none [mask-image:linear-gradient(to_right,black_90%,transparent)] sm:[mask-image:none]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterSelect(tab.id)}
                aria-pressed={isActive}
                className={`cursor-pointer whitespace-nowrap px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent ${
                  isActive
                    ? 'border-2 border-frame-accent bg-frame-accent text-frame-accent-fg shadow-[0_0_24px_rgba(168,85,247,0.35)]'
                    : 'border-2 border-frame-border bg-frame-bg text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg hover:bg-frame-muted'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`ml-2 text-[0.68rem] px-1.5 py-0.5 font-mono font-bold ${
                      isActive
                        ? 'bg-frame-bg text-frame-accent'
                        : 'bg-frame-muted text-frame-muted-fg'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Search Box & Counter */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80 shrink-0">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-frame-muted-fg">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search case studies by client, metric, SEO..."
              className="w-full border-2 border-frame-border bg-frame-muted py-2 pl-9 pr-8 text-xs font-bold text-frame-fg placeholder:text-frame-muted-fg focus:border-frame-accent focus:bg-frame-bg focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-2 flex items-center px-1 text-xs font-black text-frame-muted-fg hover:text-frame-fg"
                aria-label="Clear search"
              >
                <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
