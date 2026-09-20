import { SectionIntro } from '../../../Kinetic'

const performanceCompatibility = [
  {
    title: "Device Compatibility",
    desc: "We test the agreed device range so layouts and functionality remain consistent across supported iPhone and iPad configurations."
  },
  {
    title: "iOS Version Support",
    desc: "Supported iOS versions are defined during planning and considered throughout development and testing."
  },
  {
    title: "Network Conditions",
    desc: "Apps that depend on APIs, media, or live data should handle slow connections, interrupted requests, and temporary service failures."
  },
  {
    title: "Performance Optimization",
    desc: "We review loading behavior, API response handling, memory-sensitive screens, rendering, and other performance-sensitive areas."
  },
  {
    title: "Real-Device Validation",
    desc: "Where required, testing is performed on physical Apple devices rather than relying only on simulators."
  }
]

export default function PerformanceCompatibility() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Device Optimization"
        title="iOS Performance &amp; Device Compatibility"
      >
        An application needs to work well outside a controlled development environment.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {performanceCompatibility.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Compatibility 0{i + 1}
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