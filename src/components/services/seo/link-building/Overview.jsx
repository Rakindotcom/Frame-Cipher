import { SectionIntro } from '../../../Kinetic'

const focusChecklist = [
  'Manual prospecting instead of bulk site lists',
  'Relevant publishers instead of unrelated high-metric sites',
  'Useful content instead of content written only to hold a link',
  'Natural placement instead of forced anchor patterns',
  'Transparent reporting instead of unexplained backlink counts',
  'Long-term relationships instead of one-off placement transactions',
]

export default function Overview() {
  return (
    <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Relevance over volume"
          title="Off-Page SEO Built on Relevance, Editorial Quality, and Transparency"
        >
          Off-page SEO works best when the links a website earns make sense to an audience,
          not just to a search result. The goal is not to manufacture a backlink profile but to
          build the kind of references that hold up over years instead of months.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Link building is strongest when a backlink is earned because the content is worth
              referencing, not because a placement was bought. Google&rsquo;s own spam policies
              treat links created primarily to manipulate rankings as link spam, and bulk-bought
              links fall squarely inside that definition. We avoid that entire category of work,
              so the profile we build for you is not carrying hidden risk.
            </p>
            <p>
              Every placement we pursue is screened against editorial quality, topical relevance,
              and whether the publisher genuinely serves readers who might find your business
              useful. If a prospect does not pass that screening, it does not get pitched. That
              consistently matters more than volume, and it is the difference between a backlink
              profile that supports growth and one that eventually needs cleaning up.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our approach focuses on
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What makes a reference earn its place
            </h3>
            <ul className="mt-6 space-y-3.5">
              {focusChecklist.map((item, index) => (
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
              The objective is not to manufacture a backlink profile, it is to build legitimate
              references that support the business over the long term.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}