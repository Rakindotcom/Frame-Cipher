import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Start With Search Intent',
    body: [
      'We begin by understanding what the searcher is trying to accomplish.',
      'A keyword alone does not explain the entire search intent.',
    ],
    note: 'The surrounding SERP, query language, content types, and business context help determine what the page should actually address.',
  },
  {
    number: '02',
    title: 'Analyze the Current SERP',
    body: [
      'We examine relevant search results to understand the type, depth, format, and scope of content currently competing for attention.',
    ],
    note: 'This helps identify what the new content needs to explain and where there may be opportunities to add useful information.',
  },
  {
    number: '03',
    title: 'Identify the Content Gap',
    body: [
      'We look beyond obvious keywords to find missing questions, weak explanations, outdated information, and useful angles that may improve the content’s value.',
    ],
    note: 'The objective is to create something useful rather than produce another slightly rewritten version of existing articles.',
  },
  {
    number: '04',
    title: 'Build the Brief',
    body: ['The research is converted into a practical content brief.'],
    bullets: [
      'Who the content is for',
      'What question it needs to answer',
      'What the reader should understand',
      'What sections are required',
      'What evidence or input is needed',
      'What the next action should be',
    ],
  },
  {
    number: '05',
    title: 'Write for People First',
    body: [
      'The finished article should be easy to understand, useful, and appropriate for the intended audience.',
      'That means clear explanations, logical structure, useful examples, natural language, and enough depth to satisfy the topic without padding the page with unnecessary words.',
    ],
    note: 'Google explicitly states that there is no preferred word count. Content length should therefore be determined by the topic and user need rather than an arbitrary target.',
  },
  {
    number: '06',
    title: 'Optimize the Finished Content',
    body: ['After the writing is complete, SEO requirements are reviewed.'],
    bullets: [
      'Search-intent alignment',
      'Topic coverage',
      'Heading structure',
      'Natural keyword use',
      'Internal linking',
      'Metadata',
      'Readability',
      'Supporting information',
      'CTA alignment',
    ],
    note: 'SEO should improve discoverability and understanding without making the content unnatural.',
  },
  {
    number: '07',
    title: 'Review and Improve',
    body: [
      'The content is reviewed against the agreed brief and client requirements.',
      'Where ongoing performance data is available, future content decisions can also be informed by what the website is actually earning visibility for, what readers are responding to, and where additional coverage may be useful.',
    ],
  },
]

export default function Approach() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Writing method" title="How We Approach SEO Content Writing">
          SEO content should not begin with keyword placement. It should begin with understanding what the
          searcher wants and what information would genuinely satisfy that intent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {step.title}
                </h3>
                {step.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {step.bullets && (
                  <ul className="mt-4 space-y-2">
                    {step.bullets.map((item) => (
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

              {step.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {step.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
