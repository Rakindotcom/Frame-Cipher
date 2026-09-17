import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "COMPANY PAGE MANAGEMENT",
    "description": "The company page establishes legitimacy and serves as a hub, even if it isn't the primary reach driver. What We Do A company page that only posts product announcements reads as an ad account, not a business worth following.",
    "bullets": [
      "Company Page Content Strategy: Regular posting that reflects business milestones, culture, and expertise without reading as pure self-promotion.",
      "Page Optimization: Making sure company details, showcase pages, and profile information are complete and current.",
      "Employee Advocacy Encouragement: Making it easy and natural for team members to share and engage with company content.",
      "Job Posting & Recruitment Content: Supporting hiring efforts through the page where relevant to the business."
    ]
  },
  {
    "title": "EXECUTIVE & FOUNDER GHOSTWRITING",
    "description": "Personal profile content is where LinkedIn's algorithm actually rewards reach, and it needs to sound genuinely like the person behind it. What We Do Ghostwritten content that doesn't sound like the actual person tends to get noticed as inauthentic, which undermines the credibility it's meant to build.",
    "bullets": [
      "Voice Development: Understanding how a specific executive actually thinks and talks, so ghostwritten content sounds authentically like them, not generic LinkedIn filler.",
      "Thought Leadership Content Planning: Building a content calendar around genuine expertise and opinions, not manufactured hot takes.",
      "Post Drafting & Review: Writing draft posts for review and approval, keeping the executive's actual voice and perspective central.",
      "Engagement Coaching: Guidance on responding to comments personally where it matters most, since personal replies carry real weight here."
    ]
  },
  {
    "title": "THOUGHT LEADERSHIP CONTENT STRATEGY",
    "description": "LinkedIn rewards genuine expertise and perspective over generic industry commentary. What We Do Generic \"5 tips for success\" content is exactly what LinkedIn's audience has learned to scroll past without a second look.",
    "bullets": [
      "Content Pillar Development: Identifying the specific topics and angles where your business or executives genuinely have something worth saying.",
      "Industry Commentary: Timely posts responding to genuine industry developments, not generic motivational content.",
      "Long-Form & Document Posts: Using LinkedIn's native long-form and carousel document formats for genuinely substantive content.",
      "Original Insight Development: Working with subject matter experts internally to surface content that's actually original, not recycled industry talking points."
    ]
  },
  {
    "title": "NETWORKING & ENGAGEMENT STRATEGY",
    "description": "Visibility on LinkedIn comes from engagement as much as posting. What We Do A thoughtful comment on someone else's post sometimes earns more visibility than an original post of your own.",
    "bullets": [
      "Strategic Commenting: Thoughtful engagement on relevant industry posts and connections, which builds visibility beyond your own content.",
      "Connection Strategy: Growing a genuinely relevant network rather than accepting every connection request indiscriminately.",
      "Group & Community Participation: Engaging in relevant LinkedIn Groups or communities where genuine industry conversation happens.",
      "Relationship-Building Outreach: Identifying and engaging with prospects, partners, or industry figures worth a genuine connection."
    ]
  },
  {
    "title": "PERFORMANCE TRACKING & REPORTING",
    "description": "Understanding what's actually building reach and credibility on a platform where the metrics that matter aren't always obvious. What We Do LinkedIn organic content often supports paid lead generation efforts directly - see our LinkedIn Ads Management page for how organic credibility strengthens paid campaign performance.",
    "bullets": [
      "Reach & Impression Tracking: Monitoring how far content actually travels beyond your immediate network.",
      "Engagement Quality Analysis: Reviewing who's engaging genuine industry contacts versus generic engagement not just raw numbers.",
      "Profile View & Connection Growth: Tracking whether content strategy is translating into genuine network and visibility growth.",
      "Monthly Reporting: Clear reporting connecting content activity to actual business-relevant outcomes."
    ]
  },
  {
    "title": "Why Personal Profiles Outperform Company Pages Here",
    "description": "This is the single most important thing to understand about LinkedIn strategy, and most businesses haven't caught up to it. The Algorithm's Actual Preference LinkedIn's distribution consistently favors content from individual profiles over company pages, a pattern that's held steady enough to plan a whole strategy around it. Why That Makes Sense for the Platform LinkedIn is fundamentally a network of people, not brands, the algorithm reflects that by rewarding content that reads as genuinely personal and opinionated. What This Means Practically A business relying entirely on its company page, however well-maintained, is likely reaching a fraction of what a genuinely active executive profile could reach with similar effort. Why Both Still Matter The company page provides legitimacy, searchability, and a professional hub - personal profiles provide the reach. Neither replaces the other; they do different jobs.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "LinkedIn rewards a specific kind of effort, and most businesses aren't currently structured to give it that.",
  "Company-Only Strategy Structurally Limits Reach",
  "Without genuine personal profile activity from someone at the business, a company page alone is working against LinkedIn's own algorithmic preferences.",
  "Generic Content Gets Scrolled Past",
  "LinkedIn's audience has grown accustomed to formulaic advice posts - genuine perspective and specific expertise stand out precisely because most content doesn't offer either.",
  "Consistency Builds Compounding Authority",
  "A single strong post does little on its own; sustained, genuine thought leadership over months builds the kind of recognized authority that actually shapes business outcomes.",
  "Networking Is Part of the Strategy, Not Separate From It",
  "Engagement on other people's content and genuine relationship-building often drive as much real business value as original posting does."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "LinkedIn's algorithm consistently favors personal profile content over company page posts, often by a wide margin, which means a business relying solely on its company page is leaving significant reach on the table regardless of content quality. We build strategy around both, a company page that establishes legitimacy and serves as a hub, and founder or executive ghostwriting that actually earns the reach LinkedIn's algorithm is built to reward. Thought leadership only works if it sounds like an actual person with actual opinions, not a corporate account performing personality.",
    "text": "\"LinkedIn rewards people, not brands. A company page alone is necessary for credibility, but it's rarely where the real reach happens - that's almost always a person's profile.\" Personal Profile Reach, Handled Properly | Genuine Thought Leadership, Not Corporate Filler | Built for B2B Credibility"
  },
  {
    "title": "Our LinkedIn Management Services",
    "text": "Managing LinkedIn well means treating company page and personal profile strategy as genuinely different tasks that reinforce each other."
  },
  {
    "title": "COMPANY PAGE MANAGEMENT",
    "text": "The company page establishes legitimacy and serves as a hub, even if it isn't the primary reach driver."
  },
  {
    "title": "What We Do",
    "text": "* Company Page Content Strategy: Regular posting that reflects business milestones, culture, and expertise without reading as pure self-promotion. * Page Optimization: Making sure company details, showcase pages, and profile information are complete and current. * Employee Advocacy Encouragement: Making it easy and natural for team members to share and engage with company content. * Job Posting & Recruitment Content: Supporting hiring efforts through the page where relevant to the business. A company page that only posts product announcements reads as an ad account, not a business worth following."
  },
  {
    "title": "EXECUTIVE & FOUNDER GHOSTWRITING",
    "text": "Personal profile content is where LinkedIn's algorithm actually rewards reach, and it needs to sound genuinely like the person behind it."
  },
  {
    "title": "What We Do",
    "text": "* Voice Development: Understanding how a specific executive actually thinks and talks, so ghostwritten content sounds authentically like them, not generic LinkedIn filler. * Thought Leadership Content Planning: Building a content calendar around genuine expertise and opinions, not manufactured hot takes. * Post Drafting & Review: Writing draft posts for review and approval, keeping the executive's actual voice and perspective central. * Engagement Coaching: Guidance on responding to comments personally where it matters most, since personal replies carry real weight here. Ghostwritten content that doesn't sound like the actual person tends to get noticed as inauthentic, which undermines the credibility it's meant to build."
  },
  {
    "title": "THOUGHT LEADERSHIP CONTENT STRATEGY",
    "text": "LinkedIn rewards genuine expertise and perspective over generic industry commentary."
  },
  {
    "title": "What We Do",
    "text": "* Content Pillar Development: Identifying the specific topics and angles where your business or executives genuinely have something worth saying. * Industry Commentary: Timely posts responding to genuine industry developments, not generic motivational content. * Long-Form & Document Posts: Using LinkedIn's native long-form and carousel document formats for genuinely substantive content. * Original Insight Development: Working with subject matter experts internally to surface content that's actually original, not recycled industry talking points. Generic \"5 tips for success\" content is exactly what LinkedIn's audience has learned to scroll past without a second look."
  },
  {
    "title": "NETWORKING & ENGAGEMENT STRATEGY",
    "text": "Visibility on LinkedIn comes from engagement as much as posting."
  },
  {
    "title": "What We Do",
    "text": "* Strategic Commenting: Thoughtful engagement on relevant industry posts and connections, which builds visibility beyond your own content. * Connection Strategy: Growing a genuinely relevant network rather than accepting every connection request indiscriminately. * Group & Community Participation: Engaging in relevant LinkedIn Groups or communities where genuine industry conversation happens. * Relationship-Building Outreach: Identifying and engaging with prospects, partners, or industry figures worth a genuine connection. A thoughtful comment on someone else's post sometimes earns more visibility than an original post of your own."
  },
  {
    "title": "PERFORMANCE TRACKING & REPORTING",
    "text": "Understanding what's actually building reach and credibility on a platform where the metrics that matter aren't always obvious."
  },
  {
    "title": "What We Do",
    "text": "* Reach & Impression Tracking: Monitoring how far content actually travels beyond your immediate network. * Engagement Quality Analysis: Reviewing who's engaging genuine industry contacts versus generic engagement not just raw numbers. * Profile View & Connection Growth: Tracking whether content strategy is translating into genuine network and visibility growth. * Monthly Reporting: Clear reporting connecting content activity to actual business-relevant outcomes. LinkedIn organic content often supports paid lead generation efforts directly - see our LinkedIn Ads Management page for how organic credibility strengthens paid campaign performance. Why Personal Profiles Outperform Company Pages Here This is the single most important thing to understand about LinkedIn strategy, and most businesses haven't caught up to it. The Algorithm's Actual Preference LinkedIn's distribution consistently favors content from individual profiles over company pages, a pattern that's held steady enough to plan a whole strategy around it."
  },
  {
    "title": "Why That Makes Sense for the Platform",
    "text": "LinkedIn is fundamentally a network of people, not brands, the algorithm reflects that by rewarding content that reads as genuinely personal and opinionated."
  },
  {
    "title": "What This Means Practically",
    "text": "A business relying entirely on its company page, however well-maintained, is likely reaching a fraction of what a genuinely active executive profile could reach with similar effort."
  },
  {
    "title": "Why Both Still Matter",
    "text": "The company page provides legitimacy, searchability, and a professional hub - personal profiles provide the reach. Neither replaces the other; they do different jobs. Why Your Business Needs Real LinkedIn Management LinkedIn rewards a specific kind of effort, and most businesses aren't currently structured to give it that. Company-Only Strategy Structurally Limits Reach Without genuine personal profile activity from someone at the business, a company page alone is working against LinkedIn's own algorithmic preferences."
  },
  {
    "title": "Generic Content Gets Scrolled Past",
    "text": "LinkedIn's audience has grown accustomed to formulaic advice posts - genuine perspective and specific expertise stand out precisely because most content doesn't offer either."
  },
  {
    "title": "Consistency Builds Compounding Authority",
    "text": "A single strong post does little on its own; sustained, genuine thought leadership over months builds the kind of recognized authority that actually shapes business outcomes. Networking Is Part of the Strategy, Not Separate From It Engagement on other people's content and genuine relationship-building often drive as much real business value as original posting does. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Company page strategy and executive ghostwriting handled together, so the two reinforce each other instead of running as disconnected efforts. We Write to Sound Like You, Not Like LinkedIn Ghostwritten content is built around your actual voice and genuine opinions, not a generic template that could belong to anyone. Local & International B2B Presence Experience Based in Dhaka. Managing LinkedIn presence for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Understand the Personal-Profile Advantage Strategy is built around what LinkedIn's algorithm actually rewards, not just what feels like the \"official\" business channel."
  },
  {
    "title": "Company Page Management",
    "text": "A page that establishes real legitimacy and serves as a professional hub for your business."
  },
  {
    "title": "Executive Ghostwriting",
    "text": "Content that sounds genuinely like the person behind it, built to earn the reach personal profiles actually get."
  },
  {
    "title": "Thought Leadership Strategy",
    "text": "Content built around genuine expertise and perspective, not generic industry filler."
  },
  {
    "title": "Networking & Engagement Strategy",
    "text": "Visibility built through strategic commenting and relationship-building, not posting alone."
  },
  {
    "title": "Performance Reporting",
    "text": "Clear reporting connects activity to genuine reach and network growth."
  },
  {
    "title": "Transparent Process",
    "text": "Every piece of content will be reviewed and approved by you or your executives before it is published."
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
