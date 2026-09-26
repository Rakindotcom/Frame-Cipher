import { SectionIntro, PosterButton } from '../../../Kinetic'

const outcomes = [
  {
    title: 'Increase Content Discovery',
    body: 'A combination of relevant content, original creative work, strong topics, profile optimization, and consistent publishing can create more opportunities for people to discover your account.',
    points: [
      'Different formats used for different discovery opportunities',
      'Strong topics and creative work',
      'Profile optimization',
      'Consistent publishing',
    ],
    note: 'We use different formats for different discovery opportunities rather than relying on one content type.',
  },
  {
    title: 'Build Audience Engagement',
    body: 'Useful and relevant content gives people reasons to interact with your brand. Depending on the content and audience, we can create opportunities for:',
    points: ['Comments', 'Shares', 'Saves', 'Story interactions', 'Replies', 'DMs', 'Community conversations'],
    note: 'The goal is meaningful audience activity, not engagement numbers without business context.',
  },
  {
    title: 'Strengthen Brand Trust',
    body: 'A well-managed Instagram profile can help potential customers understand your business before they contact you. Consistent visuals, useful content, customer feedback, product information, behind-the-scenes content, and responsive communication can all contribute to a stronger customer experience.',
    points: [
      'Consistent visuals',
      'Useful content',
      'Customer feedback',
      'Product information',
      'Behind-the-scenes content',
      'Responsive communication',
    ],
  },
  {
    title: 'Generate DMs & Inquiries',
    body: 'Your Instagram profile should make it clear how an interested person can take the next step. We can structure content, CTAs, Stories, profile information, and community management around common customer questions and inquiry opportunities.',
    points: [
      'Profile clarity',
      'Content and CTAs',
      'Stories',
      'Community management',
    ],
    note: 'Where appropriate, qualified inquiries can be escalated to your sales or customer-service team.',
  },
  {
    title: 'Support Ecommerce & Product Discovery',
    body: 'Instagram can help customers discover products, understand how they work, compare options, and see how other customers use them. For ecommerce brands, we build content around product education, demonstrations, social proof, launches, promotions, UGC, and purchase-related questions.',
    points: [
      'Product education',
      'Demonstrations',
      'Social proof',
      'Launches and promotions',
      'UGC',
      'Purchase-related questions',
    ],
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic outcomes"
          title="What Instagram Management Can Help Your Business Achieve"
        >
          Instagram performance depends on your market, audience, offer, content quality, account
          history, competition, and other factors. Our role is to build a structured management system
          that supports measurable business objectives without promising outcomes the platform cannot
          guarantee.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {outcomes.map((item, index) => (
            <article key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {item.body}
                </p>
              </div>

              {item.points?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The honest framing
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              We build and manage a structured system, then use real performance data to improve it.
              We do not promise viral content, specific follower counts, or guaranteed leads and sales.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Discuss Your Instagram Strategy &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
