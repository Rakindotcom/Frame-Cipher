'use client'

import React from 'react'

const migrationTypes = [
  {
    title: 'WordPress to Next.js',
    desc: 'Rebuild the frontend in Next.js while preserving important content structures, URLs, metadata, redirects, and SEO requirements.',
  },
  {
    title: 'React SPA to Next.js',
    desc: 'Modernize an existing React application where the business needs improved architecture, rendering options, routing, or performance.',
  },
  {
    title: 'Pages Router to App Router',
    desc: 'Refactor an existing Next.js application toward the App Router while reviewing data fetching, component boundaries, routing, caching, and existing functionality.',
  },
  {
    title: 'Legacy Frontend Modernization',
    desc: 'Replace outdated frontend architecture with a more maintainable Next.js structure while protecting the business functionality that already works.',
  },
  {
    title: 'Existing Next.js Codebase Takeover',
    desc: 'We can review and continue an existing Next.js project when a business needs a new development partner, technical improvements, or ongoing feature development.',
  },
]

export default function Migrations() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js Migration &amp;{' '}
            <span className="italic text-frame-accent">Modernization.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Moving an existing website or application to Next.js requires more than rebuilding the frontend. We first review the current architecture, content, URLs, data, integrations, functionality, and technical limitations.
          </p>
        </div>

        {/* 5 Migration Types Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {migrationTypes.map((mig, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Modernization 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-base sm:text-lg font-medium text-white">
                  {mig.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {mig.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Footnote */}
        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400 border-l-2 border-frame-accent/60 pl-3 py-1">
          A migration plan should protect valuable content and functionality while giving the new architecture a clear path forward.
        </p>
      </div>
    </section>
  )
}
