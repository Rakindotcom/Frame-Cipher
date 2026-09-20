const techStack = [
  { layer: "Language", tech: "Swift" },
  { layer: "UI", tech: "SwiftUI, UIKit" },
  { layer: "Development", tech: "Xcode, Apple SDKs" },
  { layer: "Architecture", tech: "MVVM, modular architecture, or another suitable pattern" },
  { layer: "Networking", tech: "REST APIs, JSON-based services" },
  { layer: "Authentication", tech: "Secure session-based authentication, Sign in with Apple, biometric flows" },
  { layer: "Local Data", tech: "Local persistence and secure device storage" },
  { layer: "Cloud & Services", tech: "Firebase, analytics, crash reporting, push notifications" },
  { layer: "Apple Services", tech: "StoreKit, MapKit, Core Location, UserNotifications, HealthKit and other supported frameworks" },
  { layer: "Testing", tech: "Unit testing, UI testing, device testing, regression testing" },
  { layer: "Release", tech: "TestFlight, certificates, signing, provisioning, App Store Connect" }
]

export default function TechStack() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Foundations
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          iOS Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We choose the technology stack around your application&apos;s requirements, existing systems, supported devices, and long-term maintenance needs.
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
          The final stack depends on the application rather than following a fixed technology list.
        </p>
      </div>
    </div>
  )
}