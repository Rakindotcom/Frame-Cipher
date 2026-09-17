import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CROSS-PLATFORM PERFORMANCE CONSOLIDATION",
    "description": "Bringing data from every platform into one coherent view, since a business rarely cares about each platform in total isolation. What We Do Five separate platform exports rarely add up to a clear picture on their own, consolidation is where the actual insight happens.",
    "bullets": [
      "Multi-Platform Data Aggregation: Pulling performance data from Facebook, Instagram, LinkedIn, TikTok, and YouTube into one consolidated view.",
      "Comparative Platform Analysis: Understanding which platforms are genuinely earning attention relative to the effort invested in each.",
      "Unified Reporting Format: One consistent report structure, so month-over-month comparison is straightforward rather than reassembled from scratch each time.",
      "Platform-Specific Context: Noting where a metric means something different on one platform than another, since raw comparison across platforms can mislead."
    ]
  },
  {
    "title": "ENGAGEMENT & GROWTH TRACKING",
    "description": "Understanding whether an audience is genuinely growing and engaging, not just accumulating. What We Do A growing follower count with flat or declining engagement is usually a warning sign, not a win, however it looks on the surface.",
    "bullets": [
      "Follower & Audience Growth Tracking: Monitoring genuine growth trends, distinguished from short-term spikes that don't hold.",
      "Engagement Rate Analysis: Tracking comments, shares, and saves as the stronger signals, not likes counted as equally meaningful.",
      "Reach & Impression Trends: Understanding whether content is genuinely reaching beyond the existing audience over time.",
      "Follower Quality Indicators: Flagging signs of low-quality or bot-driven growth that inflates numbers without adding real value."
    ]
  },
  {
    "title": "CONTENT PERFORMANCE ANALYSIS",
    "description": "Understanding which specific content is actually working, format by format and topic by topic. What We Do Knowing which three posts out of thirty actually drove results matters more than knowing the average performance across all thirty.",
    "bullets": [
      "Top & Bottom Performer Identification: Highlighting which pieces of content genuinely resonated, and which quietly underperformed.",
      "Format Comparison: Understanding how Reels, static posts, carousels, and video compare against each other for your specific audience.",
      "Topic & Theme Performance: Identifying which subjects and content pillars are actually earning engagement over time.",
      "Posting Time & Frequency Analysis: Reviewing whether current posting patterns align with when your audience is genuinely active."
    ]
  },
  {
    "title": "COMMUNITY & RESPONSE METRICS",
    "description": "Measuring the parts of social media that don't show up in a standard platform analytics dashboard. What We Do Community metrics rarely make it into a platform's own analytics view, even though they often matter as much as content performance itself. STRATEGIC RECOMMENDATIONS & FORWARD PLANNING A report that doesn't change what happens next month has done half its job. What We Do Reporting insight feeds most naturally back into ongoing content planning - see our Content Calendar & Strategy page for how that loop actually works.",
    "bullets": [
      "Response Time Tracking: Monitoring how quickly comments and messages are actually being addressed.",
      "Sentiment Trend Review: Noting shifts in the general tone of comments and mentions over time.",
      "Review & Reputation Metrics: Tracking review volume, rating trends, and response rates where relevant.",
      "DM & Inquiry Volume: Understanding how much genuine business inquiry is flowing through direct messages, a channel most native dashboards undercount.",
      "Actionable Recommendations: Specific, concrete suggestions for what to adjust based on the month's actual data, not generic advice.",
      "Content Strategy Adjustment: Feeding performance insight directly back into the next month's content calendar.",
      "Goal Progress Tracking: Reviewing progress against whatever the business actually defined as success, not a generic benchmark.",
      "Competitive Context: Where relevant, noting how performance compares to general category or competitor trends."
    ]
  },
  {
    "title": "What Actually Belongs in a Report Worth Reading",
    "description": "Most social media reports fail the same way, and it's worth naming directly what a genuinely useful one does differently. Fewer Numbers, More Meaning A report with forty metrics and no interpretation is harder to act on than one with ten that actually explain what happened and why. Trends Over Single-Month Snapshots One month's numbers rarely tell the whole story, a genuinely useful report shows the trend line, not just where things landed this month in isolation. Honesty About What Didn't Work A report that only highlights wins isn't giving you the full picture, knowing what underperformed is often more useful than knowing what succeeded. A Clear \"So What\" Every section should answer not just what happened, but what it means for what happens next, data without a recommendation is just an export with better formatting.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Reporting that doesn't inform decisions is effort spent producing something nobody actually uses.",
  "Vanity Metrics Can Mask Real Problems",
  "A rising follower count alongside falling engagement is a genuine warning sign that a surface-level report can easily hide.",
  "Platform-Native Dashboards Don't Compare Well",
  "Each platform reports differently, using different definitions - without consolidation, comparing performance across platforms becomes an apples-to-oranges exercise.",
  "Content Strategy Without Feedback Repeats Its Own Mistakes",
  "Without a genuine feedback loop from reporting back into planning, a content calendar tends to keep producing the same underperforming patterns month after month.",
  "You Deserve to Know What You're Actually Paying For",
  "Regular, honest reporting is how you can actually evaluate whether social media management is delivering value, not just trust that it is."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Every platform's native analytics dashboard hands you numbers without much interpretation, and most of those numbers, taken alone, don't actually answer the question a business owner is asking, is this working. We build reports around that question specifically, connecting engagement and growth data to what it actually means for the business, and flagging which content genuinely performed well versus which numbers just looked busy. A report that doesn't change what happens next month isn't really a report, it's a formality.",
    "text": "\"A number without context isn't information, it's just a number. The job of a report is answering 'so what,' not just 'what happened.'\" Context Over Raw Numbers | Cross-Platform, One Coherent View | Reports That Actually Change Next Month's Strategy Our Monthly Reporting & Analytics Services Good reporting connects data across platforms into one honest picture, not five disconnected exports."
  },
  {
    "title": "CROSS-PLATFORM PERFORMANCE CONSOLIDATION",
    "text": "Bringing data from every platform into one coherent view, since a business rarely cares about each platform in total isolation."
  },
  {
    "title": "What We Do",
    "text": "* Multi-Platform Data Aggregation: Pulling performance data from Facebook, Instagram, LinkedIn, TikTok, and YouTube into one consolidated view. * Comparative Platform Analysis: Understanding which platforms are genuinely earning attention relative to the effort invested in each. * Unified Reporting Format: One consistent report structure, so month-over-month comparison is straightforward rather than reassembled from scratch each time. * Platform-Specific Context: Noting where a metric means something different on one platform than another, since raw comparison across platforms can mislead. Five separate platform exports rarely add up to a clear picture on their own, consolidation is where the actual insight happens."
  },
  {
    "title": "ENGAGEMENT & GROWTH TRACKING",
    "text": "Understanding whether an audience is genuinely growing and engaging, not just accumulating."
  },
  {
    "title": "What We Do",
    "text": "* Follower & Audience Growth Tracking: Monitoring genuine growth trends, distinguished from short-term spikes that don't hold. * Engagement Rate Analysis: Tracking comments, shares, and saves as the stronger signals, not likes counted as equally meaningful. * Reach & Impression Trends: Understanding whether content is genuinely reaching beyond the existing audience over time. * Follower Quality Indicators: Flagging signs of low-quality or bot-driven growth that inflates numbers without adding real value. A growing follower count with flat or declining engagement is usually a warning sign, not a win, however it looks on the surface."
  },
  {
    "title": "CONTENT PERFORMANCE ANALYSIS",
    "text": "Understanding which specific content is actually working, format by format and topic by topic."
  },
  {
    "title": "What We Do",
    "text": "* Top & Bottom Performer Identification: Highlighting which pieces of content genuinely resonated, and which quietly underperformed. * Format Comparison: Understanding how Reels, static posts, carousels, and video compare against each other for your specific audience. * Topic & Theme Performance: Identifying which subjects and content pillars are actually earning engagement over time. * Posting Time & Frequency Analysis: Reviewing whether current posting patterns align with when your audience is genuinely active. Knowing which three posts out of thirty actually drove results matters more than knowing the average performance across all thirty."
  },
  {
    "title": "COMMUNITY & RESPONSE METRICS",
    "text": "Measuring the parts of social media that don't show up in a standard platform analytics dashboard."
  },
  {
    "title": "What We Do",
    "text": "* Response Time Tracking: Monitoring how quickly comments and messages are actually being addressed. * Sentiment Trend Review: Noting shifts in the general tone of comments and mentions over time. * Review & Reputation Metrics: Tracking review volume, rating trends, and response rates where relevant. * DM & Inquiry Volume: Understanding how much genuine business inquiry is flowing through direct messages, a channel most native dashboards undercount. Community metrics rarely make it into a platform's own analytics view, even though they often matter as much as content performance itself. STRATEGIC RECOMMENDATIONS & FORWARD PLANNING A report that doesn't change what happens next month has done half its job."
  },
  {
    "title": "What We Do",
    "text": "* Actionable Recommendations: Specific, concrete suggestions for what to adjust based on the month's actual data, not generic advice. * Content Strategy Adjustment: Feeding performance insight directly back into the next month's content calendar. * Goal Progress Tracking: Reviewing progress against whatever the business actually defined as success, not a generic benchmark. * Competitive Context: Where relevant, noting how performance compares to general category or competitor trends. Reporting insight feeds most naturally back into ongoing content planning - see our Content Calendar & Strategy page for how that loop actually works. What Actually Belongs in a Report Worth Reading Most social media reports fail the same way, and it's worth naming directly what a genuinely useful one does differently. Fewer Numbers, More Meaning A report with forty metrics and no interpretation is harder to act on than one with ten that actually explain what happened and why."
  },
  {
    "title": "Trends Over Single-Month Snapshots",
    "text": "One month's numbers rarely tell the whole story, a genuinely useful report shows the trend line, not just where things landed this month in isolation. Honesty About What Didn't Work A report that only highlights wins isn't giving you the full picture, knowing what underperformed is often more useful than knowing what succeeded. A Clear \"So What\" Every section should answer not just what happened, but what it means for what happens next, data without a recommendation is just an export with better formatting. Why Your Business Needs Real Reporting & Analytics Reporting that doesn't inform decisions is effort spent producing something nobody actually uses."
  },
  {
    "title": "Vanity Metrics Can Mask Real Problems",
    "text": "A rising follower count alongside falling engagement is a genuine warning sign that a surface-level report can easily hide. Platform-Native Dashboards Don't Compare Well Each platform reports differently, using different definitions - without consolidation, comparing performance across platforms becomes an apples-to-oranges exercise. Content Strategy Without Feedback Repeats Its Own Mistakes Without a genuine feedback loop from reporting back into planning, a content calendar tends to keep producing the same underperforming patterns month after month. You Deserve to Know What You're Actually Paying For Regular, honest reporting is how you can actually evaluate whether social media management is delivering value, not just trust that it is. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Reporting built by the same people managing the content and community, so the analysis reflects genuine context, not a disconnected analyst reading numbers cold. We Report What Didn't Work, Too No report that only shows wins, honest reporting includes what underperformed and why, since that's often the more useful half. Local & International Reporting Experience Based in Dhaka. Building reporting for clients across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "Every Report Ends With a Recommendation",
    "text": "Not just data, a clear point of view on what should actually change based on it."
  },
  {
    "title": "Cross-Platform Consolidation",
    "text": "One coherent view across every platform, not five separate exports left for you to compare manually."
  },
  {
    "title": "Engagement & Growth Tracking",
    "text": "Genuine growth signals distinguished from short-term spikes or low-quality follower increases."
  },
  {
    "title": "Content Performance Analysis",
    "text": "Clear identification of what's actually working, by format and topic, not just an average across everything."
  },
  {
    "title": "Community & Response Metrics",
    "text": "Visibility into response time and sentiment, the parts platform dashboards typically miss entirely."
  },
  {
    "title": "Strategic Recommendations",
    "text": "Specific, actionable suggestions tied directly to the month's real data. Honest, Readable Reports Reports built to actually be read and acted on, not filed away unopened."
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
