import { Check } from 'lucide-react'

const includedCategories = [
  {
    title: 'Strategy & Planning',
    items: [
      'Business and audience discovery',
      'Buyer journey and conversion planning',
      'Sitemap and page structure',
      'Competitor and market review',
      'Content requirements and page planning',
    ],
  },
  {
    title: 'UI/UX Design',
    items: [
      'Wireframes and page layouts',
      'Conversion-focused CTA placement',
      'Brand-aligned visual design',
      'Mobile-first responsive layouts',
      'Review and approval checkpoints',
    ],
  },
  {
    title: 'Website Development',
    items: [
      'Responsive front-end development',
      'CMS or custom development based on requirements',
      'Contact and lead capture forms',
      'Content integration',
      'Essential third-party integrations',
    ],
  },
  {
    title: 'SEO-Ready Foundation',
    items: [
      'Clean URL structure',
      'Logical page and heading hierarchy',
      'Metadata implementation',
      'XML sitemap setup',
      'Image and media optimization',
      'Internal linking foundations',
      'Search engine-friendly technical structure',
    ],
  },
  {
    title: 'Tracking & Lead Management',
    items: [
      'Analytics setup',
      'Conversion tracking where required',
      'Form and lead routing',
      'CRM integration based on compatibility',
      'Marketing and communication tool integration',
    ],
  },
  {
    title: 'Testing & Launch',
    items: [
      'Mobile and desktop testing',
      'Browser compatibility checks',
      'Form and integration testing',
      'Performance review',
      'Launch support',
      'Agreed handover guidance',
    ],
  },
]

export default function Included() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What&apos;s Included in Our{' '}
            <span className="italic text-frame-accent">Development Service.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Every business website project is scoped around your requirements, but our standard approach covers the core elements needed to launch a professional, usable, and lead-focused website.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix (6 Modules) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {includedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <h3 className="mt-6 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {cat.title}
                </h3>

                <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5 text-xs sm:text-sm text-zinc-300">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-zinc-500">
                Verified Deliverable · 100% In-Scope
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
