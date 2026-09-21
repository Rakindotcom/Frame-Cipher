import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'Google AdSense Support for Bangladeshi Publishers',
    body: 'We help Bangladesh-based bloggers, publishers, niche website owners, and businesses prepare their websites for AdSense review.',
    closing:
      'For Bangladeshi websites, we assess the actual site rather than applying a generic \u201CBangladesh approval\u201D formula.',
  },
  {
    title: 'International Publishers & Website Owners',
    body: 'Our AdSense approval support is also available to website owners serving audiences in markets such as the US, UK, Australia, Canada, and UAE.',
    closing:
      'We review the website, content, language, traffic sources, and applicable policy considerations based on the actual project rather than assuming every market follows the same publishing model.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Markets we serve" title="Bangladesh & International Markets">
          AdSense preparation should reflect the market the website actually serves. We review sites
          for Bangladeshi and international publishers rather than applying a single approval
          formula everywhere.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}