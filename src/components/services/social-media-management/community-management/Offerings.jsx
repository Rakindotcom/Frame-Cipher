import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "COMMENT & MESSAGE RESPONSE",
    "description": "The core of the service: making sure nothing sits unanswered longer than it should. What We Do The gap between a business that responds in an hour and one that responds in three days is often the gap between a lead and a lost inquiry.",
    "bullets": [
      "Comment Monitoring & Response: Timely, on-brand replies across Facebook, Instagram, LinkedIn, TikTok, and YouTube.",
      "Direct Message Management: Responding to inquiries that arrive through DMs, often the first genuine sales conversation with a prospective customer.",
      "Response Time Standards: Working to a defined response window your business can actually rely on, not an inconsistent, whenever-someone-notices approach.",
      "Tone & Voice Consistency: Keeping every response recognizably on-brand, regardless of which platform or which team member is behind it."
    ]
  },
  {
    "title": "REVIEW MONITORING & RESPONSE",
    "description": "Reviews sit publicly and permanently, which makes how they're handled part of the business's actual reputation. What We Do A thoughtfully handled negative review can build more trust with someone reading it later than a perfect five-star record with no reviews at all.",
    "bullets": [
      "Review Monitoring Across Platforms: Tracking new reviews on Google, Facebook, and other relevant platforms as they come in.",
      "Professional Response to Negative Reviews: Addressing criticism calmly and constructively, without getting defensive in public.",
      "Positive Review Engagement: Thanking and acknowledging positive reviews, which encourages more of them over time.",
      "Escalation for Serious Complaints: Flagging genuinely serious issues to your team quickly, beyond a standard public reply."
    ]
  },
  {
    "title": "CUSTOMER SERVICE ESCALATION",
    "description": "Not every comment or message can be resolved in the comment section, and knowing the difference matters. What We Do A public complaint moved to a private conversation and genuinely resolved often turns into a customer who becomes more loyal, not less.",
    "bullets": [
      "Issue Triage: Distinguishing a quick public reply from something that genuinely needs your team's direct involvement.",
      "Internal Escalation Process: A clear system for routing real customer service issues to the right person, quickly.",
      "Follow-Up Tracking: Making sure escalated issues actually get resolved, not just handed off and forgotten.",
      "Sensitive Situation Handling: Managing public complaints or crises with judgment, moving serious conversations to private channels where appropriate."
    ]
  },
  {
    "title": "MODERATION & BRAND PROTECTION",
    "description": "Keeping a community space genuinely usable, not overrun by spam or hostility. What We Do Deleting every piece of criticism reads as worse than leaving it up and responding to it well - the goal is a clean space, not a censored one.",
    "bullets": [
      "Spam & Bot Comment Removal: Keeping comment sections clean of spam that undermines a page's credibility.",
      "Inappropriate Content Moderation: Removing genuinely inappropriate content while respecting legitimate criticism, which is a different thing entirely.",
      "Community Guideline Enforcement: Applying clear, consistent standards for what is and isn't acceptable in your community spaces.",
      "Crisis Monitoring: Watching for a sudden spike in negative sentiment that might signal a bigger issue developing."
    ]
  },
  {
    "title": "COMMUNITY GROWTH & ENGAGEMENT",
    "description": "Beyond reactive response, actively building a sense of genuine community around a brand. What We Do Community management works best as part of a broader content strategy - see our Content Calendar & Strategy page for how the two connect.",
    "bullets": [
      "Proactive Engagement: Initiating conversation, not just responding to it, to build a more active community over time.",
      "User-Generated Content Encouragement: Prompting and reposting genuine customer content, which builds trust more than brand-produced content alone.",
      "Community Event Participation: Engaging around relevant conversations, hashtags, or events where your audience is already active.",
      "Advocate & Superfan Identification: Recognizing and building relationships with the people most genuinely engaged with your brand."
    ]
  },
  {
    "title": "What Response Time Actually Signals",
    "description": "Understanding why speed matters this much changes how community management should genuinely be prioritized. To the Customer A fast, thoughtful response signals a business that's actually paying attention, a slow or absent one signals the opposite, regardless of how good the underlying product or service is. To the Platform Comments and DMs responded to quickly often carry algorithmic weight, especially on platforms like Instagram and Facebook, where engagement signals influence how far content reaches. To Everyone Else Watching Public responses aren't just for the person who asked, every visible interaction is being read by everyone else who happens to see the thread, forming an impression before they've engaged directly at all. The Cost of Getting It Wrong A single visibly ignored or poorly handled comment can do more reputational damage than several pieces of genuinely good content can offset.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Neglected comments and messages cost more than they appear to on the surface.",
  "Unanswered Questions Are Lost Opportunities",
  "A prospective customer asking a question in the comments who never gets a reply usually doesn't ask twice, they just go elsewhere.",
  "Negative Comments Left Unaddressed Compound",
  "A single unanswered complaint sitting visibly on a post can shape how every future visitor reads that post, long after the original issue would have been resolvable.",
  "DMs Are Often the Real Inquiry Channel",
  "For a lot of businesses, direct messages carry more genuine sales potential than public comments, and they're also the easiest channel to quietly neglect.",
  "Consistency Across Platforms Is Harder Than It Looks",
  "Maintaining the same tone, response speed, and quality across five different platforms takes deliberate process, not just good intentions."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Content gets most of the attention in social media strategy, and community management usually gets whatever time is left over, which is backwards, given how directly response time and tone affect whether someone actually trusts a business enough to buy from it. We treat comments, DMs, and reviews as a genuine customer touchpoint, not background noise around the \"real\" work of posting. A single well-handled negative comment, answered publicly and professionally, often does more for trust than the content that prompted it in the first place.",
    "text": "\"Nobody remembers most individual posts. People remember how a business responded when they had a question or a complaint, that's the part that actually shapes reputation.\" Timely, Cross-Platform Response | Genuine Customer Service, Not Just Engagement | Reputation Protected in Public View"
  },
  {
    "title": "Our Community Management Services",
    "text": "Good community management touches response speed, tone, escalation, and moderation together, not just replying quickly."
  },
  {
    "title": "COMMENT & MESSAGE RESPONSE",
    "text": "The core of the service: making sure nothing sits unanswered longer than it should."
  },
  {
    "title": "What We Do",
    "text": "* Comment Monitoring & Response: Timely, on-brand replies across Facebook, Instagram, LinkedIn, TikTok, and YouTube. * Direct Message Management: Responding to inquiries that arrive through DMs, often the first genuine sales conversation with a prospective customer. * Response Time Standards: Working to a defined response window your business can actually rely on, not an inconsistent, whenever-someone-notices approach. * Tone & Voice Consistency: Keeping every response recognizably on-brand, regardless of which platform or which team member is behind it. The gap between a business that responds in an hour and one that responds in three days is often the gap between a lead and a lost inquiry."
  },
  {
    "title": "REVIEW MONITORING & RESPONSE",
    "text": "Reviews sit publicly and permanently, which makes how they're handled part of the business's actual reputation."
  },
  {
    "title": "What We Do",
    "text": "* Review Monitoring Across Platforms: Tracking new reviews on Google, Facebook, and other relevant platforms as they come in. * Professional Response to Negative Reviews: Addressing criticism calmly and constructively, without getting defensive in public. * Positive Review Engagement: Thanking and acknowledging positive reviews, which encourages more of them over time. * Escalation for Serious Complaints: Flagging genuinely serious issues to your team quickly, beyond a standard public reply. A thoughtfully handled negative review can build more trust with someone reading it later than a perfect five-star record with no reviews at all."
  },
  {
    "title": "CUSTOMER SERVICE ESCALATION",
    "text": "Not every comment or message can be resolved in the comment section, and knowing the difference matters."
  },
  {
    "title": "What We Do",
    "text": "* Issue Triage: Distinguishing a quick public reply from something that genuinely needs your team's direct involvement. * Internal Escalation Process: A clear system for routing real customer service issues to the right person, quickly. * Follow-Up Tracking: Making sure escalated issues actually get resolved, not just handed off and forgotten. * Sensitive Situation Handling: Managing public complaints or crises with judgment, moving serious conversations to private channels where appropriate. A public complaint moved to a private conversation and genuinely resolved often turns into a customer who becomes more loyal, not less."
  },
  {
    "title": "MODERATION & BRAND PROTECTION",
    "text": "Keeping a community space genuinely usable, not overrun by spam or hostility."
  },
  {
    "title": "What We Do",
    "text": "* Spam & Bot Comment Removal: Keeping comment sections clean of spam that undermines a page's credibility. * Inappropriate Content Moderation: Removing genuinely inappropriate content while respecting legitimate criticism, which is a different thing entirely. * Community Guideline Enforcement: Applying clear, consistent standards for what is and isn't acceptable in your community spaces. * Crisis Monitoring: Watching for a sudden spike in negative sentiment that might signal a bigger issue developing. Deleting every piece of criticism reads as worse than leaving it up and responding to it well - the goal is a clean space, not a censored one."
  },
  {
    "title": "COMMUNITY GROWTH & ENGAGEMENT",
    "text": "Beyond reactive response, actively building a sense of genuine community around a brand."
  },
  {
    "title": "What We Do",
    "text": "* Proactive Engagement: Initiating conversation, not just responding to it, to build a more active community over time. * User-Generated Content Encouragement: Prompting and reposting genuine customer content, which builds trust more than brand-produced content alone. * Community Event Participation: Engaging around relevant conversations, hashtags, or events where your audience is already active. * Advocate & Superfan Identification: Recognizing and building relationships with the people most genuinely engaged with your brand. Community management works best as part of a broader content strategy - see our Content Calendar & Strategy page for how the two connect."
  },
  {
    "title": "What Response Time Actually Signals",
    "text": "Understanding why speed matters this much changes how community management should genuinely be prioritized."
  },
  {
    "title": "To the Customer",
    "text": "A fast, thoughtful response signals a business that's actually paying attention, a slow or absent one signals the opposite, regardless of how good the underlying product or service is."
  },
  {
    "title": "To the Platform",
    "text": "Comments and DMs responded to quickly often carry algorithmic weight, especially on platforms like Instagram and Facebook, where engagement signals influence how far content reaches."
  },
  {
    "title": "To Everyone Else Watching",
    "text": "Public responses aren't just for the person who asked, every visible interaction is being read by everyone else who happens to see the thread, forming an impression before they've engaged directly at all."
  },
  {
    "title": "The Cost of Getting It Wrong",
    "text": "A single visibly ignored or poorly handled comment can do more reputational damage than several pieces of genuinely good content can offset. Why Your Business Needs Real Community Management Neglected comments and messages cost more than they appear to on the surface. Unanswered Questions Are Lost Opportunities A prospective customer asking a question in the comments who never gets a reply usually doesn't ask twice, they just go elsewhere. Negative Comments Left Unaddressed Compound A single unanswered complaint sitting visibly on a post can shape how every future visitor reads that post, long after the original issue would have been resolvable."
  },
  {
    "title": "DMs Are Often the Real Inquiry Channel",
    "text": "For a lot of businesses, direct messages carry more genuine sales potential than public comments, and they're also the easiest channel to quietly neglect. Consistency Across Platforms Is Harder Than It Looks Maintaining the same tone, response speed, and quality across five different platforms takes deliberate process, not just good intentions. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Response, escalation, and moderation handled by people who know your brand voice and your actual business, not a rotating queue of unfamiliar staff."
  },
  {
    "title": "We Treat Response Time as a Real Metric",
    "text": "Not an afterthought squeezed in around content production, but a measured, prioritized part of the service. Local & International Community Experience Based in Dhaka. Managing community response for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Know When to Escalate, Not Just Reply Genuine customer service issues get flagged to your team quickly, not buried under a generic public response."
  },
  {
    "title": "Comment & Message Response",
    "text": "Timely, on-brand replies across every platform your business is active on."
  },
  {
    "title": "Review Monitoring & Response",
    "text": "Professional handling of both positive and negative reviews, protecting your public reputation."
  },
  {
    "title": "Customer Service Escalation",
    "text": "A clear process for routing genuine issues to your team quickly, with follow-up tracked to resolution."
  },
  {
    "title": "Moderation & Brand Protection",
    "text": "Clean, well-maintained community spaces, free of spam without silencing legitimate feedback."
  },
  {
    "title": "Community Growth",
    "text": "Proactive engagement that builds genuine relationships, not just reactive response."
  },
  {
    "title": "Transparent Reporting",
    "text": "Clear tracking of response times and community sentiment over time."
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
