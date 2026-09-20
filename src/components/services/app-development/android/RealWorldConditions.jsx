import { SectionIntro } from '../../../Kinetic'

const realWorldConditions = [
  {
    title: "Device & Screen Compatibility",
    desc: "Testing relevant device categories and screen sizes instead of relying on one reference phone."
  },
  {
    title: "Android Version Support",
    desc: "Defining the supported Android range during planning and testing against the required versions."
  },
  {
    title: "Low-Bandwidth Conditions",
    desc: "Considering loading, retry, timeout, caching, and synchronization behavior for limited connectivity."
  },
  {
    title: "Offline Workflows",
    desc: "Supporting local data and synchronization where the application needs useful functionality without a constant connection."
  },
  {
    title: "Performance Constraints",
    desc: "Considering startup time, memory usage, network requests, media size, and other factors that affect responsiveness."
  },
  {
    title: "API & Service Failures",
    desc: "Planning appropriate loading, fallback, error, and recovery states when connected services do not respond as expected."
  }
]

export default function RealWorldConditions() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Real-World Resilience"
        title="Android Apps Built for Real-World Conditions"
      >
        An Android application can work perfectly in development and still behave differently in real-world use. We consider the environment in which the target users will actually use the product.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realWorldConditions.map((cond, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Condition 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {cond.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {cond.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-semibold italic text-frame-fg">
          Building for Android means planning for variation rather than testing only the easiest case.
        </p>
      </div>
    </div>
  )
}