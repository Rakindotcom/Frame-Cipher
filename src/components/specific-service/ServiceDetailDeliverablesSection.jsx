import { SectionIntro } from '../Kinetic'

function DetailCard({ title, number, children }) {
  return (
    <article className="min-h-64 rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]">
      <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-purple-400/40">{number}</p>
      <h3 className="mt-8 font-heading text-2xl font-medium leading-tight tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-5 text-base font-medium leading-relaxed text-zinc-400 wide:text-lg">{children}</p>
    </article>
  )
}

export default function ServiceDetailDeliverablesSection({ landing }) {
  if (!landing?.detailedDeliverables?.length) return null

  return (
    <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Detailed deliverables" title="What you receive.">
          Concrete outputs keep the service practical, trackable, and easier for your team to use.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
