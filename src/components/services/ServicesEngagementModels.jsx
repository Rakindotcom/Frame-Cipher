import { engagementModels } from '../../data/agency'
import { SectionIntro } from '../Kinetic'
import { Rocket, TrendingUp, Video, Code2, Layers } from 'lucide-react'

const modelIcons = [Rocket, TrendingUp, Video, Code2, Layers]

export default function ServicesEngagementModels() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Engagement Models" title="Pick the pressure level.">
          The model changes around the stage of the business and the amount of execution the team needs.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {engagementModels.map((model, index) => {
            const Icon = modelIcons[index] || Layers
            return (
              <article
                key={model.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium tabular-nums text-zinc-500">
                      /{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-white">
                    {model.title}
                  </h3>
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{model.bestFor}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400">
                    Includes
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#71717A]">{model.includes}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
