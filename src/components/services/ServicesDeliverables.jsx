import { SectionIntro } from '../Kinetic'

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
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Deliverables / what you actually get"
          title="Everything is part of a defined package."
          index="07"
        >
          No vague promises. Every result is delivered through clear, itemized packages so you know
          exactly what you&apos;re getting.
        </SectionIntro>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {deliverables.map((block) => (
            <article
              key={block.number}
              className="border-2 border-frame-border bg-frame-muted p-7 transition-colors duration-300 hover:border-frame-accent md:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                  {block.title}
                </h3>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted-fg md:text-5xl">
                  {block.number}
                </span>
              </div>

              <p className="mt-6 text-base font-bold uppercase tracking-wide text-frame-accent">
                {block.tagline}
              </p>

              <ul className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-base font-medium text-frame-fg md:text-lg">
                    <span className="text-frame-accent" aria-hidden="true">
                      {'\u2713'}
                    </span>
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