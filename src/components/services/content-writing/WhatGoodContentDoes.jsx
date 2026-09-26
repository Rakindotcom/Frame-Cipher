import { SectionIntro } from '../../Kinetic'

const standards = [
  {
    number: '01',
    title: 'Match the Audience',
    body: 'The writing should reflect the reader\u2019s knowledge, needs, questions, objections, and stage in the buying journey.',
  },
  {
    number: '02',
    title: 'Answer the Right Question',
    body: 'A long article that avoids the main question is not more useful because it is longer. The important information should be easy to find and understand.',
  },
  {
    number: '03',
    title: 'Communicate Clearly',
    body: 'Strong content uses logical structure, appropriate language, useful examples, and concise explanations. Complex subjects can still be explained clearly without removing important detail.',
  },
  {
    number: '04',
    title: 'Build Trust',
    body: 'Trust can come from accurate information, relevant experience, specific examples, transparent limitations, original insights, customer evidence, and appropriate sources.',
  },
  {
    number: '05',
    title: 'Guide the Next Action',
    body: 'The reader should understand what to do next when the content has a meaningful next step. That action may be educational rather than commercial.',
  },
  {
    number: '06',
    title: 'Support Search Visibility',
    body: 'For SEO-focused content, structure and language should help search engines understand the topic while keeping the actual writing useful for people. Search optimization should strengthen the content rather than make it harder to read.',
  },
]

export default function WhatGoodContentDoes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Quality standard"
          title="What High-Quality Content Should Actually Do"
        >
          High-quality content is not defined by word count alone. It should perform the job it was created to
          perform.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard) => (
            <article key={standard.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {standard.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {standard.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {standard.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
