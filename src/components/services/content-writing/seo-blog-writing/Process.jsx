import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Discovery & Content Audit',
    body: 'We review the business, audience, website, existing content, goals, and available information.',
    note: 'For an established site, the audit can help identify existing opportunities before new topics are selected.',
  },
  {
    number: '02',
    title: 'Keyword & Topic Research',
    body: 'We identify relevant topics, keyword themes, questions, search intent, and content opportunities.',
  },
  {
    number: '03',
    title: 'Brief & Content Planning',
    body: "The research becomes a practical brief covering the article's purpose, audience, structure, topics, internal links, CTA, and other requirements.",
  },
  {
    number: '04',
    title: 'Writing & SEO Optimization',
    body: 'The article is drafted, edited, and optimized according to the agreed content and SEO scope.',
  },
  {
    number: '05',
    title: 'Review & Revisions',
    body: 'The draft is reviewed against the brief, and your feedback is incorporated within the agreed revision scope.',
  },
  {
    number: '06',
    title: 'Publishing & Performance Review',
    body: 'The final content is delivered ready for publication.',
    note: 'Where ongoing tracking is included, Search Console, analytics, ranking data, and other available performance information can inform future content decisions.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Engagement workflow"
          title="How Our SEO &amp; Blog Writing Process Works"
        >
          The process adapts by topic and scope, but the core workflow stays consistent so each article has a
          clear purpose before drafting starts.
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
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {step.body}
                </p>
              </div>

              {step.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {step.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want to rank for, who you want to reach, and what your business needs the content
            to accomplish.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start Your SEO Content Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
