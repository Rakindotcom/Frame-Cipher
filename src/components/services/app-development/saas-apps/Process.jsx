import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We discuss your product idea, target customers, business model, core workflows, existing systems, and project priorities."
  },
  {
    step: "02",
    title: "Product & Business Model Planning",
    desc: "We define the SaaS model, primary users, subscription approach, core functionality, and initial product roadmap."
  },
  {
    step: "03",
    title: "SaaS Architecture Planning",
    desc: "We plan tenancy, data structure, permissions, APIs, integrations, infrastructure, and other major technical decisions before development begins."
  },
  {
    step: "04",
    title: "UI/UX Design",
    desc: "We design onboarding, dashboards, workflows, role-based interfaces, billing screens, and other customer-facing experiences."
  },
  {
    step: "05",
    title: "Development & Integration",
    desc: "We build the approved product and connect the required APIs, billing systems, authentication, business systems, and third-party services."
  },
  {
    step: "06",
    title: "Testing & Validation",
    desc: "We test the product across functionality, tenant isolation, billing, integrations, performance, security, and important user journeys."
  },
  {
    step: "07",
    title: "Deployment & Launch",
    desc: "We prepare the production environment, deploy the application, validate core workflows, and support the agreed launch process."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach SaaS Development"
        >
          A methodical seven-phase engineering process aligning business goals, multi-tenant architecture, intuitive product design, and production readiness.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors min-h-[280px]"
            >
              <div>
                <span className="font-heading text-4xl md:text-5xl font-black text-frame-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Phase {step.step} Milestone
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
