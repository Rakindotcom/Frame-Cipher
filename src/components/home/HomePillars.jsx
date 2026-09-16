import { servicePillars } from '../../data/agency'

export default function HomePillars() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            The offer / Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            One roof. No vendor drift.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Frame Cipher is built for teams that need the thinking, the assets, the platforms, and the campaign machine to behave like one system.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group flex flex-col justify-between bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent sm:p-7 md:min-h-80"
            >
              <div>
                <p
                  className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-6xl"
                  aria-hidden="true"
                >
                  0{index + 1}
                </p>
                <h3 className="mt-6 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-2xl">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
