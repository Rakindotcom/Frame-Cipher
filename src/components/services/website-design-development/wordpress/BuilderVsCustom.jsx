import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Architecture & Strategy" title="Page Builder vs Custom WordPress Theme">
          Both approaches can work well. The right choice depends on your budget, design requirements, editing workflow, performance needs, and future plans.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full min-w-[680px] text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Page Builder</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom WordPress Theme</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row.builder}</td>
                  <td className="p-4 md:p-6 text-frame-accent font-bold">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We recommend the approach based on your website&apos;s purpose, content workflow, functionality, budget, and long-term maintenance needs—not simply on which option is faster to sell.
          </p>
        </div>
      </div>
    </section>
  )
}