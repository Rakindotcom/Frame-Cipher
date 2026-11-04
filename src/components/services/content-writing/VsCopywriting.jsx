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
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Service boundaries"
          title="Content Writing vs. Copywriting"
        >
          The terms are often used interchangeably, but they usually serve different purposes.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-3">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`flex flex-col p-7 md:p-8 ${
                column.title === 'When Your Business Needs Both' ? 'bg-[#A855F7]/10' : 'bg-[#09090B]'
              }`}
            >
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {column.title}
              </h3>
              <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                {column.body}
              </p>

              {column.examples && (
                <div className="mt-6 border-t border-white/[0.08]/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    {column.examplesLabel}
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {column.examples.map((example) => (
                      <li
                        key={example}
                        className="border border-white/[0.08] bg-[#121214] px-2.5 py-1 text-[11px] font-semibold text-[#FAFAFA]"
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

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
          Framecipher can coordinate those writing requirements within one broader content engagement, so
          the informational and conversion-focused work stay consistent with each other.
        </p>
      </div>
    </section>
  )
}
