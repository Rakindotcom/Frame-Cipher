import { SectionLabel, SectionIntro } from '../Kinetic'

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
    <section className="border-b-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Business goals / pick your outcome"
          title="Solutions built around what you want to achieve."
          index="03"
        >
          Tell us your goal, and we&apos;ll line up the right mix of services—without forcing you to
          buy everything at once.
        </SectionIntro>

        <div className="mt-14 grid gap-px overflow-hidden border border-frame-border bg-frame-border">
          {goals.map((goal) => (
            <article
              key={goal.number}
              className="group grid gap-6 bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent md:grid-cols-[0.7fr_1.3fr] md:items-center md:p-9"
            >
              <div className="flex items-start gap-5">
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/70 md:text-5xl">
                  {goal.number}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-3xl">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-snug text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                    {goal.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap content-center gap-2">
                {goal.services.map((service) => (
                  <span
                    key={service}
                    className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg transition-colors duration-300 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <SectionLabel>Not sure which goal fits first? Start with a strategy call.</SectionLabel>
        </div>
      </div>
    </section>
  )
}