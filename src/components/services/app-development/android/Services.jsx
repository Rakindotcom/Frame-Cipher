import { SectionIntro } from '../../../Kinetic'

const androidServices = [
  {
    title: "Product Strategy & Architecture",
    desc: "We define the core functionality, user requirements, technical structure, supported devices, and future roadmap before development begins."
  },
  {
    title: "UI/UX Design for Android",
    desc: "We design user flows, interfaces, interactions, and responsive layouts around Android conventions and the actual tasks users need to complete."
  },
  {
    title: "Native Android Development",
    desc: "We build native Android applications in Kotlin with direct access to Android platform capabilities."
  },
  {
    title: "API & Backend Integration",
    desc: "We connect the Android app with custom backends, APIs, databases, payment systems, CRMs, and other required services."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test important features, integrations, supported devices, Android versions, and performance conditions before release."
  },
  {
    title: "Google Play Launch",
    desc: "We prepare the production build and support the Google Play submission and release process where included."
  },
  {
    title: "Post-Launch Support",
    desc: "We can continue with bug fixes, OS compatibility updates, dependency maintenance, performance improvements, and new feature development after launch."
  },
  {
    title: "App Performance Optimisation",
    desc: "We review startup time, memory usage, network behaviour, and render performance to identify improvements that affect the real-world experience on target devices."
  }
]

export default function Services() {
  return (
    <div>
      <SectionIntro
        eyebrow="Core Specialization"
        title="Our Android App Development Services"
      >
        We provide end-to-end Android development from product planning and UI/UX through native development, testing, deployment, and post-launch support.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {androidServices.map((svc, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Service 0{i + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {svc.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {svc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}