import { Check, Minus } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Starter Store',
    for: 'New merchants launching a focused, conversion-ready store',
    price: '৳65,000',
    products: 'Up to 50 products',
    timeline: '2 to 3 weeks',
    platform: 'Shopify / WooCommerce',
    features: [
      'Strategy & Consultation',
      'Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'Product Schema & SEO Setup',
      'Launch Support',
    ],
  },
  {
    name: 'Growth Store',
    for: 'Growing merchants needing broader catalogs and integrations',
    price: '৳130,000',
    products: 'Up to 300 products',
    timeline: '4 to 6 weeks',
    platform: 'Shopify / WooCommerce',
    featured: true,
    features: [
      'Strategy & Consultation',
      'Advanced Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateway',
      'Product Schema & SEO Setup',
      'Inventory & Order Management',
      'Shipping & Logistics Integration',
      'Custom Functionality (as scoped)',
      'Extended Launch Support',
    ],
  },
  {
    name: 'Enterprise Store Build',
    for: 'Established retailers with complex catalogs and multi-system requirements',
    price: '৳250,000+ / Custom Quote',
    products: '300+ products',
    timeline: '6 to 10+ weeks',
    platform: 'Shopify / WooCommerce / Magento',
    features: [
      'Strategy & Consultation',
      'Advanced Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateway',
      'Product Schema & SEO Setup',
      'Multi-warehouse Inventory',
      'Shipping & Logistics Integration',
      'Full Custom Functionality',
      'Dedicated Project Management',
      'Extended Post-Launch Support',
    ],
  },
]

const comparisonMatrix = [
  { feature: 'Best for', starter: 'New merchants launching a focused, conversion-ready store', growth: 'Growing merchants needing broader catalogs and integrations', enterprise: 'Established retailers with complex catalogs and multi-system requirements' },
  { feature: 'Starting Price', starter: '৳65,000', growth: '৳130,000', enterprise: '৳250,000+ / Custom Quote' },
  { feature: 'Product Count', starter: 'Up to 50 products', growth: 'Up to 300 products', enterprise: '300+ products' },
  { feature: 'Strategy & Consultation', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Store Architecture', starter: '✓', growth: '✓ Advanced', enterprise: '✓ Advanced' },
  { feature: 'Product & UI/UX Design', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Platform Development', starter: 'Shopify / WooCommerce', growth: 'Shopify / WooCommerce', enterprise: 'Shopify / WooCommerce / Magento' },
  { feature: 'bKash / Nagad Integration', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'International Payment Gateway', starter: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Product Schema & SEO Setup', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Inventory & Order Management', starter: '—', growth: '✓', enterprise: '✓ Multi-warehouse' },
  { feature: 'Shipping & Logistics Integration', starter: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Custom Functionality', starter: '—', growth: '✓ As scoped', enterprise: '✓ Full custom' },
  { feature: 'Dedicated Project Management', starter: '—', growth: '—', enterprise: '✓' },
  { feature: 'Launch Support', starter: '✓', growth: '✓ Extended', enterprise: '✓ Extended Post-Launch Support' },
]

const timelineTable = [
  { package: 'Starter Store', timeline: '2–3 weeks', scope: 'Up to 50 products, Shopify / WooCommerce, bKash / Nagad, core checkout' },
  { package: 'Growth Store', timeline: '4–6 weeks', scope: 'Up to 300 products, international gateways, courier sync, inventory tracking' },
  { package: 'Enterprise Store', timeline: '6–10+ weeks', scope: '300+ products, Magento / custom setup, multi-warehouse, custom APIs' },
]

const ownershipPoints = [
  'Store administrator access',
  'Product and order management access',
  'CMS or content management access',
  'Domain and hosting access where applicable',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for supported store management tasks',
]

function MatrixCell({ val, isHighlighted = false }) {
  if (val === true || val === 'Included' || val === 'Yes' || val === '✓') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/15 text-frame-accent">
        <Check className="h-3 w-3 stroke-[2.5]" />
      </span>
    )
  }

  if (val === false || val === '—' || val === 'None' || val === 'No' || val === '✗') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-600">
        <Minus className="h-3 w-3 stroke-[2]" />
      </span>
    )
  }

  if (typeof val === 'string') {
    const trimmed = val.trim()
    if (trimmed.startsWith('✓') || trimmed.startsWith('Included')) {
      const detail = trimmed.replace(/^[✓Included\s]+/, '').trim()
      return (
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/15 text-frame-accent">
            <Check className="h-3 w-3 stroke-[2.5]" />
          </span>
          {detail && (
            <span className={isHighlighted ? "text-xs font-medium text-frame-accent" : "text-xs text-zinc-300"}>
              {detail}
            </span>
          )}
        </div>
      )
    }
  }

  return <span className={isHighlighted ? "font-medium text-white" : "text-zinc-300"}>{val}</span>
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            E-commerce Website{' '}
            <span className="italic text-frame-accent">Development Pricing.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            Ecommerce website development is custom-quoted based on the size and complexity of your store. Choose from a focused Starter Store for new merchants, a Growth Store for expanding businesses, or an Enterprise Store Build for established retailers with more complex catalogs and integrations. Pricing depends on factors such as product count, platform, payment methods, logistics integrations, custom functionality, and business requirements.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl p-7 transition-colors duration-200 sm:p-8 ${
                pkg.featured
                  ? 'border border-frame-accent/40 bg-[#15121e] shadow-[0_0_40px_rgba(168,85,247,0.12)]'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed sm:text-sm">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y border-white/[0.08] py-5">
                  <div className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {pkg.price}
                  </div>
                  <div className="mt-3 space-y-1.5 font-mono text-xs text-zinc-400">
                    <div>Catalog: <span className="text-zinc-200">{pkg.products}</span></div>
                    <div>Timeline: <span className="text-zinc-200">{pkg.timeline}</span></div>
                    <div>Platform: <span className="text-zinc-200">{pkg.platform}</span></div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Get Started
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Package Feature Comparison
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Detailed breakdown of deliverables across store development tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] scrollbar-none">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02] text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">Starter</th>
                  <th className="p-4 sm:p-5 text-frame-accent">Growth (Featured)</th>
                  <th className="p-4 sm:p-5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white font-mono text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5">
                      <MatrixCell val={row.starter} />
                    </td>
                    <td className="p-4 sm:p-5 bg-purple-500/[0.03]">
                      <MatrixCell val={row.growth} isHighlighted />
                    </td>
                    <td className="p-4 sm:p-5">
                      <MatrixCell val={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline & Scope Breakdown */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Estimated Delivery Timelines
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Realistic launch timelines based on scope, catalog size, and review iterations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02] text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Package Tier</th>
                  <th className="p-4 sm:p-5">Timeline</th>
                  <th className="p-4 sm:p-5">Scope &amp; Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {timelineTable.map((t, tIdx) => (
                  <tr key={tIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white">{t.package}</td>
                    <td className="p-4 sm:p-5 font-mono text-frame-accent">{t.timeline}</td>
                    <td className="p-4 sm:p-5 text-zinc-300">{t.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ownership & Handover Standard Card */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
            What You Own After Delivery
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-3xl">
            Upon project completion and final payment, you retain full ownership and control of your ecommerce store assets.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ownershipPoints.map((point, oIdx) => (
              <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation CTA Trigger */}
        <div className="mt-12 text-center">
          <PosterButton href="/contact" variant="accent">
            Request an Accurate Scope Quote
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
