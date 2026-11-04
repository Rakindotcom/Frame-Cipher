import { Check } from 'lucide-react'

const bangladeshEcommercePoints = [
  'bKash, Nagad, and other supported local payment methods',
  'Cash on Delivery workflows',
  'Courier and delivery integrations',
  'WhatsApp and direct-call communication',
  'Bangla-English product and store content',
  'Google Maps and local business information',
  'Mobile-first shopping experiences',
  'Bangladesh-focused ecommerce SEO',
]

const internationalEcommercePoints = [
  'International payment methods',
  'Currencies and multi-language support',
  'Delivery requirements per market',
  'Market-specific shopping behavior',
]

export default function Markets() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            E-commerce Website Development for the{' '}
            <span className="italic text-frame-accent">Bangladesh Market.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            Bangladeshi ecommerce businesses often need to account for local payment methods, delivery expectations, mobile-first shopping, and direct customer communication.
          </p>
        </div>

        {/* 2-Column Market Architecture Comparison */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Domestic Commerce */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10">
            <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Where relevant, we can support:
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-zinc-300 sm:text-base">
              {bangladeshEcommercePoints.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Global Commerce */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10">
            <div>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Serving Global Merchants
              </h3>

              <p className="mt-4 text-sm text-zinc-300 sm:text-base leading-relaxed">
                For merchants targeting customers outside Bangladesh, we can also consider:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300 sm:text-base">
                {internationalEcommercePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-zinc-400 border-t border-white/[0.06] pt-4 leading-relaxed sm:text-base">
                Your store should be built around the market you actually sell into, not around a generic ecommerce template.
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-4 font-mono text-xs text-zinc-500">
              <span>Global reach: US, UK, Australia, Canada, UAE &amp; Cross-border commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
