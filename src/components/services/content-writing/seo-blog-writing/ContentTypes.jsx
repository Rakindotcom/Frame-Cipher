import { SectionIntro } from '../../../Kinetic'

const types = [
  {
    number: '01',
    title: 'Informational Blog Posts',
    body: 'Articles that answer relevant questions and help potential customers understand a topic, problem, product, service, or industry.',
  },
  {
    number: '02',
    title: 'How-To Guides & Tutorials',
    body: 'Step-by-step content that helps readers understand how to complete a task, solve a problem, or make better use of a product or service.',
  },
  {
    number: '03',
    title: 'Commercial & Comparison Content',
    body: 'Content for searches where readers are researching solutions, comparing options, evaluating products, or moving closer to a buying decision.',
  },
  {
    number: '04',
    title: 'Industry & Thought-Leadership Articles',
    body: 'Research-driven content that explains industry developments, expert perspectives, business challenges, and useful insights.',
    extra:
      'Where genuine first-hand expertise is available, we can incorporate client input, interviews, examples, data, or original viewpoints.',
  },
  {
    number: '05',
    title: 'Supporting Content for Topic Clusters',
    body: 'Supporting articles can be planned around broader topic coverage and connected through internal links to relevant pillar, service, category, or product pages.',
    extra:
      'The goal is to build a useful information structure rather than publish disconnected articles simply to increase volume.',
  },
]

export default function ContentTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Content formats"
          title="Types of SEO &amp; Blog Content We Write"
        >
          The right format depends on what the reader needs and what the search is actually asking for.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <article key={type.number} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {type.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {type.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {type.body}
              </p>
              {type.extra && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {type.extra}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
