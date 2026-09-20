import { SectionIntro } from '../../../Kinetic'

const whatIsSaas = [
  {
    title: "SaaS vs Traditional Software",
    desc: "Traditional software may be sold or deployed as a one-time product. SaaS is typically delivered as an ongoing service that customers access through the web or connected applications."
  },
  {
    title: "SaaS vs a Standard Web Application",
    desc: "A standard web application can serve one company, one workflow, or a limited group of users. A SaaS platform is designed to serve multiple customers with separate accounts, permissions, billing, and customer data."
  },
  {
    title: "Multi-Tenant Software",
    desc: "Multi-tenancy allows multiple customer organizations or accounts to use the same platform while keeping their data and access logically separated."
  },
  {
    title: "Subscription-Based Access",
    desc: "SaaS products commonly use monthly, annual, usage-based, or other recurring plans to provide access to the software."
  },
  {
    title: "Continuous Product Delivery",
    desc: "Because the product is managed centrally, updates, improvements, fixes, and new functionality can be released continuously as the SaaS evolves."
  }
]

export default function WhatIsSaas() {
  return (
    <div>
      <SectionIntro
        eyebrow="Core Definition"
        title="What Is SaaS App Development?"
      >
        SaaS app development is the process of building software that customers access as an ongoing online service instead of installing and managing a separate copy. A SaaS product usually combines the application itself with customer accounts, tenant management, billing, permissions, analytics, integrations, and infrastructure designed for continuous operation.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whatIsSaas.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Concept 0{i + 1}
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