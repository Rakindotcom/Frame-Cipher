import { SectionIntro } from '../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Discovery & Platform Strategy",
    desc: "We review the idea, users, business goals, budget, and product requirements before recommending Android, iOS, cross-platform, SaaS, or an MVP-first approach."
  },
  {
    step: "02",
    title: "Architecture & Planning",
    desc: "We define the technical structure, backend requirements, APIs, integrations, data flow, and major product components."
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "We map important user journeys, create wireframes, develop the interface, and validate the experience before development progresses."
  },
  {
    step: "04",
    title: "Development",
    desc: "Our team builds the application, backend, integrations, and supporting systems according to the approved scope."
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    desc: "We test important features, integrations, supported devices, operating systems, and performance conditions before release."
  },
  {
    step: "06",
    title: "Launch",
    desc: "We prepare the production build and support the relevant deployment or app-store submission process."
  },
  {
    step: "07",
    title: "Post-Launch Support",
    desc: "After launch, we can continue with bug fixes, compatibility updates, monitoring, feature improvements, and ongoing technical support."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach App Development"
        >
          Our process is designed to connect product goals, user experience, technology, and launch requirements from the beginning.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors min-h-[300px]"
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
