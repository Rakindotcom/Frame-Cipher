const appStoreRelease = [
  {
    title: "Production Build & Signing",
    desc: "We prepare the release build and work through the required signing, certificates, and provisioning configuration."
  },
  {
    title: "App Store Connect Setup",
    desc: "We assist with app configuration, build management, metadata, screenshots, and other required release information."
  },
  {
    title: "TestFlight & Release Tracks",
    desc: "Pre-release builds can be distributed through TestFlight before moving to the production release."
  },
  {
    title: "App Store Submission",
    desc: "We prepare the production build and submission workflow based on the agreed release scope."
  },
  {
    title: "Review Support",
    desc: "Apple reviews apps and updates submitted to the App Store. We help address technical or submission changes within the agreed project scope."
  },
  {
    title: "Release Handoff",
    desc: "After launch, you receive the relevant project files, documentation, and release information needed for ongoing management."
  }
]

export default function StoreLaunch() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Store Publishing
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          App Store Connect &amp; iOS Release Support
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Launching an iOS app involves more than uploading a production file.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {appStoreRelease.map((step, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Release Phase 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {step.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}