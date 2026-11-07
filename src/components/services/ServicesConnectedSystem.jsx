import Link from 'next/link'
import { Compass, TrendingUp, Palette, Video, Code2 } from 'lucide-react'

const center = {
  title: 'Frame Cipher',
  subtitle: 'One full-stack partner, five connected capabilities.',
}

const categories = [
  {
    number: '01',
    title: 'Strategy',
    icon: Compass,
    description: 'Content strategy, positioning, and campaign planning.',
    href: '/services/content-creation/branding',
  },
  {
    number: '02',
    title: 'Marketing',
    icon: TrendingUp,
    description: 'SEO, paid ads, social media, and performance reporting.',
    href: '/services/paid-advertising',
  },
  {
    number: '03',
    title: 'Creative',
    icon: Palette,
    description: 'Brand identity, design systems, and campaign visuals.',
    href: '/services/content-creation',
  },
  {
    number: '04',
    title: 'Media',
    icon: Video,
    description: 'Photo, video, reels, editing, and campaign-ready assets.',
    href: '/services/content-creation/video-production',
  },
  {
    number: '05',
    title: 'Technology',
    icon: Code2,
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
            <span className="text-white">
              One connected system.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every service can be hired alone, but the results compound when strategy, marketing,
            creative, media, and technology move on the same plan.
          </p>
        </div>

        {/* Central Hub Sovereign Core Banner */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-2xl relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-500/60 before:to-transparent">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
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
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[1.1px] text-purple-400 hover:text-purple-300 transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5"
          >
            <span>Consult Unified Team</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Modality B 5-Column Nuxt Module Card Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium tabular-nums text-zinc-500">
                      /{category.number}
                    </span>
                  </div>
                  <h4 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
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
                  <span className="text-zinc-400 group-hover:text-purple-400 transition-colors" aria-hidden="true">&rarr;</span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#121214] p-5 rounded-2xl">
          <p className="font-mono text-xs text-zinc-400">
            One brief, one team, one system, from strategy to execution.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[1.1px] text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Start a Project</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
