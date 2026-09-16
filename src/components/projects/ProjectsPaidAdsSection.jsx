import { SectionHeading, ProjectCard } from '../GrowthPortfolioSection'

export default function ProjectsPaidAdsSection({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section id="paid-ads-work" className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20">
      <div id="performance-work" className="-mt-36 pt-36" aria-hidden="true" />
      <div className="mx-auto max-w-[95vw]">
        <SectionHeading
          number="05"
          title="Paid advertising"
          count={`${projects.length} project${projects.length === 1 ? '' : 's'}`}
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
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
