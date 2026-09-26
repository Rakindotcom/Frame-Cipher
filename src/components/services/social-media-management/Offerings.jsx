import { SectionIntro, PosterButton } from '../../Kinetic'

const services = [
  {
    title: 'Social Media Strategy & Account Management',
    body: 'We start by understanding your business, audience, competitors, existing social presence, and goals. That context is what makes the strategy practical instead of a generic posting template.',
    bullets: [
      'Platform setup and account configuration',
      'Ongoing account management',
      'Content planning and publishing',
      'Audience engagement',
      'Performance reviews',
    ],
  },
  {
    title: 'Content Strategy & Monthly Content Calendar',
    body: 'A content calendar gives every post a clear purpose. We plan your month around content pillars, campaigns, business priorities, important dates, audience interests, and platform-specific formats.',
    bullets: [
      'Content pillars defined around your business',
      'Campaign and important-date mapping',
      'Platform-specific format planning',
      'A structured calendar you receive in advance',
    ],
  },
  {
    title: 'Social Media Content Creation',
    body: 'We create social content that fits your brand and the platform where it will be published, rather than one generic asset resized for every channel.',
    bullets: [
      'Captions and copy',
      'Educational posts',
      'Promotional content',
      'Brand stories and product content',
      'Engagement posts and campaign assets',
      'Short-form video concepts',
    ],
  },
  {
    title: 'Graphic Design & Carousels',
    body: 'Visual consistency is what helps people recognize your brand as they move between platforms. Designs are built around each platform’s format and audience expectations.',
    bullets: [
      'Branded graphics',
      'Carousel posts',
      'Promotional visuals',
      'Educational designs',
      'Product-focused content',
    ],
  },
  {
    title: 'Reels & Short-Form Video',
    body: 'Short-form video is a core part of modern social content. We develop concepts and platform-ready videos for Instagram Reels, Facebook Reels, TikTok, and YouTube Shorts where they fit your strategy.',
    bullets: [
      'Educational clips',
      'Product demonstrations',
      'Promotional videos',
      'Behind-the-scenes content',
      'Tips, trends, and brand storytelling',
    ],
  },
  {
    title: 'Publishing & Scheduling',
    body: 'Consistent publishing keeps your content plan moving without requiring your team to manage every post manually. Approved content is prepared, scheduled, and published around your calendar.',
    bullets: [
      'Content prepared and scheduled',
      'Publishing per platform requirements',
      'Schedules adjusted by audience and campaign timing',
      'Timing informed by performance data',
    ],
  },
  {
    title: 'Community & Inbox Management',
    body: 'Social media management does not stop when a post is published. We monitor comments, direct messages, mentions, and relevant interactions across the platforms in your plan.',
    bullets: [
      'Responses in your approved brand voice',
      'Escalation of customer-service issues',
      'Escalation of sensitive conversations',
      'Spam and inappropriate interaction moderation',
    ],
  },
  {
    title: 'Profile Optimization',
    body: 'Your profile is often one of the first places a potential customer checks after discovering your brand, so it needs to read clearly and build trust immediately.',
    bullets: [
      'Bio and About section',
      'Profile and cover visuals',
      'Contact information and links',
      'Calls to action and categories',
      'Location and platform-specific details',
    ],
  },
  {
    title: 'Social Listening & Reputation Management',
    body: 'We monitor relevant conversations, mentions, customer feedback, and recurring questions that can influence how people perceive your brand.',
    bullets: [
      'Common customer concerns identified',
      'Content opportunities surfaced',
      'Reputation issues flagged early',
      'Conversations worth joining',
      'No unsupported commitments on your behalf',
    ],
  },
  {
    title: 'Analytics, Reporting & Optimization',
    body: 'Monthly reporting should explain performance rather than simply display numbers. We track relevant metrics, then use those insights to decide what changes in the next content cycle.',
    bullets: [
      'Reach and engagement tracking',
      'Follower growth',
      'Content performance',
      'Profile activity and website traffic',
      'Recommendations for the next cycle',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Social Media Management Services Include"
        >
          Every engagement covers strategy, content, publishing, community, and reporting. The
          mix inside each area depends on your plan, platform selection, and content requirements.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>

              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Scope is agreed before work begins. If you already have photography, videos, or other
            brand assets, we can organize and repurpose them into platform-ready content.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Social Media Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
