import { ShieldCheck, Scale, Layers, Zap, KeyRound, TrendingUp } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Zero Outsourcing. Absolute Craft Ownership.',
    icon: ShieldCheck,
    desc: 'We never farm out client work to third-party freelancers or unknown offshore vendors. Every line of code, design system, cinematic video frame, and ad campaign is conceived, engineered, and executed by our in-house team in Dhaka with full accountability.',
  },
  {
    number: '02',
    title: 'Mathematical Precision Over Subjective Fluff.',
    icon: Scale,
    desc: 'We do not rely on vanity impressions or subjective opinions. Every marketing strategy, search engine optimization sprint, and ad budget allocation is grounded in verifiable unit economics, second-price auction mechanics, and conversion math.',
  },
  {
    number: '03',
    title: 'Full-Funnel Convergence.',
    icon: Layers,
    desc: 'Silos kill growth. At Frame Cipher, software developers sit with media buyers, and art directors brainstorm with conversion copywriters. This convergence ensures creative assets are built specifically to lower ad CPAs, and web code is built specifically to maximize SEO crawlability and conversion velocity.',
  },
  {
    number: '04',
    title: 'Multinational Quality at Sovereign Velocity.',
    icon: Zap,
    desc: 'We deliver enterprise-grade digital products and global campaigns in weeks, not the months or quarters demanded by slow-moving legacy consulting conglomerates. Agility, clean communication, and rapid iteration are encoded into our DNA.',
  },
  {
    number: '05',
    title: 'Transparent Attribution & Direct Code Ownership.',
    icon: KeyRound,
    desc: 'Our clients own 100% of their intellectual property from day one, including Git repositories, cloud deployment accounts, raw video files, and ad managers. No vendor lock-in, no hostage code, and zero hidden markups.',
  },
  {
    number: '06',
    title: 'Long-Term Compounding Over Disposable Trends.',
    icon: TrendingUp,
    desc: 'We build digital assets engineered to compound in value over 3 to 5 years: authoritative search equity, proprietary customer data assets, scalable software architectures, and enduring brand affinity that survives algorithmic shifts.',
  },
]

export default function AboutPrinciples() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
            No Soft Middle. Zero Mystery Handoffs.
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Our operating principles govern every decision we make, from how we structure our React components and database schemas to how we buy media on global ad networks.
          </p>
        </div>

        {/* 6-Card Nuxt Module Grid (Clean, Zero Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div>
                  {/* Top Row: Pure Icon + Clean Sequence Number */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  {/* Clean Solid White Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold leading-snug text-highlighted tracking-tight">
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
                    {item.desc}
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
