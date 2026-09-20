import { SectionIntro } from '../../../Kinetic'

const bangladeshMarketPoints = [
  'Bangla-English content requirements',
  'Mobile-first browsing behavior',
  'WhatsApp and direct-call communication',
  'Local business locations and Google Maps',
  'bKash and Nagad considerations for suitable eCommerce projects',
  'Local service-area information',
  'Bangladesh-focused content and SEO requirements',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Local & Global Execution / Dual Market Alignment" title="Business Websites for the Bangladesh Market">
          A website for a Bangladeshi business may need different communication, contact, and conversion considerations than a website built for another market.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Domestic Focus</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Where relevant, we can account for:
            </h3>
            <ul className="mt-6 space-y-3 text-sm md:text-base font-medium text-frame-fg/90">
              {bangladeshMarketPoints.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">International Standards</span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Serving Global Clients
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We also build for businesses targeting international customers. In those projects, we consider the target market, audience expectations, language, platform requirements, and business workflow.
              </p>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                The goal is not to build a &ldquo;Bangladesh version&rdquo; or an &ldquo;international version&rdquo; by default. The website structure should match the market your business actually serves.
              </p>
            </div>
            <div className="mt-8 border-t border-frame-border/60 pt-4">
              <span className="text-xs font-mono text-frame-muted-fg">Served clients across: US, UK, Australia, Canada, UAE & Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}