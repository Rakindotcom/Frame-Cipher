import Link from 'next/link'
import SectionButton from '../home/SectionButton'

export default function ServicesPillarsGrid({ pillarGroups }) {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">

            <h2 className="font-heading text-3xl font-medium leading-[0.96] tracking-tight text-white sm:text-5xl md:text-6xl">
              Seven service areas carrying the <span className="italic text-frame-accent">work.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Start with one specialist service or connect several service areas into a single delivery system.
              Every route below leads to a dedicated service team, process, and scope.
            </p>
          </div>
          <SectionButton href="/contact">Start a brief</SectionButton>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-4">
          {pillarGroups.map(({ pillar, name, summary, subServices }, index) => (
            <Link
              key={pillar.slug}
              href={pillar.fullPath}
              className="group relative flex min-h-64 flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">{subServices.length} specialist services</span>
                  <span className="font-mono text-sm text-zinc-500 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">{name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200">{summary}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white">
                View services <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
