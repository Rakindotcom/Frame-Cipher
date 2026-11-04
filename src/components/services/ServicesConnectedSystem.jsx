import Link from 'next/link'

const center = {
  title: 'Frame Cipher',
  subtitle: 'One full-stack partner, five connected capabilities.',
}

const categories = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Content strategy, positioning, and campaign planning.',
    href: '/services/content-creation/branding',
  },
  {
    number: '02',
    title: 'Marketing',
    description: 'SEO, paid ads, social media, and performance reporting.',
    href: '/services/paid-advertising',
  },
  {
    number: '03',
    title: 'Creative',
    description: 'Brand identity, design systems, and campaign visuals.',
    href: '/services/content-creation',
  },
  {
    number: '04',
    title: 'Media',
    description: 'Photo, video, reels, editing, and campaign-ready assets.',
    href: '/services/content-creation/video-production',
  },
  {
    number: '05',
    title: 'Technology',
    description: 'Websites, e-commerce, apps, and custom software.',
    href: '/services/website-design-development',
  },
]

export default function ServicesConnectedSystem() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Different services.{' '}
            <span className="italic text-frame-accent">
              One connected system.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every service can be hired alone, but the results compound when strategy, marketing,
            creative, media, and technology move on the same plan.
          </p>
        </div>

        {/* Central Hub Sovereign Core Banner */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#18181B] text-frame-accent border border-white/[0.08]">
              The Sovereign Core
            </span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {center.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[1.1px] text-zinc-400">
              {center.subtitle}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[1.1px] text-frame-accent hover:text-white transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent rounded"
          >
            <span>Consult Unified Team</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* 5-Column Architectural Band (Modality 2) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden">
          {categories.map((category) => (
            <div
              key={category.number}
              className="group relative flex flex-col justify-between bg-[#121214] p-6 transition-colors duration-200 hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-medium tabular-nums text-zinc-500">
                    /{category.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" aria-hidden="true" />
                </div>
                <h4 className="mt-6 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  <Link href={category.href} className="after:absolute after:inset-0 after:content-['']">
                    {category.title}
                  </Link>
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[1.1px]">
                <span className="text-zinc-500">Pillar</span>
                <span className="text-zinc-400 group-hover:text-white transition-colors" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#121214] p-5 rounded-xl">
          <p className="font-mono text-xs text-zinc-400">
            One brief, one team, one system, from strategy to execution.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[1.1px] text-frame-accent hover:text-white transition-colors"
          >
            <span>Start a Project</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
