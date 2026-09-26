import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Content Strategy & Goal Alignment',
    body: [
      'We establish the strategic foundation before building the publishing calendar.',
      'Our planning considers your business objectives, audience, offers, brand positioning, existing content, active platforms, and available production capacity.',
    ],
    listLabel: 'What We Do',
    list: [
      'Business goal alignment',
      'Audience and customer understanding',
      'Content objectives',
      'Platform role definition',
      'Campaign priorities',
      'Messaging direction',
      'Content format planning',
      'CTA planning',
      'Publishing cadence recommendations',
      'Content planning priorities',
    ],
    note: 'The strategy determines what your content needs to communicate. The calendar turns those decisions into an actionable publishing plan.',
  },
  {
    number: '02',
    title: 'Audience & Content Pillar Planning',
    body: [
      'A strong content calendar needs more than a list of topics.',
      'We organize your content around practical content pillars that reflect your audience\u2019s interests and your business priorities.',
    ],
    listLabel: 'Depending on the business, pillars may include',
    list: [
      'Educational content',
      'Product or service education',
      'Industry insights',
      'Customer questions',
      'Case studies and proof',
      'Brand stories',
      'Behind-the-scenes content',
      'Community-focused content',
      'Promotional content',
      'Seasonal or campaign content',
    ],
    note: 'Each pillar can generate multiple topics and formats without forcing your team to repeatedly start from a blank page. We also consider different audience needs and stages of the customer journey so the calendar does not become a continuous stream of promotional posts.',
  },
  {
    number: '03',
    title: 'Cross-Platform Calendar Planning',
    body: [
      'We create a master content calendar that gives your team one coordinated view of planned activity across the platforms you use.',
    ],
    listLabel: 'The calendar can organize',
    list: [
      'Content topics',
      'Content pillars',
      'Platforms',
      'Publishing dates',
      'Formats',
      'Campaigns',
      'CTAs',
      'Required assets',
      'Production deadlines',
      'Approval deadlines',
      'Publishing status',
    ],
    note: 'This helps prevent scheduling conflicts, missed campaign opportunities, inconsistent messaging, and unnecessary duplication. The goal is one practical planning system instead of several disconnected content schedules.',
  },
  {
    number: '04',
    title: 'Platform-Specific Content Adaptation',
    body: [
      'Coordinated content does not mean publishing the same asset everywhere.',
      'A campaign can have one central message while its execution changes according to the platform.',
    ],
    listLabel: 'For example, one campaign may become',
    list: [
      'An Instagram carousel',
      'A Facebook post',
      'A LinkedIn insight',
      'A TikTok video',
      'A YouTube video or Short',
    ],
    note: 'The message remains aligned, but the format, hook, presentation, length, tone, and CTA can change according to the platform and audience. This gives your brand consistency without making every social channel look identical.',
  },
  {
    number: '05',
    title: 'Campaign & Launch Coordination',
    body: [
      'Important campaigns need more than one announcement.',
      'We plan content across the campaign lifecycle so audiences can encounter the right information at different stages.',
    ],
    listLabel: 'Campaign planning can include',
    list: [
      'Pre-launch awareness',
      'Educational content',
      'Launch announcements',
      'Product or service highlights',
      'Social proof',
      'FAQs and objection handling',
      'Reminder content',
      'Promotional content',
      'Follow-up content',
      'Post-campaign content',
    ],
    extra: 'We can also work backward from important dates to establish production, review, approval, and publishing deadlines.',
    note: 'This gives your team more time to prepare instead of rushing campaign content immediately before launch.',
  },
  {
    number: '06',
    title: 'Repurposing & Asset Planning',
    body: [
      'Repurposing works best when it is planned before production.',
      'We identify high-value source content and determine how it can support additional platform-specific content.',
    ],
    listLabel: 'For example, one long-form YouTube video could become',
    list: [
      'YouTube Shorts',
      'TikTok clips',
      'Instagram Reels',
      'LinkedIn insights',
      'Facebook posts',
      'Supporting campaign content',
    ],
    note: 'The objective is not to copy the same asset everywhere. It is to identify the useful ideas inside one source asset and adapt them into formats that make sense for different platforms. This can help businesses get more value from each production effort while maintaining platform-specific quality.',
  },
  {
    number: '07',
    title: 'Approval & Production Workflow',
    body: [
      'A content calendar should make production easier, not become another document that nobody updates.',
    ],
    listLabel: 'We can establish a clear workflow for',
    list: [
      'Content planning',
      'Asset requirements',
      'Content ownership',
      'Production deadlines',
      'Review stages',
      'Client approvals',
      'Revisions',
      'Final publishing',
      'Version control',
      'Schedule changes',
    ],
    extra: 'For businesses with internal teams, the calendar can serve as a shared planning system. For businesses using Framecipher for platform management, the same framework can connect planning with content production and publishing.',
  },
  {
    number: '08',
    title: 'Performance Review & Calendar Optimization',
    body: [
      'A content calendar should evolve as your business, audience, campaigns, and content performance change.',
    ],
    listLabel: 'Depending on the platform and objective, we can review relevant signals such as',
    list: [
      'Reach',
      'Engagement',
      'Saves and shares',
      'Video views',
      'Watch behavior',
      'Profile activity',
      'Website clicks',
      'Leads',
      'Campaign response',
      'Conversion-related actions',
    ],
    note: 'The purpose is not to chase every short-term metric. Performance insights help determine which topics, formats, messages, campaigns, and content approaches deserve more attention in future planning.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Our Content Calendar &amp; Strategy Service Includes"
        >
          The coordination layer that sits above individual platform plans, connecting business goals,
          audience needs, campaigns, and publishing activity into one practical system.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  {block.listLabel}
                </span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {block.list.map((entry) => (
                    <li
                      key={entry}
                      className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>

              {block.extra && (
                <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {block.extra}
                </p>
              )}

              {block.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A content calendar should make production easier, not become another document that nobody
            updates.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Build My Content Calendar &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
