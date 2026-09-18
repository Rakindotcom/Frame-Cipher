import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We discuss your app idea, business goals, target users, required features, existing systems, and project priorities."
  },
  {
    step: "02",
    title: "Strategy & Architecture Planning",
    desc: "We review the product requirements and define the framework, technical architecture, shared-vs-native approach, integrations, and initial scope."
  },
  {
    step: "03",
    title: "Design & Development",
    desc: "We create the platform-aware interface and develop the approved application with regular review checkpoints."
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "We test both platforms independently across the agreed devices, features, integrations, and release conditions."
  },
  {
    step: "05",
    title: "Launch & Dual Store Deployment",
    desc: "We prepare the production builds, support the required testing and submission workflows, and move both applications toward release."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach a Cross-Platform App Build"
        >
          A coordinated development methodology connecting product goals, platform-aware UI/UX, shared architecture, and dual-store release.
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
