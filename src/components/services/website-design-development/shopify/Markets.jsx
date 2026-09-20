import { SectionIntro } from '../../../Kinetic'

const bangladeshShopifyPoints = [
  'Local payment-provider availability',
  'Mobile-first shopping behavior',
  'Local shipping and fulfillment requirements',
  'Bangla-English content where relevant',
]

const internationalShopifyPoints = [
  'Store structure per market and segment',
  'Currencies, languages, and localized domains',
  'Content and integrations matched to each country',
  'International reach across the US, UK, Australia, Canada & UAE',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Regional &amp; International Delivery" title="Shopify Development for Bangladesh &amp; Global Businesses">
          Framecipher is based in Dhaka, Bangladesh, and builds Shopify stores for businesses across Bangladesh as well as international markets.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Merchant Focus
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For Bangladesh-Based Merchants
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We can account for:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {bangladeshShopifyPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-frame-border/60 pt-4 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
              Shopify&apos;s payment-provider availability varies by merchant location. Shopify Payments is currently available only in Shopify&apos;s listed supported countries, and Bangladesh is not currently listed among those supported locations. Businesses in unsupported countries need to use an available third-party payment provider. For Bangladesh-based businesses, we evaluate currently available third-party payment options and configure the appropriate provider or integration based on the merchant&apos;s location, customers, and business requirements.
            </div>
          </div>

          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Worldwide Reach
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For International Businesses
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We adapt:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {internationalShopifyPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-frame-border/60 pt-4 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
              We plan international expansion around the actual countries and customer segments you serve rather than creating duplicate storefronts without a clear operational reason.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}