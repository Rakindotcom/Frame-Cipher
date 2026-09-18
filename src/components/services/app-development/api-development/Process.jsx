import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    "step": "01",
    "title": "Discovery & Requirements",
    "desc": "We start by understanding what needs to connect, which systems are involved, what data must move, who will consume the API, authentication requirements, existing documentation, expected traffic, business-critical workflows, and known integration problems.",
    "deliverable": "A clear understanding of the required API or integration scope"
  },
  {
    "step": "02",
    "title": "Technical Design & API Specification",
    "desc": "We define endpoints, resources, data structures, authentication, versioning, errors, and integration patterns.",
    "deliverable": "An agreed technical direction before development begins"
  },
  {
    "step": "03",
    "title": "Development & Integration",
    "desc": "We build the API or connect the required third-party systems. Documentation is developed alongside the implementation rather than being left until the end.",
    "deliverable": "The agreed API or integration functionality"
  },
  {
    "step": "04",
    "title": "Testing & Reliability Review",
    "desc": "We test normal workflows and failure conditions. This can include integration, functional, load, security, webhook, and error-handling tests based on scope.",
    "deliverable": "A tested implementation ready for deployment"
  },
  {
    "step": "05",
    "title": "Deployment, Monitoring & Handoff",
    "desc": "We deploy the approved work, confirm data flow, configure agreed monitoring, and provide documentation or handoff materials.",
    "deliverable": "A production-ready API or integration with the agreed launch and handoff setup"
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach the Build"
        >
          Our process keeps architecture, development, testing, and launch connected.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
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

              {step.deliverable && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <p className="text-xs font-black uppercase tracking-wider text-frame-accent">
                    Deliverable:
                  </p>
                  <p className="mt-1 text-xs md:text-sm font-semibold text-frame-fg">
                    {step.deliverable}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
