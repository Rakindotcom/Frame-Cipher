import Link from 'next/link'
import SectionButton from '../home/SectionButton'
import {
  TrendingUp,
  Search,
  Code2,
  Video,
  Smartphone,
  Share2,
  FileText,
  Sparkles,
} from 'lucide-react'

const pillarIcons = {
  'paid-advertising': TrendingUp,
  seo: Search,
  'website-design-development': Code2,
  'content-creation': Video,
  'app-development': Smartphone,
  'social-media-management': Share2,
  'content-writing': FileText,
}

export default function ServicesPillarsGrid({ pillarGroups }) {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-medium leading-[0.96] tracking-tight text-white sm:text-5xl md:text-6xl">
              Seven service areas carrying the <span className="text-white">work.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Start with one specialist service or connect several service areas into a single delivery system.
              Every route below leads to a dedicated service team, process, and scope.
            </p>
          </div>
          <SectionButton href="/contact">Start a brief</SectionButton>
        </div>

        {/* Nuxt-Grade Modality B Card Grid with Real Gutters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillarGroups.map(({ pillar, name, summary, subServices }, index) => {
            const IconComponent = pillarIcons[pillar.slug] || Sparkles
            return (
              <Link
                key={pillar.slug}
                href={pillar.fullPath}
                className="group relative flex min-h-64 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <IconComponent
                      className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110 shrink-0"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 font-medium">
                      {subServices.length} specialist services
                    </span>
                    <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200">
                      {name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200">
                      {summary}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-wider text-white group-hover:text-purple-300 transition-colors">
                  <span>View services</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
