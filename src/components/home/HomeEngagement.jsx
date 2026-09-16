import { engagementModels } from '../../data/agency'

export default function HomeEngagement() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Engagement / Models
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Choose the pressure level.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            From launch kits to full 360 partnerships, the model changes around your stage and the amount of execution your team needs.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-5">
          {engagementModels.map((model) => (
            <article key={model.title} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-7">
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                  {model.title}
                </h3>
                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.26em] text-frame-accent">
                  Best for
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-frame-muted-fg sm:text-base">
                  {model.bestFor}
                </p>
              </div>

              <div className="mt-8 border-t border-frame-border/80 pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.26em] text-frame-accent">
                  Includes
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-frame-muted-fg sm:text-base">
                  {model.includes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
