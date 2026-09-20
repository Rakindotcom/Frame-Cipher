import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Basic Informational Site',
    price: '৳20,000',
    timeline: '~3–5 days',
    description: 'Page count, template customization',
    features: [
      'Template customization',
      'Core page structure',
      'Mobile optimization',
      'On-page SEO setup',
      'Editor handoff & basic training',
      'Launch support',
    ],
  },
  {
    name: 'Custom Business Site',
    price: '৳35,000',
    timeline: '~1–2 weeks',
    description: 'Custom design, booking/form setup, app integrations',
    features: [
      'Custom design within Wix editor',
      'Booking / form setup',
      'App integrations',
      'Mobile optimization',
      'On-page SEO setup',
      'Editor handoff & training',
      'Launch support',
    ],
  },
  {
    name: 'Wix Stores (Small Catalog)',
    price: '৳55,000',
    timeline: '~2–3 weeks',
    description: 'Product count, payment setup, store-specific design',
    features: [
      'Store-specific design',
      'Product catalog setup',
      'bKash / Nagad & card payment setup',
      'Order & inventory basics',
      'On-page SEO setup',
      'Mobile optimization',
      'Launch support',
    ],
  },
  {
    name: 'Wix Studio / Velo Custom Build',
    price: 'Custom Quote',
    timeline: '~3–5 weeks',
    description: 'Custom code requirements, advanced functionality',
    features: [
      'Custom Velo / JavaScript development',
      'Advanced functionality & integrations',
      'CMS & dynamic pages',
      'Custom workflows',
      'Performance optimization',
      'Handover documentation',
    ],
  },
]

const includedAtEveryTier = [
  'Strategy & Consultation',
  'Custom Design Within Wix Editor',
  'Mobile Optimization',
  'On-Page SEO Setup',
  'Editor Handoff & Basic Training',
  'Launch Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Schedules" title="Wix Development Pricing and Timeline">
          Wix development pricing depends primarily on site complexity; a simple informational site costs less than one needing custom design work, bookings, or a small store setup. Pricing typically depends on page count, design customization, and app/integration needs.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-border/80"
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                  {pkg.description}
                </p>
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs font-medium text-frame-fg/90">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.price === 'Custom Quote' ? 'accent' : 'outline'} className="w-full text-xs">
                  {pkg.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Request Quote'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUDED AT EVERY TIER */}
        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Included at Every Tier
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {includedAtEveryTier.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-sm md:text-base font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-frame-border/60 pt-6">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}