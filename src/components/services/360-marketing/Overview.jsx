import { SectionIntro, InversionCard } from '../../Kinetic'

const problemItems = [
  {
    title: 'The Multi-Vendor Blame Loop',
    eyebrow: 'Structural Failure 01',
    description:
      'When your ad buyer, video editor, SEO specialist, web developer, and social media manager work in separate agencies or as freelance contractors, nobody takes responsibility for real revenue. The ad agency blames the website, the web developer blames the ad copy, and your budget drains with zero accountability.',
  },
  {
    title: 'The Content-Without-Conversion Trap',
    eyebrow: 'Structural Failure 02',
    description:
      'Many brands in Bangladesh post daily Canva templates, random motivational quotes, and festival banners that rack up vanity likes but generate zero inquiries. Organic social media must be engineered around strategic product hooks, lead capture mechanisms, and high-retention video formats that guide viewers into an actual buying decision.',
  },
  {
    title: 'The Blind Attribution Problem',
    eyebrow: 'Structural Failure 03',
    description:
      'Spending lakhs on Facebook or Google Ads without server-side tracking (CAPI) and Google Analytics 4 (GA4) custom event architecture means flying blind. You cannot scale what you cannot accurately measure. We replace guesswork with verifiable conversion paths and multi-touch attribution.',
  },
]

export default function Overview() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Core Problem"
          title="Why Fragmented Marketing Fails in 2026."
        >
          Most growing businesses in Bangladesh waste 40% to 60% of their digital marketing investment
          not because their product is weak, but because their marketing channels operate on disconnected
          islands. A complete 360 marketing strategy replaces piecemeal tactics with a unified growth engine
          where creative feeds ads, ads feed landing pages, landing pages feed CRM, and analytics guides
          business strategy.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {problemItems.map((item, index) => (
            <InversionCard
              key={item.title}
              title={item.title}
              eyebrow={item.eyebrow}
              number={String(index + 1).padStart(2, '0')}
            >
              <p className="text-sm font-medium leading-relaxed md:text-base">
                {item.description}
              </p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
