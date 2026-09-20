import { SectionIntro } from '../../../Kinetic'

const internationalUxPoints = [
  'Process adapted to the product and audience',
  'Technical requirements per market',
  'Business goals and KPIs',
  'Experience built for audiences in the UAE, US, UK, Australia & Canada',
]

const bangladeshUxPoints = [
  'Responsive and mobile-first requirements from the start',
  'Design treating mobile as a priority, not a final adjustment',
  'Local user flows and context',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Global & Local Focus" title="Service Areas">
          Framecipher is based in Dhaka, Bangladesh, and provides UI/UX design services for businesses across Bangladesh and international markets.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Markets</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Global Projects</h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We adapt the process around:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {internationalUxPoints.map((pt) => (
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
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Engineering</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              For Bangladesh-based businesses, we also consider:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {bangladeshUxPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}