function ListPanel({ title, items }) {
  if (!items?.length) return null

  return (
    <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
      <h2 className="font-heading text-2xl sm:text-3xl font-medium leading-[0.96] tracking-tight text-white">
        {title}
      </h2>
      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-base md:text-lg font-medium leading-relaxed text-zinc-300">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function ServiceDetailOutputsSection({ landing }) {
  return (
    <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <ListPanel title="Sample outputs" items={landing.sampleOutputs} />
        <ListPanel title="Keywords we can help target" items={landing.keywords} />
      </div>
    </section>
  )
}
