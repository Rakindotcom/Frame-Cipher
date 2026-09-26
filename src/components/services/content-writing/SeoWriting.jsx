import { SectionIntro, PosterButton } from '../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Keyword & Topic Research',
    body: [
      'We identify relevant search terms, topics, questions, entities, and content opportunities based on your business, audience, market, and goals.',
      'Keyword research helps determine what to write about. It does not determine every sentence that belongs in the final article.',
    ],
  },
  {
    number: '02',
    title: 'Search Intent & SERP Analysis',
    body: [
      'We examine the type of content appearing for the target query and the intent it appears to satisfy.',
      'Depending on the query, that may mean informational guides, commercial comparisons, service pages, product pages, local results, or another format.',
    ],
    note: 'The content structure should reflect the actual search task.',
  },
  {
    number: '03',
    title: 'Competitor & Content Gap Analysis',
    body: [
      'We review competing content to identify useful coverage, missing questions, weak explanations, structural opportunities, and ways to make the new content more useful.',
      'The objective is not to copy competitors. It is to understand the information landscape and create a stronger, more relevant piece.',
    ],
  },
  {
    number: '04',
    title: 'Content Brief & Structure',
    body: [
      'Before long-form writing begins, we can define the primary topic, search intent, audience, angle, key sections, supporting topics, entities, internal-link opportunities, CTA, and other project requirements.',
      'This gives the writer a clear direction before drafting starts.',
    ],
  },
  {
    number: '05',
    title: 'On-Page SEO & Internal Linking',
    body: [
      'Where SEO is part of the scope, content can be structured around logical headings, natural keyword use, related terms, internal linking opportunities, metadata, FAQs, and other relevant on-page elements.',
      'We avoid forcing exact-match keywords into places where they make the writing unnatural.',
    ],
  },
  {
    number: '06',
    title: 'AEO, GEO & Helpful Content Considerations',
    body: [
      'Content may also be structured to make important answers easier to understand and extract across modern search and AI-driven discovery environments.',
      'That means clear answers, useful context, logical headings, concise definitions, relevant entities, first-hand information where available, and evidence-backed claims.',
    ],
    note: 'AEO or GEO is not a separate trick added after writing. It should support the same goal: making useful information clear, accessible, and trustworthy.',
  },
  {
    number: '07',
    title: 'Editing, Review & Optimization',
    body: [
      'Writing is reviewed for clarity, structure, accuracy, readability, brand voice, search alignment, and the requirements defined in the brief.',
      'Client feedback is incorporated within the agreed revision scope before final delivery.',
    ],
  },
]

export default function SeoWriting() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="SEO writing method"
          title="SEO Content Writing That Starts With Search Intent"
        >
          SEO content should not begin with keyword placement. It should begin with understanding what the
          searcher wants and what information would genuinely satisfy that intent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {block.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The goal is not to insert keywords into an article. The goal is to create useful content that
            deserves to be discovered and read.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request an SEO Content Sample &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
