import { SectionIntro } from '../../Kinetic'

const testingStages = [
  {
    title: "Functional Testing",
    desc: "Checking features and important workflows against the approved requirements."
  },
  {
    title: "Device & OS Testing",
    desc: "Testing supported devices and operating-system versions relevant to the project."
  },
  {
    title: "Performance Testing",
    desc: "Reviewing loading, responsiveness, API behavior, and other performance concerns."
  },
  {
    title: "Integration Testing",
    desc: "Testing payments, APIs, notifications, maps, authentication, and other connected systems."
  },
  {
    title: "Usability Testing",
    desc: "Reviewing important journeys and interface behavior to identify friction before release."
  },
  {
    title: "Regression Testing",
    desc: "Checking previously completed features after major changes or new development."
  },
  {
    title: "Pre-Release Testing",
    desc: "Performing final checks on the production-ready build before store submission or deployment."
  }
]

export default function Testing() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Quality Assurance"
        title="App Testing & Quality Assurance"
      >
        Testing is performed throughout development rather than saved for the final stage.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {testingStages.map((stage, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Testing Stage 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {stage.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {stage.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}