import { SectionIntro, PosterButton } from '../../../Kinetic'

const factors = [
  'Search demand',
  'Business relevance',
  'Search intent',
  'SERP competitiveness',
  'Current website authority',
  'Existing rankings',
  'Competitor visibility',
  'Content requirements',
  'Conversion potential',
  'Market and language differences',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The right search demand" title="Find the Search Terms Worth Targeting">
          Keyword research should answer more than how often a term is searched. It should reveal
          what the searcher wants, who currently ranks, and whether your website can realistically
          compete.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-muted/30 p-7 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Keyword research should answer more than
          </p>
          <blockquote className="mt-3 font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            &ldquo;How many people search for this term?&rdquo;
          </blockquote>
          <div className="mt-8 h-px w-full bg-frame-border" />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            It should answer
          </p>
          <blockquote className="mt-3 font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            &ldquo;Is this search relevant to the business, what does the searcher want, who
            currently ranks, and can this website realistically compete?&rdquo;
          </blockquote>
        </div>

        <p className="mt-10 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher evaluates keyword opportunities using a combination of:
        </p>
        <div className="mt-6 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-5">
          {factors.map((factor, index) => (
            <div key={factor} className="bg-frame-bg p-6">
              <span className="font-heading text-2xl font-bold leading-none tracking-tighter text-frame-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-tight text-frame-fg">
                {factor}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            We also look beyond isolated keywords. Related terms, questions, entities, subtopics,
            and search variations can reveal a broader topic opportunity that a basic keyword list
            may miss.
          </p>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-4xl text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            The result is a structured search strategy that helps you decide what to target, which
            page should target it, and what should be prioritized first.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="whitespace-nowrap">
              Request a Keyword Research Quote
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}