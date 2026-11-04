import { SectionHeading, ProjectCard } from '../GrowthPortfolioSection'

export default function ProjectsPaidAdsSection({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section id="paid-ads-work" className="relative isolate scroll-mt-36 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24">
      <div id="performance-work" className="-mt-36 pt-36" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          title="Paid advertising"
          count={`${projects.length} project${projects.length === 1 ? '' : 's'}`}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={index + 1}
              className={index < 4 ? 'xl:col-span-3' : 'xl:col-span-4'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
