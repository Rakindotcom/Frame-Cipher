'use client'

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const mvpServices = [
  {
    title: "Idea Validation & Scope Definition",
    desc: "Before development starts, we identify what your MVP actually needs to prove. We review the product idea, target users, business assumptions, and proposed workflow to determine what belongs in the first release and what can wait.",
    label: "What We Do",
    bullets: [
      "Core hypothesis definition",
      "Target user definition",
      "Problem and solution review",
      "Essential user journey mapping",
      "Feature prioritization",
      "Competitor and market review",
      "MVP scope definition",
      "Initial technical feasibility review",
      "Project priorities and constraints"
    ],
    footer: "The goal is to create a focused MVP scope instead of turning the first release into a smaller version of the entire product roadmap."
  },
  {
    title: "MVP Product Strategy & Feature Prioritization",
    desc: "An MVP can become expensive when every proposed feature is treated as essential. We separate the functionality required for validation from features that can be developed after the initial product receives real-world feedback.",
    label: "We consider:",
    bullets: [
      "Which problem the product needs to solve",
      "Which users need to test it",
      "Which workflow proves the core value",
      "Which features are essential to that workflow",
      "Which features can wait",
      "Which assumptions carry the most risk",
      "What evidence should influence the next product decision"
    ],
    footer: "This creates a practical feature roadmap with a clear boundary between the MVP and future development."
  },
  {
    title: "Rapid UI/UX Design & Prototyping",
    desc: "MVP design should move quickly without making the product too rough to evaluate. We design the core user experience around the workflows that matter most to the validation goal.",
    label: "What We Do",
    bullets: [
      "User-flow mapping",
      "Core-flow wireframing",
      "Functional UI design",
      "Clickable prototypes",
      "Mobile-first interface design",
      "Responsive layouts",
      "Design review and refinement",
      "Developer-ready design handoff"
    ],
    footer: "The prototype helps identify usability problems before development while keeping the design effort focused on the MVP's actual scope."
  },
  {
    title: "Lean MVP Development",
    desc: "We build the core product functionality required to test the defined hypothesis. The implementation is intentionally focused. We avoid unnecessary infrastructure and features that do not contribute to the MVP's purpose.",
    label: "Development can include:",
    bullets: [
      "Frontend development",
      "Backend development",
      "Database setup",
      "User authentication",
      "User accounts and profiles",
      "Admin functionality",
      "Core business workflows",
      "Third-party service integration",
      "Payment functionality",
      "API integration",
      "Basic analytics",
      "Deployment setup"
    ],
    footer: "The technical approach depends on the product, expected users, integrations, and future development requirements."
  },
  {
    title: "Integrations, Payments & APIs",
    desc: "Many MVPs depend on external services from the beginning. We can connect the MVP with the systems required for its core workflow, including payment services, APIs, authentication providers, communication tools, analytics platforms, and other supported third-party services.",
    label: "Integration work may include:",
    bullets: [
      "REST API integration",
      "GraphQL integration where appropriate",
      "Payment gateway integration",
      "Authentication services",
      "CRM connectivity",
      "Email and notification services",
      "Shipping and logistics services",
      "Analytics platforms",
      "Webhooks",
      "Other required third-party APIs"
    ],
    footer: "We prioritize integrations that are necessary for the MVP to function and validate its core use case."
  },
  {
    title: "Analytics & Measurement Setup",
    desc: "An MVP should produce evidence, not just user accounts and feature usage. We help identify the events and product signals that need to be measured before launch.",
    label: "Depending on the product, this may include:",
    bullets: [
      "Sign-ups & Activation",
      "Core feature usage",
      "Workflow completion",
      "Conversion & Transactions",
      "Repeat usage & Retention",
      "Drop-off points",
      "User feedback",
      "Error events"
    ],
    footer: "The exact measurement plan depends on the hypothesis the MVP is designed to test."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Real users should be testing your product idea, not discovering basic technical problems. We test the MVP's core workflows and critical functionality before launch.",
    label: "Testing can include:",
    bullets: [
      "Functional testing",
      "User-flow testing",
      "Form and validation testing",
      "Authentication testing",
      "Integration testing",
      "Payment testing",
      "API testing",
      "Responsive testing",
      "Error handling",
      "Regression testing",
      "Device and browser testing where applicable"
    ],
    footer: "The testing scope depends on the product, platform, integrations, and launch requirements."
  },
  {
    title: "Launch & Validation Support",
    desc: "An MVP only starts generating useful evidence after real users can interact with it. We help prepare the product for launch and establish the basic systems required to collect feedback and usage information.",
    label: "Launch support can include:",
    bullets: [
      "Production deployment",
      "App deployment preparation where applicable",
      "Analytics verification",
      "Feedback collection setup",
      "Core workflow monitoring",
      "Initial issue review",
      "Usage-data review",
      "Post-launch product discussion"
    ],
    footer: "The goal is to help you move from working product to usable evidence."
  },
  {
    title: "Ongoing MVP Support & Iteration",
    desc: "An MVP may need changes after real users begin using it. We can provide ongoing technical support for products that need fixes, small adjustments, dependency updates, or further development after launch.",
    label: "Support can include:",
    bullets: [
      "Bug fixes",
      "Minor feature adjustments",
      "Performance improvements",
      "Security and dependency updates",
      "Third-party API updates",
      "Technical troubleshooting",
      "Analytics adjustments",
      "Small UX improvements",
      "Preparation for the next development phase"
    ],
    footer: "Ongoing support is available separately based on the project's requirements."
  }
]

export default function Offerings() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Left-Aligned Header Block (§5.8 Discipline) */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our MVP Development <span className="italic text-frame-accent">Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A strong MVP starts with a focused question and ends with useful evidence. We help define what needs to be tested, design the essential experience, build the required functionality, launch it to real users, and review what happens next.
          </p>
        </div>

        {/* Modality 5: #121214 Surface Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mvpServices.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>

                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {service.desc}
                </p>

                {/* Bullets Sub-section */}
                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                    {service.label}
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {service.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Takeaway */}
              <div className="mt-6 border-t border-white/[0.08] pt-3.5 font-mono text-[11px] leading-relaxed text-frame-accent/80">
                {service.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Section Conversion Action */}
        <div className="mt-12 flex justify-center">
          <PosterButton href="/contact" variant="accent">
            Discuss Your MVP Scope &rarr;
          </PosterButton>
        </div>

      </div>
    </section>
  )
}
