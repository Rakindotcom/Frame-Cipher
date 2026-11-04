import Link from 'next/link'
import { portfolioProjects } from '../../data/agency'
import SectionButton from './SectionButton'

export default function HomeFeaturedWork() {
  const featuredProjects = portfolioProjects.slice(0, 3)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Proof with{' '}
              <span className="italic text-frame-accent">
                pixels.
              </span>
            </h2>
          </div>
          <div className="shrink-0">
            <SectionButton href="/projects">Explore all projects</SectionButton>
          </div>
        </div>

        {/* Grid for featured work */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-white/[0.08]">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Story */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] text-frame-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-medium text-white transition-colors group-hover:text-frame-accent sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Project Action */}
              <div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
                <Link
                  href="/projects"
                  className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]"
                >
                  <span>View project</span>
                  <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
