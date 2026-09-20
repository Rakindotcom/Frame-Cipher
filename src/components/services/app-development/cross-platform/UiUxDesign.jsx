const uiUxDesignPillars = [
  {
    title: "Platform-Aware Interface Design",
    desc: "We maintain a consistent brand experience while adapting navigation, controls, spacing, interactions, and interface patterns where Android and iOS differ."
  },
  {
    title: "User Flow Mapping",
    desc: "We map important user journeys before development so customers can complete key actions naturally on both platforms."
  },
  {
    title: "Adaptive Layouts",
    desc: "Interfaces are designed around supported device sizes rather than one fixed mobile layout."
  },
  {
    title: "Prototype & Usability Review",
    desc: "Important flows can be validated through prototypes and early device testing before development is finalized."
  }
]

export default function UiUxDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Adaptive Design
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Platform-Aware UI/UX Design
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A shared application foundation does not require an identical interface on every platform.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {uiUxDesignPillars.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Design Element 0{i + 1}
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