'use client'

import AnimatedCounter from '../home/AnimatedCounter'

const stats = [
  { target: 74, suffix: '+', label: 'Focused Services', note: 'Full-stack delivery' },
  { target: 7, suffix: '', label: 'Macro Pillars', note: 'Strategy to execution' },
  { target: 50, suffix: '+', label: 'Brands Served', note: 'Documented growth' },
  { target: 20, suffix: '+', label: 'Countries Served', note: 'Dhaka & global scope' },
  { target: 100, suffix: '%', label: 'In-House Team', note: 'Direct accountability' },
]

export default function ServicesStats() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#121214] p-6 text-center transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl overflow-hidden"
            >
              {/* Top hairline purple glow */}
              <div className="pointer-events-none absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition-all duration-300 group-hover:via-purple-500" />

              <p className="font-mono text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white tabular-nums">
                <AnimatedCounter value={stat.target} suffix={stat.suffix} duration={1200} />
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-zinc-300 font-medium">
                {stat.label}
              </p>
              <span className="mt-1 font-mono text-[10px] text-zinc-500">
                {stat.note}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
