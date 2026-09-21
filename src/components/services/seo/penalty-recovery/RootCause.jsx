import { SectionIntro } from '../../../Kinetic'

const causes = [
  {
    title: 'Manual Actions in Google Search Console',
    body: 'A manual action means a human reviewer at Google determined that some or all of the site does not comply with Google\u2019s spam policies.',
    closing:
      'The issue appears in the Manual Actions report, and the standard recovery path is to fix the violation, document the remediation, and submit a reconsideration request when the site is genuinely ready.',
  },
  {
    title: 'Google Core & Spam Update Impacts',
    body: 'A ranking decline following a Google update does not automatically mean Google issued a penalty.',
    closing:
      'For these cases, we analyze timing, affected pages, queries, content patterns, search intent, technical signals, and competitive changes to understand what may have contributed to the loss.',
  },
  {
    title: 'Technical, Migration & Indexing Problems',
    body: 'Some major traffic drops have nothing to do with a penalty.',
    lead: 'Examples include:',
    points: [
      'Accidental no index directives',
      'Canonical problems',
      'Redirect failures',
      'Robots.txt changes',
      'URL migrations',
      'Indexing issues',
      'Server errors',
      'Other technical changes that prevent Google from accessing or understanding pages',
    ],
    closing:
      'Google\u2019s traffic-drop guidance specifically recommends checking recent site changes, indexing, crawl-related issues, manual actions, security issues, and other non-penalty causes.',
  },
  {
    title: 'Security, Hacking & Spam Issues',
    body: 'A hacked site can contain injected pages, malicious files, phishing content, or unwanted software.',
    closing:
      'Google provides a separate Security Issues report for these problems, and security reviews follow a different process from standard manual-action reviews.',
  },
  {
    title: 'Search Demand, Competition & SERP Changes',
    body: 'Not every ranking decline is caused by something \u201Cwrong\u201D with the website. Search demand can change. Competitors can improve. Search results can change. User behavior can shift.',
    closing:
      'We compare your performance with the broader SERP and search landscape before attributing a loss to a Google penalty or update.',
  },
]

export default function RootCause() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Know what you're dealing with" title="Manual Action, Algorithmic Impact or Something Else?">
          A lost ranking does not always mean a penalty. We establish which category the problem
          falls into before recommending a recovery path.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {causes.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Cause 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.lead && (
                <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                  {item.lead}
                </p>
              )}
              {item.points?.length > 0 && (
                <ul className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.closing && (
                <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.closing}
                </p>
              )}
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}