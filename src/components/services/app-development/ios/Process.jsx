import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We discuss your business goals, target users, application idea, required features, existing systems, and project priorities."
  },
  {
    step: "02",
    title: "Strategy & Architecture Planning",
    desc: "We define the technical approach, user flows, supported devices, integrations, backend requirements, and project scope."
  },
  {
    step: "03",
    title: "Design & Development",
    desc: "We design the experience and build the approved iOS application with regular review points throughout the project."
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "We test the application across agreed devices, features, integrations, and release requirements."
  },
  {
    step: "05",
    title: "Launch & App Store Deployment",
    desc: "We prepare the production build, support TestFlight and App Store Connect activities, and move the application toward release."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach an iOS App Build"
        >
          A disciplined, end-to-end iOS development workflow connecting business priorities, native Apple architecture, testing, and App Store Connect release.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
