import { SectionIntro } from '../Kinetic'

export default function ServiceDetailProcessSection({ landing }) {
  if (!landing?.process?.length) return null

  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Process" title="How the workflow moves.">
          A clear sequence keeps the service from becoming a loose pile of tasks.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {landing.process.map((step, index) => (
            <article key={step.title} className="group min-h-72 bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent">
              <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-8 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                {step.title}
              </h3>
              <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
