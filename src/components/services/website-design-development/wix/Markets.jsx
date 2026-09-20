import { SectionIntro } from '../../../Kinetic'

const bangladeshWixPoints = [
  'Mobile-first browsing experience',
  'Clear inquiry options and forms',
  'WhatsApp and click-to-call actions',
  'Local business information and Google Maps',
  'Bangla-English content where needed',
]

const internationalWixPoints = [
  'Structure built around the target market',
  'Messaging and content adapted to the audience',
  'Forms and integrations matched to the business model',
  'Layout and UX that meet global standards',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Regional & Global Execution" title="Wix Development for Bangladesh & International Businesses">
          Framecipher builds Wix websites for businesses in Bangladesh and for clients serving international markets.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
            <div>
              <div className="flex items-center gap-3">
                <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Domestic Market Optimization
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium text-frame-muted-fg">
                We can account for:
              </p>
              <ul className="mt-3 space-y-2.5 text-sm md:text-base font-medium text-frame-fg/90">
                {bangladeshWixPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
            <div>
              <div className="flex items-center gap-3">
                <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  International Standards
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium text-frame-muted-fg">
                We adapt:
              </p>
              <ul className="mt-3 space-y-2.5 text-sm md:text-base font-medium text-frame-fg/90">
                {internationalWixPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            The goal is not to apply one local template everywhere. We build the website around the audience, market, and business requirements of each project.
          </p>
        </div>
      </div>
    </section>
  )
}