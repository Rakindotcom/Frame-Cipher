const appleEcosystem = [
  {
    title: "iPhone App Development",
    desc: "Build the primary mobile experience around modern iPhone screen sizes, touch interactions, supported iOS versions, and your core user journeys."
  },
  {
    title: "iPad App Development",
    desc: "Extend the product to iPad with layouts and interaction patterns designed for larger screens rather than simply stretching the iPhone interface."
  },
  {
    title: "Apple Watch Integration",
    desc: "For suitable products, we can plan companion experiences for quick actions, notifications, tracking, and wearable workflows."
  },
  {
    title: "Apple TV & Other Apple Platforms",
    desc: "When your product needs a broader Apple presence, additional platform experiences can be considered as part of the overall application strategy."
  },
  {
    title: "Mac Catalyst",
    desc: "Existing iPad applications can be evaluated for Mac Catalyst when extending the product to Mac supports your business goals."
  }
]

export default function AppleEcosystem() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Multi-Device Apple Suite
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Apple Ecosystem App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your product may need more than an iPhone app. We define the Apple-platform scope around your users and the way your product will be used.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {appleEcosystem.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Platform 0{i + 1}
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