const dualStoreDeployment = [
  {
    title: "iOS Release Preparation",
    desc: "We prepare the iOS build, signing configuration, App Store Connect information, and TestFlight workflow within the agreed scope."
  },
  {
    title: "Android Release Preparation",
    desc: "We prepare the Android production build, signing configuration, Play Console information, testing track, and release workflow."
  },
  {
    title: "TestFlight Beta Testing",
    desc: "iOS builds can be distributed through TestFlight for controlled pre-release testing and feedback."
  },
  {
    title: "Google Play Testing",
    desc: "Android builds can be validated through appropriate Play testing tracks before production release."
  },
  {
    title: "Store Submission",
    desc: "We prepare the application and relevant release information for both platforms based on the approved project scope."
  },
  {
    title: "Release Handoff",
    desc: "After deployment, project files, documentation, and relevant release information are handed over for ongoing management."
  }
]

export default function StoreDeployment() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Dual Store Release
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          App Store &amp; Google Play Deployment
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A cross-platform application still has two separate store-release processes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dualStoreDeployment.map((step, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Release Step 0{i + 1}
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