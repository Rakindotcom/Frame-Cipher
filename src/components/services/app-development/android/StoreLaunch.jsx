const playStoreRelease = [
  {
    title: "Production Build Preparation",
    desc: "Preparing the release build and configuration required for production."
  },
  {
    title: "App Signing & Release Configuration",
    desc: "Supporting the required signing and release configuration for the Android application where included."
  },
  {
    title: "Play Console Support",
    desc: "Assisting with the relevant Google Play Console release workflow and configuration."
  },
  {
    title: "Store Listing Support",
    desc: "Supporting app information, screenshots, descriptions, categories, and other required materials where included."
  },
  {
    title: "Testing & Release Tracks",
    desc: "Supporting appropriate testing or release-track workflows when required by the project."
  },
  {
    title: "Production Submission",
    desc: "Preparing and submitting the application for production release."
  },
  {
    title: "Review Feedback",
    desc: "If Google requests technical or product changes during review, we can help identify the required updates for resubmission."
  },
  {
    title: "Post-Launch Monitoring",
    desc: "After release, we can monitor crash reports, review performance signals, and address any issues identified in the early post-launch period."
  }
]

export default function StoreLaunch() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Store Deployment
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Google Play Store Launch &amp; Release Support
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Building a production-ready Android application is only part of the release process. We can support the preparation and submission of the app to Google Play.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {playStoreRelease.map((step, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Release Task 0{i + 1}
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

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
          Google makes the final publishing and policy decisions, so no development partner can guarantee approval on a first submission.
        </p>
      </div>
    </div>
  )
}