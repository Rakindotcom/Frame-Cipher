import { industryDetails } from '../../data/agency'

export default function ServicesIndustries() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Built for different{' '}
              <span className="italic text-frame-accent">
                types of businesses.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            The services adapt around the market, but the operating model stays the same: strategy,
            creative, web, media, and performance connected under one roof.
          </p>
        </div>

        {/* Architectural Blueprint Matrix */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((item, index) => (
            <article
              key={item.industry}
              className="group flex min-h-56 flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] md:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-zinc-500">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#18181B] text-frame-accent border border-white/[0.08]">
                    Sector 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {item.industry}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {item.line}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
