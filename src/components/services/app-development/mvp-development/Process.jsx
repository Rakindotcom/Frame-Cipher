import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    "step": "01",
    "title": "Discovery & Product Hypothesis",
    "desc": "We start by understanding the product idea, target users, business problem, and uncertainty that needs to be tested. We identify the core problem, target users, proposed solution, main product assumption, essential user journey, existing alternatives, technical constraints, and business priorities.",
    "deliverable": "A clear product hypothesis and initial MVP direction"
  },
  {
    "step": "02",
    "title": "MVP Scope & Success Metrics",
    "desc": "We turn the product hypothesis into a defined MVP scope covering essential features, later-phase features, core workflow, success signals, integrations, analytics, platform requirements, and initial timeline.",
    "deliverable": "An agreed MVP scope with clear priorities and measurement goals"
  },
  {
    "step": "03",
    "title": "UX/UI Design & Prototype",
    "desc": "We map the core user journey and create the necessary interface before development. The process can include user flows, wireframes, functional UI design, clickable prototypes, responsive layouts, review, and refinement.",
    "deliverable": "A defined product experience ready for development"
  },
  {
    "step": "04",
    "title": "Development & Integration",
    "desc": "We develop the agreed functionality and connect the external systems required for the MVP, including frontend, backend, database, APIs, authentication, payments, third-party services, and analytics where required.",
    "deliverable": "The agreed working MVP functionality"
  },
  {
    "step": "05",
    "title": "QA & Launch Preparation",
    "desc": "We test the core workflows and prepare the product for real users. Testing can cover functionality, integrations, authentication, payments, responsive behavior, error handling, analytics, and launch configuration within scope.",
    "deliverable": "A tested MVP prepared for deployment"
  },
  {
    "step": "06",
    "title": "Launch & Validation Review",
    "desc": "We deploy the approved MVP and help establish the agreed feedback and measurement setup. After launch, available data and feedback can be reviewed against the original hypothesis.",
    "deliverable": "A launched MVP and a clearer evidence base for the next product decision"
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
          Our process keeps product validation and software development connected from the beginning.
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
