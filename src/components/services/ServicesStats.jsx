const stats = [
  { value: '74', label: 'Services' },
  { value: '7', label: 'Service areas' },
  { value: '50+', label: 'Brands served' },
  { value: '20+', label: 'Countries served' },
  { value: '100%', label: 'In-house team' },
]

export default function ServicesStats() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-center transition-colors duration-300 hover:border-white/[0.18]"
            >
              <p className="font-mono text-4xl font-semibold tracking-tight text-[#FAFAFA] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#A1A1AA]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
