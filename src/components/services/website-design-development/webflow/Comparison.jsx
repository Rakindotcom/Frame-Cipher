import React from 'react'

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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Webflow vs WordPress vs{' '}
            <span className="italic text-frame-accent">Wix.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right website platform depends on design requirements, content workflows, editing needs, integrations, ecommerce complexity, and long-term technical requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[700px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Factor</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Webflow</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">WordPress</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">Wix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm sm:text-base font-normal">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-6 font-medium text-white">{row.factor}</td>
                  <td className={`p-4 sm:p-6 ${row.highlight === 'webflow' ? 'font-medium text-frame-accent' : 'text-white'}`}>
                    {row.webflow}
                  </td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.wordpress}</td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.wix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Scenarios */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platformRecommendations.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 sm:p-8 bg-[#121214] transition-colors duration-200 hover:border-white/[0.14] ${
                card.accent ? 'border-frame-accent/40' : 'border-white/[0.08]'
              }`}
            >
              <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                {card.platform}
              </h3>
              <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400">
          We recommend the platform based on the actual requirements rather than forcing every project into Webflow.
        </p>
      </div>
    </section>
  )
}
