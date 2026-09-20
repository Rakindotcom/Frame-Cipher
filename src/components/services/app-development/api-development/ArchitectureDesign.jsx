const contractDesignItems = [
  "Resource and endpoint design",
  "Request and response schemas",
  "OpenAPI and API specifications",
  "Security requirements and access model",
  "API versioning",
  "Backward compatibility",
  "Data validation rules",
  "Error response standards",
  "Integration and dependency mapping",
  "Contract design for connected applications"
]

export default function ArchitectureDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Schema &amp; Specifications
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Architecture &amp; Contract Design
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Once the project requirements are clear, we define the technical structure of the API. This creates a predictable contract between your application, users, and connected systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {contractDesignItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-xs md:text-sm font-semibold text-frame-fg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}