import React from 'react'
import { Check } from 'lucide-react'

const bangladeshPoints = [
  'Local payment integrations (bKash & Nagad) for eligible commerce platforms',
  'Bangla-English dual content and language requirements',
  'Mobile-first performance and responsive data considerations',
  'Local business location mapping and domestic workflow alignment',
]

const internationalPoints = [
  'Target market, regional localization, and international currency expectations',
  'Platform requirements per market (Shopify, Webflow, Magento, or custom Next.js)',
  'Global performance optimization, CDNs, and international SEO structure',
  'Streamlined cross-border workflows and customer conversion pathways',
]

export default function Markets() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website development for Bangladesh{' '}
              <span className="italic text-frame-accent">and worldwide.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Frame Cipher works with businesses in Dhaka and across Bangladesh, as well as clients worldwide. We build websites for startups, small businesses, eCommerce brands, and established companies.
          </p>
        </div>

        {/* Modality 2 Architectural Divided Band (2-Column Market Split) */}
        <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] lg:grid-cols-2">
          {/* Bangladesh Market Card */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Tailored for Domestic Growth
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                For Bangladesh-based businesses, we can consider local payment options, Bangla-English content requirements, and relevant business workflows where needed.
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                {bangladeshPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-zinc-300">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-500">
              Headquartered in Dhaka · Serving clients nationwide
            </div>
          </div>

          {/* International Market Card */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Global Client Reach
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                For international projects, we consider the target market, platform requirements, and business goals. Our website development services are available for clients in Bangladesh, the UAE, the US, the UK, Australia, Canada, and other markets.
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                {internationalPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-zinc-300">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-500">
              Serving businesses across US, UK, Australia, Canada &amp; UAE
            </div>
          </div>
        </div>

        {/* Website Warranty and Ongoing Support Architectural Card */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
            Website Warranty and Ongoing Support
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm font-normal leading-relaxed text-zinc-300">
            <p>
              We review design and development milestones with you before moving to the next stage. This helps keep the project aligned with your expectations and reduces surprises at launch. After launch, we can provide guidance on maintenance, updates, and future improvements.
            </p>
            <p>
              Every production build includes warranty coverage against software bugs, broken responsive breakpoints, and script errors for an agreed initial warranty window post-launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
