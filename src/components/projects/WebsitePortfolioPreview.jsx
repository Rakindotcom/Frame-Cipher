'use client'

import React from 'react'
import Link from 'next/link'
import { getWebsitesByCategory } from '../../data/websiteProjects'

function getPlatformBadge(platform) {
  if (platform === 'Shopify') {
    return {
      label: 'Shopify Store',
      className:
        'border border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
    }
  }
  if (platform === 'WordPress') {
    return {
      label: 'WordPress CMS',
      className:
        'border border-blue-500/30 bg-blue-950/40 text-blue-300',
    }
  }
  return {
    label: 'React / Next.js',
    className:
      'border border-purple-500/30 bg-purple-950/40 text-frame-accent',
  }
}

export default function WebsitePortfolioPreview({
  category = '',
  items = null,
  limit = 4,
  eyebrow = 'Selected website work',
  title = 'Websites built to move people forward.',
  description = null,
  buttonText = 'View more websites →',
  buttonHref = '/projects#website-work',
}) {
  const displayedWebsites = items || getWebsitesByCategory(category, limit)

  if (!displayedWebsites || displayedWebsites.length === 0) return null

  const gridColsClass =
    displayedWebsites.length === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : displayedWebsites.length === 2
      ? 'sm:grid-cols-2'
      : displayedWebsites.length === 1
      ? 'max-w-xl mx-auto'
      : 'md:grid-cols-3'

  return (
    <section id="website-portfolio" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              {title}
            </h2>
            {description && (
              <p className="text-base font-normal leading-relaxed text-zinc-300">
                {description}
              </p>
            )}
          </div>
          <Link
            href={buttonHref}
            className="group inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-6 text-[14px] font-medium leading-none text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] shrink-0 whitespace-nowrap"
          >
            <span>{buttonText.replace('→', '').trim()}</span>
            <span
              aria-hidden="true"
              className="ml-1.5 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            >
              &rarr;
            </span>
          </Link>
        </div>

        {/* Modality 4 Pure 16:10 Media Cards Grid */}
        <div className={`grid gap-6 ${gridColsClass}`}>
          {displayedWebsites.map((site) => {
            const badge = getPlatformBadge(site.platform)
            return (
              <article
                key={site.domain || site.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${site.name}`}
                  className="block"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                    <img
                      src={site.screenshot}
                      alt={`${site.name} website screenshot`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-6 justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                        {site.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-medium text-white group-hover:text-frame-accent transition-colors">
                      {site.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                      {site.summary}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-2 border-t border-white/[0.08]">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                    >
                      <span>Visit website</span>
                      <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
                    </a>
                    {site.caseStudyUrl && (
                      <Link
                        href={site.caseStudyUrl}
                        className="inline-flex min-h-[40px] w-full items-center justify-center rounded-full border border-white/[0.08] bg-transparent px-4 text-xs font-medium text-zinc-300 transition-colors duration-200 hover:border-white/[0.18] hover:text-white"
                      >
                        Read Case Study
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
