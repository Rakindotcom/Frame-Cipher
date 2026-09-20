const testFlightValidation = [
  {
    title: "Internal Testing",
    desc: "Early builds can be reviewed by your internal team before broader testing begins."
  },
  {
    title: "External Beta Testing",
    desc: "Selected testers can evaluate real workflows, device behavior, usability, and edge cases before launch."
  },
  {
    title: "Feedback & Revision",
    desc: "Testing feedback is reviewed, prioritized, and converted into required fixes or approved changes."
  },
  {
    title: "Release Readiness",
    desc: "The final build is checked against the agreed feature scope and release requirements before production submission."
  }
]

export default function TestFlightValidation() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Beta Validation
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          TestFlight Beta Testing &amp; Pre-Release Validation
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Before public release, we can use TestFlight to validate the application with controlled testers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testFlightValidation.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Stage 0{i + 1}
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