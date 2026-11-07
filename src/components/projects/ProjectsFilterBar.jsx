'use client'

import { Search, X } from 'lucide-react'

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
      className="sticky top-[74px] z-40 scroll-mt-[74px] border-y border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl px-4 py-3.5 md:px-8"
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
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 touch-manipulation min-h-[40px] ${
                  isActive
                    ? 'bg-[#FAFAFA] text-[#09090B] shadow-md'
                    : 'border border-white/[0.08] bg-[#121214] text-zinc-400 hover:border-purple-600/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-80 shrink-0">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-zinc-400">
            <Search className="h-4 w-4 text-purple-600" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects by client, service…"
            aria-label="Search projects"
            className="w-full rounded-full border border-white/[0.08] bg-[#121214] py-2.5 pl-10 pr-10 font-mono text-[16px] sm:text-xs text-white placeholder:text-zinc-500 focus:border-purple-600/50 focus:bg-[#151518] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 transition-colors min-h-[40px]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-2 flex items-center justify-center p-2 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer min-h-[40px] min-w-[40px] touch-manipulation"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
