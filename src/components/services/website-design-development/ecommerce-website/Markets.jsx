import { SectionIntro } from '../../../Kinetic'

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

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Local & International Commerce / Dual-Market Readiness" title="E-commerce Website Development for the Bangladesh Market">
          Bangladeshi ecommerce businesses often need to account for local payment methods, delivery expectations, mobile-first shopping, and direct customer communication.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Domestic Commerce</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Where relevant, we can support:
            </h3>
            <ul className="mt-6 space-y-3 text-sm md:text-base font-medium text-frame-fg/90">
              {bangladeshEcommercePoints.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Global Commerce</span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Serving Global Merchants
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                For merchants targeting customers outside Bangladesh, we also consider international payment methods, currencies, languages, delivery requirements, and market-specific shopping behavior.
              </p>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Your store should be built around the market you actually sell into, not around a generic ecommerce template.
              </p>
            </div>
            <div className="mt-8 border-t border-frame-border/60 pt-4">
              <span className="text-xs font-mono text-frame-muted-fg">Global reach: US, UK, Australia, Canada, UAE & Cross-border commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}