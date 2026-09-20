const accessibilityLocalization = [
  {
    title: "Accessibility Support",
    desc: "We consider VoiceOver, readable typography, suitable touch targets, contrast, dynamic text sizing, and accessible interaction patterns where required."
  },
  {
    title: "Bangla & English Interfaces",
    desc: "For businesses serving Bangladesh, we can prepare interfaces for Bangla and English users."
  },
  {
    title: "Multilingual Localization",
    desc: "Additional languages can be planned around your target markets and application scope."
  },
  {
    title: "Localization-Ready Layouts",
    desc: "Text length, translated labels, dates, numbers, and interface changes are considered during design so localization does not create avoidable layout problems later."
  }
]

export default function AccessibilityLocalization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Inclusive Design
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          iOS Accessibility &amp; Localization
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your app should remain usable across different users, languages, devices, and accessibility needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accessibilityLocalization.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Accessibility 0{i + 1}
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