const accessibilityLocalization = [
  {
    title: "Accessible Navigation",
    desc: "We consider clear navigation, readable content, suitable touch targets, and screen-reader-friendly structures where required."
  },
  {
    title: "Text Scaling & Contrast",
    desc: "Interfaces can be designed to remain usable when users increase text size or need stronger visual contrast."
  },
  {
    title: "Bangla & English Support",
    desc: "For Bangladesh-focused products, interfaces can be prepared for both Bangla and English users."
  },
  {
    title: "Multilingual Interfaces",
    desc: "Additional languages can be planned into the design and development structure for international products."
  }
]

export default function AccessibilityLocalization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Inclusive Reach
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Accessibility &amp; Localization for Cross-Platform Apps
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A cross-platform application should work across different users, devices, and markets.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accessibilityLocalization.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Element 0{i + 1}
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