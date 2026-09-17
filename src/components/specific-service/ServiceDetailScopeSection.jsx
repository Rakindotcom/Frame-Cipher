import { SectionIntro } from '../Kinetic'

function ListPanel({ title, items }) {
  if (!items?.length) return null

  return (
    <article className="bg-frame-bg p-7 md:p-10">
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        {title}
      </h2>
      <ul className="mt-10 grid gap-px bg-frame-border">
        {items.map((item) => (
          <li key={item} className="bg-frame-bg p-5 text-lg font-medium leading-tight text-frame-muted-fg md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function ServiceDetailScopeSection({ service, landing }) {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What Frame Cipher does" title={service.description}>
          {landing.whatWeDo}
        </SectionIntro>
        <div className="grid gap-px bg-frame-border lg:grid-cols-2">
          <ListPanel title="Who it is for" items={service.audience} />
          <ListPanel title="What it includes" items={service.includes} />
        </div>
      </div>
    </section>
  )
}
