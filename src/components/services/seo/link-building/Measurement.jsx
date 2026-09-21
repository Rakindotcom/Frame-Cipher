import { SectionIntro } from '../../../Kinetic'

const measureAreas = [
  {
    title: 'Links & Referring Domains',
    body: 'New links, lost links, unique referring domains, repeated links, and links to different areas of the site.',
  },
  {
    title: 'Target Pages & Placement Coverage',
    body: 'Whether service pages are getting relevant references, how homepage-heavy the profile is, and where placements concentrate.',
  },
  {
    title: 'Referral Traffic & Brand Visibility',
    body: 'Referral visits, engagement quality, and the qualitative exposure that references create beyond a link.',
  },
  {
    title: 'Organic Search Performance',
    body: 'Impressions, clicks, visibility, and ranking changes for target queries, reviewed in Search Console against the work performed.',
  },
  {
    title: 'Business Outcomes',
    body: 'Qualified leads, enquiries, demo requests, product sales, and referral conversions, where they can be attributed and verified.',
  },
]

export default function Measurement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Results measured honestly"
          title="How We Measure Off-Page SEO Performance"
        >
          Link count alone does not explain whether an off-page campaign is working. We combine
          link data with referral, search, and business evidence to track what actually matters.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              We track the quantity and quality of links, the pages receiving references, the
              referral traffic they generate, the organic visibility that follows, and the
              business outcomes they support. No single number explains a campaign, so we do not
              build the reporting around one.
            </p>
            <p>
              Each area is reviewed against a baseline established during the initial backlink
              audit. That is what makes the measurement meaningful: change is judged against where
              the profile started, not against an arbitrary target.
            </p>
            <p className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
              We do not attribute every change in organic traffic to link building. Where other
              factors explain movement, we say so honestly rather than claiming unearned credit.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we review
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Five measurement areas
            </h3>
            <ul className="mt-6 space-y-4">
              {measureAreas.map((area, index) => (
                <li key={index} className="border-b border-frame-border/60 pb-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-tight text-frame-fg">
                        {area.title}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {area.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}