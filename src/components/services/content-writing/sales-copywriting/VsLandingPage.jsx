import { SectionIntro, PosterButton } from '../../../Kinetic'

const rows = [
  {
    sales: 'Focuses on the persuasive argument',
    landing: 'Focuses on the landing-page experience',
  },
  {
    sales: 'Can work across multiple formats',
    landing: 'Built specifically for a landing page',
  },
  {
    sales: 'Covers offers, proof, objections and sales messaging',
    landing: 'Covers page structure, message flow and CTA hierarchy',
  },
  {
    sales: 'Can support B2B and consumer sales',
    landing: 'Usually tied to a specific page and traffic context',
  },
  {
    sales: 'Can become a proposal, script or sales document',
    landing: 'Remains a page-based deliverable',
  },
]

export default function VsLandingPage() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Comparison" title="Sales Copy vs Landing Page Copywriting">
          These services overlap, but they are not identical.
        </SectionIntro>

        <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            <span className="font-semibold text-frame-fg">Landing Page Copywriting is a format.</span> It
            focuses on writing the copy for a specific landing page, usually built around one primary conversion
            goal and a defined traffic or campaign context.
          </p>
          <p>
            <span className="font-semibold text-frame-fg">Sales Copywriting is the persuasion argument.</span>{' '}
            That argument can live on a landing page, but it can also appear in a proposal, pitch deck, sales
            letter, VSL, brochure, or sales enablement asset.
          </p>
        </div>

        <div className="mt-12 border-2 border-frame-border">
          <div className="hidden grid-cols-2 gap-px border-b-2 border-frame-border bg-frame-border md:grid">
            <span className="bg-frame-accent/10 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Sales Copywriting
            </span>
            <span className="bg-frame-muted/40 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
              Landing Page Copywriting
            </span>
          </div>

          <div className="grid gap-px bg-frame-border">
            {rows.map((row) => (
              <div key={row.sales} className="grid gap-1 bg-frame-bg p-5 md:grid-cols-2 md:gap-4">
                <span className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                  {row.sales}
                </span>
                <span className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {row.landing}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The two services can also work together. For example, a sales page project may require both the
            underlying sales argument and the page-specific copy structure.
          </p>
          <div className="shrink-0">
            <PosterButton href="/services/content-writing/landing-page-copy" variant="outline">
              Explore Landing Page Copywriting &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
