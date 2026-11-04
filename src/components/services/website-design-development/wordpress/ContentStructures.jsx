const dynamicFeatures = [
  {
    tag: '01',
    title: 'Custom Post Types',
    description: 'Create structured content types for properties, jobs, team members, case studies, products, locations, or other business-specific information.',
  },
  {
    tag: '02',
    title: 'Custom Taxonomies',
    description: "Organize content with custom categories, filters, and relationships beyond WordPress's standard taxonomy system.",
  },
  {
    tag: '03',
    title: 'Dynamic Fields',
    description: 'Use structured fields and reusable content components to make large websites easier for your team to manage.',
  },
  {
    tag: '04',
    title: 'Dynamic Templates',
    description: 'Build templates that automatically display structured content consistently across relevant pages.',
  },
]

export default function ContentStructures() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Custom Content Structures &amp;{' '}
            <span className="italic text-frame-accent">Dynamic WordPress.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Some WordPress websites need more than standard pages and posts. We can create structured content systems that make complex information easier to manage and display.
          </p>
        </div>

        {/* 4-Column Grid of Dynamic Structures */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dynamicFeatures.map((struct, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {struct.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {struct.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {struct.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            This approach is useful for directories, real estate websites, job boards, publications, portfolios, and other content-heavy WordPress projects.
          </p>
        </div>
      </div>
    </section>
  )
}
