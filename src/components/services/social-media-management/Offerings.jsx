import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Social media management covers the ongoing content, community engagement, and platform-specific strategy needed to maintain an active, consistent presence, and it typically includes content planning, platform-specific posting, community response, and monthly performance reporting, not just a content calendar handed over and left unmanaged. It's built for businesses that want their social presence to actually reflect well on them, not just technically exist.",
    "description": "Facebook Management Page management, content posting, and community engagement built around how Facebook audiences actually use the platform today, less about broad organic reach, which has declined significantly for business pages over the years, and more about community building, customer service, local discovery, and serving as a trust signal buyers check before purchasing. Includes post scheduling, Facebook Group management where relevant, event promotion, and review monitoring. Instagram Management Feed posts, Stories, Reels, and Guides managed around Instagram's visual-first culture and its algorithm's current preference for short-form video and genuine engagement over follower count alone. Includes content planning across formats, hashtag and caption strategy, Stories interaction features (polls, questions, links), and coordination with influencer or creator partnerships where relevant. LinkedIn Management Company page management alongside, where relevant, ghostwriting and posting support for founder or executive personal profiles, since LinkedIn's algorithm still favors personal profile content over company pages for reach. Includes thought leadership content, industry commentary, employee advocacy encouragement, and positioning built around B2B credibility rather than consumer-style engagement tactics. TikTok Management Short-form video content built around TikTok's specific format conventions, native editing style, trending audio and formats used deliberately, and a posting cadence suited to how the platform's discovery algorithm actually surfaces content to new audiences, not just existing followers. Includes trend monitoring, content concepting, and captions written for how TikTok users actually search and browse. YouTube Management Channel management, upload strategy, and on-platform optimization for a channel that rewards long-term consistency and search-optimized metadata more than almost any other platform. Includes title, description, and tag optimization for YouTube's own search function, thumbnail strategy, playlist organization, and community tab engagement, alongside a realistic upload schedule your team or ours can actually sustain. Content Calendar & Strategy The planning layer underneath everything else, deciding what gets posted where, in what format, and why, before content gets created under time pressure. Includes content pillar development, platform-specific format planning, key date and campaign alignment, and a documented calendar your team can review and provide input on ahead of time, not a plan revealed only as posts go live. Community Management Responding to comments, direct messages, and mentions across platforms in a timely, on-brand way, including flagging genuine customer service issues to your team and moderating spam or inappropriate content. An unanswered question or complaint sitting publicly for days reflects on the business as much as any post does, and response time is itself a signal both platforms and potential customers notice. Monthly Reporting & Analytics Clear reporting on engagement rate, follower growth, reach, and content performance by format and platform, with context explaining what the numbers actually mean for your business rather than a raw export of platform-native metrics. Includes identifying which content types are genuinely working, so strategy adjusts based on real performance rather than assumption.",
    "bullets": []
  },
  {
    "title": "Where This Fits Next to Paid Advertising",
    "description": "Social media management and paid social advertising sound similar and solve genuinely different problems. Organic: Building a Presence Over Time Social media management is about the ongoing, unpaid presence, the content, the community responses, the consistency that builds an audience gradually and keeps existing followers engaged. Paid: Buying Specific, Immediate Reach Paid social advertising, covered under our separate Paid Advertising services, targets specific audiences with a budget behind it, built for faster, more controllable results tied to a campaign objective. Why Most Businesses Eventually Need Both An active, well-managed organic presence makes paid ads perform better, since a visitor who clicks an ad and lands on an inactive, poorly maintained profile often loses trust immediately, the two genuinely reinforce each other rather than competing for the same budget.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every week a social profile sits inactive, the businesses actively posting and engaging keep building an audience relationship that's harder to catch up to later, social growth compounds through consistency in a way that's difficult to shortcut once a gap has opened up. The cost of neglect isn't always obvious either: a potential customer checking a business's Instagram before deciding to reach out, seeing nothing posted in months, forms an impression before any actual product or service quality gets a chance to matter.",
  "A common misunderstanding treats social media as something that runs itself once a few posts go up. It doesn't. Each platform has its own rhythm, its own content conventions, and its own audience expectations, a strategy that ignores those differences and posts the same content everywhere usually underperforms on every platform at once, rather than succeeding broadly."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher runs content creation, community management, and platform strategy under one in-house team, so a Facebook post, an Instagram Story, and a LinkedIn article aren't each handled by disconnected freelancers working from different briefs. Every piece of content goes through your review before it is published, which keeps your brand voice consistent and keeps you informed rather than discovering what went out after the fact.",
    "text": "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means content strategy accounts for real platform and audience differences between markets rather than one region's posting habits applied everywhere. Community management here means actual timely responses, not a monthly content drop with nobody watching the comments in between."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
