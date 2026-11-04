const comparisonData = [
  { factor: 'Initial Cost', builder: 'Lower', custom: 'Higher' },
  { factor: 'Launch Speed', builder: 'Faster', custom: 'Longer' },
  { factor: 'Design Flexibility', builder: 'Good', custom: 'High' },
  { factor: 'Performance Control', builder: 'Depends on implementation', custom: 'Greater control' },
  { factor: 'Content Editing', builder: 'Easy visual editing', custom: 'Gutenberg/custom editing' },
  { factor: 'Plugin Dependency', builder: 'Can be higher', custom: 'Can be lower' },
  { factor: 'Best For', builder: 'Smaller sites and businesses needing easy editing', custom: 'Brands needing custom structure and greater control' },
  { factor: 'Custom Functionality', builder: 'Possible within limits', custom: 'Greater flexibility' },
]

export default function BuilderVsCustom() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Page Builder vs{' '}
            <span className="italic text-frame-accent">Custom WordPress Theme.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Both approaches can work well. The right choice depends on your budget, design requirements, editing workflow, performance needs, and future plans.
          </p>
        </div>

        {/* Architecture Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/3">
                  Factor
                </th>
                <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-zinc-300 w-1/3">
                  Page Builder
                </th>
                <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/3 bg-frame-accent/5">
                  Custom WordPress Theme
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-xs md:text-sm">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 md:p-5 font-medium text-white border-r border-white/[0.08]">
                    {row.factor}
                  </td>
                  <td className="p-4 md:p-5 text-zinc-300 border-r border-white/[0.08]">
                    {row.builder}
                  </td>
                  <td className="p-4 md:p-5 text-white font-medium bg-frame-accent/5">
                    {row.custom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            We recommend the approach based on your website&apos;s purpose, content workflow, functionality, budget, and long-term maintenance needs, not simply on which option is faster to sell.
          </p>
        </div>
      </div>
    </section>
  )
}
