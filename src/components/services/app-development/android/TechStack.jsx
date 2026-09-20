const techStack = [
  {
    area: "Core Android",
    details: "Kotlin • Android SDK • Android Jetpack"
  },
  {
    area: "UI Development",
    details: "Jetpack Compose and Android interface components, where appropriate for the project."
  },
  {
    area: "Local Data",
    details: "Room and other suitable Android storage approaches where local persistence is required."
  },
  {
    area: "APIs & Networking",
    details: "REST APIs and appropriate networking tools for communication between the Android application and backend systems."
  },
  {
    area: "Firebase & Cloud Services",
    details: "Firebase services where authentication, notifications, analytics, crash reporting, or related capabilities are required."
  },
  {
    area: "Location & Device Services",
    details: "Google Maps and Android device APIs where location or hardware functionality is part of the product."
  }
]

export default function TechStack() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engineering Stack
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Android Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We choose the technology stack based on the application&apos;s requirements, supported devices, maintainability, and long-term roadmap.
        </p>
      </div>

      <div className="overflow-x-auto border-2 border-frame-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
            <tr>
              <th className="p-4 border-r-2 border-frame-border w-1/3">Layer / Area</th>
              <th className="p-4 w-2/3">Technologies &amp; Frameworks</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
            {techStack.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                  {row.area}
                </td>
                <td className="p-4 font-medium text-frame-accent">
                  {row.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
          The final stack is selected for the application rather than added simply to make the technology list longer.
        </p>
      </div>
    </div>
  )
}