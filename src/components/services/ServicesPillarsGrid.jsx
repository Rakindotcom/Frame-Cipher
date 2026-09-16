import { InversionCard, SectionIntro } from '../Kinetic'

export default function ServicesPillarsGrid({ pillarGroups }) {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core architecture" title="Seven pillars carrying the work.">
          Start with one specialist service or connect several pillars into a single delivery system.
          Every route below leads to a dedicated service team, process, and scope.
        </SectionIntro>

        <div className="grid gap-px bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {pillarGroups.map(({ pillar, name, summary, subServices }, index) => (
            <InversionCard
              key={pillar.slug}
              href={pillar.fullPath}
              eyebrow={`${subServices.length} specialist services`}
              title={name}
              number={String(index + 1).padStart(2, '0')}
            >
              <p>{summary}</p>
              <span className="mt-8 inline-block border-b-2 border-current pb-1 text-sm font-black uppercase tracking-tighter">
                Explore pillar &rarr;
              </span>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
