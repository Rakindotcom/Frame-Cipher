import { SectionIntro } from '../Kinetic'

export default function ServiceDetailRelatedWorkSection({ projects }) {
  if (!projects?.length) return null

  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Related work" title="Relevant project structures." />
        <div className="grid bg-frame-border gap-px md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="group bg-frame-bg">
              <div className="relative aspect-video overflow-hidden border-b-2 border-frame-border bg-frame-muted">
                <img
                  src={project.preview}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <p className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                  0{index + 1} / {project.category}
                </p>
              </div>
              <div className="p-7">
                <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg">
                  {project.description}
                </p>
                <p className="mt-6 border-t-2 border-frame-border pt-5 text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
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
