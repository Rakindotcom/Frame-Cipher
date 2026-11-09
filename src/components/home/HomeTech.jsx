import { Monitor, Server, BarChart3, Clapperboard, Download, Star, Activity, Check } from 'lucide-react'

const capabilityGroups = [
  {
    title: 'Web & Digital Platforms',
    description: 'High-performance web applications, headless commerce, and conversion-focused architectures.',
    items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4', 'Shopify', 'Headless CMS'],
    icon: Monitor,
    stats: {
      downloads: '100% SSR',
      stars: 'v15.2',
      health: '99',
    },
  },
  {
    title: 'Backend, Cloud & Systems',
    description: 'Custom APIs, database architecture, CRM workflows, and business automation software.',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Vercel Edge', 'Webhooks'],
    icon: Server,
    stats: {
      downloads: '<45ms',
      stars: 'Edge',
      health: '99.9',
    },
  },
  {
    title: 'MarTech & Attribution',
    description: 'Server-side tracking, algorithmic ad platforms, search intelligence, and conversion analytics.',
    items: ['Meta CAPI', 'GTM Server', 'Google Ads', 'Meta Ads', 'Looker Studio', 'AEO/GEO'],
    icon: BarChart3,
    stats: {
      downloads: '9.4/10',
      stars: 'CAPI',
      health: '100',
    },
  },
  {
    title: 'Studio & Cinema Engine',
    description: 'Studio commercial filming, cinematic color grading, motion graphics, and audio mastering.',
    items: ['Sony FX Rigs', 'DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Studio Audio'],
    icon: Clapperboard,
    stats: {
      downloads: '4K 10-Bit',
      stars: 'Cinema',
      health: '98',
    },
  },
]

export default function HomeTech() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Technology behind the work
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
            From modern websites to custom business systems, we use technology based on the
            actual requirements of the project, not a fixed template.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityGroups.map((group, index) => {
            const IconComponent = group.icon
            return (
              <article
                key={group.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  {/* Top-Left Iconic Accent Icon (Deep Purple, sitting cleanly on canvas) */}
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default">
                    {group.description}
                  </p>

                  {/* Technology Options (Horizontal Tickmark Items, No Boxes) */}
                  <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 text-xs font-normal text-white hover:text-default transition-colors"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-purple-600" strokeWidth={2.5} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Delivery Speed">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{group.stats.downloads}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Stack Version">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{group.stats.stars}</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="System Health">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>{group.stats.health}</span>
                    </span>
                  </div>

                  {/* Nuxt Terminal Prompt Badge (>_) */}
                  <div className="flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors">
                    &gt;_
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
