const nativeModulePillars = [
  {
    title: "iOS Native Modules",
    desc: "Selected features can use native iOS technologies when deeper access to Apple APIs, device capabilities, or platform-specific behavior is required."
  },
  {
    title: "Android Native Modules",
    desc: "The same approach can be used for Android-specific functionality that requires direct access to Android APIs or device capabilities."
  },
  {
    title: "Device & Hardware Features",
    desc: "Camera, Bluetooth, biometrics, location, sensors, notifications, background functionality, and other device features may require platform-aware implementation."
  },
  {
    title: "Platform-Specific Business Logic",
    desc: "Some workflows may need different behavior on Android and iOS because the platforms expose different capabilities or follow different interaction patterns."
  },
  {
    title: "Native Where Needed, Shared Where Possible",
    desc: "Our goal is not maximum code sharing at any cost. We share what benefits from sharing and use native implementation when it produces a cleaner and more reliable product."
  }
]

export default function NativeModules() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Hybrid Native Bridges
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Shared Code &amp; Native Module Integration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Cross-platform does not mean every part of the application must be identical on both operating systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nativeModulePillars.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Module 0{i + 1}
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