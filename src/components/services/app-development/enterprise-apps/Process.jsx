import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Discovery & Stakeholder Consultation",
    desc: "We identify business goals, stakeholders, departments, users, existing systems, workflows, and project constraints."
  },
  {
    step: "02",
    title: "Business & System Analysis",
    desc: "We document important processes, data flows, roles, dependencies, integrations, and operational requirements."
  },
  {
    step: "03",
    title: "Architecture & Integration Planning",
    desc: "We define application structure, data architecture, security, integrations, scalability requirements, and the appropriate technical approach."
  },
  {
    step: "04",
    title: "UI/UX Design",
    desc: "We design role-based workflows, dashboards, forms, navigation, and key user journeys around how the organization operates."
  },
  {
    step: "05",
    title: "Development & Integration",
    desc: "We build the approved application and connect the required enterprise systems, APIs, identity providers, databases, and third-party services."
  },
  {
    step: "06",
    title: "Testing, Launch & Handoff",
    desc: "We validate the application, support production launch, provide agreed documentation and handoff materials, and assist with the initial post-launch period."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach Enterprise App Development"
        >
          We follow a structured development process that connects business requirements with technical implementation. The exact workflow can change based on the organization&apos;s systems, project scope, integrations, and rollout requirements.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
