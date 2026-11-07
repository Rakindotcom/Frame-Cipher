import { Check, Search, Code2, Target, Cpu } from 'lucide-react'

const deliverables = [
  {
    number: '01',
    title: 'SEO',
    icon: Search,
    tagline: 'Depending on the package you choose, you get:',
    items: [
      'Keyword research and strategy',
      'On-page SEO and content optimization',
      'Technical SEO and site speed',
      'Local SEO and Google Business Profile',
      'Backlink building',
      'SEO reports and tracking',
    ],
  },
  {
    number: '02',
    title: 'Website Development',
    icon: Code2,
    tagline: 'Depending on the package you choose, you get:',
    items: [
      'Custom design, copy, and development',
      'Speed and security optimization',
      'Mobile-first responsive layout',
      'CMS and admin access',
      'Contact forms and lead capture',
      'Launch, training, and support',
    ],
  },
  {
    number: '03',
    title: 'Paid Advertising',
    icon: Target,
    tagline: 'Depending on the package you choose, you get:',
    items: [
      'Campaign strategy and audience research',
      'Ad copy and creative testing',
      'Tracking setup and conversion pixels',
      'Landing pages for offers',
      'Monthly budget management',
      'Performance reports',
    ],
  },
  {
    number: '04',
    title: 'Custom Software',
    icon: Cpu,
    tagline: 'Depending on the package you choose, you get:',
    items: [
      'Requirement analysis and planning',
      'Design, development, and testing',
      'CRM, ERP, inventory, or POS systems',
      'Dashboard and reporting tools',
      'Automation and integrations',
      'Training, support, and maintenance',
    ],
  },
]

export default function ServicesDeliverables() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Everything is part of a{' '}
            <span className="text-white">
              defined package.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            No vague promises. Every result is delivered through clear, itemized packages so you know
            exactly what you&apos;re getting.
          </p>
        </div>

        {/* Modality B Nuxt Module Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {deliverables.map((block) => {
            const Icon = block.icon
            return (
              <article
                key={block.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="h-7 w-7 text-purple-600 shrink-0" aria-hidden="true" />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-medium text-zinc-500 tabular-nums">
                        /{block.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium">
                        Package
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {block.title}
                  </h3>

                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 font-medium">
                    {block.tagline}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-normal text-zinc-300">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" aria-hidden="true">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
