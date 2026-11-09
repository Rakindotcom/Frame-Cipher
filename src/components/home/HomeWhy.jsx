import { Users, Building2, Target, Network, TrendingUp, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    title: 'One team',
    description:
      'Strategy, content, technology, and marketing under one roof.',
    icon: Users,
  },
  {
    title: 'In-house execution',
    description:
      'Creative, development, and marketing capabilities handled by one coordinated team.',
    icon: Building2,
  },
  {
    title: 'Business first',
    description:
      'We start with the business problem instead of jumping directly into a service.',
    icon: Target,
  },
  {
    title: 'Connected systems',
    description:
      'Websites, content, advertising, SEO, analytics, and technology work together.',
    icon: Network,
  },
  {
    title: 'Built for growth',
    description:
      'Projects are designed with future expansion and continuous optimization in mind.',
    icon: TrendingUp,
  },
]

export default function HomeWhy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Header & The Result Anchor */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
                Why businesses work with Frame Cipher
              </h2>
              <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-white md:text-lg">
                The difference is not the number of services, it is how they are connected and who
                is held accountable for the result.
              </p>

              {/* The Result Highlight Box */}
              <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/30 bg-purple-600/10 text-purple-600 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                  Zero Vendor Friction
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-white">
                  One disciplined partner holding total accountability for your brand, media, web, campaigns, and compounding growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Divided List of Reasons */}
          <div className="border-t border-white/[0.08] lg:col-span-7">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <article
                  key={reason.title}
                  className="group border-b border-white/[0.08] py-8 transition-colors duration-200 hover:bg-white/[0.02] sm:py-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-600/30 bg-purple-600/10 text-purple-600 transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm md:text-base font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default">
                    {reason.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
