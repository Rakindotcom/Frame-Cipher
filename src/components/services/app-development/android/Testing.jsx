import { SectionIntro } from '../../../Kinetic'

const testingStages = [
  {
    title: "Functional Testing",
    desc: "Checking important features and workflows against the approved requirements."
  },
  {
    title: "Device & OS Testing",
    desc: "Testing relevant device types, screen sizes, and supported Android versions."
  },
  {
    title: "Performance Testing",
    desc: "Reviewing loading behavior, responsiveness, API interactions, and other performance concerns."
  },
  {
    title: "Integration Testing",
    desc: "Testing APIs, payments, Firebase services, maps, notifications, authentication, and other connected systems."
  },
  {
    title: "Regression Testing",
    desc: "Rechecking previously completed functionality after major changes or new development."
  },
  {
    title: "Pre-Release Testing",
    desc: "Performing final checks on the production-ready build before Google Play submission."
  },
  {
    title: "Crash Monitoring",
    desc: "Setting up appropriate crash and issue reporting where included in the project scope."
  },
  {
    title: "Security Testing",
    desc: "Reviewing authentication flows, session handling, API communication, and permission behaviour as part of the pre-release verification process."
  }
]

export default function Testing() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Testing &amp; Verification"
        title="App Testing, Quality Assurance &amp; Play Store Release"
      >
        Testing takes place throughout development so issues can be identified before the final release.
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

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          Quality assurance is not limited to confirming that the app opens. The goal is to verify that important workflows continue working under supported conditions.
        </p>
      </div>
    </div>
  )
}