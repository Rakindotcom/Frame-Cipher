const flutterVsReactTable = [
  { factor: "Primary language", flutter: "Dart", react: "JavaScript / TypeScript" },
  { factor: "UI approach", flutter: "Flutter widgets and rendering", react: "React-based development with platform integration" },
  { factor: "Visual control", flutter: "Strong", react: "Strong with platform-aware implementation" },
  { factor: "Existing React ecosystem", flutter: "Limited relevance", react: "Major advantage" },
  { factor: "Native integration", flutter: "Native platform integration available", react: "Native modules and platform integration available" },
  { factor: "Strong fit", flutter: "Custom interfaces and controlled cross-platform experiences", react: "Products aligned with React or JavaScript/TypeScript" }
]

export default function FlutterVsReact() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Framework Evaluation
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Flutter vs React Native: Which Should You Choose?
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Flutter and React Native can both support serious Android and iOS applications. The right choice depends on your product and technical context.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Flutter App Development
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            Flutter can be a strong fit for products that need a highly controlled interface, reusable components, and a consistent cross-platform visual system. It can work particularly well when the application has substantial custom UI requirements and the project is being designed around a fresh cross-platform architecture.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            React Native App Development
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            React Native can be a strong fit for products that benefit from the JavaScript or TypeScript ecosystem, existing React knowledge, or an established React-based technology environment. It can also be practical when a product or internal team already works heavily with the broader React ecosystem.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border">Factor</th>
              <th className="p-4 border-r-2 border-frame-border">Flutter</th>
              <th className="p-4">React Native</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {flutterVsReactTable.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                  {row.factor}
                </td>
                <td className="p-4 font-medium text-frame-accent border-r-2 border-frame-border">
                  {row.flutter}
                </td>
                <td className="p-4 font-medium text-frame-fg">
                  {row.react}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4 space-y-2">
        <p className="text-sm font-semibold italic text-frame-fg">
          Which Framework Fits Your Product? The decision depends on your UI requirements, existing systems, development team, integrations, performance needs, and future product direction.
        </p>
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          What We Recommend Based on Your Requirements: We do not force every client into the same framework. We recommend Flutter, React Native, native development, or a hybrid model based on what your application actually needs.
        </p>
      </div>
    </div>
  )
}