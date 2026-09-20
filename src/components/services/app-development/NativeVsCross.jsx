const nativeVsCrossRows = [
  {
    native: "Built specifically for Android or iOS",
    cross: "Uses a shared codebase across platforms"
  },
  {
    native: "Greater control over platform-specific features",
    cross: "Efficient for reaching multiple platforms"
  },
  {
    native: "Useful for highly platform-specific products",
    cross: "Suitable for many business and consumer applications"
  },
  {
    native: "Separate platform development may be required",
    cross: "Reduces duplicated development work"
  },
  {
    native: "Can be appropriate for demanding platform integrations",
    cross: "Can support faster multi-platform delivery"
  }
]

export default function NativeVsCross() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Platform Architecture
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Native vs Cross-Platform App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Choosing between native and cross-platform development depends on your product requirements rather than a fixed rule.
        </p>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border w-1/2">Native App Development</th>
              <th className="p-4 w-1/2">Cross-Platform App Development</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {nativeVsCrossRows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 border-r-2 border-frame-border font-medium text-frame-fg">
                  {row.native}
                </td>
                <td className="p-4 font-medium text-frame-accent">
                  {row.cross}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          We consider the target users, required features, performance needs, timeline, budget, integrations, and long-term roadmap before recommending a technology.
        </p>
      </div>
    </div>
  )
}