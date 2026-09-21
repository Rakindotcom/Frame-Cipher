import { SectionIntro, PosterButton } from '../../../Kinetic'

const journeySteps = [
  'Identify markets with meaningful search demand and commercial opportunity',
  'Research country-specific keywords, terminology, and search intent',
  'Choose a scalable website structure for countries and languages',
  'Connect regional and language versions with the right technical signals',
  'Localize content instead of relying on direct translation',
  'Improve technical performance across target markets',
  'Build relevant authority in priority countries',
  'Track visibility, traffic, leads, and conversions by market',
  'Create a framework that supports future market expansion',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What this is" title="International SEO Built for New Markets, Local Search Intent & Sustainable Growth">
          International SEO should connect your business with the right searchers in the right
          markets.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            People searching for the same product or service in Bangladesh, the USA, the UK, or
            the UAE may use different terminology, search with different intent, and expect
            different information. A strategy that works in one country may not work the same way
            in another.
          </p>
          <p>
            Framecipher builds international SEO strategies around the complete market journey:
          </p>
        </div>

        <ul className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {journeySteps.map((step, index) => (
            <li key={index} className="flex gap-4 bg-frame-bg p-6">
              <span className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold uppercase leading-snug tracking-tight text-frame-fg md:text-base">
                {step}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
          <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
            The objective is not simply to rank in more countries.
          </h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            It is to build a search presence that remains technically sound, locally relevant, and
            commercially useful as your international footprint grows.
          </p>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              See where you stand
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your current international setup and recommend where the work will have
              the most impact first.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}