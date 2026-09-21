import { SectionIntro } from '../../../Kinetic'

const intentChecklist = [
  'What people searching the query are actually trying to accomplish',
  'What types of pages currently appear for the query',
  'What information those pages provide',
  'Which important topics your page currently misses',
  'How the content is currently organized and whether that helps or hurts',
  'Which keywords and related concepts belong on the page',
  'Which internal pages should support or receive authority from the page',
  'How metadata can improve search visibility and click-through potential',
  'Whether the page gives a visitor a clear next step',
]

export default function Overview() {
  return (
    <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Search intent first"
          title="On-Page SEO Built Around Search Intent"
        >
          On-page SEO is more than adding keywords to a page. A strong page needs to answer
          the right question, cover the right topics, use a clear structure, and make it easy
          for users to take the next step.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              We begin by analyzing the search intent behind the target query. The same keyword
              can require very different content depending on whether someone wants an answer,
              comparison, service, product, location, or solution.
            </p>
            <p>
              For example, a user searching for a product may expect product information, pricing,
              reviews, specifications, and a clear path to purchase. Someone searching for an
              informational topic may instead want an explanation, examples, supporting evidence,
              and answers to related questions. Our on-page SEO work connects those expectations
              with the page itself.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              We look at
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Before we optimize a single page
            </h3>
            <ul className="mt-6 space-y-3.5">
              {intentChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium leading-snug text-frame-fg">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t-2 border-frame-border/60 pt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              The goal is not to make a page look optimized on paper. The goal is to make the
              page the right result for the search intent it targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}