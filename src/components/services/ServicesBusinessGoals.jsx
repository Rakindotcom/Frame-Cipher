import Link from 'next/link'
import { Check } from 'lucide-react'

const goals = [
  {
    number: '01',
    title: 'Grow Your Visibility',
    description: 'Get found by more people at the right moment.',
    services: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Content'],
  },
  {
    number: '02',
    title: 'Generate More Leads & Sales',
    description: 'Turn attention into inquiries, orders, and customers.',
    services: ['Landing Pages', 'Facebook Ads', 'Google Ads', 'E-commerce', 'Email Marketing', 'Automation'],
  },
  {
    number: '03',
    title: 'Build a Stronger Brand',
    description: 'Look consistent and credible across every touchpoint.',
    services: ['Brand Strategy', 'Brand Identity', 'Creative Design', 'Photography', 'Videography', 'Content'],
  },
  {
    number: '04',
    title: 'Build Better Digital Products',
    description: 'Give your business a faster, better-looking digital platform.',
    services: ['Website Development', 'E-commerce', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Custom Software'],
  },
  {
    number: '05',
    title: 'Improve Business Operations',
    description: 'Automate the manual work behind running your business.',
    services: ['CRM', 'ERP', 'Inventory Management', 'POS', 'Dashboards', 'Business Automation'],
  },
]

export default function ServicesBusinessGoals() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Solutions built around what you want to{' '}
            <span className="text-white">
              achieve.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Tell us your goal, and we&apos;ll line up the right mix of services, without forcing you to
            buy everything at once.
          </p>
        </div>

        {/* Editorial Divided Rows (Modality 1) */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] divide-y divide-white/[0.08] overflow-hidden shadow-2xl">
          {goals.map((goal) => (
            <article
              key={goal.number}
              className="group grid gap-6 p-6 transition-colors duration-200 hover:bg-[#151518] sm:p-8 lg:grid-cols-[280px_1fr_auto] lg:items-center"
            >
              {/* Column 1: Number & Title */}
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-zinc-500 font-medium pt-1">
                  /{goal.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200">
                    {goal.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {goal.description}
                  </p>
                </div>
              </div>

              {/* Column 2: Service Tags with Checkbox Indicator */}
              <div className="flex flex-wrap items-center gap-2">
                {goal.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-white/[0.14]"
                  >
                    <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                    <span>{service}</span>
                  </span>
                ))}
              </div>

              {/* Column 3: Subtle Action Arrow */}
              <div className="hidden lg:flex items-center justify-end">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-purple-400"
                >
                  &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#121214] p-5 rounded-2xl">
          <p className="font-mono text-xs text-zinc-400">
            Not sure which goal fits first? Start with a strategy call.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[1.1px] text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Book Strategy Call</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
