'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '../GrowthPortfolioSection'

const PLATFORM_TABS = [
  { id: 'All', label: 'All Frameworks' },
  { id: 'React / Next.js', label: 'React / Next.js' },
  { id: 'WordPress', label: 'WordPress' },
  { id: 'Shopify', label: 'Shopify' },
]

function getPlatformBadge(platform) {
  if (platform === 'Shopify') {
    return {
      label: 'Shopify Store',
      className:
        'border border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    }
  }
  if (platform === 'WordPress') {
    return {
      label: 'WordPress CMS',
      className:
        'border border-blue-500/50 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    }
  }
  return {
    label: 'React / Next.js',
    className:
      'border border-frame-accent/50 bg-frame-accent/10 text-frame-accent',
  }
}

export default function ProjectsWebsitesSection({ websites }) {
  const [selectedPlatform, setSelectedPlatform] = useState('All')

  if (!websites || websites.length === 0) return null

  // Calculate platform counts
  const counts = {
    All: websites.length,
    'React / Next.js': websites.filter((w) => w.platform === 'React / Next.js').length,
    WordPress: websites.filter((w) => w.platform === 'WordPress').length,
    Shopify: websites.filter((w) => w.platform === 'Shopify').length,
  }

  // Filter based on sub-tab
  const displayedWebsites =
    selectedPlatform === 'All'
      ? websites
      : websites.filter((w) => w.platform === selectedPlatform)

  return (
    <section
      id="website-work"
      className="scroll-mt-28 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[95vw] overflow-hidden">
        <SectionHeading
          number="01"
          title="Websites in action"
          count={`${websites.length} project${websites.length === 1 ? '' : 's'}`}
        />

        {/* Platform Identity Tabs - Scrollable on a single line */}
        <div className="mt-5 flex w-full items-center gap-2 overflow-x-auto scrollbar-x py-1.5 flex-nowrap max-w-full">
          <span className="shrink-0 text-[11px] font-black uppercase tracking-wider text-frame-muted-fg mr-1 hidden sm:inline">
            Architecture:
          </span>
          {PLATFORM_TABS.map((tab) => {
            const count = counts[tab.id] || 0
            if (count === 0 && tab.id !== 'All') return null
            const isSelected = selectedPlatform === tab.id

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedPlatform(tab.id)}
                className={`shrink-0 whitespace-nowrap cursor-pointer px-3.5 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent ${
                  isSelected
                    ? 'border-2 border-frame-accent bg-frame-accent text-frame-accent-fg shadow-sm'
                    : 'border-2 border-frame-border bg-frame-bg text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg hover:bg-frame-muted'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 opacity-75 font-mono text-[10px]">({count})</span>
              </button>
            )
          })}
        </div>

        {displayedWebsites.length === 0 ? (
          <div className="mt-8 border-2 border-frame-border bg-frame-muted p-8 text-center">
            <p className="text-sm font-bold text-frame-muted-fg wide:text-lg">
              No websites found under {selectedPlatform} platform.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid min-w-0 gap-5 overflow-hidden lg:grid-cols-2">
            {displayedWebsites.map((project, index) => {
              const isFinalOddCard =
                displayedWebsites.length % 2 === 1 && index === displayedWebsites.length - 1
              const badge = getPlatformBadge(project.platform)

              return (
                <article
                  key={project.url}
                  className={`group min-w-0 overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors duration-300 hover:border-frame-accent ${
                    isFinalOddCard ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`grid ${isFinalOddCard ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''}`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/image block min-w-0 border-b-2 border-frame-border bg-frame-muted focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent ${
                        isFinalOddCard ? 'lg:border-b-0 lg:border-r-2' : ''
                      }`}
                      aria-label={`Visit ${project.name}`}
                    >
                      <div className="flex items-center justify-between gap-2 border-b-2 border-frame-border bg-frame-bg px-4 py-3">
                        <div className="flex min-w-0 flex-1 items-center gap-2">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-frame-accent" />
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-frame-muted-fg/50" />
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-frame-muted-fg/30" />
                          <span className="ml-2 min-w-0 truncate text-xs font-black uppercase tracking-[0.16em] text-frame-muted-fg">
                            {project.domain}
                          </span>
                        </div>
                        <span
                          className={`shrink-0 whitespace-nowrap rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      </div>

                      <div className="relative aspect-video overflow-hidden bg-frame-muted">
                        <Image
                          src={project.screenshot}
                          alt={`${project.name} website screenshot`}
                          fill
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          quality={80}
                          className="object-cover object-top transition duration-500 group-hover/image:scale-[1.03]"
                        />
                      </div>
                    </a>

                    <div className="grid content-between gap-4 p-5 md:p-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                          {project.name}
                        </h3>
                        <p className="mt-2.5 break-words text-xs font-black uppercase tracking-[0.14em] text-frame-muted-fg">
                          {project.domain}
                        </p>
                      </div>

                      <p className="max-w-2xl text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg md:text-base">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-frame-accent bg-frame-accent px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                        >
                          Visit website
                        </a>
                        {project.caseStudyUrl && (
                          <Link
                            href={project.caseStudyUrl}
                            className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                          >
                            View case study
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
