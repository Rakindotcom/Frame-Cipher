import { SectionIntro } from '../../../Kinetic'

const performanceCompatibility = [
  {
    title: "Android Device Compatibility",
    desc: "We account for the supported Android versions, screen sizes, hardware differences, and agreed device range."
  },
  {
    title: "iPhone & iPad Compatibility",
    desc: "Supported Apple devices and operating-system versions are considered throughout development and testing."
  },
  {
    title: "App Startup & Rendering",
    desc: "We review launch behavior, screen rendering, animations, data-heavy views, and other performance-sensitive areas."
  },
  {
    title: "Memory & Resource Usage",
    desc: "Resource-heavy workflows and performance-sensitive screens are reviewed to reduce unnecessary device strain."
  },
  {
    title: "API & Network Performance",
    desc: "We review API response handling, loading states, caching, timeouts, and network-dependent workflows."
  },
  {
    title: "Real-Device Validation",
    desc: "Where required, testing includes physical Android and Apple devices rather than relying only on emulators and simulators."
  }
]

export default function PerformanceCompatibility() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Hardware Optimization"
        title="Cross-Platform Performance &amp; Device Compatibility"
      >
        A cross-platform application still runs across different devices, operating systems, screen sizes, and hardware conditions.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {performanceCompatibility.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Optimization 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}