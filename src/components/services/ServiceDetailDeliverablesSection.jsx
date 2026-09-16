import { SectionIntro } from '../Kinetic'

function DetailCard({ title, number, children }) {
  return (
    <article className="min-h-64 bg-frame-bg p-7">
      <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted">{number}</p>
      <h3 className="mt-8 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
        {title}
      </h3>
      <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg">{children}</p>
    </article>
  )
}

export default function ServiceDetailDeliverablesSection({ landing }) {
  if (!landing?.detailedDeliverables?.length) return null

  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Detailed deliverables" title="What you receive.">
          Concrete outputs keep the service practical, trackable, and easier for your team to use.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
          {landing.detailedDeliverables.map((item, index) => (
            <DetailCard key={item.title} title={item.title} number={String(index + 1).padStart(2, '0')}>
              {item.text}
            </DetailCard>
          ))}
        </div>
      </div>
    </section>
  )
}
