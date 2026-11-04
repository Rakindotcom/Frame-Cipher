import { Check } from 'lucide-react'

const bangladeshMarketPoints = [
  'Bangla-English content requirements',
  'Mobile-first browsing behavior',
  'WhatsApp and direct-call communication',
  'Local business locations and Google Maps',
  'bKash and Nagad considerations for suitable eCommerce projects',
  'Local service-area information',
  'Bangladesh-focused content and SEO requirements',
]

const internationalBusinessPoints = [
  'Target market and audience expectations',
  'Language and content requirements',
  'Platform requirements per market',
  'Business workflow and conversion path',
]

export default function Markets() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Business Websites for the{' '}
            <span className="italic text-frame-accent">Bangladesh Market.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            A website for a Bangladeshi business may need different communication, contact, and conversion considerations than a website built for another market.
          </p>
        </div>

        {/* Modality 2: Architectural Divided Column Band (Domestic vs International) */}
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
            {/* Domestic Focus */}
            <div className="flex flex-col justify-between p-7 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  01 · Domestic Focus
                </span>
                <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight text-white">
                  Where relevant, we can account for:
                </h3>
                <ul className="mt-6 space-y-3 text-sm sm:text-base text-zinc-300">
                  {bangladeshMarketPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-frame-accent" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400">
                Optimized for domestic conversion, speed, and mobile responsiveness
              </div>
            </div>

            {/* International Standards */}
            <div className="flex flex-col justify-between p-7 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  02 · International Standards
                </span>
                <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight text-white">
                  Serving Global Clients
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-400">
                  In those projects, we consider:
                </p>
                <ul className="mt-4 space-y-3 text-sm sm:text-base text-zinc-300">
                  {internationalBusinessPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-frame-accent" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/[0.08] pt-4 text-sm leading-relaxed text-zinc-400">
                  The goal is not to build a &ldquo;Bangladesh version&rdquo; or an &ldquo;international version&rdquo; by default. The website structure should match the market your business actually serves.
                </p>
              </div>
              <div className="mt-8 border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400">
                Served clients across: US, UK, Australia, Canada, UAE &amp; Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
