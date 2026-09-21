import { SectionIntro } from '../../../Kinetic'

const challenges = [
  {
    title: 'Wrong Country or Language Version Ranking',
    body: 'A search engine may surface a different regional or language version than the one intended for a particular audience. We review:',
    points: [
      'Hreflang',
      'Canonicals',
      'Internal links',
      'URL structure',
      'Content localization',
      'Language signals',
      'Regional relevance',
      'Indexation',
    ],
    note: 'We then align the relevant signals so each version has a clearer purpose.',
  },
  {
    title: 'Hreflang & Canonical Conflicts',
    body: 'Hreflang and canonical signals serve different purposes, so they need to work together correctly. We review whether regional pages have consistent relationships across:',
    points: [
      'Canonical declarations',
      'Hreflang annotations',
      'Redirects',
      'Indexation',
      'Regional URLs',
    ],
    note: 'The aim is to reduce conflicting signals across international page sets and identify technical inconsistencies before they affect a larger portion of the site.',
  },
  {
    title: 'Duplicate or Overlapping Regional Pages',
    body: 'Similar regional pages are not automatically a problem. The greater risk is creating pages with little meaningful regional value while using inconsistent targeting signals. We evaluate:',
    points: [
      'Content similarity',
      'Search intent',
      'Regional relevance',
      'Keyword targeting',
      'Canonicals',
      'Hreflang',
      'Internal links',
      'Indexation',
    ],
    note: 'Where appropriate, we differentiate, consolidate, improve, or restructure pages instead of creating more URLs without a clear purpose.',
  },
  {
    title: 'Failed International Migrations',
    body: 'International migrations can affect rankings, indexation, redirects, internal links, and regional targeting at the same time. We review:',
    points: [
      'URL mapping',
      'Redirects',
      'Canonicals',
      'Hreflang',
      'Sitemaps',
      'Internal links',
      'Indexation',
      'Existing authority',
    ],
    note: 'The objective is to identify migration risks before launch and monitor the transition after deployment.',
  },
  {
    title: 'Weak Market Localization',
    body: 'A translated page may still fail to match how people search in the target market. We review:',
    points: [
      'Local terminology',
      'Search intent',
      'Page messaging',
      'Content depth',
      'Currency',
      'Units',
      'Calls to action',
      'Trust elements',
      'Competitive positioning',
    ],
    note: 'The objective is useful localization that serves the audience and supports the search strategy.',
  },
  {
    title: 'Limited Country-Level Authority',
    body: 'A website can have strong overall authority while remaining less competitive within a specific market. We compare the site\u2019s market-level competitive position with relevant competitors and identify opportunities involving:',
    points: [
      'Local links',
      'Industry publications',
      'Regional resources',
      'Digital PR',
      'Partnerships',
      'Market-specific outreach',
      'Content promotion',
    ],
    note: 'The strategy focuses on building relevance and authority where it can support the business\u2019s market priorities.',
  },
]

export default function Challenges() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Problems we fix" title="International SEO Challenges We Solve">
          International SEO problems often appear as a website expands into more countries and
          languages. We focus on the issues that can prevent regional pages from being understood,
          indexed, competitive, or shown to the appropriate audience.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Challenge 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}