import { SectionIntro } from '../../Kinetic'
import { Shuffle, MousePointerClick, EyeOff } from 'lucide-react'

const problemItems = [
  {
    title: 'The Multi-Vendor Blame Loop',
    icon: Shuffle,
    eyebrow: 'Structural Failure 01',
    description:
      'When your ad buyer, video editor, SEO specialist, web developer, and social media manager work in separate agencies or as freelance contractors, nobody takes responsibility for real revenue. The ad agency blames the website, the web developer blames the ad copy, and your budget drains with zero accountability.',
  },
  {
    title: 'The Content-Without-Conversion Trap',
    icon: MousePointerClick,
    eyebrow: 'Structural Failure 02',
    description:
      'Many brands in Bangladesh post daily Canva templates, random motivational quotes, and festival banners that rack up vanity likes but generate zero inquiries. Organic social media must be engineered around strategic product hooks, lead capture mechanisms, and high-retention video formats that guide viewers into an actual buying decision.',
  },
  {
    title: 'The Blind Attribution Problem',
    icon: EyeOff,
    eyebrow: 'Structural Failure 03',
    description:
      'Spending lakhs on Facebook or Google Ads without server-side tracking (CAPI) and Google Analytics 4 (GA4) custom event architecture means flying blind. You cannot scale what you cannot accurately measure. We replace guesswork with verifiable conversion paths and multi-touch attribution.',
  },
]

export default function Overview() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Why Fragmented Marketing Fails in 2026.">
          Most growing businesses in Bangladesh waste 40% to 60% of their digital marketing investment
          not because their product is weak, but because their marketing channels operate on disconnected
          islands. A complete 360 marketing strategy replaces piecemeal tactics with a unified growth engine
          where creative feeds ads, ads feed landing pages, landing pages feed CRM, and analytics guides
          business strategy.
        </SectionIntro>

        <div className="grid border-t border-l border-white/[0.08] md:grid-cols-3 bg-[#09090B]">
          {problemItems.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group border-r border-b border-white/[0.08] bg-[#121214] p-8 md:p-10 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 transition-colors">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
