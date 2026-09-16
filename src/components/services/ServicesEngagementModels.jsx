import { engagementModels } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

export default function ServicesEngagementModels() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engagement models" title="Pick the pressure level.">
          The model changes around the stage of the business and the amount of execution the team needs.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px lg:grid-cols-5">
          {engagementModels.map((model) => (
            <article key={model.title} className="bg-frame-bg p-7">
              <h3 className="font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-2xl">
                {model.title}
              </h3>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Best for</p>
              <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.bestFor}</p>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Includes</p>
              <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.includes}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
