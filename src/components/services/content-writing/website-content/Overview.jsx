import { SectionIntro, PosterButton } from '../../../Kinetic'

const criteria = [
  'Explain the offer clearly',
  'Communicate the value of the business',
  'Reflect the intended audience',
  'Differentiate the brand without unnecessary hype',
  'Address important questions and objections',
  'Build appropriate trust',
  'Guide visitors toward a relevant next step',
  'Maintain a consistent voice across the website',
  'Support search visibility where relevant',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Content approach"
          title="Website Content Built to Explain, Build Trust, and Guide Action"
        >
          Website content has a different job from a blog article.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Visitors may arrive on your website from search, advertising, social media, referrals, email, or
              another page on your site. Your core website pages then need to help them quickly understand what
              your business offers and whether it is relevant to them.
            </p>
            <p>
              The goal is not to make every page sound clever. The goal is to make every page useful,
              understandable, credible, and purposeful.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Good website content should
            </span>
            <ul className="mt-5 space-y-2.5">
              {criteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want each page to accomplish, and we can help define the right content scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Website Content Needs &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
