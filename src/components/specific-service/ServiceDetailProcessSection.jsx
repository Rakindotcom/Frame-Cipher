import { SectionIntro } from '../Kinetic'

export default function ServiceDetailProcessSection({ landing }) {
  if (!landing?.process?.length) return null

  return (
    <section className="relative isolate border-y border-white/[0.08] bg-[#09090B] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Process" title="How the workflow moves.">
          A clear sequence keeps the service from becoming a loose pile of tasks.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-3">
          {landing.process.map((step, index) => (
            <article key={step.title} className="group min-h-72 rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
              <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-purple-400/40 transition-colors duration-300 group-hover:text-purple-300">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-8 font-heading text-xl font-medium leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-frame-accent">
                {step.title}
              </h3>
              <p className="mt-5 text-base font-medium leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 wide:text-lg">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
