const stats = [
  { value: '74', label: 'Services' },
  { value: '7', label: 'Service areas' },
  { value: '50+', label: 'Brands served' },
  { value: '20+', label: 'Countries served' },
  { value: '100%', label: 'In-house team' },
]

export default function ServicesStats() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-14 text-frame-accent-fg md:px-8 md:py-20">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-px bg-frame-accent-fg/40 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <article key={stat.label} className="flex flex-col items-center justify-center bg-frame-accent px-4 py-8 text-center">
              <p className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent-fg/85 sm:text-xs">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}