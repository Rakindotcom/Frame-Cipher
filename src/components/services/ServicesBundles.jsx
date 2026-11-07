import PosterButton from '../home/PosterButton'
import { Check, Rocket, TrendingUp, ShoppingCart, Cpu, Layers, Sliders } from 'lucide-react'

const bundles = [
  {
    number: '01',
    title: 'Launch',
    icon: Rocket,
    bestFor: 'New businesses ready to start',
    includes: 'Brand basics, website, social setup, and launch content.',
    href: '/contact',
    cta: 'Start a Launch Project',
  },
  {
    number: '02',
    title: 'Growth',
    icon: TrendingUp,
    bestFor: 'SMEs and growing brands',
    includes: 'Branding, website, SEO, social media, paid ads, and reporting.',
    href: '/contact',
    cta: 'Start a Growth Project',
  },
  {
    number: '03',
    title: 'E-commerce Growth',
    icon: ShoppingCart,
    bestFor: 'Online shops and product brands',
    includes: 'Store, product pages, content, ads, email, and conversion optimization.',
    href: '/contact',
    cta: 'Start an E-commerce Project',
  },
  {
    number: '04',
    title: 'Digital Transformation',
    icon: Cpu,
    bestFor: 'Businesses going digital',
    includes: 'Custom software, CRM/ERP, dashboards, automation, and integrations.',
    href: '/contact',
    cta: 'Start a Transformation Project',
  },
  {
    number: '05',
    title: '360° Partnership',
    icon: Layers,
    bestFor: 'Brands ready for serious growth',
    includes: 'Strategy, media, marketing, software, analytics, and ongoing execution.',
    href: '/contact',
    cta: 'Start a 360 Project',
  },
]

export default function ServicesBundles() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Combine the right services for your{' '}
            <span className="text-white">
              goal.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every business is different. Pick a bundle that matches your stage, or build a custom mix
            with a quick call.
          </p>
        </div>

        {/* Modality B Nuxt Module Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle) => {
            const BundleIcon = bundle.icon
            return (
              <article
                key={bundle.number}
                className="group relative flex min-h-80 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <BundleIcon className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-medium text-zinc-500 tabular-nums">
                        /{bundle.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                        Bundle
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {bundle.title}
                  </h3>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                    Best for
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {bundle.bestFor}
                  </p>

                  {/* Scope with Checkbox Icon */}
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-[#18181B] p-3 text-sm text-zinc-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" aria-hidden="true">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span className="text-xs leading-relaxed text-zinc-300">{bundle.includes}</span>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <PosterButton href={bundle.href} variant="outline" className="w-full">
                    {bundle.cta}
                  </PosterButton>
                </div>
              </article>
            )
          })}

          {/* Custom Bundle 6th Tile */}
          <article className="group relative flex min-h-80 flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#151518] p-7 md:p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#18181B] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-500/60 before:to-transparent">
            <div>
              <div className="flex items-start justify-between gap-4">
                <Sliders className="h-6 w-6 text-purple-600 shrink-0" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-medium text-zinc-400 tabular-nums">
                    /06
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                    Custom
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-white md:text-3xl">
                Build your own
              </h3>
              <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                Not sure what you need? Tell us your budget and goals, and we&apos;ll put the right
                mix together.
              </p>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <PosterButton href="/contact" className="w-full">
                Talk to Us
              </PosterButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
