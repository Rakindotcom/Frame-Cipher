import { SectionIntro } from '../../../Kinetic'

const bangladeshRedesignPoints = [
  'Mobile-first browsing behavior',
  'Local network conditions',
  'Bilingual content requirements',
  'Local conversion paths',
]

const internationalRedesignPoints = [
  'Target market and audience',
  'Technical requirements per region',
  'Business objectives and KPIs',
  'Global structure rather than a single-market template',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Global & Local Reach" title="Service Areas">
          Framecipher is based in Dhaka, Bangladesh, and provides website redesign services for businesses across Bangladesh and international clients.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Target Markets</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Markets We Serve</h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-frame-muted-fg">
              {['Bangladesh', 'United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates'].map((m, mIdx) => (
                <li key={mIdx} className="flex items-center gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-frame-fg">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Focus</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
            <p className="mt-4 text-sm font-medium text-frame-muted-fg">
              Our redesign process can account for:
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium text-frame-fg/90">
              {bangladeshRedesignPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Standards</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Global Projects</h3>
            <p className="mt-4 text-sm font-medium text-frame-muted-fg">
              For international projects, we adapt the redesign around:
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium text-frame-fg/90">
              {internationalRedesignPoints.map((pt) => (
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