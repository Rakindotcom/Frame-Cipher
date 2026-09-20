const crossVsNativeTable = [
  { factor: "Code sharing", cross: "High for suitable application logic", native: "Separate platform codebases" },
  { factor: "Android + iOS", cross: "One coordinated development approach", native: "Separate implementations" },
  { factor: "Development effort", cross: "Can reduce duplicated work", native: "More platform-specific work" },
  { factor: "Platform-specific features", cross: "Supported with plugins or native modules", native: "Direct native access" },
  { factor: "UI approach", cross: "Shared foundation with platform-aware adjustments", native: "Fully platform-specific" },
  { factor: "Maintenance", cross: "Common code may simplify updates", native: "Separate platform maintenance" },
  { factor: "Best fit", cross: "Products with substantial shared logic", native: "Products needing deeper platform specialization" }
]

export default function CrossVsNative() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Architecture Comparison
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Cross-Platform vs Native App Development
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          The right development model depends on your feature set, platform requirements, budget, timeline, and long-term roadmap.
        </p>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border">Factor</th>
              <th className="p-4 border-r-2 border-frame-border">Cross-Platform</th>
              <th className="p-4">Native</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {crossVsNativeTable.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                  {row.factor}
                </td>
                <td className="p-4 font-medium text-frame-accent border-r-2 border-frame-border">
                  {row.cross}
                </td>
                <td className="p-4 font-medium text-frame-fg">
                  {row.native}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            When Cross-Platform Makes Sense
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            Cross-platform is often a practical fit when you need both Android and iOS, share substantial business logic, have a controlled feature set, and want a coordinated development approach.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            When Native Development Makes More Sense
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            Native development can be more suitable when your application depends heavily on platform-specific APIs, specialized hardware, advanced graphics, or highly customized platform behavior.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            Cost, Timeline &amp; Maintenance
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            Cross-platform development can reduce duplicated implementation when large parts of the application can be shared. However, total cost still depends on architecture, native modules, backend systems, design complexity, integrations, testing, and ongoing support.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            Performance &amp; Platform-Specific Features
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            Cross-platform applications can provide strong performance for many business and consumer products. Performance-sensitive or deeply platform-specific features may still require native code to deliver the right result.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            Hybrid Development: Shared + Native
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            A hybrid approach can use shared cross-platform code for the majority of the application while implementing selected features with native iOS or Android technologies.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            How We Choose the Right Approach
          </h4>
          <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            We review your target users, features, integrations, device requirements, roadmap, timeline, and budget before recommending a development approach.
          </p>
        </div>
      </div>
    </div>
  )
}