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

export default function ServiceDetailOutputsSection({ landing }) {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-2">
        <ListPanel title="Sample outputs" items={landing.sampleOutputs} />
        <ListPanel title="Keywords we can help target" items={landing.keywords} />
      </div>
    </section>
  )
}
