import { SectionIntro } from '../../../Kinetic'

const comparisonData = [
  {
    factor: 'Launch Speed',
    wix: 'Fast for many projects',
    wordpress: 'Moderate',
    custom: 'Usually longer',
  },
  {
    factor: 'Ease of Editing',
    wix: 'Strong',
    wordpress: 'Strong with the right setup',
    custom: 'Depends on the system',
  },
  {
    factor: 'Design Flexibility',
    wix: 'Strong, especially with Wix Studio',
    wordpress: 'Very high with custom themes',
    custom: 'Very high',
  },
  {
    factor: 'Custom Functionality',
    wix: 'Strong for supported use cases and APIs',
    wordpress: 'Very high with plugins and custom development',
    custom: 'Highest flexibility',
  },
  {
    factor: 'Ecommerce',
    wix: 'Suitable for many stores',
    wordpress: 'Strong with WooCommerce and other solutions',
    custom: 'Fully customizable',
  },
  {
    factor: 'CMS & Dynamic Content',
    wix: 'Strong with Wix CMS',
    wordpress: 'Strong with custom structures',
    custom: 'Fully customizable',
  },
  {
    factor: 'Maintenance',
    wix: 'Managed platform',
    wordpress: 'Requires more technical management',
    custom: 'Requires ongoing development',
  },
  {
    factor: 'Best Fit',
    wix: 'Businesses wanting managed infrastructure and easy editing',
    wordpress: 'Businesses needing a broad ecosystem and deeper extensibility',
    custom: 'Complex applications and specialized systems',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Architecture & Decision Matrix" title="Wix vs WordPress vs Custom Development">
          The right platform depends on the website&apos;s goals, functionality, content workflow, and long-term requirements.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom Development</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                  <td className="p-4 md:p-6 text-frame-accent font-bold">{row.wix}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RECOMMENDATION TAKEAWAYS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 01</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                When We Recommend Wix
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Wix is often a practical choice when ease of management, professional design, business functionality, and a managed platform are priorities.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 02</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                When We Recommend WordPress
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                WordPress may be better when the project needs a broader plugin ecosystem, deeper content flexibility, or functionality that fits the WordPress ecosystem more naturally.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scenario 03</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                When We Recommend Custom Development
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Custom development becomes more appropriate when the website is really a software product, application, or highly specialized digital system rather than a conventional business website.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-bold uppercase tracking-wider text-frame-fg">
            The goal is not to choose the most complicated platform. It is to choose the platform that fits the project.
          </p>
        </div>
      </div>
    </section>
  )
}