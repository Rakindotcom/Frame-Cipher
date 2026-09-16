import { servicePillars } from '../../data/agency'
import { InversionCard, SectionIntro } from '../Kinetic'

export default function AboutCapabilityMix() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capability mix" title="Five engines. One rhythm.">
          The team structure is deliberately connected so strategy can shape production, production can
          feed campaigns, and data can sharpen the next build.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {servicePillars.map((pillar, index) => (
            <InversionCard key={pillar.title} title={pillar.title} number={`0${index + 1}`}>
              <p>{pillar.description}</p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
