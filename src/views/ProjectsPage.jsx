'use client'

import { useState } from 'react'
import { portfolioProjects } from '../data/agency'
import { CTASection, PageHero, PosterButton, TypeMarquee } from '../components/Kinetic'

const filters = ['All', 'Branding', 'Websites', 'Software', 'Marketing', 'Video', 'Photography', 'Campaigns']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter || project.services.includes(activeFilter))

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Work"
        meta={`${filteredProjects.length} visible / ${portfolioProjects.length} total`}
        number="06"
        title="Project systems with visible structure"
        actions={
          <>
            <PosterButton href="/contact">Send us a brief</PosterButton>
            <PosterButton href="/case-studies" variant="outline">Case structures</PosterButton>
          </>
        }
      >
        Current public assets include video production, short-form content, and graphic design work.
        Placeholder project structures are included where real proof can be added later without inventing results.
      </PageHero>

      <TypeMarquee items={filters.slice(1)} slow />

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap gap-3" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-11 border-2 px-5 py-3 text-sm font-black uppercase tracking-tighter transition-colors ${
                  activeFilter === filter
                    ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                    : 'border-frame-border text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-[95vw] bg-frame-border gap-px lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article key={project.name} className="group bg-frame-bg">
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-frame-border bg-frame-muted">
                <img src={project.preview} alt={project.name} className="h-full w-full object-cover saturate-0 transition duration-300 group-hover:scale-105 group-hover:saturate-100" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                    0{index + 1} / {project.category}
                  </span>
                  {project.placeholder && (
                    <span className="border-2 border-frame-border bg-frame-bg px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-muted-fg">
                      Replaceable
                    </span>
                  )}
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                  {project.name}
                </h2>
                <dl className="mt-7 grid gap-px bg-frame-border text-sm">
                  <MetaField label="Client or brand type" value={project.brandType} />
                  <MetaField label="Industry" value={project.industry} />
                  <MetaField label="Services delivered" value={project.services.join(', ')} />
                </dl>
                <p className="mt-6 text-base font-medium leading-tight text-frame-muted-fg">{project.description}</p>
                <p className="mt-6 border-t-2 border-frame-border pt-5 text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
                  {project.scope}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Have a project that needs strategy and execution?" primaryText="Send us a brief">
        Send the brief and we will help shape the brand, content, platform, campaign, or software system around it.
      </CTASection>
    </main>
  )
}

function MetaField({ label, value }) {
  return (
    <div className="bg-frame-bg p-4">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg">{label}</dt>
      <dd className="mt-2 font-medium leading-tight text-frame-fg">{value}</dd>
    </div>
  )
}
