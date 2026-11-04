'use client'

import React from 'react'
import { AutoLinks } from '../../../seo/AutoLinks'

const comparisonRows = [
  {
    uiux: 'Focuses on how users move through a product',
    web: 'Focuses more on presenting a business or brand online',
  },
  {
    uiux: 'Maps user journeys and task flows',
    web: 'Structures website pages and content',
  },
  {
    uiux: 'Common for apps, SaaS, dashboards, and web applications',
    web: 'Common for business, marketing, and informational websites',
  },
  {
    uiux: 'Includes usability and interaction decisions',
    web: 'Focuses more on visual page presentation',
  },
  {
    uiux: 'Often includes prototypes and testing',
    web: 'Often connects directly to website development',
  },
]

export default function Comparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            UI/UX Design vs Web Design:{' '}
            <span className="italic text-frame-accent">What&apos;s the Difference?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            UI/UX design and web design can overlap, but they are not always solving the same problem.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 md:p-7 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/2">
                  UI/UX Design
                </th>
                <th className="p-5 md:p-7 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/2">
                  Web Design
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-7 font-medium text-white leading-relaxed border-r border-white/[0.08]">
                    {row.uiux}
                  </td>
                  <td className="p-5 md:p-7 text-zinc-400 leading-relaxed">
                    {row.web}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Callout with AutoLinks */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-3">
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-zinc-300">
            <AutoLinks
              currentPath="/services/website-design-development/ui-ux-design"
              allowed={["/services/website-design-development/business-website"]}
            >
              A business website may need both. A SaaS product, dashboard, ecommerce experience, or mobile app often requires deeper UX planning because users perform repeated or more complex tasks.
            </AutoLinks>
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium text-white leading-relaxed">
            We recommend the appropriate design approach based on what your website or product needs.
          </p>
        </div>
      </div>
    </section>
  )
}
