import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'rounded-xl border border-white/[0.08] bg-white/[0.035]'

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">

      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceProcess({ processSteps }) {
  if (!processSteps?.length) return null

  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Delivery process" title="A clear path from brief to result">
          Each stage has a defined outcome and review point, so you always know what is happening next.
        </SectionHeading>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={`${step.title}-${index}`} className={`${surface} relative overflow-hidden  p-7`}>
              <span aria-hidden="true" className="absolute -right-2 -top-4 font-heading text-7xl font-semibold text-white/[0.035]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                Step {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                {cleanText(step.title)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {cleanText(step.description)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
