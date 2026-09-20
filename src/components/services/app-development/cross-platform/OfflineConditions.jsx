import { SectionIntro } from '../../../Kinetic'

const offlineConditions = [
  {
    title: "Offline Data Access",
    desc: "Applications can store suitable information locally when users need to continue working without a reliable connection."
  },
  {
    title: "Sync & Recovery",
    desc: "Offline changes can be synchronized when connectivity returns, based on the product's data rules."
  },
  {
    title: "Retry Handling",
    desc: "Network requests can be designed to recover from temporary failures rather than leaving users with incomplete workflows."
  },
  {
    title: "Slow Network Support",
    desc: "Loading states, retries, caching, timeouts, and clear feedback can help maintain usability under weaker network conditions."
  },
  {
    title: "Conflict Handling",
    desc: "For products where multiple users can change the same information, synchronization rules should define how conflicting changes are handled."
  }
]

export default function OfflineConditions() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Network Resilience"
        title="Offline Functionality &amp; Real-World App Conditions"
      >
        Mobile users may not always have a fast or stable internet connection.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offlineConditions.map((cond, i) => (
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
    </div>
  )
}