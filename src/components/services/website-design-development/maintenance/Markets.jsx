import { SectionIntro } from '../../../Kinetic'

const bangladeshMaintenancePoints = [
  'Mobile-first usage across the country',
  'Local business workflows',
  'Payment integrations (bKash, Nagad)',
  'Other market-specific requirements',
]

const internationalMaintenancePoints = [
  'Technology stack on the target platform',
  'Operating hours and support windows',
  'Integrations and business requirements',
  'Target-market context for every change',
]

export default function Markets() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Global & Local Coverage" title="Website Maintenance for Bangladesh & International Businesses">
          Framecipher is based in Dhaka and provides website maintenance for businesses in Bangladesh and international markets.
        </SectionIntro>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Engineering</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Bangladesh Websites</h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              Maintenance can consider:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {bangladeshMaintenancePoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Global Support Standards</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">International Websites</h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We adapt the support process around:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {internationalMaintenancePoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            The same maintenance principle applies in every market: identify risks early, keep the website maintained, and make important technical work visible.
          </p>
        </div>
      </div>
    </section>
  )
}