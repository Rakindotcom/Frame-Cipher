import Link from 'next/link'
import { portfolioProjects } from '../../data/agency'
import SectionButton from './SectionButton'

export default function HomeFeaturedWork() {
  const featuredProjects = portfolioProjects.slice(0, 3)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Proof with pixels
            </h2>
            <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
              High-impact creative production, visual identities, and studio assets crafted to command attention.
            </p>
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
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
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-600">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-muted group-hover:text-default transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Project Action */}
              <div className="border-t border-white/[0.06] p-6 pt-4 sm:p-7 sm:pt-4">
                <Link
                  href="/projects"
                  className="group/btn relative z-10 inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                >
                  <span>View project</span>
                  <span
                    aria-hidden="true"
                    className="ml-2 text-base text-zinc-400 transition-transform duration-200 group-hover/btn:translate-x-1.5 group-hover/btn:text-purple-600"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
