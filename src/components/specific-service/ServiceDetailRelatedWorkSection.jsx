import { SectionIntro } from '../Kinetic'

export default function ServiceDetailRelatedWorkSection({ projects }) {
  if (!projects?.length) return null

  return (
    <section className="relative isolate border-y border-white/[0.08] bg-[#09090B] px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-1/4 -z-10 flex justify-center">
        <div className="h-80 w-[600px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Related work" title="Relevant project structures." />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.14]">
              <div className="relative aspect-video overflow-hidden border-b border-white/[0.08] bg-[#09090B]">
                <img
                  src={project.preview}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{index + 1} &middot; {project.category}
                </p>
                <h3 className="font-heading text-2xl font-medium leading-none tracking-tight text-white md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-zinc-400 wide:text-lg">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
