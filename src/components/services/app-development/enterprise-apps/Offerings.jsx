import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "DISCOVERY & STAKEHOLDER ALIGNMENT",
    "description": "Before architecture gets planned, we find out who actually needs to sign off and what they each care about. What We Do A requirements list gathered from one department and missed by another is how enterprise projects stall at the approval stage. SYSTEM ARCHITECTURE & INTEGRATION PLANNING This is where legacy systems, security requirements, and new functionality get mapped into one coherent plan. What We Do Retrofitting security or integration requirements after development starts is expensive in a way that's hard to walk back.",
    "bullets": [
      "Stakeholder Requirements Gathering: Talking to the departments and decision-makers whose approval the project actually needs.",
      "Existing System Audit: Mapping current ERPs, databases, and internal tools the new application needs to work alongside.",
      "Security & Compliance Review: Identifying the regulatory or internal policy requirements the build has to meet from day one.",
      "Workflow Documentation: Understanding how work actually gets done today, not how an org chart says it should.",
      "Legacy System Integration Planning: Deciding how the new application connects to ERPs, databases, or tools that aren't going anywhere.",
      "Data Architecture Design: Structured around your organization's actual data relationships, not a generic schema.",
      "Security Architecture Planning: Authentication, encryption, and access control designed to your compliance requirements from the start.",
      "Scalability & User Load Planning: Sized for how many employees, departments, or locations will actually be using it."
    ]
  },
  {
    "title": "UI/UX DESIGN FOR INTERNAL TOOLS",
    "description": "Enterprise users don't get a choice about using the app, which makes usability a productivity issue, not a preference. What We Do An internal tool employees find confusing gets worked around, not adopted and the workaround usually costs more than the tool did.",
    "bullets": [
      "Role-Based Interface Design: Different views and permissions for different job functions, designed around how each role actually works.",
      "Workflow-Driven Design: Interfaces built around existing business processes, not a generic dashboard template.",
      "Training-Minimal Design: Layouts intuitive enough that adoption doesn't require weeks of internal training.",
      "Prototype & Stakeholder Review: Validating the design with actual end users, not just the department head who requested it."
    ]
  },
  {
    "title": "DEVELOPMENT & SYSTEM INTEGRATION",
    "description": "The build itself, connected to whatever your organization already runs on. What We Do Most of the real engineering work in enterprise development happens at the integration layer, not the interface.",
    "bullets": [
      "Full-Stack Development: Custom application logic built around your organization's specific processes.",
      "ERP & Legacy System Integration: Connecting to SAP, Oracle, or whatever internal systems your data already lives in.",
      "Single Sign-On (SSO) Implementation: Integration with your existing identity provider, so users aren't managing another password.",
      "API Development: Custom APIs where the application needs to talk to internal or third-party systems."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "Internal tools stay in use for years, and organizational needs don't stop changing after launch. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Feature Development: New functionality built as departments' needs evolve and processes change.",
      "Security & Compliance Updates: Keeping the application current against evolving policy and regulatory requirements.",
      "Integration Monitoring: Confirming connections to ERPs and internal systems keep working as those systems get updated on their own schedules.",
      "User Support & Training: Ongoing support as new employees onboard and the organization's needs shift."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "An internal tool built without understanding the organization around it tends to get built twice, once by the vendor, and once more by whoever has to fix it after rollout.",
  "Legacy Systems Aren't Going Away",
  "Most organizations run on a mix of systems accumulated over years. An enterprise app that ignores that reality creates more integration debt than it solves.",
  "Adoption Is the Real Success Metric",
  "A technically functional tool that employees route around isn't a success, usability and workflow fit determine whether an enterprise app actually gets used.",
  "Security Isn't an Add-On",
  "Enterprise applications typically handle sensitive data across multiple departments. Security architecture designed from the start is far cheaper than retrofitting it after an audit finding.",
  "Built for How the Organization Actually Works",
  "A generic app adapted to fit internal processes usually creates friction. One designed around your actual workflows removes it."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Enterprise projects rarely start with a blank slate. There's an existing ERP, a legacy database nobody wants to touch, a security policy written by a compliance team, and a dozen stakeholders who all need to sign off before anything ships. We build around that reality instead of pretending it doesn't exist, because an enterprise app that ignores what's already there usually gets rejected by the very people it was built to help.",
    "text": "\"The hardest part of enterprise development is rarely the code. It's building something that works within an organization's existing systems, security requirements, and approval structure, without becoming the thing everyone routes around.\" Legacy System Integration | Enterprise-Grade Security | Built Around Real Approval Chains"
  },
  {
    "title": "Our Enterprise App Development Services",
    "text": "Enterprise work starts with understanding the organization, not just the feature request."
  },
  {
    "title": "DISCOVERY & STAKEHOLDER ALIGNMENT",
    "text": "Before architecture gets planned, we find out who actually needs to sign off and what they each care about."
  },
  {
    "title": "What We Do",
    "text": "* Stakeholder Requirements Gathering: Talking to the departments and decision-makers whose approval the project actually needs. * Existing System Audit: Mapping current ERPs, databases, and internal tools the new application needs to work alongside. * Security & Compliance Review: Identifying the regulatory or internal policy requirements the build has to meet from day one. * Workflow Documentation: Understanding how work actually gets done today, not how an org chart says it should. A requirements list gathered from one department and missed by another is how enterprise projects stall at the approval stage. SYSTEM ARCHITECTURE & INTEGRATION PLANNING This is where legacy systems, security requirements, and new functionality get mapped into one coherent plan."
  },
  {
    "title": "What We Do",
    "text": "* Legacy System Integration Planning: Deciding how the new application connects to ERPs, databases, or tools that aren't going anywhere. * Data Architecture Design: Structured around your organization's actual data relationships, not a generic schema. * Security Architecture Planning: Authentication, encryption, and access control designed to your compliance requirements from the start. * Scalability & User Load Planning: Sized for how many employees, departments, or locations will actually be using it. Retrofitting security or integration requirements after development starts is expensive in a way that's hard to walk back."
  },
  {
    "title": "UI/UX DESIGN FOR INTERNAL TOOLS",
    "text": "Enterprise users don't get a choice about using the app, which makes usability a productivity issue, not a preference."
  },
  {
    "title": "What We Do",
    "text": "* Role-Based Interface Design: Different views and permissions for different job functions, designed around how each role actually works. * Workflow-Driven Design: Interfaces built around existing business processes, not a generic dashboard template. * Training-Minimal Design: Layouts intuitive enough that adoption doesn't require weeks of internal training. * Prototype & Stakeholder Review: Validating the design with actual end users, not just the department head who requested it. An internal tool employees find confusing gets worked around, not adopted and the workaround usually costs more than the tool did."
  },
  {
    "title": "DEVELOPMENT & SYSTEM INTEGRATION",
    "text": "The build itself, connected to whatever your organization already runs on."
  },
  {
    "title": "What We Do",
    "text": "* Full-Stack Development: Custom application logic built around your organization's specific processes. * ERP & Legacy System Integration: Connecting to SAP, Oracle, or whatever internal systems your data already lives in. * Single Sign-On (SSO) Implementation: Integration with your existing identity provider, so users aren't managing another password. * API Development: Custom APIs where the application needs to talk to internal or third-party systems. Most of the real engineering work in enterprise development happens at the integration layer, not the interface."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "Internal tools stay in use for years, and organizational needs don't stop changing after launch."
  },
  {
    "title": "What We Do",
    "text": "* Feature Development: New functionality built as departments' needs evolve and processes change. * Security & Compliance Updates: Keeping the application current against evolving policy and regulatory requirements. * Integration Monitoring: Confirming connections to ERPs and internal systems keep working as those systems get updated on their own schedules. * User Support & Training: Ongoing support as new employees onboard and the organization's needs shift. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Enterprise Development Partner An internal tool built without understanding the organization around it tends to get built twice, once by the vendor, and once more by whoever has to fix it after rollout. Legacy Systems Aren't Going Away Most organizations run on a mix of systems accumulated over years. An enterprise app that ignores that reality creates more integration debt than it solves."
  },
  {
    "title": "Adoption Is the Real Success Metric",
    "text": "A technically functional tool that employees route around isn't a success, usability and workflow fit determine whether an enterprise app actually gets used. Security Isn't an Add-On Enterprise applications typically handle sensitive data across multiple departments. Security architecture designed from the start is far cheaper than retrofitting it after an audit finding. Built for How the Organization Actually Works A generic app adapted to fit internal processes usually creates friction. One designed around your actual workflows removes it. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Discovery, architecture, design, integration - handled by people who stay on the project long enough to actually understand your organization, not a rotating cast of contractors. We Start With the Organization, Not the Feature List Requirements gathering and system audits come before architecture planning, because building the right thing depends on understanding what's already there. Local & International Enterprise Experience Based in Dhaka. Building for organizations across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage architecture, design, development, goes through stakeholder review before we move to the next one."
  },
  {
    "title": "Discovery & Stakeholder Alignment",
    "text": "Requirements gathered from the departments and decision-makers who actually need to approve and use the system. System Architecture & Integration Planning Legacy system connections and security architecture mapped out before development starts."
  },
  {
    "title": "Role-Based UI/UX",
    "text": "Interfaces designed around how each department and role actually works, built for adoption, not just function."
  },
  {
    "title": "Full-Stack Development & Integration",
    "text": "Custom application logic connected cleanly to ERPs, legacy systems, and your existing identity provider."
  },
  {
    "title": "Security & Compliance Architecture",
    "text": "Built to your organization's regulatory and internal policy requirements from day one."
  },
  {
    "title": "Transparent Process",
    "text": "Approval checkpoints at every stage, nothing built without stakeholder sign-off."
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
