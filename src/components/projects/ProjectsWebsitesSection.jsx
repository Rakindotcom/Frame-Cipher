'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '../GrowthPortfolioSection'
import { ArrowRight } from 'lucide-react'

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
      className: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    }
  }
  if (platform === 'WordPress') {
    return {
      label: 'WordPress CMS',
      className: 'border border-blue-500/30 bg-blue-500/10 text-blue-400',
    }
  }
  return {
    label: 'React / Next.js',
    className: 'border border-purple-500/30 bg-purple-500/10 text-purple-300',
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
      className="relative isolate scroll-mt-28 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl overflow-hidden">
        <SectionHeading
          number="01"
          title="Websites in action"
          count={`${websites.length} project${websites.length === 1 ? '' : 's'}`}
        />

        {/* Platform Identity Tabs */}
        <div className="mt-6 flex w-full items-center gap-2 overflow-x-auto scrollbar-none py-1.5 flex-nowrap max-w-full">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 mr-2 hidden sm:inline">
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
                className={`shrink-0 whitespace-nowrap min-h-[40px] w-auto inline-flex items-center cursor-pointer rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 ${
                  isSelected
                    ? 'bg-[#FAFAFA] text-[#09090B] shadow-md'
                    : 'border border-white/[0.08] bg-[#121214] text-zinc-400 hover:border-purple-600/40 hover:text-white'
                }`}
                style={{ minWidth: 'max-content' }}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 opacity-70 font-mono text-[10px] tabular-nums">({count})</span>
              </button>
            )
          })}
        </div>

        {displayedWebsites.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-normal text-zinc-400">
              No websites found under {selectedPlatform} platform.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid min-w-0 gap-6 overflow-hidden lg:grid-cols-2">
            {displayedWebsites.map((project, index) => {
              const isFinalOddCard =
                displayedWebsites.length % 2 === 1 && index === displayedWebsites.length - 1
              const badge = getPlatformBadge(project.platform)

              return (
                <article
                  key={project.url}
                  className={`group min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all ${
                    isFinalOddCard ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`grid ${isFinalOddCard ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''}`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/image block min-w-0 border-b border-white/[0.08] bg-zinc-950 focus:outline-none ${
                        isFinalOddCard ? 'lg:border-b-0 lg:border-r' : ''
                      }`}
                      aria-label={`Visit ${project.name}`}
                    >
                      <div className="relative aspect-video overflow-hidden bg-zinc-950">
                        <Image
                          src={project.screenshot}
                          alt={`${project.name} website screenshot`}
                          fill
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          quality={80}
                          className="object-cover object-top transition duration-500 group-hover/image:scale-[1.02]"
                        />
                      </div>
                    </a>

                    <div className="grid content-between gap-5 p-6 md:p-8">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 font-semibold">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl font-medium tracking-tight text-white md:text-3xl">
                          {project.name}
                        </h3>
                        <p className="mt-1 break-words font-mono text-xs text-zinc-500">
                          {project.domain}
                        </p>

                        <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-zinc-400 md:text-base">
                          {project.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex min-h-[44px] h-[44px] items-center justify-center gap-2 rounded-full bg-[#FAFAFA] px-6 text-xs font-semibold uppercase tracking-wider text-[#09090B] transition-all duration-200 hover:bg-white touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 shadow-md"
                        >
                          <span>Visit website</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </a>
                        {project.caseStudyUrl && (
                          <Link
                            href={project.caseStudyUrl}
                            className="group/btn inline-flex min-h-[44px] h-[44px] items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-transparent px-6 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:border-purple-600/40 hover:bg-white/[0.06] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                          >
                            <span>View case study</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
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
