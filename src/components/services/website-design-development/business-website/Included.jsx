import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Scope Breakdown / Complete Coverage" title="What's Included in Our Business Website Development Service">
          Every business website project is scoped around your requirements, but our standard approach covers the core elements needed to launch a professional, usable, and lead-focused website.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
          {includedCategories.map((cat, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Module 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {cat.title}
                </h3>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          The exact deliverables depend on the platform, functionality, integrations, and scope agreed before development begins.
        </p>
      </div>
    </section>
  )
}