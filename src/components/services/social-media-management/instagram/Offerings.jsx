import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Instagram Strategy, Audience & Competitor Research',
    description:
      'Effective Instagram management starts with understanding your business, audience, market, and competitors. We review your existing account and research the people you want to reach. We also study competing accounts to identify content patterns, positioning opportunities, audience questions, and gaps your brand can address.',
    bullets: [
      'Business and account discovery',
      'Target audience research',
      'Customer question and pain-point research',
      'Competitor content analysis',
      'Competitor positioning review',
      'Content gap analysis',
      'Content pillar development',
      'Audience interests and behavior',
      'Market-specific content opportunities',
      'Content objectives',
      'Recurring content themes',
      'Format selection',
      'Brand messaging direction',
      'Content opportunities based on customer intent',
    ],
    note: 'The result is a structured content direction instead of publishing ideas whenever something comes to mind.',
  },
  {
    title: 'Instagram Profile Optimization & SEO',
    description:
      'Your Instagram profile is often the first place someone evaluates after discovering your content. We optimize the profile so visitors can quickly understand who you serve, what you offer, and what action they can take next.',
    bullets: [
      'Username review',
      'Profile name optimization',
      'Bio optimization',
      'Relevant keyword placement',
      'Business category',
      'Contact information',
      'Location information',
      'Website and link strategy',
      'Profile image guidance',
      'Call-to-action setup',
      'Pinned post strategy',
      'Story Highlight organization',
      'Service or product information',
      'Search-friendly content structure',
      'Profile-to-conversion journey',
      'Relevant topic and hashtag discovery where appropriate',
    ],
    note: 'Instagram search and discovery can change over time, so we focus on making your profile and content clear, relevant, and aligned with the language your target audience uses.',
  },
  {
    title: 'Multi-Format Content Strategy',
    description:
      'Instagram gives businesses several content formats, and each format can support a different objective. We build a content system that can combine the formats that fit your business instead of forcing every idea into one post type.',
    bullets: [
      'Reels for short-form discovery and storytelling',
      'Feed posts for brand communication',
      'Carousels for educational and informational content',
      'Stories for regular interaction and updates',
      'Highlights for important evergreen information',
      'Product content for ecommerce brands',
      'Customer-focused content for trust and conversion',
    ],
    note: 'The format should support the idea. A product demonstration may work better as a Reel. A step-by-step explanation may work better as a Carousel. A limited-time update may work better through Stories.',
  },
  {
    title: 'Reels Strategy, Production & Optimization',
    description:
      'Reels are an important part of Instagram’s current content ecosystem, particularly for brands looking to reach people beyond their existing audience.',
    bullets: [
      'Reel concept development',
      'Topic research',
      'Audience-focused content angles',
      'Hook development',
      'Scriptwriting',
      'Short-form storytelling',
      'Trend and audio research',
      'Brand-specific trend adaptation',
      'Vertical video editing',
      'On-screen text',
      'Captions and subtitles',
      'Pacing and scene selection',
      'Cover design',
      'Caption writing',
      'Calls to action',
      'Performance review',
    ],
    note: 'We do not use every trend simply because it is popular, and we prioritize original and meaningful content rather than building your strategy around repetitive or low-value reposting.',
  },
  {
    title: 'Feed, Carousel & Visual Content',
    description:
      'Your Feed remains important for people evaluating your brand after discovering your account.',
    bullets: [
      'Static Feed posts',
      'Educational Carousels',
      'Product Carousels',
      'Service-focused content',
      'Promotional posts',
      'Brand storytelling',
      'Customer-focused content',
      'Testimonials and social proof',
      'Educational graphics',
      'Infographics',
      'Product features',
      'Announcements',
      'Seasonal content',
      'FAQ-based content',
    ],
    carousel: [
      'Checklists',
      'Comparisons',
      'Processes',
      'FAQs',
      'Step-by-step guides',
      'Practical tips',
      'Product education',
      'Industry insights',
    ],
    note: 'We maintain visual consistency without allowing design to become more important than the message.',
  },
  {
    title: 'Stories & Highlights Management',
    description:
      'Stories create a more frequent and interactive layer of communication between your brand and audience.',
    bullets: [
      'Daily or scheduled Story planning',
      'Product and service updates',
      'Behind-the-scenes content',
      'Polls',
      'Questions',
      'Quizzes',
      'Customer feedback',
      'Product demonstrations',
      'Promotions',
      'Announcements',
      'Website and campaign links where available',
      'Story replies',
      'Audience interactions',
      'Highlight organization',
    ],
    highlightExamples: ['Services', 'Products', 'Reviews', 'FAQs', 'About Us', 'Offers', 'Locations', 'Contact'],
    note: 'We can also structure highlights around information people may need after discovering your profile.',
  },
  {
    title: 'Community & DM Management',
    description:
      'Instagram can function as an important customer communication channel, not just a publishing platform. Depending on your selected scope, we can manage the conversations that happen around your content.',
    bullets: [
      'Comment responses',
      'Direct messages',
      'Story replies',
      'Customer questions',
      'Product inquiries',
      'Service inquiries',
      'Basic information requests',
      'Lead qualification',
      'Inquiry escalation',
      'Spam and inappropriate comments',
      'Community interactions',
      'Customer communication guidelines',
    ],
    note: 'For sensitive, complex, or sales-critical conversations, we follow an agreed escalation process so the appropriate person from your business can take over. Community coverage, response windows, and escalation procedures are defined according to the selected management plan.',
  },
  {
    title: 'UGC, Creator & Collaboration Management',
    description:
      'User-generated content and creator collaborations can provide additional content opportunities and social proof when the partnership fits your audience.',
    bullets: [
      'UGC content planning',
      'Creator research',
      'Collaboration planning',
      'Creator briefs',
      'Content requirements',
      'Communication coordination',
      'Content approval workflows',
      'Campaign content organization',
      'Brand guidelines for creators',
      'Performance tracking',
      'Usage-rights coordination with relevant parties',
      'Creator Marketplace research or coordination where available and applicable',
    ],
    note: 'We focus on audience relevance and brand fit rather than selecting creators based only on follower count.',
  },
  {
    title: 'Instagram Ecommerce & Product Content',
    description:
      'For ecommerce brands, Instagram can support product discovery, education, social proof, customer questions, and purchase consideration.',
    bullets: [
      'Product launches',
      'Product demonstrations',
      'Product features',
      'Benefits and use cases',
      'Product comparisons',
      'Customer reviews',
      'UGC',
      'Product-focused Reels',
      'Promotional campaigns',
      'Seasonal collections',
      'Product FAQs',
      'Purchase-related DMs',
      'Website traffic',
      'Product discovery',
    ],
    note: 'Where Instagram Shopping or related commerce features are available and your account meets the applicable requirements, we can incorporate them into the broader content strategy. The exact commerce features available can depend on market, account eligibility, product category, and Instagram’s current requirements.',
  },
  {
    title: 'Publishing & Content Calendar Management',
    description:
      'Consistent publishing becomes easier when content is planned before the publishing date. We build and manage content calendars so production and approvals have a clear schedule.',
    bullets: [
      'Content themes',
      'Formats',
      'Campaigns',
      'Product launches',
      'Promotions',
      'Important dates',
      'Seasonal opportunities',
      'Audience needs',
      'Brand priorities',
      'Production timelines',
      'Approval schedules',
    ],
    note: 'Before publishing, content follows the agreed review and approval process. We then schedule or publish approved content according to the agreed plan.',
  },
  {
    title: 'Performance Tracking & Optimization',
    description:
      'Publishing content without reviewing performance makes it difficult to know what deserves more investment. We monitor relevant account and content metrics and use them to decide what comes next.',
    bullets: [
      'Reach',
      'Views',
      'Watch time where available',
      'Engagement',
      'Saves',
      'Shares',
      'Comments',
      'Profile visits',
      'Follows',
      'Link clicks where available',
      'DM activity',
      'Content format performance',
      'Audience response',
      'Discovery activity',
    ],
    note: 'Where reliable tracking is available, we can also consider relevant website visits, inquiries, product interest, or other agreed business actions. We compare performance across formats, content themes, audience responses, and business objectives to identify what should be repeated, improved, reduced, or tested next.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="What Our Instagram Management Service Includes"
        >
          Our Instagram Management Service covers the strategic, creative, operational, and
          analytical work required to maintain and grow a professional Instagram presence.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-muted/20 md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs font-medium text-frame-fg/90 md:text-sm">
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

              {item.carousel?.length > 0 && (
                <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Carousel structures
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.carousel.map((entry) => (
                      <li
                        key={entry}
                        className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.highlightExamples?.length > 0 && (
                <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Highlight examples
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.highlightExamples.map((entry) => (
                      <li
                        key={entry}
                        className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.note && (
                <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {item.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure what your account needs?
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Start with a free Instagram account audit
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review the actual account and tell you which improvements matter most before any
              management work begins.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Request Your Instagram Management Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
