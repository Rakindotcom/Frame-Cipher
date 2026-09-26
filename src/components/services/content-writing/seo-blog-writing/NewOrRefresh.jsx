import { SectionIntro, PosterButton } from '../../../Kinetic'

const groups = [
  {
    title: 'When to Create New Content',
    intro: 'New content may make sense when:',
    items: [
      'The topic is not covered',
      'A distinct search intent deserves its own page',
      'Your existing content does not adequately address the query',
      'A new business, product, service, or market opportunity has emerged',
    ],
  },
  {
    title: 'When to Refresh Existing Content',
    intro: 'A refresh may make more sense when:',
    items: [
      'The article is outdated',
      'Important information has changed',
      'Competitors have expanded their coverage',
      'The page has useful existing visibility',
      'The structure is weak',
      'Important questions are missing',
      'The article no longer matches the search intent well',
    ],
  },
]

export default function NewOrRefresh() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="New vs. existing content"
          title="New Content or Content Refresh: Which Do You Need?"
        >
          Creating another article is not always the best answer.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {group.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {group.intro}
              </p>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                  >
                    <span aria-hidden="true" className="mt-1 text-frame-accent">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-px border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
          <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
            When Content Should Be Consolidated
          </h3>
          <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Sometimes multiple pages target overlapping topics. In those situations, creating even more
            articles may increase duplication rather than improve coverage.
          </p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Depending on the site and search intent, it may be more appropriate to consolidate, redirect,
            restructure, or clearly differentiate overlapping content.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Not sure whether your existing content needs a refresh, a rewrite, or a genuinely new page?
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Content Review &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
