import { SectionIntro } from '../../../Kinetic'

const scenarios = [
  {
    title: 'Google Search Console Shows a Manual Action',
    body: 'If Search Console shows a manual action, Google has identified a violation of its spam policies and provides information about the affected issue. A manual action requires the underlying problem to be fixed before you request a review.',
    closing:
      'We analyze the notice, identify the affected areas, and create a remediation plan tied directly to what Google has flagged.',
  },
  {
    title: 'Organic Traffic Drops After a Google Update',
    body: 'A major traffic decline around a Google core or spam update can require a deeper quality and search-performance investigation.',
    closing:
      'That does not automatically mean your site has been \u201Cpenalized.\u201D Google says core updates are broad changes to its ranking systems, and recovery work should focus on understanding what changed and improving the site\u2019s quality rather than looking for a single technical trick.',
  },
  {
    title: 'Rankings Fall Across Important Pages',
    body: 'A broad decline across commercial pages, informational content, or an entire topic cluster may indicate a change in search performance rather than one isolated page problem.',
    closing:
      'We compare affected URLs, queries, impressions, clicks, rankings, and historical patterns to identify where the loss is concentrated.',
  },
  {
    title: 'Traffic Drops After a Website Migration',
    body: 'A migration can create ranking and traffic losses when URLs, redirects, canonicals, internal links, indexing signals, or other technical elements are not transferred correctly.',
    closing:
      'Google\u2019s own traffic-drop guidance specifically recommends investigating recent site moves and related technical changes when visibility falls.',
  },
  {
    title: 'Your Site Has Unnatural or Manipulative Links',
    body: 'If your site has participated in paid links or other link schemes designed to manipulate rankings, the issue may require a detailed backlink investigation.',
    closing:
      'For a links-related manual action, Google recommends trying to remove violating links first and using the disavow tool only when appropriate. It also warns that blindly disavowing backlinks can be harmful.',
  },
  {
    title: 'You Discover Spam, Hacked Pages or Unwanted Content',
    body: 'Unexpected pages, spam injections, malware, phishing content, or hacked sections can affect both users and search visibility.',
    closing:
      'Google treats security issues separately from manual actions, so we first identify whether the problem is security-related, search-policy-related, or both.',
  },
]

export default function WhenNeed() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="When this applies" title="When Should You Seek Google Penalty Recovery?">
          Recovery work only makes sense once the problem is real and understood. These are the
          situations where an investigation is worth starting.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scenarios.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Scenario 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
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