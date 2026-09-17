import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SEO STRATEGY DEVELOPMENT",
    "description": "Building the overall roadmap that everything else gets prioritized against. What We Do A strategy that ignores your actual resources is a strategy that gets abandoned three months in.",
    "bullets": [
      "Business Goal Alignment: Connecting SEO priorities to what actually matters for your business leads, sales, brand visibility.",
      "Competitive Landscape Assessment: Understanding where genuine opportunity exists relative to what you're actually up against.",
      "Resource-Realistic Roadmapping: A plan built around the team, budget, and timeline you actually have, not an idealized version of them.",
      "Priority Sequencing: Deciding what to tackle first based on impact and feasibility together, not impact alone."
    ]
  },
  {
    "title": "FRACTIONAL SEO LEADERSHIP",
    "description": "Ongoing strategic direction for businesses that need senior-level guidance without a full-time hire. What We Do Not every business is ready for a full-time SEO hire, and not every business needs one, fractional leadership fills that gap deliberately.",
    "bullets": [
      "Ongoing Strategic Advisory: Regular check-ins to review progress, adjust priorities, and answer questions as they come up.",
      "Internal Team Direction: Providing the strategic oversight an internal marketing team often lacks without a dedicated SEO lead.",
      "Executive Reporting: Translating SEO performance into terms that make sense to leadership and stakeholders.",
      "Vendor & Agency Oversight: Reviewing work from other SEO vendors or freelancers on your behalf, if you're already working with one."
    ]
  },
  {
    "title": "AUDIT-TO-ROADMAP TRANSLATION",
    "description": "Turning a completed audit, ours or anyone else's into an actual execution plan. What We Do An audit tells you what's wrong. This is where \"what's wrong\" becomes \"here's what we're doing about it, starting Monday.\"",
    "bullets": [
      "Findings Prioritization: Taking a list of audit findings and turning it into a sequenced, resourced plan.",
      "Internal Team Briefing: Explaining findings and priorities to your team in terms they can act on directly.",
      "Execution Planning: Breaking a roadmap into specific tasks, owners, and realistic timelines.",
      "Progress Check-Ins: Periodic reviews to confirm the plan is actually being executed as intended."
    ]
  },
  {
    "title": "TEAM TRAINING & ENABLEMENT",
    "description": "Building internal SEO capability, not just handing over answers. What We Do Some clients want us to do the work forever. Others want to eventually not need us for this specific thing, both are legitimate goals we plan around honestly.",
    "bullets": [
      "SEO Fundamentals Training: Getting your existing content or marketing team up to speed on core SEO principles.",
      "Tool & Workflow Setup: Establishing the reporting and tracking systems your team needs to work independently over time.",
      "Content Team SEO Coaching: Working directly with writers and content creators to build SEO thinking into their process.",
      "Documentation & Playbooks: Written guides your team can reference after the engagement ends, not knowledge that leaves when we do."
    ]
  },
  {
    "title": "ONGOING STRATEGIC ADVISORY",
    "description": "Strategy isn't a one-time document: markets, algorithms, and business priorities all keep shifting. What We Do A strategy engagement can lead into full execution - see our other SEO service pages for the specific work a roadmap might call for.",
    "bullets": [
      "Quarterly Strategy Reviews: Revisiting the roadmap as results come in and priorities evolve.",
      "Algorithm Update Guidance: Interpreting what a significant Google update actually means for your specific situation.",
      "New Opportunity Identification: Flagging emerging channels or tactics like AI search optimization - worth considering as they mature.",
      "Performance-Based Adjustment: Recalibrating priorities based on what's actually working, not sticking rigidly to the original plan regardless of results."
    ]
  },
  {
    "title": "Different Ways to Work With Us",
    "description": "Strategy and consulting doesn't fit one single engagement model, so we don't force one. Project-Based Strategy A defined engagement audit, roadmap, and a specific deliverable - with a clear start and end point. Suited to businesses that need direction once and can execute independently after. Fractional Ongoing Advisory Regular, retainer-based strategic guidance without full execution work - closer to having a part-time SEO lead than hiring an agency for hands-on tasks. Hybrid: Strategy Plus Selective Execution Strategic direction from us, paired with execution on the specific pieces your internal team can't handle, technical work, for example, while your team owns content. Full Consulting-to-Execution Transition Starting with strategy and consulting, then transitioning into full execution with us once the roadmap is validated and trust is established. None of these is the \"right\" way to work with a consulting partner - the right one depends entirely on what your team already has and what it's actually missing.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Execution without strategy tends to produce a lot of activity and not much direction.",
  "Tactics Without a Plan Rarely Compound",
  "Random technical fixes, occasional content pieces, and sporadic link building each do a little, but without sequencing and prioritization, the sum is smaller than it should be.",
  "Internal Teams Often Lack Senior SEO Judgment",
  "A capable marketing team can execute well but still lack the strategic experience to know what actually matters most right now.",
  "Templates Don't Account for Your Actual Situation",
  "A generic best-practices checklist ignores your specific competitive landscape, resource constraints, and business priorities.",
  "Strategy Needs Revisiting, Not Just Writing",
  "A roadmap built once and never reviewed again quietly goes stale as algorithms, competitors, and your own business priorities shift."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A generic SEO playbook applied to a specific business usually wastes months chasing priorities that don't actually fit that business's situation. We build strategy around your actual constraints, internal resources, technical limitations, realistic timelines, instead of handing over a template that assumes you have a dedicated content team and an unlimited dev backlog. Consulting only works when the advice is something you can genuinely act on with what you actually have.",
    "text": "\"The best SEO strategy is the one your team can actually execute, not the most theoretically complete one. A roadmap that assumes resources you don't have isn't a strategy, it's a wish list.\" Custom Strategy, Not a Template | Works With Your Existing Team | Honest About What's Realistic"
  },
  {
    "title": "Our SEO Strategy & Consulting Services",
    "text": "Strategic work covers several distinct needs, depending on where a business actually stands."
  },
  {
    "title": "SEO STRATEGY DEVELOPMENT",
    "text": "Building the overall roadmap that everything else gets prioritized against."
  },
  {
    "title": "What We Do",
    "text": "* Business Goal Alignment: Connecting SEO priorities to what actually matters for your business leads, sales, brand visibility. * Competitive Landscape Assessment: Understanding where genuine opportunity exists relative to what you're actually up against. * Resource-Realistic Roadmapping: A plan built around the team, budget, and timeline you actually have, not an idealized version of them. * Priority Sequencing: Deciding what to tackle first based on impact and feasibility together, not impact alone. A strategy that ignores your actual resources is a strategy that gets abandoned three months in."
  },
  {
    "title": "FRACTIONAL SEO LEADERSHIP",
    "text": "Ongoing strategic direction for businesses that need senior-level guidance without a full-time hire."
  },
  {
    "title": "What We Do",
    "text": "* Ongoing Strategic Advisory: Regular check-ins to review progress, adjust priorities, and answer questions as they come up. * Internal Team Direction: Providing the strategic oversight an internal marketing team often lacks without a dedicated SEO lead. * Executive Reporting: Translating SEO performance into terms that make sense to leadership and stakeholders. * Vendor & Agency Oversight: Reviewing work from other SEO vendors or freelancers on your behalf, if you're already working with one. Not every business is ready for a full-time SEO hire, and not every business needs one, fractional leadership fills that gap deliberately."
  },
  {
    "title": "AUDIT-TO-ROADMAP TRANSLATION",
    "text": "Turning a completed audit, ours or anyone else's into an actual execution plan."
  },
  {
    "title": "What We Do",
    "text": "* Findings Prioritization: Taking a list of audit findings and turning it into a sequenced, resourced plan. * Internal Team Briefing: Explaining findings and priorities to your team in terms they can act on directly. * Execution Planning: Breaking a roadmap into specific tasks, owners, and realistic timelines. * Progress Check-Ins: Periodic reviews to confirm the plan is actually being executed as intended. An audit tells you what's wrong. This is where \"what's wrong\" becomes \"here's what we're doing about it, starting Monday.\""
  },
  {
    "title": "TEAM TRAINING & ENABLEMENT",
    "text": "Building internal SEO capability, not just handing over answers."
  },
  {
    "title": "What We Do",
    "text": "* SEO Fundamentals Training: Getting your existing content or marketing team up to speed on core SEO principles. * Tool & Workflow Setup: Establishing the reporting and tracking systems your team needs to work independently over time. * Content Team SEO Coaching: Working directly with writers and content creators to build SEO thinking into their process. * Documentation & Playbooks: Written guides your team can reference after the engagement ends, not knowledge that leaves when we do. Some clients want us to do the work forever. Others want to eventually not need us for this specific thing, both are legitimate goals we plan around honestly."
  },
  {
    "title": "ONGOING STRATEGIC ADVISORY",
    "text": "Strategy isn't a one-time document: markets, algorithms, and business priorities all keep shifting."
  },
  {
    "title": "What We Do",
    "text": "* Quarterly Strategy Reviews: Revisiting the roadmap as results come in and priorities evolve. * Algorithm Update Guidance: Interpreting what a significant Google update actually means for your specific situation. * New Opportunity Identification: Flagging emerging channels or tactics like AI search optimization - worth considering as they mature. * Performance-Based Adjustment: Recalibrating priorities based on what's actually working, not sticking rigidly to the original plan regardless of results. A strategy engagement can lead into full execution - see our other SEO service pages for the specific work a roadmap might call for."
  },
  {
    "title": "Different Ways to Work With Us",
    "text": "Strategy and consulting doesn't fit one single engagement model, so we don't force one."
  },
  {
    "title": "Project-Based Strategy",
    "text": "A defined engagement audit, roadmap, and a specific deliverable - with a clear start and end point. Suited to businesses that need direction once and can execute independently after."
  },
  {
    "title": "Fractional Ongoing Advisory",
    "text": "Regular, retainer-based strategic guidance without full execution work - closer to having a part-time SEO lead than hiring an agency for hands-on tasks. Hybrid: Strategy Plus Selective Execution Strategic direction from us, paired with execution on the specific pieces your internal team can't handle, technical work, for example, while your team owns content."
  },
  {
    "title": "Full Consulting-to-Execution Transition",
    "text": "Starting with strategy and consulting, then transitioning into full execution with us once the roadmap is validated and trust is established. None of these is the \"right\" way to work with a consulting partner - the right one depends entirely on what your team already has and what it's actually missing. Why Your Business Needs Real SEO Strategy Work Execution without strategy tends to produce a lot of activity and not much direction."
  },
  {
    "title": "Tactics Without a Plan Rarely Compound",
    "text": "Random technical fixes, occasional content pieces, and sporadic link building each do a little, but without sequencing and prioritization, the sum is smaller than it should be. Internal Teams Often Lack Senior SEO Judgment A capable marketing team can execute well but still lack the strategic experience to know what actually matters most right now. Templates Don't Account for Your Actual Situation A generic best-practices checklist ignores your specific competitive landscape, resource constraints, and business priorities. Strategy Needs Revisiting, Not Just Writing A roadmap built once and never reviewed again quietly goes stale as algorithms, competitors, and your own business priorities shift. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy advice comes from people who also execute the work themselves, not consultants disconnected from what implementation actually involves. Honest About What's Realistic We don't hand over a roadmap that assumes resources you've told us you don't have, the plan gets built around your actual situation. Local & International Strategic Experience Based in Dhaka. Advising clients across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "No Pressure Toward Full Execution",
    "text": "Strategy is a legitimate standalone service here, not a sales funnel toward a bigger retainer you didn't actually ask for."
  },
  {
    "title": "SEO Strategy Development",
    "text": "A roadmap built around your actual business goals and resources, not a generic best-practices template."
  },
  {
    "title": "Fractional SEO Leadership",
    "text": "Ongoing strategic direction without the cost of a full-time senior hire."
  },
  {
    "title": "Audit-to-Roadmap Translation",
    "text": "Findings turned into a sequenced, resourced, actually executable plan."
  },
  {
    "title": "Team Training & Enablement",
    "text": "Internal capability built, with documentation that outlasts the engagement itself."
  },
  {
    "title": "Ongoing Strategic Advisory",
    "text": "Regular reviews that keep the roadmap current as algorithms and priorities shift."
  },
  {
    "title": "Flexible Engagement Models",
    "text": "Project-based, fractional, hybrid, or full transition to execution - whichever actually fits."
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
