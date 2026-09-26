import { SectionIntro, PosterButton } from '../../../Kinetic'

const rows = [
  {
    type: 'Landing Page Copy',
    purpose: 'Drive one primary conversion',
    focus: 'Offer, benefits, objections, proof, CTA',
    highlight: true,
  },
  {
    type: 'Website Content',
    purpose: 'Explain and support the broader website',
    focus: 'Business, services, positioning, navigation',
  },
  {
    type: 'SEO Blog Content',
    purpose: 'Answer search-driven questions',
    focus: 'Search intent, education, topical coverage',
  },
  {
    type: 'Product Description',
    purpose: 'Support a product decision',
    focus: 'Features, benefits, specifications, purchase',
  },
  {
    type: 'Sales Copy',
    purpose: 'Persuade toward a commercial action',
    focus: 'Argument, desire, objections, offer',
  },
  {
    type: 'Ad Copy',
    purpose: 'Earn the click or attention',
    focus: 'Hook, relevance, offer, action',
  },
]

const related = [
  {
    label: 'Website Content Writing',
    href: '/services/content-writing/website-content',
  },
  {
    label: 'SEO &amp; Blog Writing',
    href: '/services/content-writing/seo-blog-writing',
  },
  {
    label: 'Sales Copywriting',
    href: '/services/content-writing/sales-copywriting',
  },
]

export default function VsWebsiteContent() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Comparison"
          title="What Makes Landing Page Copy Different From Website Content"
        >
          Landing page copy, website content, and ad copy overlap, but each is written for a different context and
          a different job.
        </SectionIntro>

        <div className="border-2 border-frame-border">
          <div className="hidden grid-cols-3 gap-px border-b-2 border-frame-border bg-frame-border md:grid">
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Content Type
            </span>
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Primary Purpose
            </span>
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Typical Focus
            </span>
          </div>

          <div className="grid gap-px bg-frame-border">
            {rows.map((row) => (
              <div
                key={row.type}
                className={
                  row.highlight
                    ? 'grid gap-1 bg-frame-accent/10 p-5 md:grid-cols-3 md:gap-px md:gap-4'
                    : 'grid gap-1 bg-frame-bg p-5 md:grid-cols-3 md:gap-px md:gap-4'
                }
              >
                <span
                  className={
                    row.highlight
                      ? 'font-heading text-sm font-bold uppercase tracking-tight text-frame-accent md:text-base'
                      : 'font-heading text-sm font-bold uppercase tracking-tight text-frame-fg md:text-base'
                  }
                >
                  {row.type}
                </span>
                <span className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {row.purpose}
                </span>
                <span className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {row.focus}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Landing page copy is usually more focused, more campaign-specific, and more direct than general
            website content. A landing page may be shorter, but it still needs to answer questions, build enough
            trust, and handle objections before asking for the conversion.
          </p>
          <p>
            Understanding the difference helps avoid the most common problem we see: landing pages that were
            copied from general website content and never adjusted for the campaign.
          </p>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Related content services
          </span>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {related.map((item) => (
              <PosterButton key={item.href} href={item.href} variant="outline">
                <span dangerouslySetInnerHTML={{ __html: item.label }} />
              </PosterButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
