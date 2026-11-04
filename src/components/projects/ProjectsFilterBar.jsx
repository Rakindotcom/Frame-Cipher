'use client'

export default function ProjectsFilterBar({
  filterTabs,
  activeFilter,
  onFilterSelect,
  searchQuery,
  onSearchChange,
}) {
  return (
    <nav
      id="portfolio-controls"
      aria-label="Portfolio filters and search"
      className="sticky top-[74px] z-40 scroll-mt-[74px] border-y border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl px-4 py-3.5  md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Filter Pills */}
        <div className="flex min-w-0 flex-nowrap items-center gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none [mask-image:linear-gradient(to_right,black_90%,transparent)] sm:[mask-image:none]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterSelect(tab.id)}
                aria-pressed={isActive}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent touch-manipulation ${
                  isActive
                    ? 'bg-[#FAFAFA] text-[#09090B]'
                    : 'border border-white/[0.08] bg-[#18181B] text-zinc-400 hover:border-white/[0.2] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72 shrink-0">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-zinc-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="w-full rounded-full border border-white/[0.08] bg-[#18181B] py-2 pl-9 pr-9 text-[16px] sm:text-xs font-normal text-white placeholder:text-zinc-500 focus:border-frame-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-2 flex items-center justify-center p-2 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer min-h-[44px] min-w-[44px] touch-manipulation"
              aria-label="Clear search"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m4 4 8 8M12 4l-8 8" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
