import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CONTENT AUDIT & ASSESSMENT",
    "description": "Understanding what's already there, and what it's actually accomplishing, comes before deciding what's next. What We Do A content audit often reveals that the real problem isn't a lack of content, it's too much of the wrong kind and not enough of the right kind.",
    "bullets": [
      "Existing Content Inventory: Cataloging everything currently published, across blog, website, and other content types.",
      "Performance Review: Understanding which existing pieces are genuinely working, and which are quietly underperforming.",
      "Content Gap Analysis: Identifying what your audience needs that hasn't been addressed yet.",
      "Redundancy & Consolidation Review: Flagging where multiple pieces are competing with each other rather than each doing distinct work."
    ]
  },
  {
    "title": "GOAL ALIGNMENT & PRIORITIZATION",
    "description": "Making sure content strategy actually serves what the business needs, not content for its own sake. What We Do Content without a clear goal attached tends to get produced and then quietly forgotten, regardless of how well it was written.",
    "bullets": [
      "Business Goal Mapping: Connecting content priorities to what actually matters, leads, sales, brand authority, customer education.",
      "Audience & Buyer Journey Alignment: Making sure content addresses where your actual audience is in their decision process, not just topics that sound relevant.",
      "Priority Sequencing: Deciding what gets tackled first based on genuine impact and feasibility, not whichever idea came up most recently.",
      "Resource-Realistic Planning: Building a strategy around what your team or ours can actually sustain, not an idealized production pace nobody can maintain."
    ]
  },
  {
    "title": "CONTENT PILLAR & TOPIC ARCHITECTURE",
    "description": "Structuring content around coherent themes, rather than a scattered list of disconnected ideas. What We Do A scattered list of topics rarely builds the kind of recognized authority that a coherent set of pillars can.",
    "bullets": [
      "Content Pillar Development: Identifying the core themes your business should genuinely own, based on expertise and audience need.",
      "Topic Cluster Planning: Organizing related content around pillar and cluster structures that reinforce each other.",
      "Keyword & SEO Integration: Aligning topic architecture with genuine search opportunity, where SEO is part of the goal.",
      "Format & Channel Mapping: Deciding which topics suit which format blog, email, case study, rather than forcing every idea into the same shape."
    ]
  },
  {
    "title": "CONTENT CALENDAR DEVELOPMENT",
    "description": "Turning strategy into an actual, executable production plan. What We Do A calendar built without accounting for realistic capacity is a plan that quietly falls apart by the third month.",
    "bullets": [
      "Editorial Calendar Build: A structured, realistic schedule reflecting the prioritized topics and available production capacity.",
      "Publishing Cadence Planning: Setting a rhythm that's sustainable, rather than an ambitious pace that collapses within a few months.",
      "Seasonal & Campaign Alignment: Timing content around relevant dates, launches, or campaigns where that genuinely matters.",
      "Cross-Team Coordination: Making sure the calendar accounts for who's actually responsible for producing and approving each piece."
    ]
  },
  {
    "title": "PERFORMANCE REVIEW & STRATEGY EVOLUTION",
    "description": "Strategy isn't a document written once and left untouched as circumstances change. What We Do Content strategy sets the direction that individual pieces then execute - see our SEO & Blog Writing page for how the writing itself connects to the plan.",
    "bullets": [
      "Ongoing Performance Tracking: Reviewing whether content is actually achieving the goals it was built around.",
      "Strategy Refinement: Adjusting priorities and topics based on what the data is genuinely showing, not sticking rigidly to the original plan.",
      "Competitive Landscape Monitoring: Watching how the competitive content environment shifts, and adjusting accordingly.",
      "Quarterly Strategy Reviews: Regular check-ins to keep the strategy current rather than letting it quietly go stale."
    ]
  },
  {
    "title": "The Difference Between a Calendar and a Strategy",
    "description": "This distinction is worth being direct about, since the two get confused constantly. A Calendar Answers \"When\" It's a production schedule, what gets published, and on what date, keeping the process organized and predictable. A Strategy Answers \"Why\" and \"So What\" It's the reasoning behind what gets included on that calendar in the first place, why this topic, why now, and what it's actually supposed to accomplish for the business. Why the Confusion Costs Real Effort A business with a full, well-organized calendar and no underlying strategy can still be producing content that doesn't add up to anything coherent, just on a very consistent schedule. The Right Order Strategy comes first and produces the calendar as one of its outputs - building the calendar first and calling it a strategy skips the actual thinking that makes the plan worth following.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Content produced without a strategic foundation tends to accumulate without adding up to anything coherent.",
  "Volume Without Direction Doesn't Compound",
  "A large amount of content published without a shared strategic thread behind it rarely builds the kind of authority a smaller, more coherent body of work can.",
  "Reactive Content Chases Whatever's Easiest",
  "Without prioritization, content decisions default to whatever idea is easiest to produce that week, not what would actually move the business forward.",
  "Redundant Content Wastes Effort Twice Over",
  "Multiple pieces quietly competing for the same topic or keyword split whatever authority a single, stronger piece could have built instead.",
  "Strategy Makes Every Individual Piece More Effective",
  "A blog post, email, or case study written within a clear strategic context tends to perform better than the same piece produced in isolation, with no larger plan behind it."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most content problems that look like a writing quality issue are actually a planning issue wearing a different costume, pieces published without a clear goal, topics chosen because they were easy rather than strategic, a calendar filled reactively instead of built around real priorities. We start by auditing what already exists and understanding what the business actually needs content to accomplish, since strategy built without that foundation just produces more content, not necessarily better results. A content calendar isn't a strategy on its own - it's what a real strategy eventually produces, once the harder thinking has already happened.",
    "text": "\"A full content calendar and a real content strategy aren't the same thing. One is a production schedule. The other is a reason those specific pieces, in that specific order, actually add up to something.\" Audit-First Planning | Priorities Tied to Real Business Goals | A Calendar That's a Result, Not the Whole Strategy"
  },
  {
    "title": "Our Content Strategy Services",
    "text": "Good strategy requires understanding what exists, what's missing, and what actually matters before any planning happens."
  },
  {
    "title": "CONTENT AUDIT & ASSESSMENT",
    "text": "Understanding what's already there, and what it's actually accomplishing, comes before deciding what's next."
  },
  {
    "title": "What We Do",
    "text": "* Existing Content Inventory: Cataloging everything currently published, across blog, website, and other content types. * Performance Review: Understanding which existing pieces are genuinely working, and which are quietly underperforming. * Content Gap Analysis: Identifying what your audience needs that hasn't been addressed yet. * Redundancy & Consolidation Review: Flagging where multiple pieces are competing with each other rather than each doing distinct work. A content audit often reveals that the real problem isn't a lack of content, it's too much of the wrong kind and not enough of the right kind."
  },
  {
    "title": "GOAL ALIGNMENT & PRIORITIZATION",
    "text": "Making sure content strategy actually serves what the business needs, not content for its own sake."
  },
  {
    "title": "What We Do",
    "text": "* Business Goal Mapping: Connecting content priorities to what actually matters, leads, sales, brand authority, customer education. * Audience & Buyer Journey Alignment: Making sure content addresses where your actual audience is in their decision process, not just topics that sound relevant. * Priority Sequencing: Deciding what gets tackled first based on genuine impact and feasibility, not whichever idea came up most recently. * Resource-Realistic Planning: Building a strategy around what your team or ours can actually sustain, not an idealized production pace nobody can maintain. Content without a clear goal attached tends to get produced and then quietly forgotten, regardless of how well it was written."
  },
  {
    "title": "CONTENT PILLAR & TOPIC ARCHITECTURE",
    "text": "Structuring content around coherent themes, rather than a scattered list of disconnected ideas."
  },
  {
    "title": "What We Do",
    "text": "* Content Pillar Development: Identifying the core themes your business should genuinely own, based on expertise and audience need. * Topic Cluster Planning: Organizing related content around pillar and cluster structures that reinforce each other. * Keyword & SEO Integration: Aligning topic architecture with genuine search opportunity, where SEO is part of the goal. * Format & Channel Mapping: Deciding which topics suit which format blog, email, case study, rather than forcing every idea into the same shape. A scattered list of topics rarely builds the kind of recognized authority that a coherent set of pillars can."
  },
  {
    "title": "CONTENT CALENDAR DEVELOPMENT",
    "text": "Turning strategy into an actual, executable production plan."
  },
  {
    "title": "What We Do",
    "text": "* Editorial Calendar Build: A structured, realistic schedule reflecting the prioritized topics and available production capacity. * Publishing Cadence Planning: Setting a rhythm that's sustainable, rather than an ambitious pace that collapses within a few months. * Seasonal & Campaign Alignment: Timing content around relevant dates, launches, or campaigns where that genuinely matters. * Cross-Team Coordination: Making sure the calendar accounts for who's actually responsible for producing and approving each piece. A calendar built without accounting for realistic capacity is a plan that quietly falls apart by the third month."
  },
  {
    "title": "PERFORMANCE REVIEW & STRATEGY EVOLUTION",
    "text": "Strategy isn't a document written once and left untouched as circumstances change."
  },
  {
    "title": "What We Do",
    "text": "* Ongoing Performance Tracking: Reviewing whether content is actually achieving the goals it was built around. * Strategy Refinement: Adjusting priorities and topics based on what the data is genuinely showing, not sticking rigidly to the original plan. * Competitive Landscape Monitoring: Watching how the competitive content environment shifts, and adjusting accordingly. * Quarterly Strategy Reviews: Regular check-ins to keep the strategy current rather than letting it quietly go stale. Content strategy sets the direction that individual pieces then execute - see our SEO & Blog Writing page for how the writing itself connects to the plan. The Difference Between a Calendar and a Strategy This distinction is worth being direct about, since the two get confused constantly. A Calendar Answers \"When\" It's a production schedule, what gets published, and on what date, keeping the process organized and predictable. A Strategy Answers \"Why\" and \"So What\" It's the reasoning behind what gets included on that calendar in the first place, why this topic, why now, and what it's actually supposed to accomplish for the business."
  },
  {
    "title": "Why the Confusion Costs Real Effort",
    "text": "A business with a full, well-organized calendar and no underlying strategy can still be producing content that doesn't add up to anything coherent, just on a very consistent schedule."
  },
  {
    "title": "The Right Order",
    "text": "Strategy comes first and produces the calendar as one of its outputs - building the calendar first and calling it a strategy skips the actual thinking that makes the plan worth following. Why Your Business Needs Real Content Strategy Content produced without a strategic foundation tends to accumulate without adding up to anything coherent. Volume Without Direction Doesn't Compound A large amount of content published without a shared strategic thread behind it rarely builds the kind of authority a smaller, more coherent body of work can. Reactive Content Chases Whatever's Easiest Without prioritization, content decisions default to whatever idea is easiest to produce that week, not what would actually move the business forward. Redundant Content Wastes Effort Twice Over Multiple pieces quietly competing for the same topic or keyword split whatever authority a single, stronger piece could have built instead. Strategy Makes Every Individual Piece More Effective A blog post, email, or case study written within a clear strategic context tends to perform better than the same piece produced in isolation, with no larger plan behind it. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy and execution are handled together, so the plan is built by people who also understand what's realistic to actually produce."
  },
  {
    "title": "We Audit Before We Plan",
    "text": "No strategy built on assumption, a genuine review of what exists and what's working comes first. Local & International Content Strategy Experience Based in Dhaka. Building content strategy for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. The Calendar Is an Output, Not the Starting Point Strategy comes first here, the calendar is what a real plan eventually produces, not the plan itself."
  },
  {
    "title": "Content Audit",
    "text": "A clear picture of what's already published and what it's actually accomplishing."
  },
  {
    "title": "Goal-Aligned Prioritization",
    "text": "Content priorities tied to genuine business goals, not content produced for its own sake."
  },
  {
    "title": "Pillar & Topic Architecture",
    "text": "A coherent structure that builds recognized authority, not a scattered list of disconnected ideas."
  },
  {
    "title": "Executable Content Calendar",
    "text": "A realistic, sustainable production schedule built from the actual strategy."
  },
  {
    "title": "Ongoing Performance Review",
    "text": "Regular check-ins that keep the strategy current as results and circumstances change. A Genuine \"Why\" Behind Every Piece Content decisions grounded in real reasoning, not whatever idea happened to come up that week."
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
