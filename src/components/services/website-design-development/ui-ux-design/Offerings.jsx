import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "USER RESEARCH & FLOW MAPPING",
    "description": "Every design starts with understanding who's using the product and what they're trying to accomplish. What We Do Skipping this step is why so many designs look fine but perform poorly, you can't design a clear path without first mapping where users actually need to go.",
    "bullets": [
      "User Journey Mapping: Charting the path a user actually takes from arrival to completed goal, not an idealized version of it.",
      "Persona & Audience Definition: Identifying who the design needs to work for, especially when different user types have different needs.",
      "Task Flow Analysis: Breaking down key actions checkout, signup, booking into the specific steps a user needs to complete.",
      "Competitor & Pattern Review: Understanding what similar products do well or poorly before designing from scratch."
    ]
  },
  {
    "title": "WIREFRAMING & INFORMATION ARCHITECTURE",
    "description": "Structuring layout and content hierarchy before visual design decisions are made. What We Do Fixing a structural problem at the wireframe stage costs a revision. Fixing it after development means rebuilding.",
    "bullets": [
      "Low-Fidelity Wireframes: Rough layout structure focused on hierarchy and flow, not visual polish yet.",
      "Information Architecture: Organizing content and navigation so users find what they need without confusion.",
      "Interactive Prototypes: Clickable wireframes that let you and real users test the flow before development begins.",
      "Content Prioritization: Deciding what matters most on each screen, since not everything can be the priority."
    ]
  },
  {
    "title": "UI DESIGN & VISUAL SYSTEMS",
    "description": "Visual design that expresses your brand while staying functional for the task at hand. What We Do Visual design here follows function, a beautiful interface that confuses users at checkout isn't succeeding at its actual job.",
    "bullets": [
      "High-Fidelity UI Design: Full visual design color, typography, imagery built on top of validated wireframes.",
      "Design System Development: Reusable components and consistent styling so the product stays coherent as it grows.",
      "Responsive Design Across Breakpoints: Careful adaptation for how layouts should actually change across screen sizes, not just shrink.",
      "Accessibility-Aware Design: Color contrast, readable typography, and interaction patterns that work for the widest range of users."
    ]
  },
  {
    "title": "USABILITY TESTING & VALIDATION",
    "description": "Confirming the design actually works before it goes into development, or refining it afterward based on real usage. What We Do Design decisions validated with real users hold up. Decisions based on internal opinion alone are a guess with better formatting.",
    "bullets": [
      "Prototype Usability Testing: Watching real or representative users attempt key tasks on the prototype before build.",
      "Heuristic Evaluation: Reviewing designs against established usability principles to catch common friction points.",
      "Post-Launch UX Review: Analyzing how the live product is actually being used, once real data is available.",
      "Iterative Refinement: Adjusting design based on what testing and real usage actually reveal, not assumptions."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A product's design work isn't done at launch, user needs and product features keep evolving. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a design engagement.",
    "bullets": [
      "Design Updates for New Features: Extending the existing design system as new functionality gets added.",
      "Usability Issue Resolution: Addressing friction points identified through user feedback or analytics after launch.",
      "Design System Maintenance: Keeping components and patterns consistent as the product grows and multiple people touch it.",
      "Periodic UX Audits: Revisiting key flows periodically to catch drift or outdated patterns before they become real problems."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Design that skips user research and flow mapping tends to look acceptable and perform poorly, and the two aren't obviously connected until you dig into why conversions are low.",
  "Confusing Design Costs Conversions Silently",
  "A user who can't find the next step doesn't complain, they just leave. Poor UX shows up as a quiet conversion problem, not an obvious complaint you'd otherwise catch.",
  "Fixing Structure Late Is Expensive",
  "A wireframe-stage fix is a quick revision. The same structural issue discovered after development means rebuilding functional code, not just adjusting a layout.",
  "Different Products Need Different UX Thinking",
  "A checkout flow, a content-heavy blog, and a multi-step booking system all have fundamentally different usability priorities, design that treats every product the same way misses what actually matters for each.",
  "Good Design Compounds",
  "A well-designed product is easier for users to trust, easier for your team to extend with new features, and easier to redesign incrementally instead of rebuilding from scratch later."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a UI/UX design company, we plan how users move through a product before deciding what anything looks like. Our clients get wireframes and user flow mapping done first, so visual design solves problems that have already been identified, not guesses dressed up to look intentional. A checkout flow, a content-heavy blog, and a booking system all need fundamentally different user experience thinking, and we design around what your specific product actually needs, not a generic layout applied regardless of purpose.",
    "text": "\"Good UI/UX design is invisible when it works the user completes their task without thinking about the interface at all. It only becomes visible when it's done wrong.\" User Flow First | Any Niche or Product Type | Design Backed by Reasoning, Not Guesswork"
  },
  {
    "title": "Our UI/UX Design Services",
    "text": "We offer end-to-end design work tailored to how your specific product or site actually needs to function."
  },
  {
    "title": "USER RESEARCH & FLOW MAPPING",
    "text": "Every design starts with understanding who's using the product and what they're trying to accomplish."
  },
  {
    "title": "What We Do",
    "text": "* User Journey Mapping: Charting the path a user actually takes from arrival to completed goal, not an idealized version of it. * Persona & Audience Definition: Identifying who the design needs to work for, especially when different user types have different needs. * Task Flow Analysis: Breaking down key actions checkout, signup, booking into the specific steps a user needs to complete. * Competitor & Pattern Review: Understanding what similar products do well or poorly before designing from scratch. Skipping this step is why so many designs look fine but perform poorly, you can't design a clear path without first mapping where users actually need to go."
  },
  {
    "title": "WIREFRAMING & INFORMATION ARCHITECTURE",
    "text": "Structuring layout and content hierarchy before visual design decisions are made."
  },
  {
    "title": "What We Do",
    "text": "* Low-Fidelity Wireframes: Rough layout structure focused on hierarchy and flow, not visual polish yet. * Information Architecture: Organizing content and navigation so users find what they need without confusion. * Interactive Prototypes: Clickable wireframes that let you and real users test the flow before development begins. * Content Prioritization: Deciding what matters most on each screen, since not everything can be the priority. Fixing a structural problem at the wireframe stage costs a revision. Fixing it after development means rebuilding."
  },
  {
    "title": "UI DESIGN & VISUAL SYSTEMS",
    "text": "Visual design that expresses your brand while staying functional for the task at hand."
  },
  {
    "title": "What We Do",
    "text": "* High-Fidelity UI Design: Full visual design color, typography, imagery built on top of validated wireframes. * Design System Development: Reusable components and consistent styling so the product stays coherent as it grows. * Responsive Design Across Breakpoints: Careful adaptation for how layouts should actually change across screen sizes, not just shrink. * Accessibility-Aware Design: Color contrast, readable typography, and interaction patterns that work for the widest range of users. Visual design here follows function, a beautiful interface that confuses users at checkout isn't succeeding at its actual job."
  },
  {
    "title": "USABILITY TESTING & VALIDATION",
    "text": "Confirming the design actually works before it goes into development, or refining it afterward based on real usage."
  },
  {
    "title": "What We Do",
    "text": "* Prototype Usability Testing: Watching real or representative users attempt key tasks on the prototype before build. * Heuristic Evaluation: Reviewing designs against established usability principles to catch common friction points. * Post-Launch UX Review: Analyzing how the live product is actually being used, once real data is available. * Iterative Refinement: Adjusting design based on what testing and real usage actually reveal, not assumptions. Design decisions validated with real users hold up. Decisions based on internal opinion alone are a guess with better formatting."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A product's design work isn't done at launch, user needs and product features keep evolving."
  },
  {
    "title": "What We Do",
    "text": "* Design Updates for New Features: Extending the existing design system as new functionality gets added. * Usability Issue Resolution: Addressing friction points identified through user feedback or analytics after launch. * Design System Maintenance: Keeping components and patterns consistent as the product grows and multiple people touch it. * Periodic UX Audits: Revisiting key flows periodically to catch drift or outdated patterns before they become real problems. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a design engagement."
  },
  {
    "title": "Why Your Business Needs Real UI/UX Design",
    "text": "Design that skips user research and flow mapping tends to look acceptable and perform poorly, and the two aren't obviously connected until you dig into why conversions are low. Confusing Design Costs Conversions Silently A user who can't find the next step doesn't complain, they just leave. Poor UX shows up as a quiet conversion problem, not an obvious complaint you'd otherwise catch."
  },
  {
    "title": "Fixing Structure Late Is Expensive",
    "text": "A wireframe-stage fix is a quick revision. The same structural issue discovered after development means rebuilding functional code, not just adjusting a layout. Different Products Need Different UX Thinking A checkout flow, a content-heavy blog, and a multi-step booking system all have fundamentally different usability priorities, design that treats every product the same way misses what actually matters for each."
  },
  {
    "title": "Good Design Compounds",
    "text": "A well-designed product is easier for users to trust, easier for your team to extend with new features, and easier to redesign incrementally instead of rebuilding from scratch later. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Research, wireframing, visual design, and testing handled by one team, not handed off between a UX researcher and a visual designer who never coordinate. Structure Before Visuals, Always We don't start with color palettes and mood boards. We start with user flow and information architecture, so the visual design that follows is solving real problems, not just decorating a guess."
  },
  {
    "title": "Local & International Design Experience",
    "text": "Based in Dhaka, designing for businesses and products across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of research, wireframes, visual design, goes through your review and approval before we move forward."
  },
  {
    "title": "User Research & Flow Mapping",
    "text": "A clear picture of who's using the product and what they're trying to accomplish, before any layout decisions are made."
  },
  {
    "title": "Wireframes & Information Architecture",
    "text": "Structural planning that gets content hierarchy and navigation right before visual design begins."
  },
  {
    "title": "UI Design & Visual Systems",
    "text": "Full visual design built on validated structure, with a reusable design system that scales as the product grows."
  },
  {
    "title": "Usability Testing",
    "text": "Real or representative user testing on prototypes, catching friction points before they reach development."
  },
  {
    "title": "Accessibility Consideration",
    "text": "Design that accounts for a wider range of users, not just the easiest case to design for."
  },
  {
    "title": "Transparent Process",
    "text": "Review checkpoints at every stage, so you approve direction before it's built - not after."
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
