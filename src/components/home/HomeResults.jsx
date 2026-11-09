import AnimatedCounter from './AnimatedCounter'

const metrics = [
  { value: '50+', label: 'Businesses worked with', note: 'Startups to established brands' },
  { value: '74+', label: 'Marketing & technology capabilities', note: 'Across 7 core service areas' },
  { value: '360°', label: 'Integrated business approach', note: 'All execution under one team' },
  { value: 'Bangladesh + Worldwide', label: 'Client coverage', note: 'Remote-first delivery model' },
]

export default function HomeResults() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Built around business outcomes
            </h2>
          </div>
          <div className="border-l border-white/[0.08] pl-6">
            <p className="text-base font-normal leading-relaxed text-white md:text-lg">
              The goal is not simply to launch a website, publish content, or run ads. The goal is
              to create measurable business impact, defensible market share, and revenue momentum.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const hasNumber = /\d/.test(metric.value)
            return (
              <article
                key={metric.label}
                className="group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-600">
                    {metric.label}
                  </span>
                  <p className="mt-4 font-heading text-4xl sm:text-5xl font-semibold leading-none text-highlighted tabular-nums">
                    {hasNumber ? (
                      <AnimatedCounter
                        value={metric.value}
                        duration={1800}
                        delay={index * 120}
                        suffixClassName="text-purple-600"
                      />
                    ) : (
                      metric.value
                    )}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="text-xs font-normal leading-relaxed text-white group-hover:text-default">
                    {metric.note}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
