import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "IDEA VALIDATION & SCOPE DEFINITION",
    "description": "Before a single screen gets designed, we figure out what actually needs testing and what can wait. What We Do An MVP that tries to test five hypotheses at once usually ends up answering none of them clearly.",
    "bullets": [
      "Core Hypothesis Definition: Identifying the specific assumption your MVP needs to test, not just \"will people use this.\"",
      "Feature Prioritization: Separating what's essential to test the idea from what belongs in a later version.",
      "Target User Definition: Getting clear on who the MVP is actually for, so feedback comes from the right people.",
      "Competitor & Market Review: Understanding what's already out there before building something that duplicates it."
    ]
  },
  {
    "title": "RAPID UI/UX DESIGN",
    "description": "Design fast enough to match an MVP timeline, without producing something too rough to get honest feedback on. What We Do A prototype too rough to use makes it hard to tell if users dislike the idea or just the unfinished interface in front of them.",
    "bullets": [
      "Core Flow Wireframing: Mapping just the essential user journey, skipping the screens that don't matter yet.",
      "Functional UI Design: Clean, usable interfaces not a polished brand system, but not an ugly placeholder either.",
      "Clickable Prototype: A testable version of the flow before development starts, catching obvious issues early.",
      "Mobile-First Design: Built for how most users will actually first encounter the product."
    ]
  },
  {
    "title": "LEAN DEVELOPMENT",
    "description": "Building only what the MVP needs to function properly, nothing extra, nothing missing. What We Do Building custom infrastructure for problems a third-party tool already solves is the fastest way to blow an MVP timeline.",
    "bullets": [
      "Core Feature Development: Building the essential functionality cleanly, using proven tools rather than experimental ones.",
      "Backend & Database Setup: A simple, functional backend sized for early users, not over-engineered for scale you don't have yet.",
      "Third-Party Tool Integration: Using existing services payment, auth, analytics, instead of building everything from scratch.",
      "Basic Analytics Implementation: Tracking the specific usage data that will actually tell you if the hypothesis held up."
    ]
  },
  {
    "title": "LAUNCH & VALIDATION SUPPORT",
    "description": "Getting the MVP in front of real users and making sense of what happens next. What We Do The MVP isn't done when it launches, it's done when you know what to build next, or whether to build at all.",
    "bullets": [
      "Deployment & Launch: Getting the MVP live app store submission if it's mobile, or a working web deployment.",
      "User Feedback Collection Setup: In-app feedback tools or basic surveys, so learnings aren't just anecdotal.",
      "Usage Data Review: Looking at what the analytics actually show, not just what users say in interviews.",
      "Next-Step Roadmap: A clear recommendation on what to build next, based on what the MVP actually revealed."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "Between validation and a full rebuild, most MVPs still need to keep working. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Bug Fixes: Addressing issues that come up once real users are actually using the product.",
      "Minor Feature Adjustments: Small changes based on early feedback, without triggering a full redevelopment.",
      "Security & Dependency Updates: Keeping the MVP's foundation current while it's still in active use.",
      "Transition Planning: Guidance on what carries over to a full build versus what gets rebuilt from scratch."
    ]
  },
  {
    "title": "Who Actually Needs an MVP",
    "description": "Testing an idea before fully committing to it isn't just a startup exercise, it applies anywhere the outcome is genuinely uncertain. Early-Stage Founders Testing a new product idea against real users before raising further funding or committing personal capital to a full build. Product Teams in Existing Companies Validating a new feature or product line internally before pitching for the budget and headcount a full build requires. Agencies & Consultants Prototyping a client's concept to demonstrate feasibility and gather stakeholder buy-in before a larger engagement begins. Non-Profits & Institutions Testing a new digital program or service with a limited group before scaling it to a full public rollout. Internal Tools & Operations Teams Validating whether a proposed internal tool actually solves the problem it's meant to, before investing in a full enterprise build. The scoping process is the same regardless of who's asking, narrow down to the real hypothesis, and build only what's needed to test it honestly.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Speed matters with an MVP, but only if what ships is solid enough to actually learn from.",
  "The Real Cost of Building the Wrong Thing",
  "A full-scale build based on an untested assumption is the expensive mistake an MVP exists to prevent, the MVP's cost is small compared to what a failed full build would have cost instead.",
  "Feedback Is Only Useful If the Build Is Trustworthy",
  "If bugs or broken flows are the reason users bounce, you've learned nothing about the actual idea just that the execution needs work.",
  "Scope Discipline Is the Hard Part",
  "Every stakeholder wants to add \"just one more feature.\" Holding the line on what the MVP actually needs to test is what keeps the timeline and the budget intact.",
  "A Clear Bridge to What Comes Next",
  "An MVP built with the next phase in mind saves rework, code and learnings that carry forward instead of getting discarded."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Lean doesn't mean sloppy. An MVP built to cut corners produces data you can't trust, bugs get mistaken for lack of product-market fit, and a genuinely bad idea can look promising just because the execution was broken. We scope MVPs down to what actually needs testing, then build that part properly, so whatever you learn from real users reflects the idea, not the build quality.",
    "text": "\"The point of an MVP isn't to build less software. It's to learn whether you should build more of it, and that only works if what you ship actually functions well enough to trust the feedback.\" Scoped for Speed | Built to Actually Function | Clear Path to Full Development"
  },
  {
    "title": "Our MVP Development Services",
    "text": "Getting an MVP right means knowing what to leave out as much as what to include."
  },
  {
    "title": "IDEA VALIDATION & SCOPE DEFINITION",
    "text": "Before a single screen gets designed, we figure out what actually needs testing and what can wait."
  },
  {
    "title": "What We Do",
    "text": "* Core Hypothesis Definition: Identifying the specific assumption your MVP needs to test, not just \"will people use this.\" * Feature Prioritization: Separating what's essential to test the idea from what belongs in a later version. * Target User Definition: Getting clear on who the MVP is actually for, so feedback comes from the right people. * Competitor & Market Review: Understanding what's already out there before building something that duplicates it. An MVP that tries to test five hypotheses at once usually ends up answering none of them clearly."
  },
  {
    "title": "RAPID UI/UX DESIGN",
    "text": "Design fast enough to match an MVP timeline, without producing something too rough to get honest feedback on."
  },
  {
    "title": "What We Do",
    "text": "* Core Flow Wireframing: Mapping just the essential user journey, skipping the screens that don't matter yet. * Functional UI Design: Clean, usable interfaces not a polished brand system, but not an ugly placeholder either. * Clickable Prototype: A testable version of the flow before development starts, catching obvious issues early. * Mobile-First Design: Built for how most users will actually first encounter the product. A prototype too rough to use makes it hard to tell if users dislike the idea or just the unfinished interface in front of them."
  },
  {
    "title": "LEAN DEVELOPMENT",
    "text": "Building only what the MVP needs to function properly, nothing extra, nothing missing."
  },
  {
    "title": "What We Do",
    "text": "* Core Feature Development: Building the essential functionality cleanly, using proven tools rather than experimental ones. * Backend & Database Setup: A simple, functional backend sized for early users, not over-engineered for scale you don't have yet. * Third-Party Tool Integration: Using existing services payment, auth, analytics, instead of building everything from scratch. * Basic Analytics Implementation: Tracking the specific usage data that will actually tell you if the hypothesis held up. Building custom infrastructure for problems a third-party tool already solves is the fastest way to blow an MVP timeline."
  },
  {
    "title": "LAUNCH & VALIDATION SUPPORT",
    "text": "Getting the MVP in front of real users and making sense of what happens next."
  },
  {
    "title": "What We Do",
    "text": "* Deployment & Launch: Getting the MVP live app store submission if it's mobile, or a working web deployment. * User Feedback Collection Setup: In-app feedback tools or basic surveys, so learnings aren't just anecdotal. * Usage Data Review: Looking at what the analytics actually show, not just what users say in interviews. * Next-Step Roadmap: A clear recommendation on what to build next, based on what the MVP actually revealed. The MVP isn't done when it launches, it's done when you know what to build next, or whether to build at all."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "Between validation and a full rebuild, most MVPs still need to keep working."
  },
  {
    "title": "What We Do",
    "text": "* Bug Fixes: Addressing issues that come up once real users are actually using the product. * Minor Feature Adjustments: Small changes based on early feedback, without triggering a full redevelopment. * Security & Dependency Updates: Keeping the MVP's foundation current while it's still in active use. * Transition Planning: Guidance on what carries over to a full build versus what gets rebuilt from scratch. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement."
  },
  {
    "title": "Who Actually Needs an MVP",
    "text": "Testing an idea before fully committing to it isn't just a startup exercise, it applies anywhere the outcome is genuinely uncertain."
  },
  {
    "title": "Early-Stage Founders",
    "text": "Testing a new product idea against real users before raising further funding or committing personal capital to a full build."
  },
  {
    "title": "Product Teams in Existing Companies",
    "text": "Validating a new feature or product line internally before pitching for the budget and headcount a full build requires."
  },
  {
    "title": "Agencies & Consultants",
    "text": "Prototyping a client's concept to demonstrate feasibility and gather stakeholder buy-in before a larger engagement begins."
  },
  {
    "title": "Non-Profits & Institutions",
    "text": "Testing a new digital program or service with a limited group before scaling it to a full public rollout."
  },
  {
    "title": "Internal Tools & Operations Teams",
    "text": "Validating whether a proposed internal tool actually solves the problem it's meant to, before investing in a full enterprise build. The scoping process is the same regardless of who's asking, narrow down to the real hypothesis, and build only what's needed to test it honestly. Why Your Business Needs a Real MVP Partner Speed matters with an MVP, but only if what ships is solid enough to actually learn from."
  },
  {
    "title": "The Real Cost of Building the Wrong Thing",
    "text": "A full-scale build based on an untested assumption is the expensive mistake an MVP exists to prevent, the MVP's cost is small compared to what a failed full build would have cost instead. Feedback Is Only Useful If the Build Is Trustworthy If bugs or broken flows are the reason users bounce, you've learned nothing about the actual idea just that the execution needs work."
  },
  {
    "title": "Scope Discipline Is the Hard Part",
    "text": "Every stakeholder wants to add \"just one more feature.\" Holding the line on what the MVP actually needs to test is what keeps the timeline and the budget intact."
  },
  {
    "title": "A Clear Bridge to What Comes Next",
    "text": "An MVP built with the next phase in mind saves rework, code and learnings that carry forward instead of getting discarded. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, development, launch handled by people who stay involved from the idea to the data, not handed off partway through. Scoped to Learn, Not to Impress We don't pad MVPs with features meant to look complete. We build what's needed to test the actual hypothesis, and nothing beyond that."
  },
  {
    "title": "Local & International Founder Experience",
    "text": "Based in Dhaka. Building for founders, product teams, and organizations across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage scope, design, development goes through your review before we move to the next one."
  },
  {
    "title": "Idea Validation & Scope Definition",
    "text": "A clear hypothesis and a feature list scoped to actually test it, not a wish list disguised as an MVP."
  },
  {
    "title": "Rapid UI/UX Design",
    "text": "A functional, testable interface built fast, without being too rough to get honest feedback from."
  },
  {
    "title": "Lean Development",
    "text": "Core functionality built cleanly, using proven tools instead of reinventing solved problems."
  },
  {
    "title": "Launch & Feedback Setup",
    "text": "The MVP lives, with the tools in place to actually measure how it performs with real users."
  },
  {
    "title": "Next-Step Roadmap",
    "text": "A clear recommendation on what to build next, grounded in what the data actually showed."
  },
  {
    "title": "Transparent Process",
    "text": "Approval checkpoints at every stage, nothing built without you seeing it first."
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
