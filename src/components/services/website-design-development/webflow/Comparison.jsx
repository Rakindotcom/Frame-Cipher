import { SectionIntro } from '../../../Kinetic'

const comparisonData = [
  {
    factor: 'Visual Design Control',
    webflow: 'Strong',
    wordpress: 'Strong with custom themes/builds',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'CMS & Structured Content',
    webflow: 'Strong',
    wordpress: 'Very strong',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Marketing-Team Editing',
    webflow: 'Strong',
    wordpress: 'Strong with the right setup',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Custom Code',
    webflow: 'Strong',
    wordpress: 'Very high flexibility',
    wix: 'Supported within platform constraints',
  },
  {
    factor: 'Animations & Interactions',
    webflow: 'Strong',
    wordpress: 'Depends on implementation',
    wix: 'Strong',
    highlight: 'webflow',
  },
  {
    factor: 'Integrations',
    webflow: 'APIs, apps, custom code',
    wordpress: 'Large plugin ecosystem and APIs',
    wix: 'Apps and integrations',
  },
  {
    factor: 'Localization',
    webflow: 'Supported',
    wordpress: 'Broad options through plugins/custom setup',
    wix: 'Supported',
  },
  {
    factor: 'Ecommerce',
    webflow: 'Suitable for selected use cases',
    wordpress: 'Strong',
    wix: 'Suitable for many business stores',
  },
  {
    factor: 'Infrastructure',
    webflow: 'Managed platform',
    wordpress: 'More technical management',
    wix: 'Managed platform',
    highlight: 'webflow',
  },
  {
    factor: 'Best Fit',
    webflow: 'Design-led marketing sites with structured content',
    wordpress: 'Content-heavy or highly extensible websites',
    wix: 'Businesses wanting easy website management and built-in tools',
  },
]

const platformRecommendations = [
  {
    platform: 'When We Recommend Webflow',
    desc: 'Webflow is often a practical fit when design precision, structured content, marketing-team editing, responsive control, and a managed hosting environment are important.',
    accent: true,
  },
  {
    platform: 'When We Recommend WordPress',
    desc: 'WordPress can make more sense when the project requires a broad plugin ecosystem, complex publishing workflows, or functionality that fits naturally into the WordPress ecosystem.',
    accent: false,
  },
  {
    platform: 'When We Recommend Wix',
    desc: 'Wix can be suitable when fast deployment, simple management, and built-in business functionality are more important than deeper design-system control.',
    accent: false,
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Decision Framework" title="Webflow vs WordPress vs Wix">
          The right website platform depends on design requirements, content workflows, editing needs, integrations, ecommerce complexity, and long-term technical requirements.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[700px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                  <td className={`p-5 md:p-6 ${row.highlight === 'webflow' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                    {row.webflow}
                  </td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.wix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RECOMMENDATION SCENARIOS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {platformRecommendations.map((card, i) => (
            <div
              key={i}
              className={`border-2 p-6 sm:p-8 bg-frame-bg ${
                card.accent ? 'border-frame-accent' : 'border-frame-border'
              }`}
            >
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-frame-fg">
                {card.platform}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
          We recommend the platform based on the actual requirements rather than forcing every project into Webflow.
        </p>
      </div>
    </section>
  )
}