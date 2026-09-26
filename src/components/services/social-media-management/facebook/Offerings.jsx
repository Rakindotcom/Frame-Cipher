import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Facebook Page Strategy & Optimization',
    description:
      'We start with the Page itself. A poorly structured Page can create unnecessary friction before a customer ever contacts your business. We review the information customers see and the operational setup behind the Page.',
    bullets: [
      'Facebook Page audit',
      'Business category review',
      'Page name and username recommendations',
      'Page URL and vanity URL review',
      'About section optimization',
      'Business description and service information',
      'Contact information',
      'Location and operating hours',
      'Call-to-action setup',
      'Profile and cover image recommendations',
      'Services and business information',
      'Page information consistency',
      'Basic Facebook Page SEO',
      'Local discoverability improvements',
      'Content structure recommendations',
      'Messenger readiness',
      'Page access and role review',
      'Meta Business Suite workflow coordination',
      'Basic Page health and restriction checks',
    ],
    note: 'Where appropriate, we also review whether your Page information is consistent across your website and other business profiles. We do not use keyword stuffing or artificial tactics. The goal is to make your Page clearer for both people and the platforms that interpret your business information.',
  },
  {
    title: 'Facebook Page SEO & Discoverability',
    description:
      'Facebook search visibility starts with a clear business identity. We review the parts of your Page that help customers understand what you offer and where you operate.',
    bullets: [
      'Business category',
      'Page name',
      'Username',
      'About information',
      'Services',
      'Location information',
      'Contact details',
      'Relevant business terminology',
      'Content topics',
      'Local business signals',
      'Consistency across important business information',
    ],
    note: 'For Bangladesh businesses, we can also consider Bangla and English communication where it makes sense for the target audience. Facebook Page SEO is not the same as traditional website SEO. We treat it as part of your broader social presence and customer discovery strategy.',
  },
  {
    title: 'Content Strategy & Content Creation',
    description:
      'Good Facebook management needs more than a posting schedule. We build content around your business, audience questions, customer journey, and brand voice.',
    bullets: [
      'Educational posts',
      'Product or service content',
      'Promotional posts',
      'Customer FAQs',
      'Tips and how-to content',
      'Brand stories',
      'Customer testimonials',
      'Social proof',
      'Behind-the-scenes content',
      'Product features',
      'Customer-focused posts',
      'Seasonal content',
      'Event-related content',
      'Company announcements',
      'Community-focused content',
      'Offer and campaign content',
    ],
    creative: [
      'Branded graphics',
      'Carousels',
      'Short-form videos',
      'Reels',
      'Story creatives',
      'Captions',
      'Content hooks',
      'Calls to action',
      'Relevant hashtag planning',
    ],
    note: 'Every content calendar is planned around your business priorities rather than filling empty posting slots.',
  },
  {
    title: 'Facebook Reels, Stories & Feed Content',
    description:
      'Facebook users do not interact with every format in the same way. We plan content across the formats that make sense for your audience and goals.',
    bullets: [
      'Feed content for education, announcements, product information, offers, social proof, and brand communication',
      'Reels for short-form education, product demonstrations, behind-the-scenes content, trends, and attention-focused creative',
      'Stories for timely updates, offers, questions, reminders, polls, events, and lighter daily communication',
    ],
    note: 'The objective is not to publish every format simply because it exists. We choose formats based on the content idea, audience, business goal, and available creative assets.',
  },
  {
    title: 'Community & Customer Service Management',
    description:
      'Your Facebook Page is also a customer communication channel. We help manage the conversations that happen around your content and Page.',
    bullets: [
      'Comment monitoring',
      'Comment responses',
      'Messenger monitoring',
      'Customer question handling',
      'Basic product or service information',
      'Conversation follow-up',
      'Lead or inquiry escalation',
      'Service issue escalation',
      'Community engagement',
      'Relevant audience interactions',
      'Spam identification',
      'Sensitive conversation escalation',
    ],
    note: 'We follow an agreed brand voice and escalation process. When a question requires information or authority outside the agreed scope, we escalate it to the appropriate person on your team instead of guessing.',
  },
  {
    title: 'Messenger Workflow & Inquiry Management',
    description:
      'Messenger can become an important part of the customer journey for many Facebook-led businesses. We help establish a practical workflow.',
    bullets: [
      'Common customer questions',
      'Product or service inquiries',
      'Pricing questions',
      'Availability questions',
      'Location and business-hour questions',
      'Lead or inquiry escalation',
      'Follow-up requirements',
      'Sensitive customer issues',
      'Internal handoff',
    ],
    note: 'Where automation is appropriate, we can help structure the workflow around your existing business process. We do not promise that every message becomes a sale. The goal is to make customer communication more consistent, useful, and easier for your team to manage.',
  },
  {
    title: 'Comment & Review Management',
    description:
      'Public comments and reviews can influence how potential customers perceive your business. We monitor relevant interactions and help maintain a professional response process.',
    bullets: [
      'Positive review responses',
      'Negative review responses',
      'Customer concern handling',
      'Comment responses',
      'Spam comment management',
      'Repetitive promotional comments',
      'Sensitive conversations',
      'Escalation of serious complaints',
      'Review monitoring',
      'Response consistency',
    ],
    note: 'We do not use fake reviews or manufactured engagement. The goal is to help your Page maintain a credible public presence while giving genuine customer feedback the right attention.',
  },
  {
    title: 'Facebook Page Moderation',
    description:
      'Active Pages need moderation. We can monitor and manage content that falls within your agreed moderation policy.',
    bullets: [
      'Spam',
      'Promotional spam',
      'Repetitive comments',
      'Abusive comments',
      'Inappropriate content',
      'Suspicious activity',
      'Off-topic discussions',
      'Potentially harmful interactions',
      'Comments requiring internal escalation',
    ],
    note: 'Moderation rules are defined around your brand and business requirements. Where an issue involves a platform policy, account restriction, or decision by Meta, we can identify the issue and guide the appropriate next step. We do not guarantee that Meta will approve an appeal or remove a restriction.',
  },
  {
    title: 'Performance Tracking & Reporting',
    description:
      'Posting without reviewing performance makes optimization difficult. We track relevant Facebook performance data and use it to improve future content and management decisions.',
    bullets: [
      'Reach',
      'Engagement',
      'Reactions',
      'Comments',
      'Shares',
      'Video performance',
      'Page activity',
      'Message activity',
      'Response performance',
      'Top-performing content',
      'Underperforming content',
      'Audience trends',
      'Content format performance',
      'Monthly observations',
      'Recommended next actions',
    ],
    note: 'The focus is not on vanity numbers alone. We look at what the data tells us about content, audience behavior, customer interaction, and future opportunities.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="What Our Facebook Management Service Includes"
        >
          Every plan is built from the same in-house team, so Page optimization, content, community
          care, moderation, and reporting stay coordinated rather than split across vendors.
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

              {item.creative?.length > 0 && (
                <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Creative we can develop
                  </span>
                  <ul className="mt-3 space-y-2 text-xs font-medium text-frame-fg/90">
                    {item.creative.map((asset, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{asset}</span>
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
              Not sure what your Page needs?
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Start with a free Facebook Page audit
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review the actual Page and tell you which improvements matter most before any
              management work begins.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Request a Monthly Management Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
