import { SectionIntro } from '../../../Kinetic'

const testingStages = [
  {
    title: "Functional Testing",
    desc: "We verify authentication, navigation, forms, business rules, user flows, notifications, and core features."
  },
  {
    title: "Android Testing",
    desc: "Supported Android devices, versions, screen sizes, permissions, and platform-specific behavior are tested within the agreed scope."
  },
  {
    title: "iOS Testing",
    desc: "Supported Apple devices, iOS versions, permissions, navigation patterns, and platform-specific behavior are tested independently."
  },
  {
    title: "Integration Testing",
    desc: "We test APIs, payment systems, authentication, maps, notifications, analytics, and third-party services."
  },
  {
    title: "Performance Testing",
    desc: "We review loading, rendering, memory-sensitive workflows, API behavior, and other important application performance areas."
  },
  {
    title: "Network Testing",
    desc: "Slow connections, temporary service failures, interrupted requests, and recovery behavior are tested where relevant."
  },
  {
    title: "Regression Testing",
    desc: "After important changes, affected workflows are tested again before release."
  },
  {
    title: "Release Validation",
    desc: "Both platform builds are reviewed against the approved scope before submission."
  }
]

export default function Testing() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Quality Assurance"
        title="Cross-Platform App Testing &amp; Quality Assurance"
      >
        Shared code does not guarantee identical behavior across both platforms.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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