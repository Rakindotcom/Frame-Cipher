import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'Google Penalty Recovery for Bangladeshi Businesses',
    body: 'We support Bangladesh-based businesses, publishers, ecommerce websites, and service companies facing manual actions, organic traffic losses, technical visibility problems, or suspected Google updates.',
    closing:
      'Our review can account for local search behavior, English or Bangla content, Bangladesh-focused SERPs, and the technical condition of the website itself.',
  },
  {
    title: 'International SEO Recovery',
    body: 'We also support businesses targeting markets such as the US, UK, Australia, Canada, UAE, and other international markets.',
    closing:
      'Recovery analysis can include country-specific ranking changes, international site structure, regional content, market-level competitors, and other factors affecting organic visibility.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Markets we serve" title="Bangladesh & International Markets">
          Recovery work should reflect where the site actually operates. We investigate manual
          actions, traffic drops, and technical problems for both Bangladeshi and international
          websites.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {marketBlocks.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Market 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.closing}
              </p>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}