import { SectionIntro, PosterButton } from '../../../Kinetic'

const documentation = [
  'Business type',
  'Website condition',
  'Main SEO problems',
  'Diagnostic process',
  'Priority findings',
  'Recommended actions',
  'Implementation work',
  'Organic visibility changes',
  'Traffic changes',
  'Lead or revenue outcomes where measurable',
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Verified SEO audit work" title="SEO Audit Results & Case Studies">
          Real evidence is more useful than generic SEO promises. When verified project data is
          available, Framecipher can present audit-related case studies showing:
        </SectionIntro>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2">
            {documentation.map((body, index) => (
              <div key={body} className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
                <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
                  Section 0{index + 1}
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-frame-fg">{body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Measurable data only
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not publish unsupported ranking, traffic, or revenue claims.
              </p>
            </div>
            <PosterButton href="/case-studies" className="whitespace-nowrap">
              View SEO Case Studies
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}