const capabilityGroups = [
  {
    number: '01',
    title: 'Web',
    items: ['Next.js', 'React', 'WordPress', 'Shopify', 'HTML', 'CSS', 'Tailwind CSS', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Backend & Systems',
    items: ['Node.js', 'APIs', 'Databases', 'Custom Dashboards', 'CRM', 'Business Management Systems', 'Automation'],
  },
  {
    number: '03',
    title: 'Marketing Technology',
    items: ['Google Ads', 'Meta Ads', 'Analytics', 'Conversion Tracking', 'SEO', 'AEO', 'GEO'],
  },
]

export default function HomeTech() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Technology / Capabilities
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Technology behind the work.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            From modern websites to custom business systems, we use technology based on the
            actual requirements of the project, not a fixed template.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-frame-border/80 pb-5">
                <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg sm:text-3xl">
                  {group.title}
                </h3>
                <span
                  className="font-heading text-2xl font-bold leading-none tracking-tighter text-frame-muted"
                  aria-hidden="true"
                >
                  {group.number}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-border bg-frame-muted/30 px-3 py-2 text-xs font-black uppercase tracking-wider text-frame-muted-fg transition-colors duration-200 hover:border-frame-accent hover:text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}