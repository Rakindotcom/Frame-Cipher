import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We review your idea, business goals, target users, core features, platform requirements, and current product stage."
  },
  {
    step: "02",
    title: "Strategy & Architecture Planning",
    desc: "We define the application structure, device and OS requirements, API needs, integrations, and initial development scope."
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "We map important user journeys, create wireframes, develop the Android interface, and refine the experience through review."
  },
  {
    step: "04",
    title: "Native Development",
    desc: "Our team builds the Android application in Kotlin and connects the required backend systems, APIs, and platform features."
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    desc: "We test important features, integrations, devices, supported Android versions, and performance conditions."
  },
  {
    step: "06",
    title: "Launch & Google Play Deployment",
    desc: "We prepare the release build and support the relevant Google Play submission and release process."
  },
  {
    step: "07",
    title: "Post-Launch Support",
    desc: "After launch, we can continue with compatibility updates, bug fixes, performance work, new features, and ongoing technical support."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our Engineering Methodology"
          title="How We Approach an Android App Build"
        >
          Our process connects product planning, Android UX, architecture, development, testing, and release from the beginning.
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
                  Phase {step.step} Deliverable
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
