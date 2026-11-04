import React from 'react'
import { AutoLinks } from '../../../seo/AutoLinks'

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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Wix vs WordPress vs{' '}
            <span className="italic text-frame-accent">Custom Development.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right platform depends on the website&apos;s goals, functionality, content workflow, and long-term requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Factor</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Wix</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">WordPress</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">Custom Development</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm sm:text-base font-normal">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-6 font-medium text-white">{row.factor}</td>
                  <td className="p-4 sm:p-6 text-frame-accent font-medium">{row.wix}</td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.wordpress}</td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Scenarios */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">01</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                When We Recommend Wix
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                Wix is often a practical choice when ease of management, professional design, business functionality, and a managed platform are priorities.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">02</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                When We Recommend WordPress
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                WordPress may be better when the project needs a broader plugin ecosystem, deeper content flexibility, or functionality that fits the WordPress ecosystem more naturally.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">03</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                When We Recommend Custom Development
              </h3>
              <div className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                <AutoLinks currentPath="/services/website-design-development/wix" allowed={["/services/website-design-development/business-website"]}>
                  Custom development becomes more appropriate when the website is really a software product, application, or highly specialized digital system rather than a conventional business website.
                </AutoLinks>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-300">
            The goal is not to choose the most complicated platform. It is to choose the platform that fits the project.
          </p>
        </div>
      </div>
    </section>
  )
}
