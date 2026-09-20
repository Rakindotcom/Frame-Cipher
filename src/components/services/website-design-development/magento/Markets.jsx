import { SectionIntro } from '../../../Kinetic'

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Regional &amp; Global Delivery" title="Magento Development for Bangladesh &amp; Global Businesses">
          Framecipher is based in Dhaka, Bangladesh, and works with businesses in Bangladesh as well as international markets.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
            <div>
              <div className="flex items-center gap-3">
                <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Domestic Market Operations
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-based ecommerce businesses, Magento projects can account for local payment requirements (such as bKash or Nagad), regional customer behavior, local business operations, direct communication channels, and Bangla-English content where required.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
            <div>
              <div className="flex items-center gap-3">
                <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Cross-Border &amp; Global
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                For international businesses, we can structure ecommerce experiences around different markets, currencies, storefronts, customer segments, and business systems according to the project requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our approach is not based on applying one Bangladesh or international template to every project. We structure the store around the audience, market, and operating model of the business.
          </p>
        </div>
      </div>
    </section>
  )
}