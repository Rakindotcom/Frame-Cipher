import { SectionIntro } from '../../Kinetic'

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
    <section className="px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-[#FAFAFA] border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              Why Fragmented Marketing{' '}
              <span className="italic text-frame-accent">Fails in 2026.</span>
            </>
          }
        >
          Most growing businesses in Bangladesh waste 40% to 60% of their digital marketing investment
          not because their product is weak, but because their marketing channels operate on disconnected
          islands. A complete 360 marketing strategy replaces piecemeal tactics with a unified growth engine
          where creative feeds ads, ads feed landing pages, landing pages feed CRM, and analytics guides
          business strategy.
        </SectionIntro>

        <div className="grid border-t border-l border-white/[0.08] md:grid-cols-3 bg-[#09090B]">
          {problemItems.map((item, index) => (
            <article
              key={item.title}
              className="group border-r border-b border-white/[0.08] bg-[#09090B] p-8 md:p-10 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              </div>
              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-tight tracking-tight text-white group-hover:text-frame-accent transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
