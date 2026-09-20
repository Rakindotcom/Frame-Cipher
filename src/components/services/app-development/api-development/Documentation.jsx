const documentationItems = [
  {
    title: "OpenAPI & Swagger Documentation",
    desc: "Where appropriate, we provide API documentation using OpenAPI/Swagger or another suitable documentation approach. Documentation can cover endpoints, parameters, authentication, responses, and errors."
  },
  {
    title: "Interactive API Documentation",
    desc: "Interactive documentation can allow developers to understand and test available endpoints more easily. The exact documentation setup depends on the API architecture and project requirements."
  },
  {
    title: "Request & Response Examples",
    desc: "Examples make API documentation easier to follow. We can document sample requests, responses, parameters, authentication requirements, and common error scenarios."
  },
  {
    title: "Developer Onboarding",
    desc: "When another developer or team needs to consume the API, clear documentation reduces unnecessary back-and-forth. We structure documentation around the information they actually need to integrate."
  },
  {
    title: "Sandbox Environments",
    desc: "For suitable projects, a sandbox or testing environment can allow consumers to test API workflows without affecting live production data."
  },
  {
    title: "Partner API Documentation",
    desc: "If your API is intended for vendors, customers, or business partners, documentation can include onboarding instructions and access requirements."
  },
  {
    title: "API Handoff & Knowledge Transfer",
    desc: "At project completion, we provide the agreed documentation and handoff materials so your team can understand and continue working with the API."
  },
  {
    title: "Client SDKs & Code Samples",
    desc: "Provide client code snippets and helper SDKs across JavaScript, Python, PHP, and mobile platforms so developers can integrate your endpoints in minutes instead of days."
  }
]

export default function Documentation() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          DX &amp; Tooling
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Documentation &amp; Developer Experience
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A technically good API can still create problems if nobody knows how to use it. Documentation should help your internal developers, external partners, and future team members understand the API without reverse-engineering the code.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {documentationItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              DX Pillar 0{i + 1}
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