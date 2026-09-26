import { SectionIntro } from '../../Kinetic'

const columns = [
  {
    title: 'Content Writing',
    body: 'Content writing generally focuses on informing, educating, answering questions, building topical coverage, and supporting long-term audience or search visibility.',
    examplesLabel: 'Examples include',
    examples: [
      'Blog posts',
      'Guides',
      'Educational articles',
      'Industry content',
      'Website information',
      'Customer education content',
      'Case studies',
    ],
  },
  {
    title: 'Copywriting',
    body: 'Copywriting is generally more focused on persuasion and action.',
    examplesLabel: 'Examples include',
    examples: [
      'Landing pages',
      'Sales pages',
      'Promotional emails',
      'Product copy',
      'Ad copy',
      'Conversion-focused website sections',
      'Calls to action',
    ],
  },
  {
    title: 'When Your Business Needs Both',
    body: 'Most businesses do not need to choose one. A strong content system may use educational articles to attract and inform an audience, website copy to explain the business, product content to support buying decisions, and conversion-focused copy to encourage the next action.',
  },
]

export default function VsCopywriting() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service boundaries"
          title="Content Writing vs. Copywriting"
        >
          The terms are often used interchangeably, but they usually serve different purposes.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`flex flex-col p-7 md:p-8 ${
                column.title === 'When Your Business Needs Both' ? 'bg-frame-accent/10' : 'bg-frame-bg'
              }`}
            >
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {column.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {column.body}
              </p>

              {column.examples && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {column.examplesLabel}
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {column.examples.map((example) => (
                      <li
                        key={example}
                        className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Framecipher can coordinate those writing requirements within one broader content engagement, so
          the informational and conversion-focused work stay consistent with each other.
        </p>
      </div>
    </section>
  )
}
