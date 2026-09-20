const startRequirements = [
  "Business or product idea",
  "Target users",
  "Core features",
  "Preferred platforms, if known",
  "Existing website or software",
  "Required integrations",
  "Backend or API requirements",
  "Brand assets or design references",
  "Existing application access, if this is a modernization project",
  "App Store or Google Play account details when required"
]

export default function StartRequirements() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Onboarding Checklist
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          What We Need to Start Your App Project
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          You do not need to have the complete technical architecture figured out before contacting us. We can help define the right approach during discovery. We may need:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {startRequirements.map((req, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
          >
            <span className="text-xs font-black text-frame-accent font-mono">
              {(idx + 1).toString().padStart(2, '0')}.
            </span>
            <span className="text-sm font-semibold text-frame-fg">
              {req}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          The clearer the initial requirements, the easier it is to recommend the right scope and technology.
        </p>
      </div>
    </div>
  )
}