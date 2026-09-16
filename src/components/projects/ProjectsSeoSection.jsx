import { SectionHeading, ProjectCard } from '../GrowthPortfolioSection'

export default function ProjectsSeoSection({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section id="seo-work" className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionHeading
          number="04"
          title="Search growth"
          count={`${projects.length} project${projects.length === 1 ? '' : 's'}`}
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={index + 1}
              showSummary
            />
          ))}
        </div>
      </div>
    </section>
  )
}
