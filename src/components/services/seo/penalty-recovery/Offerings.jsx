import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Penalty Diagnosis & Investigation',
    body: 'We begin with evidence.',
    lead: 'Our investigation can include:',
    points: [
      'Search Console data',
      'Analytics data where available',
      'Manual-action and security reports',
      'Traffic patterns',
      'Ranking changes',
      'Affected URL groups',
      'Technical changes',
      'Backlink history',
      'Content changes',
      'Relevant Google update timing',
    ],
    closing: 'The goal is a defensible diagnosis before remediation begins.',
  },
  {
    title: 'Manual Action Remediation',
    body: 'When Google has issued a manual action, the remediation needs to address the specific violation described in Search Console.',
    lead: 'Depending on the issue, this may involve:',
    points: [
      'Content removal or improvement',
      'Link remediation',
      'Technical corrections',
      'Structured-data changes',
      'Spam cleanup',
      'Other violation-specific work',
    ],
    closing:
      'Google\u2019s current manual-action guidance provides issue-specific remediation steps and requires the problem to be addressed before a review request.',
  },
  {
    title: 'Unnatural Link Remediation & Disavow When Appropriate',
    body: 'We investigate backlinks for patterns that may violate Google\u2019s link spam policies, document problematic links, and pursue removal where appropriate.',
    closing:
      'Disavow is treated as an advanced tool, not a routine cleanup step. Google says most sites do not need to use it and recommends removal efforts first when dealing with a genuine unnatural-link issue.',
  },
  {
    title: 'Content Quality & People-First Recovery',
    body: 'For quality-related ranking declines, we review whether important pages provide original, useful, complete, and relevant information for the people searching for it. We assess content depth, topical coverage, intent alignment, originality, page usefulness, first-hand value where relevant, and the overall quality of the publishing experience.',
    closing:
      'We also consider E-E-A-T-related qualities without treating E-E-A-T as a single ranking score.',
  },
  {
    title: 'Technical SEO & Migration Recovery',
    body: 'We investigate technical changes that could have caused lost visibility.',
    lead: 'This can include:',
    points: [
      'Indexing and crawlability',
      'No index directives',
      'Canonical implementation',
      'Redirects',
      'URL changes',
      'XML sitemaps',
      'Internal linking',
      'HTTP status issues',
      'Rendering problems',
      'Migration configuration',
      'Accidental site-wide changes',
    ],
    closing:
      'The objective is to restore clear, consistent signals that allow search engines to discover, crawl, and understand the intended pages.',
  },
  {
    title: 'Google Core & Spam Update Recovery',
    body: 'When the evidence points toward an update-related ranking decline rather than a manual action, recovery requires broader improvement rather than reconsideration.',
    closing:
      'We analyze the pages and queries most affected, identify quality and relevance gaps, compare competing results, and prioritize changes that improve the site\u2019s usefulness and search alignment.',
  },
  {
    title: 'Reconsideration Request Support',
    body: 'For manual actions, we prepare the reconsideration process after the underlying issues have been addressed.',
    closing:
      'Google recommends that a reconsideration request explain the exact problem, the steps taken to fix it, and the outcome of the remediation. We help prepare the request, organize supporting documentation, and make sure it accurately reflects the work completed.',
  },
  {
    title: 'Post-Recovery Monitoring & Prevention',
    body: 'Recovery is not complete simply because rankings begin to improve.',
    closing:
      'We monitor important visibility indicators, track the pages and queries involved in the original loss, document changes, and look for signs that the original problem could return. Where appropriate, we also recommend preventive technical, content, and SEO controls.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What we cover" title="Our Google Penalty Recovery Services">
          Penalty recovery is only effective when it targets the actual cause. Our services cover
          the full arc from diagnosis to remediation, reconsideration, and monitoring.
        </SectionIntro>

        <div className="space-y-10 md:space-y-14">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-6 border-2 border-frame-border bg-frame-bg p-7 md:p-10 lg:grid-cols-[1fr_1.6fr]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Offer 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <span className="mt-2 block h-1 w-8 bg-frame-accent" />
              </div>
              <div>
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.lead && (
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                    {item.lead}
                  </p>
                )}
                {item.points?.length > 0 && (
                  <ul className="mt-5 space-y-2.5 border-l-2 border-frame-accent pl-5 text-sm md:text-base font-medium text-frame-fg">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-snug">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.closing && (
                  <p className="mt-5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.closing}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-4xl text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            Not sure what actually caused your traffic drop? Tell us what you are seeing and we will
            recommend the right diagnostic starting point.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="w-full whitespace-nowrap self-center">
              Request a Penalty Diagnosis
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}