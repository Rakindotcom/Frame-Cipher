const nativeKotlinPoints = [
  {
    title: "Kotlin Development",
    desc: "Modern native Android development focused on maintainability, platform compatibility, and the application's actual requirements."
  },
  {
    title: "Android SDK Integration",
    desc: "Using Android platform APIs and services directly for the features and behaviors your application requires."
  },
  {
    title: "Local Data & Offline Support",
    desc: "Supporting local persistence, caching, and synchronization where the product requires offline or low-connectivity workflows."
  },
  {
    title: "Push Notification Setup",
    desc: "Integrating Firebase Cloud Messaging and related notification workflows where applicable."
  },
  {
    title: "Background Processing",
    desc: "Supporting background tasks and scheduled work where the application's functionality requires them."
  },
  {
    title: "Device & Hardware Integration",
    desc: "Working with relevant Android features such as camera, GPS, biometrics, Bluetooth, media, and other supported device capabilities."
  }
]

export default function NativeKotlin() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Platform Native
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Native Android Development With Kotlin
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We build native Android applications in Kotlin when the project requires direct access to Android capabilities, platform-specific behavior, or tighter control over the Android experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nativeKotlinPoints.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Capability 0{i + 1}
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

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-semibold italic text-frame-fg">
          Native development gives the application direct access to Android capabilities rather than relying on a shared abstraction for every platform feature.
        </p>
      </div>
    </div>
  )
}