const uiUxPoints = [
  "User journey mapping",
  "Task and conversion flows",
  "Information architecture",
  "Wireframes",
  "Interactive prototypes",
  "High-fidelity interface design",
  "Design systems",
  "Responsive and accessibility-aware design",
  "Usability testing where scoped"
]

export default function UiUxDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Interface &amp; Flow
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          UI/UX Design for Apps
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A successful app needs a clear experience before it needs more code. Our app UI/UX work can include:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {uiUxPoints.map((point, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-frame-fg">
              {point}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          We connect UX planning with development requirements so the final interface is designed around actual user actions rather than isolated screens.
        </p>
      </div>
    </div>
  )
}