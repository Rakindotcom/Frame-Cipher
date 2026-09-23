const metrics = [
  { value: '50+', label: 'Businesses worked with', note: 'Startups to established brands' },
  { value: '74+', label: 'Marketing & technology capabilities', note: 'Across 7 core service areas' },
  { value: '360°', label: 'Integrated business approach', note: 'All execution under one team' },
  { value: 'Bangladesh + Worldwide', label: 'Client coverage', note: 'Remote-first delivery model' },
]

export default function HomeResults() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-20 text-frame-accent-fg md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <h2 className="font-heading text-[clamp(2.8rem,7.5vw,7.5rem)] font-bold uppercase leading-[0.82] tracking-tighter">
            Built around business outcomes.
          </h2>
          <p className="text-base font-semibold leading-snug opacity-90 sm:text-xl md:text-2xl">
            The goal is not simply to launch a website, publish content, or run ads. The goal is
            to create measurable business impact.
          </p>
        </div>

        <div className="grid bg-frame-accent-fg gap-px sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="flex min-h-52 flex-col justify-between bg-frame-accent p-6 sm:p-7"
            >
              <p className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-bold uppercase leading-none tracking-tighter">
                {metric.value}
              </p>
              <div className="mt-6 border-t-2 border-frame-accent-fg/25 pt-4">
                <p className="text-sm font-black uppercase leading-snug tracking-[0.12em]">{metric.label}</p>
                <p className="mt-1.5 text-xs font-medium leading-relaxed opacity-75">{metric.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}