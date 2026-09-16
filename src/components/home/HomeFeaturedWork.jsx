import Link from 'next/link'
import { portfolioProjects } from '../../data/agency'

export default function HomeFeaturedWork() {
  const featuredProjects = portfolioProjects.slice(0, 3)

  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Selected work / Proof
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Proof with pixels.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 border-2 border-frame-border bg-transparent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 sm:text-sm md:min-h-14 md:px-8"
          >
            <span>Explore all projects</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article key={project.name} className="group flex flex-col justify-between bg-frame-bg">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-frame-border bg-frame-muted">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <p className="absolute left-3 top-3 bg-frame-accent px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg sm:left-4 sm:top-4 sm:text-xs">
                    0{index + 1} / {project.category}
                  </p>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-3xl md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-frame-border/70 p-6 pt-4 sm:p-7 sm:pt-4">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-frame-accent">
                  {project.scope}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
