'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioProjects } from '../data/agency'

const filters = ['All', 'Branding', 'Websites', 'Software', 'Marketing', 'Video', 'Photography', 'Campaigns']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter || project.services.includes(activeFilter))

  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Work</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            A portfolio structure for brand, media, technology, and growth work.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            Current public assets include video production, short-form content, and graphic design work.
            Placeholder project structures are included where real proof can be added later without inventing results.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'border-cyan-300/60 bg-cyan-300/10 text-white'
                  : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.name} className="overflow-hidden border border-white/10 bg-white/[0.04]">
              <div className="aspect-video bg-[#11131d]">
                <img src={project.preview} alt={project.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                    {project.category}
                  </span>
                  {project.placeholder && (
                    <span className="border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                      Replaceable
                    </span>
                  )}
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-white">{project.name}</h2>
                <dl className="mt-4 grid gap-3 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Client or brand type</dt>
                    <dd className="mt-1 text-gray-300">{project.brandType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Industry</dt>
                    <dd className="mt-1 text-gray-300">{project.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Services delivered</dt>
                    <dd className="mt-1 text-gray-300">{project.services.join(', ')}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-7 text-gray-400">{project.description}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-sm text-gray-300">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="font-heading text-4xl font-bold text-white">Have a project that needs strategy and execution?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Send the brief and we will help shape the brand, content, platform, campaign, or software system around it.
        </p>
        <Link href="/contact" className="mt-8 inline-block bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
          Send Us a Brief
        </Link>
      </section>
    </main>
  )
}
