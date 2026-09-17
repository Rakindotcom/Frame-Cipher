import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SUBJECT LINE & PREVIEW TEXT STRATEGY",
    "description": "The first, hardest filter every email has to survive before anything else matters. What We Do A brilliant email behind a forgettable subject line never gets the chance to actually work.",
    "bullets": [
      "Subject Line Development: Writing built to earn genuine curiosity or relevance, not clickbait that damages trust once opened.",
      "Preview Text Optimization: The secondary line most inboxes display, written to reinforce the subject rather than waste the space.",
      "A/B Subject Line Testing: Developing genuine variants to test against real open rate data, not guessing which sounds better.",
      "Sender Name & Recognition Strategy: Making sure the email is recognizable enough to survive a skeptical, half-second scan of the inbox."
    ]
  },
  {
    "title": "WELCOME & ONBOARDING SEQUENCES",
    "description": "The first real conversation with someone who just gave you their email address, and it sets the tone for everything after. What We Do The first few emails someone receives shape whether they open the fiftieth one or unsubscribe long before it arrives.",
    "bullets": [
      "Welcome Sequence Strategy: Structuring the first several emails to build trust and set expectations, not rush straight into selling.",
      "Onboarding Email Writing: Guiding a new subscriber or customer toward genuine first value, whatever that looks like for your business.",
      "Expectation Setting: Being upfront about what kind of emails someone signed up for, which reduces unsubscribes down the line.",
      "Early Engagement Prompts: Encouraging a genuine first interaction that builds the relationship beyond a single opened email."
    ]
  },
  {
    "title": "NURTURE & LIFECYCLE CAMPAIGNS",
    "description": "Ongoing sequences built around where someone actually is in their relationship with your business. What We Do A nurture sequence that pitches too early usually undoes the trust it was supposed to be building in the first place.",
    "bullets": [
      "Nurture Sequence Development: Building trust and providing genuine value over a series of emails, not just repeated pitches.",
      "Lifecycle-Based Messaging: Different messaging for a new subscriber, an active customer, and someone who's gone quiet.",
      "Educational Content Emails: Writing that genuinely helps the reader, which builds the credibility that eventually supports a sale.",
      "Segmentation-Aware Writing: Copy adjusted for how it'll be sent to different segments, not one-size-fits-all messaging."
    ]
  },
  {
    "title": "PROMOTIONAL & CAMPAIGN EMAILS",
    "description": "The emails carrying a specific offer or announcement, judged directly on whether they drive action. What We Do An email trying to promote three things at once usually succeeds at promoting none of them clearly.",
    "bullets": [
      "Promotional Email Writing: Copy built around a specific, time-relevant offer, with urgency used honestly rather than manufactured.",
      "Product Launch & Announcement Emails: Introducing something new in a way that connects to what the reader already cares about.",
      "Seasonal & Event Campaigns: Timely campaigns built around genuine calendar relevance, not generic sends with a holiday word swapped in.",
      "Clear, Single Call to Action: One obvious next step per email, since competing calls to action usually just confuse and reduce both."
    ]
  },
  {
    "title": "RE-ENGAGEMENT & WIN-BACK CAMPAIGNS",
    "description": "Writing for the specific, harder job of reaching someone who's stopped paying attention. What We Do Email performs best as part of a coordinated customer journey - see our Content Strategy page for how email fits into a broader content plan.",
    "bullets": [
      "Win-Back Sequence Writing: Copy built to genuinely re-earn attention from a disengaged subscriber, not just another generic promotional blast.",
      "Churn-Risk Messaging: Addressing likely reasons for disengagement directly, where those reasons are actually known.",
      "List Health Consideration: Writing honest enough that it also helps identify subscribers worth removing, not just chasing every open at any cost.",
      "Final Attempt Messaging: A last, genuine attempt before a subscriber is moved off an active sending list."
    ]
  },
  {
    "title": "The Three Filters Every Email Has to Survive",
    "description": "Unlike a webpage, an email has to clear a specific sequence of hurdles before the copy inside it even gets a chance to work. The Inbox Scan Before anything else, the subject line and sender name have to survive a split-second decision about whether this email is even worth opening. The First Few Seconds Once opened, the first line or two decides whether the reader keeps going or closes it, most people give an email far less patience than a webpage. The Actual Ask Everything before this point exists to earn the reader's attention long enough to reach whatever specific action the email is actually asking for. Writing that's excellent at persuasion but weak on the subject line never survives long enough for that persuasion to matter.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Email remains one of the highest-return channels available, and also one of the easiest to quietly waste.",
  "Most Email Budget Is Wasted on the Subject Line Alone",
  "A strong email behind a weak subject line gets a fraction of the opens it could have earned, regardless of how good everything after it is.",
  "Generic Sequences Train People to Ignore You",
  "A welcome sequence that immediately pitches, or a nurture campaign that never actually helps, teaches subscribers to stop opening future emails.",
  "Segmentation Without Segmented Copy Wastes the Data",
  "Collecting behavioral or lifecycle data and then sending the same generic email to everyone wastes the entire point of having segmented in the first place.",
  "Re-Engagement Is Cheaper Than Constant New Acquisition",
  "A disengaged subscriber who gets genuinely won back is often more valuable than the cost of acquiring a brand new one from scratch."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Email is judged in stages nothing else in this silo has to survive quite the same way, first the subject line has to earn an open, then the first line has to earn a few more seconds, then the whole thing has to earn an actual click, all inside an inbox someone is scanning, not reading. We write with that funnel in mind at every stage, since a beautifully written email that never gets opened has accomplished exactly nothing. Most inboxes are a graveyard of unopened promotional email, and the ones that survive share a specific pattern of specificity and relevance the generic ones don't.",
    "text": "\"An email's first job isn't to persuade, it's to survive being deleted. Nothing else in the copy matters if the subject line doesn't earn the opening first.\" Subject Lines Built to Earn the Open | Written for How People Actually Skim Email | Sequences That Build Toward Something, Not Just One-Off Sends"
  },
  {
    "title": "Our Email Copywriting Services",
    "text": "Email copywriting has its own specific mechanics, distinct from writing meant to be read on a webpage."
  },
  {
    "title": "SUBJECT LINE & PREVIEW TEXT STRATEGY",
    "text": "The first, hardest filter every email has to survive before anything else matters."
  },
  {
    "title": "What We Do",
    "text": "* Subject Line Development: Writing built to earn genuine curiosity or relevance, not clickbait that damages trust once opened. * Preview Text Optimization: The secondary line most inboxes display, written to reinforce the subject rather than waste the space. * A/B Subject Line Testing: Developing genuine variants to test against real open rate data, not guessing which sounds better. * Sender Name & Recognition Strategy: Making sure the email is recognizable enough to survive a skeptical, half-second scan of the inbox. A brilliant email behind a forgettable subject line never gets the chance to actually work."
  },
  {
    "title": "WELCOME & ONBOARDING SEQUENCES",
    "text": "The first real conversation with someone who just gave you their email address, and it sets the tone for everything after."
  },
  {
    "title": "What We Do",
    "text": "* Welcome Sequence Strategy: Structuring the first several emails to build trust and set expectations, not rush straight into selling. * Onboarding Email Writing: Guiding a new subscriber or customer toward genuine first value, whatever that looks like for your business. * Expectation Setting: Being upfront about what kind of emails someone signed up for, which reduces unsubscribes down the line. * Early Engagement Prompts: Encouraging a genuine first interaction that builds the relationship beyond a single opened email. The first few emails someone receives shape whether they open the fiftieth one or unsubscribe long before it arrives."
  },
  {
    "title": "NURTURE & LIFECYCLE CAMPAIGNS",
    "text": "Ongoing sequences built around where someone actually is in their relationship with your business."
  },
  {
    "title": "What We Do",
    "text": "* Nurture Sequence Development: Building trust and providing genuine value over a series of emails, not just repeated pitches. * Lifecycle-Based Messaging: Different messaging for a new subscriber, an active customer, and someone who's gone quiet. * Educational Content Emails: Writing that genuinely helps the reader, which builds the credibility that eventually supports a sale. * Segmentation-Aware Writing: Copy adjusted for how it'll be sent to different segments, not one-size-fits-all messaging. A nurture sequence that pitches too early usually undoes the trust it was supposed to be building in the first place."
  },
  {
    "title": "PROMOTIONAL & CAMPAIGN EMAILS",
    "text": "The emails carrying a specific offer or announcement, judged directly on whether they drive action."
  },
  {
    "title": "What We Do",
    "text": "* Promotional Email Writing: Copy built around a specific, time-relevant offer, with urgency used honestly rather than manufactured. * Product Launch & Announcement Emails: Introducing something new in a way that connects to what the reader already cares about. * Seasonal & Event Campaigns: Timely campaigns built around genuine calendar relevance, not generic sends with a holiday word swapped in. * Clear, Single Call to Action: One obvious next step per email, since competing calls to action usually just confuse and reduce both. An email trying to promote three things at once usually succeeds at promoting none of them clearly."
  },
  {
    "title": "RE-ENGAGEMENT & WIN-BACK CAMPAIGNS",
    "text": "Writing for the specific, harder job of reaching someone who's stopped paying attention."
  },
  {
    "title": "What We Do",
    "text": "* Win-Back Sequence Writing: Copy built to genuinely re-earn attention from a disengaged subscriber, not just another generic promotional blast. * Churn-Risk Messaging: Addressing likely reasons for disengagement directly, where those reasons are actually known. * List Health Consideration: Writing honest enough that it also helps identify subscribers worth removing, not just chasing every open at any cost. * Final Attempt Messaging: A last, genuine attempt before a subscriber is moved off an active sending list. Email performs best as part of a coordinated customer journey - see our Content Strategy page for how email fits into a broader content plan. The Three Filters Every Email Has to Survive Unlike a webpage, an email has to clear a specific sequence of hurdles before the copy inside it even gets a chance to work."
  },
  {
    "title": "The Inbox Scan",
    "text": "Before anything else, the subject line and sender name have to survive a split-second decision about whether this email is even worth opening."
  },
  {
    "title": "The First Few Seconds",
    "text": "Once opened, the first line or two decides whether the reader keeps going or closes it, most people give an email far less patience than a webpage."
  },
  {
    "title": "The Actual Ask",
    "text": "Everything before this point exists to earn the reader's attention long enough to reach whatever specific action the email is actually asking for. Writing that's excellent at persuasion but weak on the subject line never survives long enough for that persuasion to matter. Why Your Business Needs Real Email Copywriting Email remains one of the highest-return channels available, and also one of the easiest to quietly waste. Most Email Budget Is Wasted on the Subject Line Alone A strong email behind a weak subject line gets a fraction of the opens it could have earned, regardless of how good everything after it is. Generic Sequences Train People to Ignore You A welcome sequence that immediately pitches, or a nurture campaign that never actually helps, teaches subscribers to stop opening future emails. Segmentation Without Segmented Copy Wastes the Data Collecting behavioral or lifecycle data and then sending the same generic email to everyone wastes the entire point of having segmented in the first place. Re-Engagement Is Cheaper Than Constant New Acquisition A disengaged subscriber who gets genuinely won back is often more valuable than the cost of acquiring a brand new one from scratch. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, sequencing, and copywriting coordinated together, so individual emails build toward a coherent relationship, not a series of disconnected sends."
  },
  {
    "title": "We Write for the Inbox Scan First",
    "text": "Subject lines and opens get real strategic attention, not treated as an afterthought to the \"real\" copy underneath. Local & International Email Copy Experience Based in Dhaka. Writing email copy for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Think in Sequences, Not Single Sends Welcome, nurture, and win-back campaigns are built as connected journeys, not isolated emails written one at a time."
  },
  {
    "title": "Subject Line & Preview Strategy",
    "text": "Copy built specifically to survive the inbox scan and earn a genuine open."
  },
  {
    "title": "Welcome & Onboarding Sequences",
    "text": "A first-conversation sequence that builds trust before it asks for anything."
  },
  {
    "title": "Nurture & Lifecycle Campaigns",
    "text": "Ongoing emails matched to where a subscriber actually is in their relationship with your business."
  },
  {
    "title": "Promotional & Campaign Copy",
    "text": "Clear, single-focus emails built around a specific offer, without competing calls to action."
  },
  {
    "title": "Re-Engagement Sequences",
    "text": "Genuine win-back writing for subscribers who've gone quiet, not another generic blast."
  },
  {
    "title": "Transparent Revision Process",
    "text": "Every sequence reviewed against your feedback before being finalized."
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
