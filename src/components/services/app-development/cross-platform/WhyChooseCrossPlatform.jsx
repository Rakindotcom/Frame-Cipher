const whyChooseCrossPlatform = [
  {
    title: "Reach Android & iOS From One Product Build",
    desc: "A shared codebase can allow common business logic and application features to be developed once and delivered across both platforms."
  },
  {
    title: "Faster Product Iteration",
    desc: "When a large portion of the application is shared, teams can coordinate feature development and updates across Android and iOS without duplicating every implementation."
  },
  {
    title: "Lower Duplicate Development Effort",
    desc: "Shared code can reduce repeated work across business logic, API integration, validation, and other common application components."
  },
  {
    title: "Consistent Product Experience",
    desc: "A shared foundation can help keep important business rules and core workflows aligned between Android and iOS."
  },
  {
    title: "Easier MVP Validation",
    desc: "For startups and growing businesses, launching on both platforms from a shared development approach can provide a practical way to validate the product with both audiences."
  }
]

export default function WhyChooseCrossPlatform() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Unified Advantage
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Choose Cross-Platform App Development?
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Cross-platform development works well when your Android and iOS products share substantial functionality and you want a coordinated approach to development and maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseCrossPlatform.map((reason, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Factor 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {reason.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t-2 border-frame-border pt-6">
        <h3 className="font-heading text-lg font-bold uppercase text-frame-accent">
          When Cross-Platform May Not Be the Right Fit
        </h3>
        <p className="mt-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Cross-platform is not automatically the right choice for every product. Apps that rely heavily on specialized hardware, advanced graphics, deeply platform-specific behavior, or highly customized native experiences may benefit more from native development. The right decision depends on the product, not the framework.
        </p>
      </div>
    </div>
  )
}