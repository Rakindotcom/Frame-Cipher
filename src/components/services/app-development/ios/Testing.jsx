import { SectionIntro } from '../../../Kinetic'

const testingStages = [
  {
    title: "Functional Testing",
    desc: "We verify authentication, navigation, forms, business rules, user flows, notifications, and core application behavior."
  },
  {
    title: "Device Testing",
    desc: "Supported iPhone and iPad configurations are tested according to the agreed device and iOS version scope."
  },
  {
    title: "Integration Testing",
    desc: "We test APIs, payments, authentication services, maps, notifications, analytics, and other connected systems."
  },
  {
    title: "Performance Testing",
    desc: "We review loading states, API behavior, memory-sensitive screens, and common performance issues."
  },
  {
    title: "Regression Testing",
    desc: "After major fixes or feature updates, affected workflows are tested again to reduce release-related problems."
  },
  {
    title: "Pre-Release Testing",
    desc: "The application is reviewed against the agreed scope before the production build is prepared."
  }
]

export default function Testing() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Verification Matrix"
        title="iOS App Testing &amp; Quality Assurance"
      >
        Testing covers more than checking whether each button works.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testingStages.map((stage, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              QA Phase 0{i + 1}
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