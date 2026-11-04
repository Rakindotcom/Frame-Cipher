import { Check } from 'lucide-react'

const deliverables = [
  {
    number: '01',
    title: 'SEO',
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
            <span className="italic text-frame-accent">
              defined package.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            No vague promises. Every result is delivered through clear, itemized packages so you know
            exactly what you&apos;re getting.
          </p>
        </div>

        {/* 2x2 Architectural Blueprint Matrix */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden sm:grid-cols-2">
          {deliverables.map((block) => (
            <article
              key={block.number}
              className="group bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] md:p-9 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {block.title}
                  </h3>
                  <span className="font-mono text-sm font-medium text-zinc-500 tabular-nums">
                    /{block.number}
                  </span>
                </div>

                <p className="mt-3 font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
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
          ))}
        </div>
      </div>
    </section>
  )
}
