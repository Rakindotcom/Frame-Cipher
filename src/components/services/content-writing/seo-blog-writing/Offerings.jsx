import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Keyword & Topic Research',
    body: [
      'We identify relevant search terms, topics, questions, and content opportunities based on your business, audience, market, and existing website.',
      'Research can consider search intent, relevant keyword themes, topic relevance, existing website coverage, competitor content, search-result patterns, supporting questions and subtopics, and business and conversion relevance.',
    ],
    note: 'The goal is not to collect the largest possible list of keywords. It is to identify topics worth creating useful content around.',
  },
  {
    number: '02',
    title: 'Search Intent & SERP Analysis',
    body: [
      'Before writing, we examine what users are likely trying to accomplish with the target search and what types of pages currently appear for it.',
      'Depending on the query, the SERP may favor informational guides, how-to content, commercial investigations, comparisons, product-related content, service content, local results, or other search formats.',
    ],
    note: 'The content structure should reflect the search task rather than forcing every topic into the same blog template.',
  },
  {
    number: '03',
    title: 'Competitor & Content Gap Analysis',
    body: [
      'We review relevant competing content to understand what it covers, where it is useful, where information is missing, and where a new piece can provide additional value.',
      'This can reveal missing subtopics, unanswered questions, weak explanations, outdated information, structural opportunities, internal-link opportunities, and topics your website has not covered.',
    ],
    note: 'We use competitor research to understand the search landscape, not to reproduce another website’s content.',
  },
  {
    number: '04',
    title: 'Content Brief & Topic Structure',
    body: ['A strong article starts before the first paragraph.'],
    bullets: [
      'Primary topic',
      'Search intent',
      'Target audience',
      'Content angle',
      'Main sections',
      'Supporting topics',
      'Relevant entities',
      'Internal-link opportunities',
      'CTA',
      'Research requirements and content-specific instructions',
    ],
    note: 'This gives the writing a clear purpose before drafting begins.',
  },
  {
    number: '05',
    title: 'SEO Blog Writing & Editing',
    body: [
      'We write the article around the approved brief, search intent, audience, and subject.',
      'Depending on the project, this can include blog articles, educational guides, how-to content, industry articles, commercial content, comparison content, thought-leadership pieces, and supporting topic-cluster content.',
    ],
    note: 'Writing is reviewed for clarity, structure, factual accuracy within the agreed research scope, brand voice, readability, and SEO requirements.',
  },
  {
    number: '06',
    title: 'On-Page SEO & Internal Linking',
    body: [
      'Where included in the scope, we optimize the finished content around relevant on-page requirements.',
      'This can include title and meta description recommendations, logical heading structure, natural keyword placement, related terms and entities, internal linking opportunities, descriptive anchor text, FAQ sections where genuinely useful, and image and alt-text guidance.',
    ],
    note: "Google's guidance also recommends making important content available in textual form, maintaining crawlable internal links, and following standard SEO fundamentals for AI search experiences.",
  },
  {
    number: '07',
    title: 'Content Refresh & Updating',
    body: [
      'Existing content can become outdated, incomplete, or less competitive over time.',
      'We can review older articles for outdated facts, missing information, search-intent changes, thin sections, weak structure, declining performance, new competitor coverage, and internal-link opportunities.',
    ],
    note: 'A refresh may involve updating information, restructuring sections, expanding useful coverage, improving clarity, strengthening internal links, or changing the content angle where the original approach is no longer appropriate.',
  },
  {
    number: '08',
    title: 'Publishing & Performance Support',
    body: [
      'Content can be delivered in a publish-ready format for your CMS or publishing workflow.',
      'Depending on the agreed scope, support can include CMS-ready formatting, heading structure, internal-link recommendations, image guidance, alt-text recommendations, metadata recommendations, publishing support, search performance review, and future content recommendations.',
    ],
    note: 'Performance monitoring does not guarantee a particular ranking. It helps identify what is happening after publication and where future improvement may be useful.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Our SEO &amp; Blog Writing Service Includes"
        >
          Research, planning, writing, on-page optimization, refreshing, and publishing support delivered as one
          workflow.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
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

                {block.bullets && (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((item) => (
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
                )}
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A free content sample can be requested before a larger engagement so you can evaluate the writing
            approach and fit.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request an SEO Content Sample &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
