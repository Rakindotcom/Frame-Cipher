import React from 'react'

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
      'That does not automatically mean your site has been “penalized.” Google says core updates are broad changes to its ranking systems, and recovery work should focus on understanding what changed and improving the site’s quality rather than looking for a single technical trick.',
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
      'Google’s own traffic-drop guidance specifically recommends investigating recent site moves and related technical changes when visibility falls.',
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
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>When This Applies</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            When Should You Seek Google Penalty Recovery?
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Recovery work only makes sense once the problem is real and understood. These are the situations where an investigation is worth starting.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows Container */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {scenarios.map((item, index) => (
            <div
              key={item.title}
              className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                {/* Col 1-3: Number and Category */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Scenario // 0{index + 1}
                  </span>
                </div>

                {/* Col 4-7: Headline / Scenario Title */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                {/* Col 8-12: Description / Solution */}
                <div className="md:col-span-5 space-y-3">
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {item.body}
                  </p>
                  {item.closing && (
                    <p className="border-l-2 border-frame-accent pl-3 text-xs leading-relaxed text-zinc-400">
                      {item.closing}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
