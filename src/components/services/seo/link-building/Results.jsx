import { SectionIntro, PosterButton } from '../../../Kinetic'

const caseStudyFields = [
  'Client / Industry',
  'Starting Situation',
  'Campaign Objective',
  'Strategy',
  'Implementation',
  'Campaign Period',
  'Link Acquisition',
  'Search Performance',
  'Business Outcome',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Real outcomes"
          title="Off-Page SEO Results & Case Studies"
        >
          Off-page SEO results should be documented with link, search, and business evidence,
          not with a list of placements that nobody can verify.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified data and client permission are available, case studies document:
            </p>
            <ul className="mt-6 grid gap-3">
              {caseStudyFields.map((field, index) => (
                <li key={index} className="flex items-center justify-between gap-3 border-2 border-frame-border bg-frame-bg p-4">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-frame-fg">{field}</span>
                  <span className="text-frame-accent font-bold">✓</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                How each case study is documented
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Each case study explains the starting situation, the links acquired, the
                campaign period, search performance changes, and any business outcomes that can
                be connected and verified.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-bg/60 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Only verified Framecipher results are published here, documented with available
                link, search, and business evidence rather than unverified performance claims.
              </p>
            </div>
            <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}