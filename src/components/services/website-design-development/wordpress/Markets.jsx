import { SectionIntro } from '../../../Kinetic'

const bangladeshPoints = [
  'Bangla-English content',
  'Mobile-first experiences',
  'Local business information and Google Maps',
  'WhatsApp and click-to-call actions',
  'bKash, Nagad, or other supported payment requirements',
  'Bangladesh-focused SEO and content structures',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Dual Market Expertise" title="WordPress Development for Bangladesh & International Businesses">
          Frame Cipher builds WordPress websites for businesses across Bangladesh and international markets. The technical architecture, content workflow, integrations, and user experience are adapted to the market your business serves.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Local Market Optimization
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium text-frame-muted-fg">
                Where relevant, we can account for:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm md:text-base font-medium text-frame-fg/90">
                {bangladeshPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Global Standards & Scalability
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We consider the target market, language, content requirements, integrations, technical standards, and business workflows required for international audiences.
              </p>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                The goal is not to force the same WordPress setup on every market. Your website architecture should match your audience, operations, and growth plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}