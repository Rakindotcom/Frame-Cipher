import React from 'react'
import { Check } from 'lucide-react'

const bangladeshMagentoPoints = [
  'Local payment requirements (bKash, Nagad)',
  'Regional customer behavior',
  'Local business operations',
  'Direct communication channels',
  'Bangla-English content where required',
]

const internationalMagentoPoints = [
  'Multiple market and storefront structures',
  'Currencies and customer segments',
  'Different business systems per market',
  'Cross-border and global expansion',
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Magento Development for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">Global Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka, Bangladesh, and works with businesses in Bangladesh as well as international markets.
          </p>
        </div>

        {/* 2 Regional Columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Bangladesh */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-normal text-zinc-400">
                Magento projects can account for:
              </p>
              <ul className="mt-4 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
                {bangladeshMagentoPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* International */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-normal text-zinc-400">
                We can structure ecommerce experiences around:
              </p>
              <ul className="mt-4 space-y-3 text-sm sm:text-base font-normal text-zinc-300">
                {internationalMagentoPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
            Our approach is not based on applying one Bangladesh or international template to every project. We structure the store around the audience, market, and operating model of the business.
          </p>
        </div>
      </div>
    </section>
  )
}
