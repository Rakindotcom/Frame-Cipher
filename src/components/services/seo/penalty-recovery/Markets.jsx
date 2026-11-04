import React from 'react'
import { AutoLinks } from '../../../seo/AutoLinks'

const marketBlocks = [
  {
    title: 'Google Penalty Recovery for Bangladeshi Businesses',
    body: 'We support Bangladesh-based businesses, publishers, ecommerce websites, and service companies facing manual actions, organic traffic losses, technical visibility problems, or suspected Google updates.',
    closing:
      'Our review can account for local search behavior, English or Bangla content, Bangladesh-focused SERPs, and the technical condition of the website itself.',
  },
  {
    title: 'International SEO Recovery',
    body: 'We also support businesses targeting markets such as the US, UK, Australia, Canada, UAE, and other international markets.',
    closing:
      'Recovery analysis can include country-specific ranking changes, international site structure, regional content, market-level competitors, and other factors affecting organic visibility.',
  },
]

export default function Markets() {
  return (
    <section className="border-t border-b border-white/[0.08] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] lg:grid-cols-2 lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between p-8 sm:p-12 transition-colors duration-300 hover:bg-[#121214]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Market // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                </div>

                <h3 className="text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  <AutoLinks currentPath="/services/seo/penalty-recovery" allowed={['/services/website-design-development/ecommerce-website']}>
                    {item.body}
                  </AutoLinks>
                </p>

                <p className="mt-4 border-l-2 border-frame-accent pl-4 text-xs leading-relaxed text-zinc-400">
                  {item.closing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
