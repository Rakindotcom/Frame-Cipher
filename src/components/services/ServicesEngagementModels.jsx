import { engagementModels } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

export default function ServicesEngagementModels() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Engagement Models" title="Pick the pressure level.">
          The model changes around the stage of the business and the amount of execution the team needs.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {engagementModels.map((model) => (
            <article
              key={model.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[#FAFAFA]">
                  {model.title}
                </h3>
                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A855F7]">
                    Best For
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{model.bestFor}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A855F7]">
                  Includes
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#71717A]">{model.includes}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
