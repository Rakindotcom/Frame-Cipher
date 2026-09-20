import { SectionIntro } from '../../../Kinetic'

const whatIsEnterprise = [
  {
    title: "Enterprise vs Business Applications",
    desc: "A business application may support one team or a limited workflow. Enterprise applications often need to support multiple departments, locations, roles, systems, and approval structures."
  },
  {
    title: "Enterprise vs Off-the-Shelf Software",
    desc: "Off-the-shelf software provides a predefined way to work. Custom enterprise software can be designed around the organization's existing processes, rules, data, and operational requirements."
  },
  {
    title: "Multi-Department Systems",
    desc: "Enterprise applications can connect finance, HR, sales, operations, procurement, logistics, customer service, and management through shared workflows and controlled access."
  },
  {
    title: "Mission-Critical Business Applications",
    desc: "Some enterprise systems support daily operations that employees rely on continuously. Availability, data integrity, security, and dependable integrations therefore become core requirements."
  },
  {
    title: "Enterprise Web & Mobile Applications",
    desc: "Enterprise solutions can include web platforms, employee portals, customer systems, dashboards, mobile applications, and connected operational tools."
  }
]

export default function WhatIsEnterprise() {
  return (
    <div>
      <SectionIntro
        eyebrow="Core Scope"
        title="What Is Enterprise App Development?"
      >
        Enterprise app development is the process of building software for organizations with complex workflows, multiple user groups, existing systems, security requirements, and long-term operational needs. An enterprise application may connect departments, automate processes, manage sensitive information, integrate with legacy systems, and support large numbers of users or transactions.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whatIsEnterprise.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Scope Concept 0{i + 1}
              </span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}