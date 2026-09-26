import { SectionIntro, PosterButton } from '../../Kinetic'

const purposes = [
  {
    label: 'Rank',
    body: 'A blog post may need to answer a search query and earn relevant visibility.',
  },
  {
    label: 'Explain',
    body: 'A service page may need to explain your offer and build trust.',
  },
  {
    label: 'Sell',
    body: 'A product description may need to remove buying uncertainty.',
  },
  {
    label: 'Persuade',
    body: 'A landing page may need to move a visitor toward one specific action.',
  },
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Content approach"
          title="Content Writing Built Around What Your Business Needs to Achieve"
        >
          Good writing is not just about correct grammar or filling a page with words.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              A blog post may need to answer a search query. A service page may need to explain your offer
              and build trust. A product description may need to remove buying uncertainty. A landing page
              may need to move a visitor toward one specific action.
            </p>
            <p>
              That is why Framecipher treats content as a business tool rather than generic filler.
            </p>
            <p>
              We write for businesses in Bangladesh and international markets, including the US, UK,
              Australia, Canada, and UAE. Each project is shaped around its audience, purpose, brand voice,
              and publishing environment.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Every piece has one job
            </span>
            <ul className="mt-5 space-y-4">
              {purposes.map((purpose) => (
                <li key={purpose.label} className="border-t-2 border-frame-border/60 pt-4 first:border-t-0 first:pt-0">
                  <span className="font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-accent">
                    {purpose.label}
                  </span>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {purpose.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want the content to accomplish, and we can help define the right writing scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Content Needs &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
