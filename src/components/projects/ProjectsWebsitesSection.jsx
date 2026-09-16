import Link from 'next/link'
import { SectionHeading } from '../GrowthPortfolioSection'

export default function ProjectsWebsitesSection({ websites }) {
  if (!websites || websites.length === 0) return null

  return (
    <section
      id="website-work"
      className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
    >
      <div id="software-work" className="-mt-36 pt-36" aria-hidden="true" />
      <div className="mx-auto max-w-[95vw] overflow-hidden">
        <SectionHeading
          number="01"
          title="Websites in action"
          count={`${websites.length} project${websites.length === 1 ? '' : 's'}`}
        />

        <div className="mt-7 grid min-w-0 gap-5 overflow-hidden lg:grid-cols-2">
          {websites.map((project, index) => {
            const isFinalOddCard =
              websites.length % 2 === 1 && index === websites.length - 1

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
                    <div className="flex items-center gap-2 border-b-2 border-frame-border bg-frame-bg px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-frame-accent" />
                      <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/30" />
                      <span className="ml-3 min-w-0 truncate text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg">
                        {project.domain}
                      </span>
                    </div>

                    <div className="aspect-video overflow-hidden bg-frame-muted">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} website screenshot`}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover/image:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </a>

                  <div className="grid content-between gap-4 p-5 md:p-6">
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                        {project.category}
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 break-words text-sm font-black uppercase tracking-[0.14em] text-frame-muted-fg">
                        {project.domain}
                      </p>
                    </div>
                    <p className="max-w-2xl text-sm font-medium leading-tight text-frame-muted-fg md:text-base">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-3">
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
      </div>
    </section>
  )
}
