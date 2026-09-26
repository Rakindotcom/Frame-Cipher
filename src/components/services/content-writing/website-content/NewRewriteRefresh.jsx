import { SectionIntro, PosterButton } from '../../../Kinetic'

const groups = [
  {
    title: 'New Website Content',
    intro: 'New content may be appropriate when:',
    items: [
      'You are launching a new website',
      'A page does not exist yet',
      'You are introducing a new service',
      'You are entering a new market',
      'Your current positioning has changed',
      'Important information is missing',
    ],
  },
  {
    title: 'Full Website Rewrite',
    intro: 'A broader rewrite may make sense when:',
    items: [
      'Multiple pages have inconsistent messaging',
      'The business has significantly changed',
      'The website communicates an outdated offer',
      'The current copy is generic throughout the site',
      'The brand has been repositioned',
      'Different writers have created disconnected pages',
    ],
  },
  {
    title: 'Individual Page Rewrite',
    intro: 'A full website rewrite is not always necessary. Sometimes one page needs attention, such as:',
    items: [
      'Homepage',
      'Service page',
      'About page',
      'Pricing page',
      'Location page',
      'Product page',
    ],
  },
  {
    title: 'Content Refresh',
    intro: 'A refresh may be enough when the existing page has a good foundation but needs:',
    items: [
      'Updated information',
      'Clearer wording',
      'Better section structure',
      'Stronger differentiation',
      'Updated CTAs',
      'New proof',
      'Better internal links',
      'Alignment with current business positioning',
    ],
  },
]

export default function NewRewriteRefresh() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope &amp; approach"
          title="When Your Website Needs New Content, a Rewrite, or a Refresh"
        >
          Not every website needs a complete rewrite. The right approach depends on what is currently wrong
          with the content.
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

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Not sure whether your site needs a refresh, an individual page rewrite, or a full rewrite?
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Website Content Review &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
