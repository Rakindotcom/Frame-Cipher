import { SectionIntro, PosterButton } from '../../../Kinetic'

const standards = [
  {
    title: 'One In-House Team',
    body: 'Your Facebook management does not need to move between unrelated freelancers and outsourced teams. Strategy, content, publishing, community management, and reporting can be coordinated through one in-house team.',
  },
  {
    title: 'Facebook-Specific Strategy',
    body: 'Facebook is not Instagram with a different logo. We consider Facebook-specific content formats, customer behavior, Page structure, community interactions, Messenger, reviews, and business goals when building your strategy.',
  },
  {
    title: 'Human Review & Approval',
    body: 'We do not treat automation as a replacement for judgment. Content is reviewed for brand fit, accuracy, tone, customer relevance, business context, and publishing readiness. Your approval remains part of the workflow where required.',
    points: ['Brand fit', 'Accuracy', 'Tone', 'Customer relevance', 'Business context', 'Publishing readiness'],
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We understand the differences between managing a Bangladesh-focused Page and communicating with international audiences. We can adapt communication for local and international markets while maintaining your core brand identity.',
  },
  {
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your business should retain ownership of its Facebook Page and relevant business assets. Where access is required, we use the appropriate account permissions and access workflows rather than asking clients to hand over personal passwords.',
    note: 'Meta’s business tools support role and asset-based access, making structured account management important for businesses working with external teams.',
  },
  {
    title: 'Clear Reporting & Communication',
    body: 'You should know what is being managed and what the numbers mean. We provide clear reporting around agreed metrics, content performance, community activity, and recommended next steps.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Facebook Management"
        >
          Facebook work handled by people who know the platform, with clear boundaries between what
          your team controls and what Meta controls.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <article key={standard.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {standard.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {standard.body}
                </p>
              </div>

              {standard.points?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {standard.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {standard.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {standard.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Ad spend is separate from Facebook management fees, which keeps organic content,
            community management, and paid advertising strategically distinct.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free Page Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
