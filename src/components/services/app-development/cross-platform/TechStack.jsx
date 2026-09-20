const techStack = [
  { layer: "Cross-Platform", tech: "Flutter, React Native" },
  { layer: "Languages", tech: "Dart, JavaScript, TypeScript" },
  { layer: "Android", tech: "Android SDK, Kotlin for native modules" },
  { layer: "iOS", tech: "iOS SDK, Swift for native modules" },
  { layer: "UI", tech: "Flutter widgets, React Native, platform-specific UI" },
  { layer: "Networking", tech: "REST APIs, JSON, GraphQL where required" },
  { layer: "Backend", tech: "Node.js, PHP/Laravel, or existing client backend" },
  { layer: "Database", tech: "MySQL, PostgreSQL, Firebase, SQLite/local storage" },
  { layer: "Services", tech: "Firebase, push notifications, analytics, crash monitoring" },
  { layer: "Development", tech: "Xcode, Android Studio, Git" },
  { layer: "Testing", tech: "Unit, integration, UI, device, regression testing" },
  { layer: "Release", tech: "TestFlight, App Store Connect, Google Play Console" }
]

export default function TechStack() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Stack
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Cross-Platform App Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We choose technologies based on the application rather than forcing every project into one fixed stack.
        </p>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border w-1/4">Layer</th>
              <th className="p-4">Technologies</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {techStack.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                  {row.layer}
                </td>
                <td className="p-4 font-medium text-frame-accent">
                  {row.tech}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          The final stack depends on the product, existing systems, project scope, and long-term maintenance requirements.
        </p>
      </div>
    </div>
  )
}