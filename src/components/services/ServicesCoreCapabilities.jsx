import { servicePillars } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

export default function ServicesCoreCapabilities() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Core capabilities / what we do"
          title="One team across five core capabilities."
          index="05"
        >
          Most projects need more than one skill. Frame Cipher keeps marketing, creative, media,
          and technology under one roof so nothing gets lost between partners.
        </SectionIntro>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group flex min-h-64 flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors duration-300 hover:border-frame-accent md:p-9"
            >
              <div>
                <div className="flex items-center justify-between gap-5">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-2 w-10 bg-frame-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-8 text-base font-medium leading-snug text-frame-muted-fg md:text-lg">
                {pillar.description}
              </p>
            </article>
          ))}

          <a
            href="/contact"
            className="group flex min-h-64 flex-col justify-between border-2 border-frame-accent bg-frame-accent p-7 transition-colors duration-300 hover:bg-frame-fg md:p-9"
          >
            <div>
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent-fg/70 md:text-5xl">
                06
              </span>
              <h3 className="mt-8 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-accent-fg md:text-4xl">
                Need it all?
              </h3>
            </div>
            <p className="mt-8 text-base font-bold uppercase tracking-wide text-frame-accent-fg/90">
              Start a project →
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}